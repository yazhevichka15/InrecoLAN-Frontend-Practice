import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { HomePage } from '../pages/HomePage/HomePage'
import { ContactsPage } from '../pages/ContactsPage/ContactsPage'
import { CategoriesPage } from '../pages/CategoriesPage/CategoriesPage'
import { CategoryPage } from '../pages/CategoryPage/CategoryPage'
import { ProductDetailsPage } from '../pages/ProductDetailsPage/ProductDetailsPage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage/ForgotPasswordPage'
import { ProfilePage } from '../pages/ProfilePage/ProfilePage'
import { ShoppingCartPage } from '../pages/ShoppingCartPage/ShoppingCartPage'
import { FavouritiesPage } from '../pages/FavouritiesPage/FavouritiesPage'
import { AdminPanel } from '../pages/AdminPanel/AdminPanel'
import { ForbiddenPage } from '../pages/ForbiddenPage/ForbiddenPage'
import { ServerErrorPage } from '../pages/ServerErrorPage/ServerErrorPage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'

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

export default App
