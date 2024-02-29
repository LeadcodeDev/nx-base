import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { classNames } from '@nx-base/helpers';

type Props = HTMLAttributes<HTMLDivElement>

export function BackofficeContainer(props: PropsWithChildren<Props>): ReactElement {
  return (
    <div
      className={classNames(
        'border border-gray-200 p-5 bg-white rounded-md',
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}
