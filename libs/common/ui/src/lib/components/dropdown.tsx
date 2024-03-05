import { Fragment, PropsWithChildren, ReactElement } from 'react';
import { Menu, Transition } from '@headlessui/react'

type Props = {
  trigger: ReactElement
}

export function Dropdown(props: PropsWithChildren<Props>) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="bg-transparent">
          {props.trigger}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bottom-0 ml-2 left-full z-10 mt-2 w-56 origin-bottom-left transform -transform-x-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {props.children}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
