import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3333/',
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { user } = getState() as { user: { token: string } }
    headers.set('Authorization', `Bearer ${user.token}`)
  }
})
