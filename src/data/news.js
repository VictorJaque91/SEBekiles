/**
 * @typedef {Object} NewsItem
 * @property {string} id
 * @property {string} date   'YYYY-MM-DD'
 * @property {string} title
 * @property {string} text
 */

import { cats } from './cats.js'
import { litters } from './litters.js'

/** Nyheter som skrivs för hand. */
/** @type {NewsItem[]} */
const posts = [
  {
    id: 'trym-flyttat',
    date: '2026-10-12',
    title: 'Trym har flyttat till Skåne',
    text: 'En omplacering är alltid tuff, men vi vet att Trym får ett fint liv hos Hanna. Vi önskar dem all lycka och många fina stunder tillsammans.',
  },
  {
    id: 'ostkatten-norrkoping',
    date: '2026-10-11',
    title: 'Östkattens utställning i Norrköping',
    text: 'Helgen tillbringade vi i Norrköping med Bjärven och Vega. Resultaten finns under Utställning.',
  },
]
const names = new Intl.ListFormat('sv', { type: 'conjunction' })

/**
 * En nyhet per född kull, räknad fram från litters.js.
 * Rättas ett datum eller namn där, följer nyheten med automatiskt.
 * @param {import('./litters.js').Litter} litter
 * @returns {NewsItem}
 */
function litterToNews(litter) {
  const mother = cats.find((cat) => cat.id === litter.mother)?.callName ?? litter.motherName
  const parents = [mother, litter.father].filter(Boolean)
  const count = litter.kittenCount ?? litter.kittenNames?.length ?? 0

  let text = parents.length === 2
    ? `${parents[0]} och ${parents[1]} har fått ${count} kattungar`
    : `${count} kattungar har fötts`
  text += litter.kittenNames?.length > 0 ? `: ${names.format(litter.kittenNames)}.` : '.'

  return {
    id: `kull-${litter.id}`,
    date: litter.dates.born,
    title: litter.name ? `${litter.name} är född!` : `Nya kattungar hos ${mother}!`,
    text,
  }
}

const litterNews = litters.filter((litter) => litter.dates.born).map(litterToNews)

/** @type {NewsItem[]} */
export const news = [...posts, ...litterNews]
