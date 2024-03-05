import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { getUserState } from '@nx-base/accounts';

export default function DashboardPage(): ReactElement {
  const { user } = useSelector(getUserState)
  return (
    <p>Dashboard {user?.email}</p>
  )
}
