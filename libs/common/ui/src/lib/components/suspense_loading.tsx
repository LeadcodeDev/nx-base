import { PropsWithChildren, ReactElement } from 'react';

type Props<T> = {
  isLoading: boolean;
  data: T
  loaderComponent?: ReactElement;
  emptyComponent?: ReactElement;
}

export function SuspenseLoading<T>(props: PropsWithChildren<Props<T>>) {
  if (props.isLoading) {
    return props.loaderComponent ?? <div>Loading...</div>
  }

  if (Array.isArray(props.data) ? !props.data.length : !props.data) {
    return props.emptyComponent ?? <div>No data found</div>
  }

  return props.children
}
