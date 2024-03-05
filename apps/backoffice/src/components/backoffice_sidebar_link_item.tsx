import { LinkItem } from '@nx-base/contracts';
import { classNames } from '@nx-base/helpers';
import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function BackofficeSidebarLinkItem(props: { item: LinkItem }): ReactElement {
  const location = useLocation()

  const isActive = props.item.exact
    ? location?.pathname === props.item.href
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    : location?.pathname.startsWith(props.item.match ?? props.item.href!)

  return (
    <div className="p-2 mx-auto flex h-14 w-14 items-center justify-center">
      <Link
        to={props.item.href as string}
        className={classNames(
          'flex items-center justify-center w-full h-full aspect-square rounded-md text-lg',
          isActive ? 'bg-blue-400 text-white' : 'bg-white hover:bg-blue-300',
        )}
      >
        <i className={classNames('radix-icon', props.item.icon)}></i>
      </Link>
    </div>
  )
}
