import { ErrorLayout } from '@widgets/ErrorLayout'
import { SubHeader } from '@widgets/SubHeader'

// Перенаправление реализовать через ErrorBoundary

export const ServerErrorPage = () => {
  return (
    <>
      <SubHeader
        mainTitle='Упс. Что-то пошло не так'
        subTitle='ну бывает'
        description='Тут мы вам уже ничем не поможем. Приносим извинения, зайдите позже.'
      />
      <ErrorLayout
        errorCode={500}
        title='Сервис недоступен'
        message='Сервис временно недоступен. Мы уже в курсе и исправляем ошибку. Обновите страницу через несколько минут.'
        image='/public/assets/errors/table_lamp.webp'
      />
    </>
  )
}
