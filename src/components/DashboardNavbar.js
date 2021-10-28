import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box, Button,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';
import AuthContext from './AuthenticationContext';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  // const [loggedIn, setLoggedIn] = useState(false);
  const loggedIn = true;
  console.log(`NAVBAR ${loggedIn}`);

  // const accountLoggedInStateButton = loggedIn ? (
  //
  // ) : (
  //   <Box sx={{ my: 'auto' }}>
  //     <RouterLink to="/login">
  //       <Button
  //         variant="outlined"
  //         sx={{
  //           color: '#ffffff',
  //           borderColor: '#ffffff',
  //           ':hover': {
  //             color: '#ffffff',
  //             borderColor: '#dddddd'
  //           }
  //         }}
  //       >
  //         Sign in
  //       </Button>
  //     </RouterLink>
  //   </Box>
  // );

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />

        <AuthContext.Consumer>
          {({ auth }) => (
            <Box sx={{ my: 'auto' }}>
              <RouterLink to="/login">
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
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
  loggedIn: PropTypes.string,
};

export default DashboardNavbar;
