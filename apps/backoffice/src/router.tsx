import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import App from './app';

export const homePage: RouteObject = { path: '/', element: <Dashboard /> }

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      homePage
    ],
  },
]);
