export const firstNameValidation = {
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

export const secondNameValidation = {
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

export const emailValidation = {
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

export const phoneValidation = {
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

export const birthdayValidation = {
  type: 'date',
  name: 'birthday',
  placeholder: 'Дата рождения',
  validation: {
    validate: {
      notFuture: (value: string) => new Date(value) <= new Date() || 'Дата не может быть в будущем',
    },
  },
}

export const passwordValidation = {
  type: 'password',
  name: 'password',
  placeholder: 'Пароль',
  validation: {
    required: {
      value: true,
      message: 'Введите пароль',
    },
    minLength: {
      value: 5,
      message: 'Пароль должен содержать минимум 5 символов',
    },
    maxLength: {
      value: 100,
      message: 'Пароль не должен превышать 100 символов',
    },
  },
}

export const confirmPasswordValidation = {
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

export const requredFieldValidation = {
  required: {
    value: true,
    message: 'Поле обязательно для выбора',
  },
}
