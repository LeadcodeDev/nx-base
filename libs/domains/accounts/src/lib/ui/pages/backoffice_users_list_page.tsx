import { ReactElement } from 'react';
import {
  BackofficeContainer,
  BackofficeSubsection, Badge,
  Button, Dropdown, DropdownItem, DropdownMenu, SuspenseLoading,
  Table,
  TableBody, TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@nx-base/ui';
import { accountSubsection } from '../../config';
import { MenuButton as HeadlessMenuButton } from '@headlessui/react'
import { useGetUsersQuery } from '../../redux/user';
import { UserModel } from '../../contracts/user_model';
import { RoleModel } from '../../contracts/role_model';

export function BackofficeUsersListPage(): ReactElement {
  const { data: users, isLoading } = useGetUsersQuery({ page: 1, size: 30 })

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
        <SuspenseLoading
          isLoading={isLoading}
          data={users}
          loaderComponent={<div>Loading...</div>}
          emptyComponent={<div>No data found</div>}
        >
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
              {users?.data.map((user: UserModel) => (
                <TableRow key={user.username}>
                  <TableCell className="max-w-20 font-medium">
                    {user.firstname} {user.lastname}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.roles.map((role: RoleModel) => (
                      <Badge>{role.name}</Badge>
                    ))}
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
                        <DropdownItem href={`/accounts/users/${user.id}/profile`}>
                          <div className="i-radix-icons:eye-open w-1em h-1em mr-2"></div>
                          View
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
        </SuspenseLoading>
      </BackofficeContainer>
    </div>
  )
}
