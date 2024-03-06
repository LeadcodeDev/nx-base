import { ReactElement } from 'react';
import { accountSubsection } from '../../config'
import { BackofficeSubsection } from '@nx-base/ui'

export function BackofficeRolesListPage(): ReactElement {
  return (
    <div className="p-3">
      <BackofficeSubsection
        title="Roles"
        links={accountSubsection}
      />
    </div>
  )
}
