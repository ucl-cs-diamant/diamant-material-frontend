import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Toolbar
} from '@material-ui/core';

import Logo from './Logo';
import AuthContext from './AuthenticationContext';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) =>
// const [notifications] = useState([]);

  (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />

        {/* <AuthContext.Provider value={{ auth: 'testing', uppdateAuth: () => {} }}> */}
        <AuthContext.Consumer>
          {({ auth }) => (
            <Box sx={{ my: 'auto' }}>
              <RouterLink to={auth !== '' ? '/logout' : '/login'}>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    ':hover': {
                      color: '#ddddff',
                      borderColor: '#dfdfdf'
                    }
                  }}
                >
                  { auth !== '' ? 'Log out' : 'Sign in' }
                </Button>
              </RouterLink>
            </Box>
          )}
        </AuthContext.Consumer>
        {/* </AuthContext.Provider> */}

      </Toolbar>
    </AppBar>
  );
DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
  loggedIn: PropTypes.string,
};

export default DashboardNavbar;
