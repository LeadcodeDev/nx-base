import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import App from './app';
import { BackofficeUsersList } from '@nx-base/accounts';

export const homePage: RouteObject = { path: '/', element: <Dashboard /> }
export const account = {
  users: {
    list: { path: '/accounts/users', element: <BackofficeUsersList /> }
  }
}

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      account.users.list,
      homePage,
    ],
  },
]);
