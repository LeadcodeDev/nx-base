import { ReactElement } from 'react';
import { TableHeader } from './table_header';
import { TableBody } from './table_body';

export type TableProps<T> = {
  heading: string[]
  data: T[]
  actions: () => ReactElement
  row: (element: T) => ReactElement[]
}

export function TableContainer<T>(props: TableProps<T>): ReactElement {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-300">
        <TableHeader heading={props.heading} />
        <TableBody
          data={props.data}
          row={props.row}
          actions={props.actions}
        />
      </table>
    </div>
  )
}
