export interface ILoginForm {
  username: string
  password: string
}

export interface IPermissionList {
  name: string
  path: string
  title?: string
  sort?: number
  icon?: any
  children?: Array<IPermissionList>
}
export interface IUserInfo {
  name?: string
  avatar?: string
  role?: string
  permission: IPermissionList[]
}
