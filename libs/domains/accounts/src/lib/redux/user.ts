import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@nx-base/helpers'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => `/authentication/me`
    }),
    getUsers: builder.query<any, { page: number, size: number }>({
      query: () => '/users?includeRole=true'
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

export const { useGetUsersQuery } = userApi
