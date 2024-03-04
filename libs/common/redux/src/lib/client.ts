import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from './redux'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3333/',
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { user } = getState() as RootState
    headers.set('Authorization', `Bearer ${user.token}`)
  }
})
