export type TArrowButtonTheme =
  | 'white-big'
  | 'white-small'
  | 'lightbrown-big'
  | 'lightbrown-small'
  | 'darkbrown-big'
  | 'darkbrown-small'

interface IArrowButtonThemeResult {
  color: string
  textStyle: 'uppercase' | 'lowercase' | 'normal-case'
}

export function getArrowButtonTheme(theme: TArrowButtonTheme): IArrowButtonThemeResult {
  switch (theme) {
    case 'white-big':
      return { color: 'white', textStyle: 'uppercase' }
    case 'white-small':
      return { color: 'white', textStyle: 'normal-case' }
    case 'lightbrown-big':
      return { color: 'var(--color-light-brown)', textStyle: 'uppercase' }
    case 'lightbrown-small':
      return { color: 'var(--color-light-brown)', textStyle: 'normal-case' }
    case 'darkbrown-big':
      return { color: 'var(--color-dark-brown)', textStyle: 'uppercase' }
    case 'darkbrown-small':
      return { color: 'var(--color-dark-brown)', textStyle: 'normal-case' }
    default:
      return { color: 'white', textStyle: 'normal-case' }
  }
}
