import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

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
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='contacts' element={<ContactsPage />} />

        <Route path='catalog'>
          <Route index element={<CategoriesPage />} />
          <Route path=':category' element={<CategoryPage />} />
          <Route path=':category/:product' element={<ProductDetailsPage />} />
        </Route>

        <Route path='auth'>
          <Route index element={<Navigate to='login' replace />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='forgot-password' element={<ForgotPasswordPage />} />
        </Route>

        {/* <Route element={<ProtectedRouteClient />}> */}
        <Route path='profile' element={<ProfilePage />} />
        <Route path='cart' element={<ShoppingCartPage />} />
        <Route path='favourities' element={<FavouritiesPage />} />
        {/* </Route> */}

        {/* <Route element={<ProtectedRouteAdmin />}> */}
        <Route path='admin' element={<AdminPanel />} />
        {/* </Route> */}

        <Route path='403' element={<ForbiddenPage />} />
        <Route path='500' element={<ServerErrorPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;