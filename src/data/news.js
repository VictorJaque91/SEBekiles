/**
 * @typedef {Object} NewsItem
 * @property {string} id
 * @property {string} date   'YYYY-MM-DD'
 * @property {string} title
 * @property {string} text
 * @property {{ src: string|null, alt: string }} image
 */

/** @type {NewsItem[]} */
export const news = [
  {
    id: 'trym-flyttat',
    date: '2026-10-12',
    title: 'Trym har flyttat till Skåne',
    text: 'En omplacering är alltid tuff, men vi vet att Trym får ett fint liv hos Hanna. Vi önskar dem all lycka och många fina stunder tillsammans.',
    image: { src: null, alt: 'Trym ligger på rygg på en filt med en röd leksak' },
  },
  {
    id: 'ostkatten-norrkoping',
    date: '2026-10-11',
    title: 'Östkattens utställning i Norrköping',
    text: 'Helgen tillbringade vi i Norrköping med Bjärven och Vega. Resultaten finns under Utställning.',
    image: { src: null, alt: 'Bjärven och Vega på utställning' },
  },
]