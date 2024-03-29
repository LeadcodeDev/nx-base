import { ReactElement } from 'react';
import { LinkItem } from '@nx-base/contracts';
import { BackofficeSidebarLinkItem } from './backoffice_sidebar_link_item';
import { Dropdown } from '@nx-base/ui';
import * as Avatar from '@radix-ui/react-avatar'
import { getUserState } from '@nx-base/accounts';
import { useSelector } from 'react-redux';
import { Menu } from '@headlessui/react';
import { useOidc } from '@axa-fr/react-oidc';

type Props = {
  items: LinkItem[];
}

export function BackofficeSidebar(props: Props): ReactElement {
  const { logout } = useOidc()

  return (
    <div className="sticky top-0 left-0 h-screen w-16 bg-white border-r border-gray-200">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <div className="p-2 mx-auto flex h-14 w-14 items-center justify-center">
            <Avatar.Root className="inline-flex bg-gray-400 select-none items-center justify-center overflow-hidden rounded-lg align-middle">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src="https://via.placeholder.com/150x150"
                alt="Organization logo"
              />
              <Avatar.Fallback
                className="leading-1 flex h-full w-full items-center justify-center bg-gray-200 text-[15px] font-medium"
                delayMs={600}
              >
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
          <div>
            {props.items.map((item: LinkItem, index) => (
              <BackofficeSidebarLinkItem key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center pb-5">
          <Dropdown trigger={<AvatarTrigger />}>
            <Menu.Item>
              <button
                type="button"
                onClick={() => logout()}
                className="flex items-center gap-x-2 bg-white hover:bg-gray-200 block w-full px-4 py-2 text-left text-sm"
              >
                <div className="i-radix-icons:exit w-1em h-1em"></div>
                Sign out
              </button>
            </Menu.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

function AvatarTrigger() {
  const { user } = useSelector(getUserState)
  const letters = user?.preferred_username?.split('.')
    .reduce((acc, cur) => acc + cur[0], '')

  return (
    <Avatar.Root className="inline-flex h-[45px] w-[45px] bg-gray-400 select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://via.placeholder.com/150x150"
        alt={user?.preferred_username}
      />
      <Avatar.Fallback
        className="leading-1 flex h-full w-full items-center justify-center bg-gray-200 text-[15px] font-medium"
        delayMs={600}
      >
        {letters?.toUpperCase()}
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
