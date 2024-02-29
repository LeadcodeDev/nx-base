import { ReactElement } from 'react';
import { BackofficeSubsection } from '@nx-base/ui';
import { accountSubsection } from '../../config';

export function BackofficeUsersList(): ReactElement {
  return (
    <div className="p-3">
      <BackofficeSubsection
        title="Accounts"
        items={accountSubsection}
      />
    </div>
  )
}
