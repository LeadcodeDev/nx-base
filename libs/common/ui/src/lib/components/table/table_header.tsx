import { ReactElement } from 'react';
import { classNames } from '@nx-base/helpers';

export type TableHeaderProps = {
  heading: string[]
}

export function TableHeader(props: TableHeaderProps): ReactElement {
  return (
    <thead>
      <tr>
        {props.heading.map((heading, index) => (
          <th key={index} scope="col" className={classNames(
            'py-3.5 pr-3 text-left text-sm font-semibold text-gray-900',
            index === 0 ? 'pl-6' : 'pl-3'
          )}>
            {heading}
          </th>
        ))}

        <th scope="col" className="relative py-3.5 pl-3 pr-6">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  )
}
