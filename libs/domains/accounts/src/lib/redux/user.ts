import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@nx-base/redux'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => `/authentication/me`
    }),
    login: builder.mutation<any, { username: string, password: string }>({
      query: (credentials) => ({
        url: `/authentication/login`,
        method: 'POST',
        body: credentials
      })
    })
  })
})

export const {  } = userApi
