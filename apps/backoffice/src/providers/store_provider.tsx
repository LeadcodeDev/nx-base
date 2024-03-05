import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '@nx-base/redux'

export function StoreProvider(props: PropsWithChildren) {

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
