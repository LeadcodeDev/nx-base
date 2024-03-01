import { ReactElement } from 'react';
import { BackofficeContainer, BackofficeSubsection, Button, Table } from '@nx-base/ui';
import { accountSubsection } from '../../config';

export function BackofficeUsersList(): ReactElement {
  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@exampfle.com', role: 'Member' },
  ]

  const config = {
    heading: ['name', 'title', 'email', 'role'],
    data: people,
    actions: () => <Button.Link href="/">Create</Button.Link>,
    row: (person: any) => [
      <p>{person.name}</p>,
      <p>{person.title}</p>,
      <p>{person.email}</p>,
      <p className="bg-blue px-2 py-1 rounded-lg text-xs text-white max-w-min">{person.role}</p>
    ]
  }

  return (
    <div className="flex flex-col gap-3 p-3">
      <BackofficeSubsection
        title="Accounts"
        links={accountSubsection}
        actions={[
          <Button.Link key={1} href="/">
            Create
          </Button.Link>
        ]}
      />

      <BackofficeContainer className="px-0">
        <Table.Container {...config} />
      </BackofficeContainer>
    </div>
  )
}
