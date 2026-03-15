import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage } from '@pages/HomePage'
import { ContactsPage } from '@pages/ContactsPage'
import { CategoriesPage } from '@pages/CategoriesPage'
import { CategoryPage } from '@pages/CategoryPage'
import { ProductDetailsPage } from '@pages/ProductDetailsPage'
import { ShoppingCartPage } from '@pages/ShoppingCartPage'
import { FavouritiesPage } from '@pages/FavouritiesPage'
import { LoginPage } from '@pages/LoginPage'
import { RegisterPage } from '@pages/RegisterPage'
import { ForgotPasswordPage } from '@pages/ForgotPasswordPage'
import { ForbiddenPage } from '@pages/ForbiddenPage'
import { ServerErrorPage } from '@pages/ServerErrorPage'
import { NotFoundPage } from '@pages/NotFoundPage'

import { MainLayout } from './MainLayout'
import { AccountLayout } from './AccountLayout'

function App() {
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

        {/* Защищенный путь (клиент) */}
        <Route path='cart' element={<ShoppingCartPage />} />

        {/* Защищенный путь (клиент) */}
        {/* <Route path='create-order' element={<CreateOrderPage />} /> */}

        {/* Защищенный путь (клиент) */}
        <Route path='favourities' element={<FavouritiesPage />} />

        {/* Защищенный путь (пользователь не авторизован) */}
        <Route path='auth'>
          <Route index element={<Navigate to='login' replace />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='forgot-password' element={<ForgotPasswordPage />} />
        </Route>

        {/* Защищенный путь (пользователь авторизован) */}
        <Route path='account' element={<AccountLayout />}>
          <Route index element={<Navigate to='dashboard' replace />} />
          {/* <Route path='dashboard' element={<AccountDashboardPage />} /> - главная (приветственная) страница в ЛК */}
          {/* <Route path='settings' element={<AccountSettingsPage />} /> - страница "Настройки аккаунта" */}
          {/* <Route path='orders' element={<AccountOrdersPage />} /> - страница "Мои заказы" / "Управление заказами" */}
          {/* <Route path='orders/:order' element={<AccountOrderDetailsPage />} /> - страница с отображением конкретного заказа */}
          {/* <Route path='reviews' element={<AccountReviewsPage />} - страница "Мои отзывы" / "Управление отзывами" /> */}
          {/* <Route path='reviews/:review' element={<AccountReviewDetailsPage />} - страница с отображением конкретного отзыва /> */}

          {/* Пути ТОЛЬКО для сотрудника / администратора: */}

          {/* <Route path='products' element={<AccountProductsPage />} - страница "Управление товарами" /> */}
          {/* <Route path='products/:product' element={<AccountProductDetailsPage />} /> - страница с отображением конкретного товара */}
          {/* <Route path='users' element={<AccountUsersPage />} - страница "Управление пользователями" /> */}
          {/* <Route path='users/:user' element={<AccountUserDetailsPage />} /> - страница с отображением конкретного пользователя */}
          {/* <Route path='analytics' element={<AccountAnalyticsPage />} - страница отображения статистики /> */}
        </Route>

        <Route path='403' element={<ForbiddenPage />} />
        <Route path='500' element={<ServerErrorPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
