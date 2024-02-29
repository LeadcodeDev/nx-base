import { ReactElement } from 'react';
import { BackofficeSubsection } from '@nx-base/ui';
import { accountSubsection } from '../../config';

export function BackofficeRolesList(): ReactElement {
  return (
    <div className="p-3">
      <BackofficeSubsection
        title="Roles"
        items={accountSubsection}
      />
    </div>
  )
}
