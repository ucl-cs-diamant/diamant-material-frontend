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

  componentDidMount() {
    fetch('/api/settings/account_settings/')
      .then((resp) => {
        if (resp.status === 200) {
          console.log(resp.status);
          resp.json().then((data) => {
            const { authState } = this.state;
            authState.auth = data.user;
            this.setState({ authState });
          }).catch((e) => { console.log(`failed parsing json ${e}`); });
        }
      });
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
