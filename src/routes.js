import React from 'react';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Token from './pages/token';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Settings from './pages/Settings';
import Leaderboards from './pages/leaderboards';
import Landing from './pages/Landing';
import FAQ from './pages/FAQ';
import GlobalLayout from './components/GlobalLayout';
import Logout from './pages/Logout';

const routes = [
  {
    path: 'app',
    element: <GlobalLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'leaderboards', element: <Leaderboards /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'link_account', element: <Token /> },
      { path: 'logout', element: <Logout /> },
      { path: '/', element: <Landing /> },
      { path: 'FAQ', element: <FAQ /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];

export default routes;
