import { BackofficeSubsectionLink } from '@nx-base/contracts';
import { UserModel } from './contracts/user_model';

export const accountSubsection: BackofficeSubsectionLink[] = [
  { label: 'Users', href: '/accounts/users' },
  { label: 'Roles', href: '/accounts/roles' },
]

export function userProfileSubsection(user?: UserModel): BackofficeSubsectionLink[] {
  return [
    { label: 'Profile', href: `/accounts/users/${user?.id}/profile` },
    { label: 'Roles', href: `/accounts/users/${user?.id}/roles` },
    { label: 'Session', href: `/accounts/users/${user?.id}/sessions` },
  ]
}
