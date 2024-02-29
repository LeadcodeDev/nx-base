import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

type Props = HTMLAttributes<HTMLButtonElement>

export function ButtonAction(props: PropsWithChildren<Props>): ReactElement {
  return (
    <button {...props} className="px-3 py-1.5 bg-blue text-white rounded-md">
      {props.children}
    </button>
  )
}
