import { ReactElement } from 'react';
import { accountSubsection } from '../../config'
import { BackofficeSubsection } from '@nx-base/ui'

export function BackofficeRolesList(): ReactElement {
  return (
    <div className="p-3">
      <BackofficeSubsection
        title="Roles"
        links={accountSubsection}
      />
    </div>
  )
}
