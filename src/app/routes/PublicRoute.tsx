import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import type { RootState } from '@shared/store/store'

export const PublicRoute = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth)

  if (isAuth) {
    return <Navigate to='/account' replace />
  }

  return <Outlet />
}
