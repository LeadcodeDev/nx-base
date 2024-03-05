import { ReactElement } from 'react';
import { LinkItem } from '@nx-base/contracts';
import { BackofficeSidebarLinkItem } from './backoffice_sidebar_link_item';

type Props = {
  items: LinkItem[];
}

export function BackofficeSidebar(props: Props): ReactElement {
  return (
    <div className="sticky top-0 left-0 h-screen w-16 bg-white border-r border-gray-200">
      <div className="flex flex-col">
        <div className="flex items-center justify-center h-14 aspect-square">
          Icon
        </div>
        <div>
          {props.items.map((item: LinkItem, index) => (
            <BackofficeSidebarLinkItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
