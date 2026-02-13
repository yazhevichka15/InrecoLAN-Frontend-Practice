import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='contacts' element={<ContactsPage />} />

        <Route path='catalog'>
          <Route index element={<CatalogPage />} />
          <Route path=':category' element={<CategoryPage />} />
          <Route path=':category/:product' element={<ProductDetailsPage />} />
        </Route>

        <Route path='auth'>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='forgot-password' element={<ForgotPasswordPage />} />
        </Route>

        {/* <Route element={<ProtectedRouteClient />}> */}
        <Route path='profile' element={<ProfilePage />} />
        <Route path='cart' element={<ShoppingCartPage />} />
        <Route path='favourites' element={<FavouritiesPage />} />
        {/* </Route> */}

        {/* <Route element={<ProtectedRouteAdmin />}> */}
        <Route path='admin' element={<AdminPanel />} />
        {/* </Route> */}

        {/* Перенаправление реализовать через ErrorBoundary */}
        <Route path='403' element={<ForbiddenPage />} />
        <Route path='500' element={<ServerErrorPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
