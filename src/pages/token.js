import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid, TextField,
  Typography
} from '@material-ui/core';
// import GitHubIcon from '@material-ui/icons/GitHub';
import * as Yup from 'yup';
import Cookies from 'js-cookie';

const Token = () => {
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
        <Container maxWidth="md">
          <Formik
            validationSchema={Yup.object().shape({
              account_token: Yup.string().max(255).required('Link token is required')
            })}
            onSubmit={(values, actions) => {
              // navigate('/api/oauth/login', { replace: true });
              console.log(values.account_token);
              console.log(actions);

              fetch('/api/oauth/link_account', {
                method: 'POST',
                body: JSON.stringify({
                  token: values.account_token
                }),
                headers: {
                  'X-CSRFToken': Cookies.get('csrftoken')
                }
              }).then((data) => {
                if (data.status === 201) {
                  navigate('/app/dashboard', { replace: true });
                }
                data.json().then((d) => {
                  let errorMessage = `Error linking account: HTTP error ${data.status}`;
                  if (d.message !== undefined) {
                    errorMessage = `Error linking account: ${d.message}`;
                  }
                  actions.setErrors({ account_token: errorMessage });
                })
              })
              ;

              // once done with submission, setSubmitting to false
              actions.setSubmitting(false);
            }}
            initialValues={{
              account_token: ''
            }}
          >
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
                    Link GitHub account
                  </Typography>
                </Box>
                <Box sx={{ py: 2 }}>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    Paste the linking token sent to your email here to finish setting up your account.
                    {' '}
                    {/* <Link component={RouterLink} to="/register" variant="h6" underline="hover"> */}
                    {/*   Create an account on */}
                    {/* </Link> */}
                  </Typography>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      xs={12}
                    >
                      <TextField
                        label="Account linking token"
                        margin="normal"
                        name="account_token"
                        value={values.account_token}
                        onChange={handleChange}
                        error={Boolean(touched.account_token && errors.account_token)}
                        helperText={touched.account_token && errors.account_token}
                        onBlur={handleBlur}
                        fullWidth
                      />
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Link account
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Token;
