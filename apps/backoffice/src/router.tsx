import { RouterProps } from '@nx-base/contracts';
import DashboardPage from './pages/dashboard_page';

export const routes: RouterProps[] = [
  // {
  //   path: '/accounts/*',
  //   component: <PageAccounts />,
  //   layout: true,
  //   protected: true
  // },
  {
    path: '/*',
    component: <DashboardPage />,
    protected: true,
  },
]
