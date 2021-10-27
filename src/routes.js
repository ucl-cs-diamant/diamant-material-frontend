import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Home from './pages/home';
import Match from './pages/match';
import Leaderboards from './pages/leaderboards';
import MainLayout from './components/MainLayout';
import Landing from './pages/Landing';
import FAQ from './pages/FAQ';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'leaderboards', element: <Leaderboards /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Landing /> },
      { path: 'FAQ', element: <FAQ /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: 'match', element: <Match /> },
      { path: 'home', element: <Home /> },
    ]
  }
];

export default routes;
