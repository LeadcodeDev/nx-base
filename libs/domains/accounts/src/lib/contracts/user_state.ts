import { JwtModel } from './jwt_model';

export interface UserState {
  user?: JwtModel
  token?: string
  isAuthenticated: boolean
  isLoading: boolean
}
