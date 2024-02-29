import { BackofficeLayout } from '@nx-base/ui';
import { LinkItem } from '@nx-base/contracts';
import { Outlet } from 'react-router-dom';
import { homePage } from './router';

export default function App() {
  const items: LinkItem[] = [
    {
      title: 'Home',
      icon: 'i-radix-icons-home',
      href: homePage.path,
      exact: true,
    },
    {
      title: 'Users',
      icon: 'i-radix-icons-person',
      href: 'console.accounts.users.index',
      match: '/console/accounts',
      exact: false,
    },
  ]

  return (
    <BackofficeLayout items={items}>
      <Outlet />
    </BackofficeLayout>
  );
}
