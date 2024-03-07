import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@nx-base/helpers'
import { PaginatedResource } from '@nx-base/contracts';
import { UserModel } from '../contracts/user_model';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['users', 'user'],
  endpoints: (builder) => ({
    getUser: builder.query<UserModel, string | undefined>({
      query: (id: string) => `/users/${id}?includeRole=true`,
    }),
    getUsers: builder.query<PaginatedResource<UserModel>, { page: number, size: number }>({
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

export const { useGetUsersQuery, useGetUserQuery } = userApi
