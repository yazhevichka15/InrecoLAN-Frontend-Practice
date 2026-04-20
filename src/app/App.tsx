import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage } from '@pages/HomePage'
import { ContactsPage } from '@pages/ContactsPage'
// import { CatalogPage } from '@pages/CatalogPage'
// import { CategoryPage } from '@pages/CategoryPage'
import { ProductDetailsPage } from '@pages/ProductDetailsPage'
import { ShoppingCartPage } from '@pages/ShoppingCartPage'
import { FavouritiesPage } from '@pages/FavouritiesPage'
import { LoginPage } from '@pages/LoginPage'
import { RegisterPage } from '@pages/RegisterPage'
import { ForgotPasswordPage } from '@pages/ForgotPasswordPage'
import { ForbiddenPage } from '@pages/ForbiddenPage'
import { ServerErrorPage } from '@pages/ServerErrorPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { AccountDashboardPage } from '@pages/AccountDashboardPage'

import { MainLayout } from './layouts/MainLayout'
import { AccountLayout } from './layouts/AccountLayout'

import { PublicRoute } from './routes/PublicRoute'
import { ProtectedRoute } from './routes/ProtectedRoute'
import { RoleRoute } from './routes/RoleRoute'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='contacts' element={<ContactsPage />} />

        <Route path='catalog'>
          {/* <Route index element={<CatalogPage />} />
          <Route path=':category' element={<CategoryPage />} /> */}
          <Route path=':category/:product' element={<ProductDetailsPage />} />
        </Route>

        <Route element={<RoleRoute allowedRoles={[1]} />}>
          <Route path='favourities' element={<FavouritiesPage />} />
          <Route path='cart' element={<ShoppingCartPage />} />
          {/* <Route path='create-order' element={<CreateOrderPage />} /> */}
        </Route>

        <Route element={<PublicRoute />}>
          <Route path='auth'>
            <Route index element={<Navigate to='login' replace />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='forgot-password' element={<ForgotPasswordPage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='account' element={<AccountLayout />}>
            <Route index element={<Navigate to='dashboard' replace />} />
            <Route path='dashboard' element={<AccountDashboardPage />} />
            {/* <Route path='settings' element={<AccountSettingsPage />} /> - страница "Настройки аккаунта" */}
            {/* <Route path='orders' element={<AccountOrdersPage />} /> - страница "Мои заказы" / "Управление заказами" */}
            {/* <Route path='orders/:order' element={<AccountOrderDetailsPage />} /> - страница с отображением конкретного заказа */}
            {/* <Route path='reviews' element={<AccountReviewsPage />} - страница "Мои отзывы" / "Управление отзывами" /> */}
            {/* <Route path='reviews/:review' element={<AccountReviewDetailsPage />} - страница с отображением конкретного отзыва /> */}

            <Route element={<RoleRoute allowedRoles={[2, 3]} />}>
              {/* <Route path='products' element={<AccountProductsPage />} - страница "Управление товарами" /> */}
              {/* <Route path='products/:product' element={<AccountProductDetailsPage />} /> - страница с отображением конкретного товара */}
              {/* <Route path='users' element={<AccountUsersPage />} - страница "Управление пользователями" /> */}
              {/* <Route path='users/:user' element={<AccountUserDetailsPage />} /> - страница с отображением конкретного пользователя */}
              {/* <Route path='analytics' element={<AccountAnalyticsPage />} - страница отображения статистики /> */}
            </Route>
          </Route>
        </Route>

        <Route path='403' element={<ForbiddenPage />} />
        <Route path='500' element={<ServerErrorPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App

{
  /* 
Пример реализации защищенного пути:
<Route element={ProtectedRoute}>
  <Route path='/test1' element={<FirstComponentPage />} />
  <Route path='/test2' element={<SecondComponentPage />} />
</Route>  
*/
}
