import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import Logo from './Logo';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_url: ""
    }
  }

  componentDidMount() {
    fetch(
      `http://192.168.135.128/api/settings/account_settings/?format=json`,
      {credentials: 'include'}
    )
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error(response.status);
      })
      .then((data) => {
        this.setState({ user_url: data.user })
      })
      .catch(e => {
        this.setState({ user_url: null });
        console.log(e)
      });
  }

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <RouterLink to="/">
              <Logo />
            </RouterLink>
            {this.state.user_url === null ?
              <Button color='inherit'/>:
              <Button color="inherit" href="/app/dashboard">Dashboard</Button>
            }
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            {this.state.user_url === null ?
              <Button color="inherit" href="/login">Login</Button>:
              <Button color="inherit" href="/app/dashboard">Log out</Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}


export default MainNavbar;
