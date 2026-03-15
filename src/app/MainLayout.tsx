import { Outlet } from 'react-router-dom'

import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'

export const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex flex-col flex-1'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
