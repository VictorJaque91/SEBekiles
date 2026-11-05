/**
 * @typedef {Object} HealthTest
 * @property {string} name
 * @property {string} result
 * @property {string} source
 * @property {string|null} date   'YYYY', 'YYYY-MM' eller 'YYYY-MM-DD'
 */

/**
 * @typedef {Object} Cat
 * @property {string} id
 * @property {string} callName
 * @property {string} registeredName
 * @property {string[]} titles
 * @property {'SIB'|'MCO'} breed
 * @property {'male'|'female'} sex
 * @property {boolean} neutered
 * @property {'home'|'moved'} status   'moved' döljs på sidan
 * @property {boolean} featured        visas på startsidan
 * @property {string} born
 * @property {{ name: string, ems: string }} color
 * @property {{ src: string|null, alt: string }} image
 * @property {string|null} pedigreeUrl  Stamtavla på PawPeds
 * @property {string|null} sverakUrl    Kattinformation i SVERAKs stambok
 * @property {HealthTest[]} healthTests
 */

/** @type {Cat[]} */
export const cats = [
  {
    id: 'bjarven',
    callName: 'Bjärven',
    registeredName: 'S*Summer Flame’s Bjärven Bernt',
    titles: ['SC', 'JCH'],
    breed: 'SIB',
    sex: 'male',
    neutered: true,
    status: 'home',
    featured: true,
    born: '2023-04-18',
    color: { name: 'Svarttabby', ems: 'n 22' },
    image: { src: '/images/cats/bjarven.webp', alt: 'Bjärven, en svarttabby sibirisk katt' },
    pedigreeUrl: 'https://pawpeds.com/db/?a=p&id=1786673&g=4&p=sib&date=iso&o=elastic',
    sverakUrl: 'https://findus.sverak.se/Stambok/Visa/545592',
    healthTests: [
      { name: 'PKD (njurscanning)', result: 'Utan anmärkning', source: 'Ultraljud', date: '2024-03-18' },
      { name: 'PK-def', result: 'Normal', source: 'MyCat DNA', date: '2024-06-10' },
      { name: 'Blodgrupp', result: 'A eller AB (bärare av b2)', source: 'MyCat DNA', date: '2024-06-10' },
      { name: 'Colourpoint-anlag (cs)', result: 'Ej bärare', source: 'MyCat DNA', date: '2024-06-10' },
      { name: 'Mag-tarmparasiter', result: 'Negativt', source: 'SVA', date: '2025-08' },
    ],
  },
  {
    id: 'stella',
    callName: 'Stella',
    registeredName: 'SE*Zoalmas Estrella Amadora',
    titles: ['JCH', 'KCH'],
    breed: 'SIB',
    sex: 'female',
    neutered: true,
    status: 'home',
    featured: true,
    born: '2024-03-10',
    color: { name: 'Svart-vit', ems: 'n 09' },
    image: { src: '/images/cats/stella.webp', alt: 'Stella, en svart-vit sibirisk katt' },
    pedigreeUrl: 'https://pawpeds.com/db/?a=p&id=1831699&g=4&p=sib&date=iso&o=elastic',
    sverakUrl: 'https://findus.sverak.se/Stambok/Visa/560925',
    healthTests: [
      { name: 'PKD (njurscanning)', result: 'Utan anmärkning', source: 'Ultraljud', date: '2025-05-08' },
      { name: 'PK-def', result: 'Normal', source: 'MyCat DNA', date: '2026-03-16' },
      { name: 'Blodgrupp', result: 'A', source: 'MyCat DNA', date: '2026-03-16' },
      { name: 'Colourpoint-anlag (cs)', result: 'Ej bärare', source: 'MyCat DNA', date: '2026-03-16' },
    ],
  },
  {
    id: 'vega',
    callName: 'Vega',
    registeredName: 'SE*Iskär’s Vega af Bjärven',
    titles: [],
    breed: 'SIB',
    sex: 'female',
    neutered: false,
    status: 'home',
    featured: true,
    born: '2026-01-15',
    color: { name: 'Blåsköldpadd-bicolour', ems: 'g 03' },
    image: { src: '/images/cats/vega.webp', alt: 'Vega, en blåsköldpadd-bicolour sibirisk katt' },
    pedigreeUrl: 'https://pawpeds.com/db/?a=p&id=1857337&g=4&p=sib&date=iso&o=elastic',
    sverakUrl: 'https://findus.sverak.se/Stambok/Visa/591503',
    healthTests: [],
  },
  {
    id: 'junior',
    callName: 'Junior',
    registeredName: 'S*Laxforsens Jalapeno Junior af Chili',
    titles: ['IP', 'SC'],
    breed: 'SIB',
    sex: 'male',
    neutered: true,
    status: 'home',
    featured: true,
    born: '2014-10-22',
    color: { name: 'Svart-vit', ems: 'n 09' },
    image: { src: '/images/cats/junior.webp', alt: 'Junior, en svart-vit sibirisk katt' },
    pedigreeUrl: 'https://pawpeds.com/db/?a=p&id=1241745&g=4&p=sib&date=iso&o=elastic',
    sverakUrl: 'https://findus.sverak.se/Stambok/Visa/392122',
    healthTests: [
      { name: 'PKD (njurscanning)', result: 'Utan anmärkning', source: 'Ultraljud', date: '2019-06-25' },
      { name: 'Blodgrupp', result: 'A', source: 'UC Davis', date: '2017-02-09' },
    ],
  },
]
