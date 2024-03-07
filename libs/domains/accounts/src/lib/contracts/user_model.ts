import { RoleModel } from './role_model';

export interface UserModel {
  id: string
  username: string
  firstname: string
  lastname: string
  email: string
  roles: RoleModel[]
  createdAt: string
  updatedAt: string
}
