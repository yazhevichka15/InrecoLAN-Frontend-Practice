import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

<<<<<<< HEAD
import { HomePage } from '@pages/HomePage'
import { ContactsPage } from '@pages/ContactsPage'
import { CategoriesPage } from '@pages/CategoriesPage'
import { CategoryPage } from '@pages/CategoryPage'
import { ProductDetailsPage } from '@pages/ProductDetailsPage'
import { LoginPage } from '@pages/LoginPage'
import { RegisterPage } from '@pages/RegisterPage'
import { ForgotPasswordPage } from '@pages/ForgotPasswordPage'
import { ProfilePage } from '@pages/ProfilePage'
import { ShoppingCartPage } from '@pages/ShoppingCartPage'
import { FavouritiesPage } from '@pages/FavouritiesPage'
import { AdminPanel } from '@pages/AdminPanel'
import { ForbiddenPage } from '@pages/ForbiddenPage'
import { ServerErrorPage } from '@pages/ServerErrorPage'
import { NotFoundPage } from '@pages/NotFoundPage'

import { MainLayout } from './MainLayout'

// Заменить импорты с помощью псведонимов? .. from '@/pages/home'
import { HomePage } from '../pages/HomePage/index'
import { ContactsPage } from '../pages/ContactsPage/index'
import { CategoriesPage } from '../pages/CategoriesPage/index'
import { CategoryPage } from '../pages/CategoryPage/index'
import { ProductDetailsPage } from '../pages/ProductDetailsPage/index'
import { LoginPage } from '../pages/LoginPage/index'
import { RegisterPage } from '../pages/RegisterPage/index'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage/index'
import { ProfilePage } from '../pages/ProfilePage/index'
import { ShoppingCartPage } from '../pages/ShoppingCartPage/index'
import { FavouritiesPage } from '../pages/FavouritiesPage/index'
import { AdminPanel } from '../pages/AdminPanel/index'
import { ForbiddenPage } from '../pages/ForbiddenPage/index'
import { ServerErrorPage } from '../pages/ServerErrorPage/index'
import { NotFoundPage } from '../pages/NotFoundPage/index'


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='contacts' element={<ContactsPage />} />

        <Route path='catalog'>
          <Route index element={<CategoriesPage />} />
          <Route path=':category' element={<CategoryPage />} />
          <Route path=':category/:product' element={<ProductDetailsPage />} />
        </Route>

        {/* Обернуть компонент внутри element: <ProtectedRoute ... > </ProtectedRoute> */}
        <Route path='cart' element={<ShoppingCartPage />} />
        {/* Обернуть компонент внутри element: <ProtectedRoute ... > </ProtectedRoute> */}
        <Route path='favourities' element={<FavouritiesPage />} />

        <Route path='auth'>
          <Route index element={<Navigate to='login' replace />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='forgot-password' element={<ForgotPasswordPage />} />
        </Route>

        <Route path='403' element={<ForbiddenPage />} />
        <Route path='500' element={<ServerErrorPage />} />
        <Route path='*' element={<NotFoundPage />} />

      </Route>

      {/* Обернуть компонент внутри element: <ProtectedRoute ... > </ProtectedRoute> */}
      <Route path='profile' element={<ProfilePage />} />
      {/* Обернуть компонент внутри element: <ProtectedRoute ... > </ProtectedRoute> */}
      <Route path='admin' element={<AdminPanel />} />
    </Routes>
=======
      </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
>>>>>>> 4ae6432ccec799b617268f744fbbde5bd442f16c
  )
}

export default App;