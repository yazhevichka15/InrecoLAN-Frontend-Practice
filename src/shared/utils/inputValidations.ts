export const email_validation = {
  type: 'email',
  name: 'email',
  placeholder: 'Почта',
  validation: {
    required: {
      value: true,
      message: 'Введите почту',
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Введите корректный email',
    },
    maxLength: {
      value: 100,
      message: 'Email не должен превышать 100 символов',
    },
  },
}

export const password_validation = {
  type: 'password',
  name: 'password',
  placeholder: 'Пароль',
  validation: {
    required: {
      value: true,
      message: 'Введите пароль',
    },
    minLength: {
      value: 6,
      message: 'Пароль должен содержать минимум 6 символов',
    },
    maxLength: {
      value: 100,
      message: 'Пароль не должен превышать 100 символов',
    },
  },
}
