import { createApi } from '@reduxjs/toolkit/query'
import { baseQuery } from '@nx-base/redux'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUser: builder.query<void, void>({
      query: () => `/authentication/me`
    })
  })
})

export const {  } = userApi
