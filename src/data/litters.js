export const litterSteps = [
  { id: 'planned', label: 'Planerad' },
  { id: 'mated', label: 'Parad' },
  { id: 'born', label: 'Född' },
  { id: 'ready', label: 'Redo att flytta' },
]

/**
 * @typedef {Object} Kitten
 * @property {string} id
 * @property {string} name
 * @property {'male'|'female'} sex
 * @property {{ name: string, ems: string }} color
 * @property {'available'|'reserved'|'sold'|'staying'} status
 * @property {{ src: string|null, alt: string }} image
 */

/**
 * @typedef {Object} Litter
 * @property {string} id
 * @property {string} [name]         Kullens namn, t.ex. "Yellowstonekullen"
 * @property {string|null} mother    Kattens id i cats.js, null om honan inte finns där
 * @property {string} [motherName]   Honans namn när hon inte finns i cats.js
 * @property {string|null} father   Hanens namn, null om ej bestämt
 * @property {'planned'|'mated'|'born'|'ready'|'archived'} status
 *   'archived' = tidigare kull, visas under "Tidigare kullar"
 * @property {{ planned?: string, mated?: string, born?: string, ready?: string }} dates
 * @property {string|null} note
 * @property {Kitten[]} kittens
 * @property {{ src: string, alt: string, position?: string }[]} images   Bilder på kullen (position = CSS object-position vid beskärning)
 * @property {number} [kittenCount]      Tidigare kullar: antal kattungar
 * @property {string[]} [kittenNames]    Tidigare kullar: kattungarnas namn
 * @property {string} [blogUrl]          Länk till kullen på bloggen
 */

const blog = (query) => `https://bekiles.blogspot.com/search?q=${encodeURIComponent(query)}`

/** @type {Litter[]} */
export const litters = [
  {
    id: 'vega-1',
    mother: 'vega',
    father: null,
    status: 'planned',
    dates: {},
    note: 'Planen är att Vega paras i juni 2027. Hane presenteras senare när det närmar sig.',
    kittens: [],
    images: [],
  },

  // Tidigare kullar, kontrollerade mot födelsebevisen.
  {
    id: 'yellowstone',
    name: 'Yellowstonekullen',
    mother: 'stella',
    father: 'Trym',
    status: 'archived',
    dates: { born: '2026-06-30' },
    note: null,
    kittenCount: 7,
    kittenNames: ['Mo', 'Rip', 'Kayce', 'Beth', 'Carter', 'Jimmy', 'Teeter'],
    blogUrl: blog('Yellowstone'),
    kittens: [],
    images: [{ src: '/images/litters/yellowstone.webp', alt: 'Fyra kattungar i silvertabby, vitt och calico ligger i en brun korg och tittar upp mot kameran', position: '50% 40%' }],
  },
  {
    id: 'indian',
    name: 'Indiankullen',
    mother: 'stella',
    father: 'Bjärven',
    status: 'archived',
    dates: { born: '2025-10-31' },
    note: null,
    kittenCount: 5,
    kittenNames: ['Wynona', 'Chayenne', 'Tamaya', 'Leeloo', 'Naira'],
    blogUrl: blog('Indianflickorna'),
    kittens: [],
    images: [{ src: '/images/litters/indian.webp', alt: 'Fem kattungar i grått, tabby och svart sitter i en ljus korg' }],
  },
  {
    id: 'november',
    name: 'Novemberkullen',
    mother: null,
    motherName: 'Xenon',
    father: 'Boris',
    status: 'archived',
    dates: { born: '2020-11-20' },
    note: null,
    kittenCount: 3,
    kittenNames: ['Asta', 'Malte', 'Leopold'],
    blogUrl: blog('Novemberkullen'),
    kittens: [],
    images: [{ src: '/images/litters/november.webp', alt: 'Tre tabby-kattungar med vita bringor ligger i en brun korg bredvid ett klösträd' }],
  },
  {
    id: 'vulkan',
    name: 'Vulkankullen',
    mother: null,
    motherName: 'Sophia',
    father: 'Tyrion',
    status: 'archived',
    dates: { born: '2020-01-31' },
    note: null,
    kittenCount: 4,
    kittenNames: ['Fuji', 'Teide', 'Stromboli', 'Helga'],
    blogUrl: blog('Vulkankullen'),
    kittens: [],
    images: [{ src: '/images/litters/vulkan.webp', alt: 'Fyra kattungar i tabby, svart och grått sitter i en korg och tittar uppåt' }],
  },
  {
    id: 'peaky-blinders',
    name: 'Peaky Blinders-kullen',
    mother: null,
    motherName: 'Nova',
    father: 'Harry',
    status: 'archived',
    dates: { born: '2019-02-03' },
    note: 'Född hos fodervärden Liza i Sikeå.',
    kittenCount: 3,
    kittenNames: ['Arthur', 'Esme', 'Grace'],
    blogUrl: blog('Peaky Blinders'),
    kittens: [],
    images: [{ src: '/images/litters/peaky-blinders.webp', alt: 'Kattungar sitter i ett högt klösträd, en i hängmattan och två i korgen', position: '50% 60%' }],
  },
  {
    id: 'suits',
    name: 'Suitskullen',
    mother: null,
    motherName: 'Sophia',
    father: 'Junior',
    status: 'archived',
    dates: { born: '2018-10-15' },
    note: null,
    kittenCount: 5,
    kittenNames: ['Charlie', 'Jessica', 'Donna', 'Rachel', 'Louis'],
    blogUrl: blog('Suits'),
    kittens: [],
    images: [{ src: '/images/litters/suits.webp', alt: 'Fyra små tabby-kattungar ligger på en ljusblå filt' }],
  },
  {
    id: 'himmelska',
    name: 'Himmelska kullen',
    mother: null,
    motherName: 'SE*Bekiles Abigail',
    father: 'Nenets Land Oesten',
    status: 'archived',
    dates: { born: '2017-08-06' },
    note: null,
    kittenCount: 6,
    kittenNames: ['Vega', 'Cosmo', 'Luna', 'Nova', 'Atlas', 'Orion'],
    blogUrl: blog('Himmelska'),
    kittens: [],
    images: [{ src: '/images/litters/himmelska.webp', alt: 'Svartvita kattungar äter ur en skål tillsammans med en vuxen katt' }],
  },
]
