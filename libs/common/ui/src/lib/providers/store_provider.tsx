import { PropsWithChildren } from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit/react';
import { userApi, userReducer } from '@nx-base/accounts'
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
})

export function StoreProvider(props: PropsWithChildren) {

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true
      })
        .concat(userApi.middleware)
  })

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
