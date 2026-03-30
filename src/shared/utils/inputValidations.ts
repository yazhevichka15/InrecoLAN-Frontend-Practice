export const firstName_validation = {
  type: 'text',
  name: 'firstName',
  placeholder: 'Имя',
  validation: {
    required: {
      value: true,
      message: 'Введите имя',
    },
    maxLength: {
      value: 150,
      message: 'Имя не должно превышать 150 символов',
    },
  },
}

export const secondName_validation = {
  type: 'text',
  name: 'secondName',
  placeholder: 'Фамилия',
  validation: {
    required: {
      value: true,
      message: 'Введите фамилию',
    },
    maxLength: {
      value: 150,
      message: 'Фамилия не должна превышать 150 символов',
    },
  },
}

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

export const phone_validation = {
  type: 'tel',
  name: 'phone',
  placeholder: 'Телефон',
  validation: {
    minLength: {
      value: 11,
      message: 'Номер телефона должен содержать не менее 11 символов',
    },
    maxLength: {
      value: 16,
      message: 'Номер телефона не должен превышать 16 символов',
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

export const confirmPassword_validation = {
  type: 'password',
  name: 'confirmPassword',
  placeholder: 'Подтвердите пароль',
  validation: {
    required: {
      value: true,
      message: 'Повторите пароль',
    },
  },
}

export const requredField_validation = {
  required: {
    value: true,
    message: 'Поле обязательно для выбора',
  },
}
