export enum EApp {
  APP_NAME = 'zoolyfe',
  TOKEN_APP = 'zoolyfe-app',
}

export enum EAppLoadingState {
  GET_PROFILE = 'GET_PROFILE',
}

export interface IAppMenu {
  key: string
  to: string
  label: string
  icon: string
  isActive: boolean
  submenus: IAppMenu[]
}

export const APP_MENUS: IAppMenu[] = [
  {
    key: 'dashboard',
    to: '/dashboard',
    label: 'Dashboard',
    icon: '',
    isActive: false,
    submenus: [],
  },
  {
    key: 'users',
    to: '/users',
    label: 'Users',
    icon: '',
    isActive: false,
    submenus: [],
  },
]
