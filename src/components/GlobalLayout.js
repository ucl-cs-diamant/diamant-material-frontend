import React from 'react';

import DashboardLayout from './DashboardLayout';
import MainLayout from './MainLayout';
import AuthContext from './AuthenticationContext';

class GlobalLayout extends React.Component {
  constructor(props) {
    super(props);

    this.updateAuth = (newAuth) => {
      const { authState } = this.state;
      authState.auth = newAuth;
      this.setState({ authState });
    };

    this.state = {
      authState: {
        auth: '',
        updateAuth: this.updateAuth,
      }
    };
  }

  render() {
    const { authState } = this.state;
    return (
      <AuthContext.Provider value={authState}>
        <AuthContext.Consumer>
          {({ auth }) => {
            if (auth === '') {
              return (<MainLayout />);
            }
            return (<DashboardLayout />);
          }}
        </AuthContext.Consumer>
      </AuthContext.Provider>
    );
  }
}

export default GlobalLayout;
