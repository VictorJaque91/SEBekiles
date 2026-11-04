/**
 * Utställningsresultat, hämtade från den gamla Webnode-sidan.
 *
 * @typedef {Object} ShowResult
 * @property {string} cat     Kattens id i cats.js
 * @property {string} result  Resultat och titlar, t.ex. 'CAC, NOM'
 * @property {string} judge   Domare
 *
 * @typedef {Object} Show
 * @property {string} id
 * @property {string} name        Klubb eller utställning
 * @property {'A'|'B'|null} ring  A- eller B-utställning samma dag
 * @property {string} date        'YYYY-MM-DD'
 * @property {ShowResult[]} results
 */

// Namn på katter som inte längre finns i cats.js men har utställningsresultat.
export const formerCatNames = {
  colorado: 'Colorado',
  teeter: 'Teeter',
  vanessa: 'Vanessa',
  xabina: 'Xabina',
  zara: 'Zara',
  svea: 'Svea',
  trym: 'Trym',
}

/** @type {Show[]} */
export const shows = [
  {
    id: '2022-05-14-bjorkstakatten',
    name: 'Björkstakatten',
    ring: null,
    date: '2022-05-14',
    results: [
      { cat: 'vanessa', result: 'CAP, NOM, BIS', judge: 'Marcin Biernaczyk' },
      { cat: 'colorado', result: 'EX1, BIV', judge: 'Annika Berner' },
    ],
  },
  {
    id: '2022-05-15-bjorkstakatten',
    name: 'Björkstakatten',
    ring: null,
    date: '2022-05-15',
    results: [
      { cat: 'vanessa', result: 'CAP', judge: 'Mira Fonzén' },
      { cat: 'colorado', result: 'EX2', judge: 'Michael Edström' },
      { cat: 'xabina', result: 'EX2', judge: 'Sara Moroni' },
    ],
  },
  {
    id: '2022-06-18-sundsvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2022-06-18',
    results: [
      { cat: 'vanessa', result: 'Premier', judge: 'Michael Edström' },
      { cat: 'colorado', result: 'EX1', judge: 'Dorte Kaae' },
      { cat: 'xabina', result: 'CAC', judge: 'Dorte Kaae' },
      { cat: 'zara', result: 'EX3', judge: 'Dorte Kaae' },
    ],
  },
  {
    id: '2022-06-19-sundsvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2022-06-19',
    results: [
      { cat: 'vanessa', result: 'CAPIB, NOM', judge: 'Pia Nyrup' },
      { cat: 'colorado', result: 'EX1', judge: 'Åsa Cambrand' },
      { cat: 'xabina', result: 'CAC', judge: 'Fabio Brambilla' },
      { cat: 'zara', result: 'EX2', judge: 'Fabio Brambilla' },
    ],
  },
  {
    id: '2022-07-16-uppsala-kattklubb-a',
    name: 'Uppsala kattklubb',
    ring: 'A',
    date: '2022-07-16',
    results: [
      { cat: 'vanessa', result: 'CAPIB, NOM', judge: 'Gerardo Fraga y Guzman' },
      { cat: 'colorado', result: 'EX1, NOM', judge: 'Fabio Brambilla' },
      { cat: 'xabina', result: 'Champion', judge: 'Fabio Brambilla' },
    ],
  },
  {
    id: '2022-07-16-uppsala-kattklubb-b',
    name: 'Uppsala kattklubb',
    ring: 'B',
    date: '2022-07-16',
    results: [
      { cat: 'vanessa', result: 'CAPIB', judge: 'Miroslaw Skotarczyk' },
      { cat: 'colorado', result: 'EX1, BIV', judge: 'Thea Friskovec-Keller' },
      { cat: 'xabina', result: 'CACIB, NOM', judge: 'Veikko Saarela' },
    ],
  },
  {
    id: '2022-09-10-stockholms-kattklubb-a',
    name: 'Stockholms kattklubb',
    ring: 'A',
    date: '2022-09-10',
    results: [
      { cat: 'vanessa', result: 'CAPIB', judge: 'Jörgen Billing' },
      { cat: 'colorado', result: 'EX2', judge: 'Annika Berne' },
      { cat: 'svea', result: 'EX1', judge: 'Veikko Saarela' },
    ],
  },
  {
    id: '2022-09-10-stockholms-kattklubb-b',
    name: 'Stockholms kattklubb',
    ring: 'B',
    date: '2022-09-10',
    results: [
      { cat: 'vanessa', result: 'Internationell Premier', judge: 'Caroline Stoa' },
      { cat: 'colorado', result: 'CAC', judge: 'Hannah Jensen' },
      { cat: 'svea', result: 'EX1', judge: 'George Dorgiakis' },
    ],
  },
  {
    id: '2022-10-15-halsingekatten',
    name: 'Hälsingekatten',
    ring: null,
    date: '2022-10-15',
    results: [
      { cat: 'vanessa', result: 'CAGPIB', judge: 'Donatella Mastrangelo' },
      { cat: 'xabina', result: 'CAP', judge: 'Glenn Sjöbom' },
      { cat: 'zara', result: 'EX2', judge: 'Glenn Sjöbom' },
      { cat: 'svea', result: 'EX1', judge: 'Glenn Sjöbom' },
    ],
  },
  {
    id: '2022-10-16-halsingekatten',
    name: 'Hälsingekatten',
    ring: null,
    date: '2022-10-16',
    results: [
      { cat: 'vanessa', result: 'CAGPIB', judge: 'Kristiina Rautio' },
      { cat: 'xabina', result: 'CAP', judge: 'Kristiina Rautio' },
      { cat: 'zara', result: 'CAC', judge: 'Kristiina Rautio' },
      { cat: 'svea', result: 'EX1', judge: 'Hannah Jensen' },
    ],
  },
  {
    id: '2023-03-11-stockholms-kattklubb-a',
    name: 'Stockholms kattklubb',
    ring: 'A',
    date: '2023-03-11',
    results: [
      { cat: 'vanessa', result: 'CAGPIB, NOM', judge: 'Caroline Stoa' },
      { cat: 'svea', result: 'CAC', judge: 'Hannah Jensen' },
    ],
  },
  {
    id: '2023-03-11-stockholms-kattklubb-b',
    name: 'Stockholms kattklubb',
    ring: 'B',
    date: '2023-03-11',
    results: [
      { cat: 'vanessa', result: 'CAGPIB', judge: 'Aliosha Romero' },
      { cat: 'svea', result: 'CAC', judge: 'Adela Justova' },
    ],
  },
  {
    id: '2023-05-13-bjorkstakatten-umea',
    name: 'Björkstakatten Umeå',
    ring: null,
    date: '2023-05-13',
    results: [
      { cat: 'vanessa', result: 'CAGPIB, NOM', judge: 'Mats Stark' },
      { cat: 'svea', result: 'Champion', judge: 'Mats Stark' },
    ],
  },
  {
    id: '2023-05-14-bjorkstakatten-umea',
    name: 'Björkstakatten Umeå',
    ring: null,
    date: '2023-05-14',
    results: [
      { cat: 'vanessa', result: 'CAGPIB', judge: 'Zvezdan Mededov' },
      { cat: 'svea', result: 'CACIB', judge: 'Karl Preiss' },
    ],
  },
  {
    id: '2023-06-03-sundsvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2023-06-03',
    results: [
      { cat: 'vanessa', result: 'CAGPIB', judge: 'Alexey Shchukin' },
      { cat: 'colorado', result: 'CAC, BIV, NOM', judge: 'Thea Friskovec-Keller' },
    ],
  },
  {
    id: '2023-06-04-sundsvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2023-06-04',
    results: [
      { cat: 'colorado', result: 'CAC, Champion', judge: 'Alexey Shchukin' },
    ],
  },
  {
    id: '2023-06-17-uppsala-kattklubb',
    name: 'Uppsala kattklubb',
    ring: null,
    date: '2023-06-17',
    results: [
      { cat: 'colorado', result: 'CACIB', judge: 'Luigi Comorio' },
    ],
  },
  {
    id: '2023-06-18-uppsala-kattklubb',
    name: 'Uppsala kattklubb',
    ring: null,
    date: '2023-06-18',
    results: [
      { cat: 'colorado', result: 'CACIB, NOM', judge: 'Yan Roca-Folch' },
    ],
  },
  {
    id: '2023-08-19-mo-i-rana',
    name: 'Mo i Rana',
    ring: null,
    date: '2023-08-19',
    results: [
      { cat: 'vanessa', result: 'Grand Internationell Premier', judge: 'Aina Hauge' },
      { cat: 'colorado', result: 'Internationell Champion', judge: 'Aina Hauge' },
      { cat: 'bjarven', result: 'EX1', judge: 'Ireneusz Pruchniak' },
    ],
  },
  {
    id: '2023-08-20-mo-i-rana',
    name: 'Mo i Rana',
    ring: null,
    date: '2023-08-20',
    results: [
      { cat: 'colorado', result: 'CAGCIB', judge: 'Pia Nyrup' },
      { cat: 'bjarven', result: 'EX1', judge: 'Marta Ziemianska' },
    ],
  },
  {
    id: '2023-09-30-dalalvskatten',
    name: 'Dalälvskatten',
    ring: null,
    date: '2023-09-30',
    results: [
      { cat: 'colorado', result: 'CAGCIB, NOM', judge: 'Christiano F Sandon' },
      { cat: 'bjarven', result: 'EX1', judge: 'Eva Porat' },
    ],
  },
  {
    id: '2023-10-01-dalalvskatten',
    name: 'Dalälvskatten',
    ring: null,
    date: '2023-10-01',
    results: [
      { cat: 'colorado', result: 'CAGCIB', judge: 'Geir Edvardsen' },
      { cat: 'bjarven', result: 'EX1', judge: 'Zvezdan Memedov' },
    ],
  },
  {
    id: '2023-10-14-halsingekatten',
    name: 'Hälsingekatten',
    ring: null,
    date: '2023-10-14',
    results: [
      { cat: 'bjarven', result: 'EX1, NOM', judge: 'Eva Porat' },
    ],
  },
  {
    id: '2023-10-15-halsingekatten',
    name: 'Hälsingekatten',
    ring: null,
    date: '2023-10-15',
    results: [
      { cat: 'bjarven', result: 'EX1, NOM', judge: 'Anna Wilczek' },
    ],
  },
  {
    id: '2024-01-27-vi-kattagare',
    name: 'Vi kattägare',
    ring: null,
    date: '2024-01-27',
    results: [
      { cat: 'bjarven', result: 'EX2', judge: 'Åsa Carnbrand' },
    ],
  },
  {
    id: '2024-01-28-vi-kattagare',
    name: 'Vi kattägare',
    ring: null,
    date: '2024-01-28',
    results: [
      { cat: 'bjarven', result: 'EX2', judge: 'Steven Jones' },
    ],
  },
  {
    id: '2024-02-24-scandinavian-winner',
    name: 'Scandinavian winner',
    ring: null,
    date: '2024-02-24',
    results: [
      { cat: 'bjarven', result: 'CACJ', judge: 'Christiano F Sandon' },
    ],
  },
  {
    id: '2024-03-23-gestrica-kattklubb',
    name: 'Gestrica kattklubb',
    ring: null,
    date: '2024-03-23',
    results: [
      { cat: 'bjarven', result: 'CACJ', judge: 'Bjarne Wikström' },
    ],
  },
  {
    id: '2024-03-24-gestrica-kattklubb',
    name: 'Gestrica kattklubb',
    ring: null,
    date: '2024-03-24',
    results: [
      { cat: 'bjarven', result: 'Junior Champion, BIV', judge: 'Irene Magnusson Eek' },
    ],
  },
  {
    id: '2024-05-11-bjorkstakatten',
    name: 'Björkstakatten',
    ring: null,
    date: '2024-05-11',
    results: [
      { cat: 'bjarven', result: 'CAC', judge: 'Hannah Jensen' },
    ],
  },
  {
    id: '2024-05-12-bjorkstakatten',
    name: 'Björkstakatten',
    ring: null,
    date: '2024-05-12',
    results: [
      { cat: 'bjarven', result: 'CAC', judge: 'Sara Moroni' },
    ],
  },
  {
    id: '2024-06-08-solkatten',
    name: 'Solkatten',
    ring: null,
    date: '2024-06-08',
    results: [
      { cat: 'bjarven', result: 'Champion', judge: 'Pia Nyrup' },
    ],
  },
  {
    id: '2024-06-09-solkatten',
    name: 'Solkatten',
    ring: null,
    date: '2024-06-09',
    results: [
      { cat: 'bjarven', result: 'CACIB, NOM', judge: 'Ksenia Karpinska' },
    ],
  },
  {
    id: '2024-06-15-uppsala-kattklubb-a',
    name: 'Uppsala kattklubb',
    ring: 'A',
    date: '2024-06-15',
    results: [
      { cat: 'bjarven', result: 'CACIB', judge: 'Åsa Carnbrand' },
      { cat: 'colorado', result: 'CAGCIB, NOM', judge: 'Nathalie Smits-Peelen' },
    ],
  },
  {
    id: '2024-06-15-uppsala-kattklubb-b',
    name: 'Uppsala kattklubb',
    ring: 'B',
    date: '2024-06-15',
    results: [
      { cat: 'bjarven', result: 'CACIB', judge: 'Arja Martikainen' },
      { cat: 'colorado', result: 'CAGCIB', judge: 'Yan Roca-Folch' },
    ],
  },
  {
    id: '2024-07-06-tronderkatten-norge',
    name: 'Trönderkatten Norge',
    ring: null,
    date: '2024-07-06',
    results: [
      { cat: 'bjarven', result: 'Internationell Champion', judge: 'Charles Spijker' },
    ],
  },
  {
    id: '2024-07-07-tronderkatten-norge',
    name: 'Trönderkatten Norge',
    ring: null,
    date: '2024-07-07',
    results: [
      { cat: 'bjarven', result: 'EX2', judge: 'Anne Veland' },
    ],
  },
  {
    id: '2024-08-24-sundsvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2024-08-24',
    results: [
      { cat: 'colorado', result: 'CAGCIB, NOM', judge: 'Riikka Turpinen' },
      { cat: 'bjarven', result: 'EX2', judge: 'Ksenia Karpinska' },
      { cat: 'stella', result: 'CACC', judge: 'Riikka Turpinen' },
    ],
  },
  {
    id: '2024-08-25-sundvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2024-08-25',
    results: [
      { cat: 'colorado', result: 'CAGCIB', judge: 'Mats Stark' },
      { cat: 'bjarven', result: 'CAGCIB', judge: 'Glenn Sjöbom' },
      { cat: 'stella', result: 'CACC', judge: 'Mats Stark' },
    ],
  },
  {
    id: '2024-09-28-dalalvskatten',
    name: 'Dalälvskatten',
    ring: null,
    date: '2024-09-28',
    results: [
      { cat: 'colorado', result: 'Grand Internationell Champion', judge: 'Annika Berner' },
      { cat: 'bjarven', result: 'CAGCIB', judge: 'Ksenia Karpinska' },
      { cat: 'stella', result: 'Kitten Champion', judge: 'Lena Björkander' },
    ],
  },
  {
    id: '2024-09-29-dalalvskatten',
    name: 'Dalälvskatten',
    ring: null,
    date: '2024-09-29',
    results: [
      { cat: 'colorado', result: 'CACS', judge: 'Diana Di Natale' },
      { cat: 'bjarven', result: 'CAGCIB', judge: 'Dorte Kaa' },
      { cat: 'stella', result: 'EX1 ej cert', judge: 'Eva Porat' },
    ],
  },
  {
    id: '2024-10-12-halsingekatten',
    name: 'Hälsingekatten',
    ring: null,
    date: '2024-10-12',
    results: [
      { cat: 'colorado', result: 'CACS', judge: 'Mirek Skotarczyk' },
      { cat: 'bjarven', result: 'CAGCIB', judge: 'Lena Nordström' },
      { cat: 'stella', result: 'CACC', judge: 'Mirek Skotarczyk' },
    ],
  },
  {
    id: '2024-10-13-halsingekatten',
    name: 'Hälsingekatten',
    ring: null,
    date: '2024-10-13',
    results: [
      { cat: 'colorado', result: 'CACS', judge: 'Pia Nyman' },
      { cat: 'bjarven', result: 'CAGCIB', judge: 'Marcin Biernaczyk' },
      { cat: 'stella', result: 'CACC', judge: 'Pia Nyman' },
    ],
  },
  {
    id: '2025-01-04-frasets-kattutstallning',
    name: 'Fräsets kattutställning',
    ring: null,
    date: '2025-01-04',
    results: [
      { cat: 'bjarven', result: 'CAGCIB', judge: 'Zvezdan Memedov' },
      { cat: 'stella', result: 'CACJ', judge: 'Zvezdan Memedov' },
    ],
  },
  {
    id: '2025-01-05-frasets-kattutstallning',
    name: 'Fräsets kattutställning',
    ring: null,
    date: '2025-01-05',
    results: [
      { cat: 'bjarven', result: 'CAGCIB', judge: 'Alexey Shchukin' },
      { cat: 'stella', result: 'CACJ', judge: 'Ksenia Karpinska' },
    ],
  },
  {
    id: '2025-04-12-tronderkatten-norge',
    name: 'Trönderkatten Norge',
    ring: null,
    date: '2025-04-12',
    results: [
      { cat: 'bjarven', result: 'Grand Internationell Champion', judge: 'Ksenia Karspinska' },
    ],
  },
  {
    id: '2025-04-13-tronderkatten-norge',
    name: 'Trönderkatten Norge',
    ring: null,
    date: '2025-04-13',
    results: [
      { cat: 'bjarven', result: 'CACS, NOM', judge: 'Jörgen Billing' },
    ],
  },
  {
    id: '2025-05-03-solkatten',
    name: 'Solkatten',
    ring: null,
    date: '2025-05-03',
    results: [
      { cat: 'bjarven', result: 'CACS', judge: 'Irene Eek Magnusson' },
      { cat: 'colorado', result: 'CACS', judge: 'Malin Sundqvist' },
    ],
  },
  {
    id: '2025-05-04-solkatten',
    name: 'Solkatten',
    ring: null,
    date: '2025-05-04',
    results: [
      { cat: 'bjarven', result: 'CACS', judge: 'Malin Sundqvist' },
      { cat: 'colorado', result: 'CACS, BIV, NOM', judge: 'Mats Stark' },
    ],
  },
  {
    id: '2025-05-10-gestrica',
    name: 'Gestrica',
    ring: null,
    date: '2025-05-10',
    results: [
      { cat: 'bjarven', result: 'CACS, Best in show', judge: 'Anna Wilczek' },
      { cat: 'colorado', result: 'CACS', judge: 'Malin Sundqvist' },
    ],
  },
  {
    id: '2025-05-11-gestrica',
    name: 'Gestrica',
    ring: null,
    date: '2025-05-11',
    results: [
      { cat: 'bjarven', result: 'CACS', judge: 'Donatella Mastrelangelo' },
      { cat: 'colorado', result: 'CACS', judge: 'Anna Wilczek' },
    ],
  },
  {
    id: '2025-05-17-bjorkstakatten',
    name: 'Björkstakatten',
    ring: null,
    date: '2025-05-17',
    results: [
      { cat: 'bjarven', result: 'CACS', judge: 'Cristiano F Sandon' },
      { cat: 'colorado', result: 'CACS', judge: 'Veikko Saarela' },
    ],
  },
  {
    id: '2025-05-18-bjorkstakatten',
    name: 'Björkstakatten',
    ring: null,
    date: '2025-05-18',
    results: [
      { cat: 'bjarven', result: 'CACS', judge: 'Lena Björkander' },
      { cat: 'colorado', result: 'Supreme Champion', judge: 'Zvezdan Memedov' },
    ],
  },
  {
    id: '2025-06-08-uppsala-kattklubb-a',
    name: 'Uppsala kattklubb',
    ring: 'A',
    date: '2025-06-08',
    results: [
      { cat: 'bjarven', result: 'CACS, NOM', judge: 'Cristiano F Sandon' },
      { cat: 'colorado', result: 'HP', judge: 'Yan Roca-Folch' },
    ],
  },
  {
    id: '2025-06-08-uppsala-kattklubb-b',
    name: 'Uppsala kattklubb',
    ring: 'B',
    date: '2025-06-08',
    results: [
      { cat: 'bjarven', result: 'Supreme Champion', judge: 'Vladimir Isakov' },
      { cat: 'colorado', result: 'HP', judge: 'Charles Spijker' },
    ],
  },
  {
    id: '2025-08-30-sundsvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2025-08-30',
    results: [
      { cat: 'colorado', result: 'HP', judge: 'Nathalie Smits-Peelen' },
      { cat: 'trym', result: 'EX2', judge: 'Juan J Martinez Visciano' },
    ],
  },
  {
    id: '2025-08-31-sundsvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2025-08-31',
    results: [
      { cat: 'colorado', result: 'HP', judge: 'Marcin Biernaczyk' },
      { cat: 'trym', result: 'EX2', judge: 'Glenn Sjöbom' },
    ],
  },
  {
    id: '2025-09-13-norrskenskatten',
    name: 'Norrskenskatten',
    ring: null,
    date: '2025-09-13',
    results: [
      { cat: 'trym', result: 'CACC', judge: 'Jörgen Billing' },
    ],
  },
  {
    id: '2025-09-14-norrskenskatten',
    name: 'Norrskenskatten',
    ring: null,
    date: '2025-09-14',
    results: [
      { cat: 'trym', result: 'CACC, NOM', judge: 'Lene Hodal Glem Fjeldsted' },
    ],
  },
  {
    id: '2025-09-27-dalalvskatten',
    name: 'Dalälvskatten',
    ring: null,
    date: '2025-09-27',
    results: [
      { cat: 'colorado', result: 'HP, NOM', judge: 'Michael Edström' },
      { cat: 'trym', result: 'EX2', judge: 'Annika Berner' },
    ],
  },
  {
    id: '2025-10-11-halsingekatten',
    name: 'Hälsingekatten',
    ring: null,
    date: '2025-10-11',
    results: [
      { cat: 'colorado', result: 'HP, NOM', judge: 'Malin Sundqvist' },
      { cat: 'trym', result: 'EX2', judge: 'Isabelle Maillard' },
    ],
  },
  {
    id: '2025-10-12-halsingekatten',
    name: 'Hälsingekatten',
    ring: null,
    date: '2025-10-12',
    results: [
      { cat: 'colorado', result: 'HP', judge: 'Lena Björkander' },
    ],
  },
  {
    id: '2026-05-16-bjorkstakatten',
    name: 'Björkstakatten',
    ring: null,
    date: '2026-05-16',
    results: [
      { cat: 'bjarven', result: 'CAP', judge: 'Sara Moroni' },
      { cat: 'vega', result: 'CACC', judge: 'Sara Moroni' },
    ],
  },
  {
    id: '2026-05-17-bjorkstakatten',
    name: 'Björkstakatten',
    ring: null,
    date: '2026-05-17',
    results: [
      { cat: 'bjarven', result: 'CAP', judge: 'Annukka Rintakumu' },
      { cat: 'vega', result: 'CACC, NOM', judge: 'Mirek Skotarczyk' },
    ],
  },
  {
    id: '2026-06-06-solkatten',
    name: 'Solkatten',
    ring: null,
    date: '2026-06-06',
    results: [
      { cat: 'bjarven', result: 'Premier', judge: 'Riikka Turpinen' },
      { cat: 'vega', result: 'Kitten Champion', judge: 'Riikka Turpinen' },
    ],
  },
  {
    id: '2026-06-07-solkatten',
    name: 'Solkatten',
    ring: null,
    date: '2026-06-07',
    results: [
      { cat: 'bjarven', result: 'CAPIB', judge: 'Juan J Martinez Visciano' },
      { cat: 'vega', result: 'CACC', judge: 'Lena Björkander' },
    ],
  },
  {
    id: '2026-08-29-sundsvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2026-08-29',
    results: [
      { cat: 'bjarven', result: 'CAPIB', judge: 'Malin Sundqvist' },
      { cat: 'vega', result: 'CACC', judge: 'Lene Hodal Glem Fjeldsted' },
    ],
  },
  {
    id: '2026-08-30-sundsvalls-kattklubb',
    name: 'Sundsvalls kattklubb',
    ring: null,
    date: '2026-08-30',
    results: [
      { cat: 'bjarven', result: 'CAPIB', judge: 'Cristiano F Sandon' },
      { cat: 'vega', result: 'CACC, BIV, NOM', judge: 'Mikael Edström' },
    ],
  },
  {
    id: '2026-09-26-dalalvskatten',
    name: 'Dalälvskatten',
    ring: null,
    date: '2026-09-26',
    results: [
      { cat: 'bjarven', result: 'Internationell Premier', judge: 'Irene Eek-Magnusson' },
      { cat: 'vega', result: 'JCH, NOM', judge: 'Luigi Comorio' },
    ],
  },
  {
    id: '2026-09-27-dalalvskatten',
    name: 'Dalälvskatten',
    ring: null,
    date: '2026-09-27',
    results: [
      { cat: 'bjarven', result: 'CAGPIB', judge: 'Sara Moroni' },
      { cat: 'vega', result: 'JCH', judge: 'Eva Porat' },
    ],
  },
  {
    id: '2026-10-10-ostkatten',
    name: 'Östkatten',
    ring: null,
    date: '2026-10-10',
    results: [
      { cat: 'bjarven', result: 'CAGPIB', judge: 'Luigi Comorio' },
      { cat: 'vega', result: 'EX2', judge: 'Hanna Jensen' },
    ],
  },
  {
    id: '2026-10-11-ostkatten',
    name: 'Östkatten',
    ring: null,
    date: '2026-10-11',
    results: [
      { cat: 'bjarven', result: 'CAGPIB', judge: 'Lena Björkander' },
      { cat: 'vega', result: 'EX2', judge: 'Mikael Edström' },
    ],
  },
]
