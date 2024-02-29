import { classNames } from '@nx-base/helpers';
import { Link, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { BackofficeSubsectionLink } from '@nx-base/contracts';

type Props = {
  title: string
  items: BackofficeSubsectionLink[]
}

export function BackofficeSubsection(props: Props): ReactElement {
  const location = useLocation()

  return (
    <div className="bg-white border-b border-gray-200 pt-3 rounded-md w-full flex flex-col justify-center">
      <div className="border-b border-gray-200 p-5">
        <h1 className="text-4xl">{props.title}</h1>
      </div>
      <div className="flex gap-x-5 px-5">
        {props.items.map((item) => (
          <Link
            to={item.href}
            key={item.href}
            className={classNames(
              'px-3 pt-5 h-14 border-b-2 font-medium',
              location.pathname === item.href
                ? 'border-blue-400'
                : 'border-neutral-300 hover:border-blue-400 text-neutral-500',
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
