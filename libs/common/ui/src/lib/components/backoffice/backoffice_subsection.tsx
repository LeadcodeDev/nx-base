import { classNames } from '@nx-base/helpers';
import { Link, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { BackofficeSubsectionLink } from '@nx-base/contracts';

type Props = {
  title: string
  links: BackofficeSubsectionLink[]
  actions?: ReactElement[]
}

export function BackofficeSubsection(props: Props): ReactElement {
  const location = useLocation()

  return (
    <div className="bg-white border-b border-gray-200 pt-3 rounded-md w-full flex flex-col justify-center">
      <div className="border-b border-gray-200 p-5">
        <h1 className="text-4xl">{props.title}</h1>
      </div>
      <div className="flex justify-between px-5">
        <div className="flex gap-x-5">
          {props.links.map((link) => (
            <Link
              to={link.href}
              key={link.href}
              className={classNames(
                'px-3 pt-5 h-14 border-b-2 font-medium',
                location.pathname === link.href
                  ? 'border-blue-400'
                  : 'border-neutral-300 hover:border-blue-400 text-neutral-500',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          {props.actions}
        </div>
      </div>
    </div>
  )
}
