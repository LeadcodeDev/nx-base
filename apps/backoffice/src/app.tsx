import { BackofficeLayout } from '@nx-base/ui';
import { LinkItem } from '@nx-base/contracts';
import { Outlet } from 'react-router-dom';
import { account, homePage } from './router';

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
      href: account.users.list.path,
      match: account.users.list.path,
      exact: false,
    },
  ]

  return (
    <BackofficeLayout items={items}>
      <Outlet />
    </BackofficeLayout>
  );
}
