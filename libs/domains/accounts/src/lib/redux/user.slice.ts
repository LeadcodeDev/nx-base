import { createEntityAdapter, createSlice } from '@reduxjs/toolkit/react'
import { UserModel } from '../contracts/user_model'
import { UserState } from '../contracts/user_state';
import { RootState } from '@nx-base/redux';

export const USER_KEY = 'user'
export const userAdapter = createEntityAdapter<UserModel>()


export const initialUserState: UserState = {
  isLoading: true,
  isAuthenticated: false,
}

export const userSlice = createSlice({
  name: USER_KEY,
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.isLoading = false
      state.isAuthenticated = !!action.payload.user
      state.user = action.payload.user
      state.token = action.payload.token
    },
  },
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions

export const getUserState = (root: RootState) => root[USER_KEY]
