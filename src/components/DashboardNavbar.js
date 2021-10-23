import React from 'react';
import { useState } from 'react';
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

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);

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

        {/* todo: change sign in/sign out button depending on auth state */}
        <Box sx={{ my: 'auto' }}>
          <RouterLink to="/login">
            <Button
              variant="outlined"
              sx={{
                color: '#ffffff',
                borderColor: '#ffffff',
                ':hover': {
                  color: '#ffffff',
                  borderColor: '#dddddd',
                }
              }}
            >
              Sign in
            </Button>
          </RouterLink>
        </Box>
        {/* <Hidden xlDown> */}
        {/*   <IconButton color="inherit" size="large"> */}
        {/*     <Badge */}
        {/*       badgeContent={notifications.length} */}
        {/*       color="primary" */}
        {/*       variant="dot" */}
        {/*     > */}
        {/*       <NotificationsIcon /> */}
        {/*     </Badge> */}
        {/*   </IconButton> */}
        {/*   <IconButton color="inherit" size="large"> */}
        {/*     <InputIcon /> */}
        {/*   </IconButton> */}
        {/* </Hidden> */}
        {/* <Hidden lgUp> */}
        {/*   <IconButton color="inherit" onClick={onMobileNavOpen} size="large"> */}
        {/*     <MenuIcon /> */}
        {/*   </IconButton> */}
        {/* </Hidden> */}
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
