import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import App from './app';
import { BackofficeRolesList, BackofficeUsersList } from '@nx-base/accounts';

export const homePage: RouteObject = { path: '/', element: <Dashboard /> }

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/accounts/users', element: <BackofficeUsersList /> },
      { path: '/accounts/roles', element: <BackofficeRolesList /> },
      homePage,
    ],
  },
]);
