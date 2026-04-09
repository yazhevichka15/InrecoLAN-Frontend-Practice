import { ErrorLayout } from '@widgets/ErrorLayout'
import { SubHeader } from '@widgets/SubHeader'

export const ForbiddenPage = () => {
  return (
    <>
      <SubHeader
        mainTitle='Упс. Что-то пошло не так'
        subTitle='ну бывает'
        description='Тут мы вам уже ничем не поможем. Приносим извинения, зайдите позже.'
      />
      <ErrorLayout
        errorCode={403}
        title='Доступ запрещён'
        message='У вас нет прав для просмотра этой старницы. Войдите под другой учётной записью или попросите администратора дать вам доступ.'
        image='/public/assets/errors/table_lamp.webp'
      />
    </>
  )
}
