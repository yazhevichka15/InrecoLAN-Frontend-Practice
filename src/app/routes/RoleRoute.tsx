import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import type { RootState } from '@shared/store/store'
import type { EUserRole } from '@entities/EUserRole'

interface IRoleRouteProps {
  allowedRoles: EUserRole[]
}

export const RoleRoute = ({ allowedRoles }: IRoleRouteProps) => {
  const { isAuth, user } = useSelector((state: RootState) => state.auth)

  if (!isAuth) {
    return <Navigate to='/auth/login' replace />
  }

  if (!user || !allowedRoles.includes(user.userRole)) {
    return <Navigate to='/403' replace />
  }

  return <Outlet />
}
