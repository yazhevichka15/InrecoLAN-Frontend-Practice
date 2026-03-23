import { ErrorLayout } from '@widgets/ErrorLayout'
import { SubHeader } from '@widgets/SubHeader'

export const NotFoundPage = () => {
  return (
    <>
      <SubHeader
        mainTitle='Упс. Что-то пошло не так'
        subTitle='ну бывает'
        description='Тут мы вам уже ничем не поможем. Приносим извинения, зайдите позже.'
      />
      <ErrorLayout
        errorCode={404}
        title='Страница не найдена'
        message='Страница была удалена или её адрес поменялся. Проверьте адрес или вернитесь на главную страницу.'
        image='/public/assets/errors/table_lamp.webp'
      />
    </>
  )
}
