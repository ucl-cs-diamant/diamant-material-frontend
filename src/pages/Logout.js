import React from 'react';
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import AuthContext from '../components/AuthenticationContext';

const Logout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Logout</title>
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
        <Container maxWidth="md">
          <AuthContext.Consumer>
            {({ auth, updateAuth }) => (
              <div>
                { auth === '' && <Navigate to="/" /> }

                <Formik
                  onSubmit={(actions) => {
                    // Cookies.remove('sessionid');
                    fetch('/api/oauth/logout')
                      .then((response) => {
                        if (response.status !== 200) {
                          actions.setErrors({ logout_submit: 'Something went wrong with logging out' });
                          actions.setSubmitting(false);
                        }
                      });
                    updateAuth('');
                    navigate('/');
                  }}
                  initialValues={{
                  }}
                >
                  {({
                    errors,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Box sx={{ mb: 1 }}>
                        <Typography
                          color="textPrimary"
                          variant="h2"
                        >
                          Logout
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body1"
                          sx={{ mt: 1 }}
                        >
                          Are you sure you wish to log out?
                          {' '}
                          {/* <Link component={RouterLink} to="/register" variant="h6" underline="hover"> */}
                          {/*   Create an account on */}
                          {/* </Link> */}
                        </Typography>
                      </Box>
                      <Box sx={{ py: 3 }}>
                        <Grid
                          container
                          spacing={3}
                        >
                          <Grid
                            item
                            xs={8}
                          >
                            <Button
                              color="error"
                              disabled={isSubmitting}
                              fullWidth
                              size="large"
                              type="submit"
                              variant="contained"
                              helperText={errors.logout_submit}
                            >
                              Logout
                            </Button>
                          </Grid>
                          <Grid
                            item
                            xs={4}
                          >
                            <Button
                              color="primary"
                              disabled={isSubmitting}
                              fullWidth
                              size="large"
                              onClick={() => {
                                navigate('/');
                              }}
                              variant="contained"
                            >
                              Never mind
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </form>
                  )}
                </Formik>
              </div>

            )}
          </AuthContext.Consumer>
        </Container>
      </Box>
    </>
  );
};

export default Logout;
