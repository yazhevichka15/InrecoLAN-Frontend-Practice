import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '@shared/lib/hooks/useAppSelector'
import { selectIsAuth } from '@features/auth'

export const PublicRoute = () => {
  const isAuth = useAppSelector(selectIsAuth)

  if (isAuth) {
    return <Navigate to='/account' replace />
  }

  return <Outlet />
}
