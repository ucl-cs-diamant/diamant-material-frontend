import React from 'react';

const AuthContext = React.createContext({
  auth: '',
  updateAuth: (newAuth) => {
    this.auth = newAuth;
  }
});

export default AuthContext;
