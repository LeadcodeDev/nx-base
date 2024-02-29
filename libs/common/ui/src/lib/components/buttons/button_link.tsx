import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { Link } from 'react-router-dom';

type Props = HTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function ButtonLink(props: PropsWithChildren<Props>): ReactElement {
  return (
    <Link to={props.href} {...props} className="px-3 py-1.5 bg-blue text-white rounded-md">
      {props.children}
    </Link>
  )
}
