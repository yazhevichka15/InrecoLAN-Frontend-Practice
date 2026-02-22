import type { FC } from 'react'

interface IMap {
  width?: number
  height?: number
}

export const Map: FC<IMap> = ({ width, height }) => {
  const mapClass = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
  }

  return (
    <iframe
      src='https://yandex.ru/map-widget/v1/?um=constructor%3A56698f229f8cfe4e13f2c8d541d5fa0e1354dcad996f06fb3cb6a5e772ca9d10&amp;source=constructor'
      style={mapClass}
    ></iframe>
  )
}
