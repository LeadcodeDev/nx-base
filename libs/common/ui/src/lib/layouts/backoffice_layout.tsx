import { PropsWithChildren, ReactElement } from 'react';

export function BackofficeLayout(props: PropsWithChildren): ReactElement {
  return (
    <div className="bg-red">
      <h1>Backoffice Layout</h1>
      {props.children}
    </div>
  )
}
