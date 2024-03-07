import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

type Props = HTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  icon?: ReactElement
  loadingMessage?: string
}

export function ButtonAction(props: PropsWithChildren<Props>): ReactElement {
  return (
    <button
      {...props}
      disabled={props.isLoading}
      className="flex items-center gap-x-3 px-3 py-1.5 bg-blue/75 hover:bg-blue text-white rounded-md disabled:opacity-75"
    >
      {props.isLoading ? (
          <div className="i-radix-icons:update w-1em h-1em animate-spin"></div>
      ) : props.icon}
      {props.isLoading ? props.loadingMessage ?? 'Loading…'  : props.children}
    </button>
  )
}
