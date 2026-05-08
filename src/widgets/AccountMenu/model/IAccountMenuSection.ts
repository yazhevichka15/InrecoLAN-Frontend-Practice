import type { EUserRole } from '@entities/user'

interface IAccountMenuItem {
  id: number
  title: string
  to: string
  roles: EUserRole[]
}

export interface IAccountMenuSection {
  title: string
  items: IAccountMenuItem[]
}
