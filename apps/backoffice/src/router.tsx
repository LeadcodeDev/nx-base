import { RouterProps } from '@nx-base/contracts';
import DashboardPage from './pages/dashboard_page';
import {
  BackofficeRolesListPage,
  BackofficeUsersListPage,
  BackofficeUsersProfilePage
} from '@nx-base/accounts';

export const routes: RouterProps[] = [
  {
    path: '/accounts/users',
    component: <BackofficeUsersListPage />,
    protected: true
  },
  {
    path: '/accounts/users/:id/profile',
    component: <BackofficeUsersProfilePage />,
    protected: true
  },
  {
    path: '/accounts/roles',
    component: <BackofficeRolesListPage />,
    protected: true
  },
  {
    path: '/*',
    component: <DashboardPage />,
    protected: true,
  },
]
