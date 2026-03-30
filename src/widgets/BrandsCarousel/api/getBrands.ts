import type { IBrand } from '../model/IBrand'

// Заглушка, должен быть запрос на сервер
export function getBrands(): IBrand[] {
  return [
    {
      id: 1,
      name: 'benetti Brand Logo',
      imgSrc: 'img/brands/benetti.webp',
    },
    {
      id: 2,
      name: 'BOGATE`S Brand Logo',
      imgSrc: 'img/brands/bogates.webp',
    },
    {
      id: 3,
      name: 'CRYSTAL LUX Brand Logo',
      imgSrc: 'img/brands/crystal_lux.webp',
    },
    {
      id: 4,
      name: 'EUROSVET Brand Logo',
      imgSrc: 'img/brands/eurosvet.webp',
    },
    {
      id: 5,
      name: 'freya Brand Logo',
      imgSrc: 'img/brands/freya.webp',
    },
    {
      id: 6,
      name: 'Kink Light Brand Logo',
      imgSrc: 'img/brands/kink_light.webp',
    },
    {
      id: 7,
      name: 'Lightstar Brand Logo',
      imgSrc: 'img/brands/lightstar.webp',
    },
    {
      id: 8,
      name: 'LIMION Brand Logo',
      imgSrc: 'img/brands/lumion.webp',
    },
    {
      id: 9,
      name: 'MAYTONI Brand Logo',
      imgSrc: 'img/brands/maytoni.webp',
    },
    {
      id: 10,
      name: 'MODELUX Brand Logo',
      imgSrc: 'img/brands/modelux.webp',
    },
    {
      id: 11,
      name: 'Odeon Light Brand Logo',
      imgSrc: 'img/brands/odeon_light.webp',
    },
    {
      id: 12,
      name: 'OMNI LUX Brand Logo',
      imgSrc: 'img/brands/omni_lux.webp',
    },
    {
      id: 13,
      name: 'TK LIGHTING Brand Logo',
      imgSrc: 'img/brands/tk_lighting.webp',
    },
    {
      id: 14,
      name: 'Zortes Brand Logo',
      imgSrc: 'img/brands/zortes.webp',
    },
  ]
}
