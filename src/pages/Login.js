import React from 'react';
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import { Navigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import AuthContext from '../components/AuthenticationContext';

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { redirect: null };
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const githubCallbackCode = queryParams.get('code');
    if (githubCallbackCode !== null) {
      // console.log(githubCallbackCode);
      fetch(`/api/oauth/callback?${new URLSearchParams({ code: githubCallbackCode })}`).then(
        (resp) => {
          resp.json().then((data) => {
            if ('redirect' in data) {
              this.setState({ redirect: '/link_account' });
            }
            if ('user' in data) {
              const { context } = this;
              context.updateAuth(data.user);
            }
            return null;
          }).catch((e) => {
            console.error(e);
          });
        }
      );
    }
  }

  render() {
    const { auth } = this.context;
    const { redirect } = this.state;

    return (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center'
          }}
        >
          { auth !== '' && <Navigate to="/" /> }
          { redirect !== null && <Navigate to={redirect} /> }
          <Container maxWidth="xs">
            <Formik>
              {({
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      color="textPrimary"
                      variant="h2"
                    >
                      Sign in
                    </Typography>
                  </Box>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      xs={12}
                    >
                      <Button
                        sx={{ py: 2 }}
                        color="primary"
                        fullWidth
                        startIcon={<GitHubIcon />}
                        // onClick={handleSubmit}
                        href="/api/oauth/login"
                        size="large"
                        variant="contained"
                      >
                        Login with GitHub
                      </Button>
                    </Grid>
                  </Grid>
                  <Box sx={{ py: 2 }}>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      Don&apos;t have an account? You will be prompted to create an account on the GitHub login page.
                    </Typography>
                  </Box>
                </form>
              )}
            </Formik>
          </Container>
        </Box>
      </>
    );
  }
}
Login.contextType = AuthContext;

export default Login;
