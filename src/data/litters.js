export const litterSteps = [
  { id: 'planned', label: 'Planerad' },
  { id: 'mated', label: 'Parad' },
  { id: 'born', label: 'Född' },
  { id: 'ready', label: 'Redo att flytta' },
]

/**
 * @typedef {Object} Litter
 * @property {string} id
 * @property {string} mother        Kattens id i cats.js
 * @property {string|null} father   Hanens namn, null om ej bestämt
 * @property {'planned'|'mated'|'born'|'ready'} status
 * @property {{ planned?: string, mated?: string, born?: string, ready?: string }} dates
 * @property {string|null} note
 */

/** @type {Litter[]} */
export const litters = [
  {
    id: 'vega-1',
    mother: 'vega',
    father: null,
    status: 'planned',
    dates: {},
    note: 'Nu väntar vi in Vega innan det blir smått igen.',
  },
]