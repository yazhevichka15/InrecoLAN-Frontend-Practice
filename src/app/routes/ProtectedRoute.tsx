import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import type { RootState } from '@shared/store/store'

export const ProtectedRoute = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth)

  if (!isAuth) {
    return <Navigate to='/auth/login' replace />
  }

  return <Outlet />
}
