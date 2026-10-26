/**
* @typedef {Object} HealthTest
* @property {string} name
* @property {string} result
* @property {string} source
* @property {string|null} date
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
 * @property {'home'|'moved'} status
 * @property {boolean} featured 
 * @property {string} born
 * @property {{ name: string, ems: string }} color
 * @property {{ src: string|null, alt: string }} image
 * @property {string|null} pedigreeUrl
 * @property {string|null} story
 * @property {HealthTest()} healthTests
 */

/** @type {Cat[]} */

export const cats = [
    {
        id: 'bjarven',
        callName: 'Bjärven',
        registeredName: "S*Summer Flame’s Bjärven Bernt",
        titles: ['SC', 'JCH'],
        breed: 'SIB',
        sex: 'male',
        neutered: true,
        status: 'home',
        featured: true,
        born: '2023-04-18',
        color: { name: 'Svarttabby', ems: 'n 22' },
        image: { src: '/images/cats/bjarven.webp', alt: 'Bjärven, en svarttabby sibirisk katt' },
        pedigreeUrl: 'https://findus.sverak.se/Stambok/Visa/545592',
        story: null,
        healthTests: [
            { name: 'PK-def', result: 'Normal', source: 'MyCat DNA', date: null },
            { name: 'Blodgrupp', result: 'A eller AB (bärare av b2)', source: 'MyCat DNA', date: null },
            { name: 'CS-bärare', result: 'Ej bärare', source: 'MyCat DNA', date: null },
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
        pedigreeUrl: 'https://findus.sverak.se/Stambok/Visa/560925',
        story: null,
        healthTests: [
            { name: 'PK-def', result: 'Normal', source: 'MyCat DNA', date: null },
            { name: 'Blodgrupp', result: 'A', source: 'MyCat DNA', date: null },
            { name: 'CS-bärare', result: 'Ej bärare', source: 'MyCat DNA', date: null },
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
        pedigreeUrl: 'https://findus.sverak.se/Stambok/Visa/591503',
        story: null,
        healthTests: [],
    },
    {
        id: 'teeter',
        callName: 'Teeter',
        registeredName: 'SE*Bekiles Teeter af Trym',
        titles: [],
        breed: 'SIB',
        sex: 'female',
        neutered: false,
        status: 'home',
        featured: false,
        born: '2026-06-30',
        color: { name: 'Blåsilversköldpadd-tabby-bicolour', ems: 'gs 03 22' },
        image: { src: '/images/cats/teeter.webp', alt: 'Teeter, en blåsilversköldpadd-tabby-bicolour sibirisk kattunge' },
        pedigreeUrl: null,
        story: null,
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
        pedigreeUrl: 'https://findus.sverak.se/Stambok/Visa/392122',
        story: null,
        healthTests: [],
    },
    {
        id: 'colorado',
        callName: 'Colorado',
        registeredName: 'S*SinhTsunKitthas Colorado',
        titles: ['SC'],
        breed: 'MCO',
        sex: 'male',
        neutered: true,
        status: 'home',
        featured: false,
        born: '2021-10-30',
        color: { name: 'Röd', ems: 'd' },
        image: { src: '/images/cats/colorado.webp', alt: 'Colorado, en röd maine coon' },
        pedigreeUrl: 'https://findus.sverak.se/Stambok/Visa/517672',
        story: null,
        healthTests: [
            { name: 'HCM (DNA)', result: 'N/N', source: 'Genom föräldrar', date: null },
            { name: 'PK-def', result: 'N/N', source: 'Genom föräldrar', date: null },
            { name: 'SMA', result: 'N/N', source: 'Genom föräldrar', date: null },
        ],
    },
    {
        id: 'xabina',
        callName: 'Xabina',
        registeredName: 'SE*Rubycat’s Xabina',
        titles: [],
        breed: 'SIB',
        sex: 'female',
        neutered: true,
        status: 'moved',
        featured: false,
        born: '2021-05-13',
        color: { name: 'Svartsköldpadd-vit', ems: 'f 09' },
        image: { src: '/images/cats/xabina.webp', alt: 'Xabina, en svartsköldpadd-vit sibirisk katt' },
        pedigreeUrl: null,
        story: 'Då vackra Xabina inte kommer gå i avel och inte tycker om att ställas ut har vi beslutat att hon ska få ett nytt hem. Tuffa beslut, men det blir rätt i slutänden.',
        healthTests: [],
    },
    {
        id: 'zara',
        callName: 'Zara',
        registeredName: 'SE*Rubycat’s Zara',
        titles: [],
        breed: 'SIB',
        sex: 'female',
        neutered: true,
        status: 'moved',
        featured: false,
        born: '2021-10-27',
        color: { name: 'Svartsköldpadd-vit', ems: 'f 09' },
        image: { src: '/images/cats/zara.webp', alt: 'Zara, en svartsköldpadd-vit sibirisk katt' },
        pedigreeUrl: null,
        story: 'Zara har bott hos fodervärden Johanna och trivdes inte som fertil, så vi valde för hennes och Johannas skull att kastrera henne.',
        healthTests: [],
    },
    {
        id: 'svea',
        callName: 'Svea',
        registeredName: 'SE*Rubycats Annika ',
        titles: [],
        breed: 'SIB',
        sex: 'female',
        neutered: true,
        status: 'moved',
        featured: false,
        born: '2022-04-19',
        color: { name: 'Blåtabby', ems: 'a 22' },
        image: { src: '/images/cats/svea.webp', alt: 'Svea, en blåtabby sibirisk katt' },
        pedigreeUrl: null,
        story: 'Då Svea fick juverhyplasi efter parning var vi tvungna att kastrera henne och därmed så var hennes avelskarriär över redan innan den hade börjat. Vi vet att du kommer få det så bra hos Fredrik',
        healthTests: [],
    },
        {
        id: 'vanessa',
        callName: 'Vanessa',
        registeredName: 'S*Dunderklumpen´s Miss Cubay ',
        titles: [],
        breed: 'MCO',
        sex: 'female',
        neutered: true,
        status: 'moved',
        featured: false,
        born: '2020-08-16',
        color: { name: 'Svart-van, orangeögd', ems: 'n 01 62' },
        image: { src: '/images/cats/vanessa.webp', alt: 'Vanessa, en svart-van maine coone' },
        pedigreeUrl: null,
        story: 'Vanessa började visa mer och mer tydligt att hon inte trivdes i kattgruppen. Så vi tog det svåra beslutet att söka ett nytt hem till henne där hon kan må bättre. Hon har flyttat till Elin och hennes huskatt Rakel i Junsele och får det så bra. Vanessa fick somna in 2026-07-16, sov gott vackra katt!',
        healthTests: [],
    },        
    {
        id: 'trym',
        callName: 'Trym',
        registeredName: 'S*Dunderklumpen´s Miss Cubay ',
        titles: [],
        breed: 'SIB',
        sex: 'male',
        neutered: true,
        status: 'moved',
        featured: false,
        born: '2025-03-22',
        color: { name: 'Rödtabby-vit', ems: 'd 09 22' },
        image: { src: '/images/cats/trym.webp', alt: 'Trym, en rödtabby-vit sibirisk katt' },
        pedigreeUrl: null,
        story: 'Trym fick lämna två fina kullar innan han kastrerades. Men vi insåg att vi inte kunde hålla honom fertil så länge som vi kanske skulle ha gjort. Trym har fått flytta till Skåne och Hann där han kommer få all den kärlek och omsorg han förtjänar.',
        healthTests: [],
    },
    
]