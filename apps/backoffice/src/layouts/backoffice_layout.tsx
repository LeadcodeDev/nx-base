import { PropsWithChildren, ReactElement } from 'react'
import { StoreProvider } from '../providers/store_provider'
import { BackofficeSidebar } from '../components/backoffice_sidebar'
import { LinkItem } from '@nx-base/contracts';

type Props = {
  items: LinkItem[];
}
export function BackofficeLayout(props: PropsWithChildren<Props>): ReactElement {
  return (
    <StoreProvider>
      <div className="min-h-screen w-full flex bg-gray-200">
        <BackofficeSidebar items={props.items} />
        <div className="flex-1">
          {props.children}
        </div>
      </div>
    </StoreProvider>
  )
}
