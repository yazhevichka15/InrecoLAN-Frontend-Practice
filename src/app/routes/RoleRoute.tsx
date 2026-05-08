import { Navigate, Outlet } from 'react-router-dom'

import { selectIsAuth, selectAuthUser } from '@features/auth'
import type { EUserRole } from '@entities/user'
import { useAppSelector } from '@shared/lib/hooks/useAppSelector'

interface IRoleRouteProps {
  allowedRoles: EUserRole[]
}

export const RoleRoute = ({ allowedRoles }: IRoleRouteProps) => {
  const isAuth = useAppSelector(selectIsAuth)
  const user = useAppSelector(selectAuthUser)

  if (!isAuth) {
    return <Navigate to='/auth/login' replace />
  }

  if (!user || !allowedRoles.includes(user.userRole)) {
    return <Navigate to='/403' replace />
  }

  return <Outlet />
}
