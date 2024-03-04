import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserState } from '@nx-base/accounts';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3333/',
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { user } = getState() as { user: UserState }
    headers.set('Authorization', `Bearer ${user.token}`)
  }
})
