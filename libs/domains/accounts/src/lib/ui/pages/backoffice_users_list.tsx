import { ReactElement } from 'react';
import { BackofficeContainer, BackofficeSubsection, Button } from '@nx-base/ui';
import { accountSubsection } from '../../config';

export function BackofficeUsersList(): ReactElement {
  return (
    <div className="flex flex-col gap-3 p-3">
      <BackofficeSubsection
        title="Accounts"
        links={accountSubsection}
        actions={[
          <Button.Link href="/">
            Create
          </Button.Link>
        ]}
      />

      <BackofficeContainer>
        dd
      </BackofficeContainer>
    </div>
  )
}
