import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '@shared/lib/hooks/useAppSelector'
import { selectIsAuth } from '@features/auth'

export const ProtectedRoute = () => {
  const isAuth = useAppSelector(selectIsAuth)

  if (!isAuth) {
    return <Navigate to='/auth/login' replace />
  }

  return <Outlet />
}
