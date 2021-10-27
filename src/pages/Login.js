import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
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
        <Container maxWidth="xs">
          <Formik>
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
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
                    {' '}
                    {/* <Link component={RouterLink} to="/register" variant="h6" underline="hover"> */}
                    {/*   Create an account on */}
                    {/* </Link> */}
                  </Typography>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
