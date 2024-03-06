import { ReactElement } from 'react';
import {
  BackofficeContainer,
  BackofficeSubsection, Badge,
  Button, Dropdown, DropdownItem, DropdownMenu,
  Table,
  TableBody, TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@nx-base/ui';
import { accountSubsection } from '../../config';
import { MenuButton as HeadlessMenuButton } from '@headlessui/react'

export function BackofficeUsersListPage(): ReactElement {
  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@exampfle.com', role: 'Member' },
  ]

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
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Role</TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell className="flex items-center justify-end">
                  <Dropdown>
                    <HeadlessMenuButton
                      className="flex items-center gap-3 rounded-xl border border-transparent p-1 data-[active]:border-zinc-200 data-[hover]:border-zinc-200 dark:data-[active]:border-zinc-700 dark:data-[hover]:border-zinc-700"
                      aria-label="Account options"
                    >
                      <div className="i-radix-icons:dots-vertical w-1em h-1em"></div>
                    </HeadlessMenuButton>
                    <DropdownMenu>
                      <DropdownItem href="/users/1">
                        <div className="i-radix-icons:eye-open w-1em h-1em mr-2"></div>
                        View
                      </DropdownItem>
                      <DropdownItem href="/users/1/edit">
                        <div className="i-radix-icons:pencil-2 w-1em h-1em mr-2"></div>
                        Edit
                      </DropdownItem>
                      <DropdownItem className="bg-white hover:bg-red-200 hover:text-red-500">
                        <div className="i-radix-icons:trash w-1em h-1em hover:text-red-500 mr-2"></div>
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </BackofficeContainer>
    </div>
  )
}
