import { combineReducers, configureStore } from '@reduxjs/toolkit/react';
import { userApi, userReducer } from '@nx-base/accounts';

const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true
    })
      .concat(userApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
