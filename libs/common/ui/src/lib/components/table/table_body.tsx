import { ReactElement } from 'react';
import { classNames } from '@nx-base/helpers';

export type TableBodyProps<T> = {
  data: T[]
  row: (element: T) => ReactElement[]
  actions?: (element: T) => ReactElement
}

export function TableBody<T>(props: TableBodyProps<T>): ReactElement {
  return (
    <tbody className="px-5 divide-y divide-gray-200">
      {props.data.map((element: T, index: number) => (
        <tr key={index}>
          {props.row(element).map((element, index) => (
            <td
              key={index}
              className={classNames(
                'whitespace-nowrap py-4 pr-3 text-sm',
                index === 0 ? 'pl-6 text-gray-900 font-medium' : 'pl-3 text-gray-500',
              )}
            >
              {element}
            </td>
          ))}
          {props.actions && (
            <td className="flex justify-end items-center relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
              {props.actions(element)}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
}
