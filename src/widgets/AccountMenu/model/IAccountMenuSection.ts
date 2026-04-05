import type { TUserRole } from './TUserRole'

interface IAccountMenuItem {
  id: number
  title: string
  to: string
  roles: TUserRole[]
}

export interface IAccountMenuSection {
  title: string
  items: IAccountMenuItem[]
}
