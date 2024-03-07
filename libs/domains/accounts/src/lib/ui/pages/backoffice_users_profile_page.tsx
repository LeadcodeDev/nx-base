import { ReactElement } from 'react';
import {
  BackofficeContainer,
  BackofficeSubsection,
  Button,
  Field,
  FieldGroup,
  Input, Label,
  SuspenseLoading, Text
} from '@nx-base/ui';
import { useGetUserQuery } from '../../redux/user';
import { useParams } from 'react-router-dom';
import { userProfileSubsection } from '../../config';

export function BackofficeUsersProfilePage(): ReactElement {
  const params = useParams()
  const { data: user, isLoading } = useGetUserQuery(params.id)

  function handleSubmit() {}

  return (
    <div className="flex flex-col gap-3 p-3">
      <SuspenseLoading
        isLoading={isLoading}
        data={user}
      >
        <BackofficeSubsection
          title="Accounts"
          links={userProfileSubsection(user)}
          actions={[
            <Button.Action key={1}>
              Save
            </Button.Action>
          ]}
        />

        <form onSubmit={handleSubmit}>
          <BackofficeContainer className="py-10 min-h-200">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-6 gap-5">
                <div className="col-span-2">
                  <h2 className="font-semibold leading-7">Overview</h2>
                  <Text>
                    See an overview of the user's account {user?.firstname} {user?.lastname}
                  </Text>
                </div>

                <div className="col-span-4">
                  <div className="flex w-full gap-x-5">
                    <div className="w-32 aspect-square">
                      <img src="https://via.placeholder.com/500x500" className="rounded-md" alt={`${user?.username} avatar`} />
                    </div>
                    <div className="flex-1">
                      <FieldGroup>
                        <Field>
                          <Label>Identifiant</Label>
                          <Input name="id" defaultValue={user?.id} disabled />
                        </Field>
                        <Field>
                          <Label>Username</Label>
                          <Input name="street_address" defaultValue={user?.username} />
                        </Field>
                        <div className="grid grid-cols-2 gap-3">
                          <Field>
                            <Label>Firstname</Label>
                            <Input name="firstname" defaultValue={user?.firstname} />
                          </Field>
                          <Field>
                            <Label>Lastname</Label>
                            <Input name="lastname" defaultValue={user?.lastname} />
                          </Field>
                        </div>
                        <Field>
                          <Label>Email address</Label>
                          <Input name="email" defaultValue={user?.email} />
                        </Field>
                      </FieldGroup>
                      <p>{user?.roles.map((role) => role.name).join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BackofficeContainer>
        </form>
      </SuspenseLoading>
    </div>
  )
}
