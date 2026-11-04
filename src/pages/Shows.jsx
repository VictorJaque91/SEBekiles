import { useState } from 'react'
import { cats } from '../data/cats.js'
import { shows, formerCatNames } from '../data/shows.js'
import { formatDate } from '../utils/catHelpers.js'
import PageHeader from '../components/PageHeader/PageHeader.jsx'
import styles from './Shows.module.css'

// TODO: låt mamma läsa igenom förklaringarna.
const abbreviations = [
  { term: 'EX 1–4', text: 'Excellent med placering 1–4 i sin klass.' },
  { term: 'CAC / CAP', text: 'Certifikat mot titeln Champion (CAC) eller Premier för kastrater (CAP).' },
  { term: 'CACIB / CAPIB', text: 'Internationellt certifikat mot Internationell Champion eller Premier.' },
  { term: 'CAGCIB / CAGPIB', text: 'Certifikat mot Grand Internationell Champion eller Premier.' },
  { term: 'CACS / CAPS', text: 'Certifikat mot Supreme Champion eller Premier, den högsta titeln.' },
  { term: 'CACC / CACJ', text: 'Certifikat för kattungar och juniorer, mot Kitten Champion och Junior Champion.' },
  { term: 'HP', text: 'Honour Prize, ges till katter som redan är Supreme Champion eller Premier.' },
  { term: 'NOM', text: 'Nominerad till Best in Show.' },
  { term: 'BIV', text: 'Best in Variety, bäst av sin ras och variant på utställningen.' },
  { term: 'BIS', text: 'Best in Show, bäst av alla i sin kategori.' },
]

const catsById = new Map(cats.map((cat) => [cat.id, cat]))

function catName(id) {
  return catsById.get(id)?.callName ?? formerCatNames[id] ?? id
}

function isTitle(result) {
  return /champion|premier/i.test(result)
}

function groupByYear(list) {
  const groups = new Map()
  for (const show of list) {
    const year = show.date.slice(0, 4)
    if (!groups.has(year)) groups.set(year, [])
    groups.get(year).push(show)
  }
  return [...groups.entries()]
}

// Katter som har minst ett resultat, med antal utställningar
const catOptions = [...new Set(shows.flatMap((show) => show.results.map((r) => r.cat)))]
  .map((id) => ({
    id,
    name: catName(id),
    count: shows.filter((show) => show.results.some((r) => r.cat === id)).length,
  }))
  .sort((a, b) => a.name.localeCompare(b.name, 'sv'))

export default function Shows() {
  const [selectedCat, setSelectedCat] = useState('all')

  const visibleShows = [...shows]
    .map((show) => ({
      ...show,
      results:
        selectedCat === 'all'
          ? show.results
          : show.results.filter((r) => r.cat === selectedCat),
    }))
    .filter((show) => show.results.length > 0)
    .sort((a, b) => b.date.localeCompare(a.date))

  const years = groupByYear(visibleShows)
  const count = visibleShows.length

  return (
    <>
      <title>Utställningar – SE*Bekiles</title>
      <PageHeader title="Utställningar">
        Vi älskar att visa upp våra katter. Här är resultaten från alla utställningar,
        de senaste först.
      </PageHeader>

      <div className={styles.toolbar}>
        <label htmlFor="cat-filter" className={styles.filterLabel}>Visa resultat för</label>
        <select
          id="cat-filter"
          className={styles.select}
          value={selectedCat}
          onChange={(event) => setSelectedCat(event.target.value)}
        >
          <option value="all">Alla katter ({shows.length})</option>
          {catOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name} ({option.count})
            </option>
          ))}
        </select>
        <p className={styles.summary} aria-live="polite">
          {count} {count === 1 ? 'utställning' : 'utställningar'}
        </p>
      </div>

      {years.length > 1 && (
        <nav className={styles.years} aria-label="Hoppa till år">
          {years.map(([year]) => (
            <a key={year} href={`#ar-${year}`} className={styles.yearLink}>{year}</a>
          ))}
        </nav>
      )}

      {years.map(([year, yearShows]) => (
        <section
          key={year}
          id={`ar-${year}`}
          className={styles.yearSection}
          aria-labelledby={`ar-${year}-heading`}
        >
          <h2 id={`ar-${year}-heading`} className={styles.yearTitle}>
            {year} <span className={styles.yearCount}>{yearShows.length} st</span>
          </h2>
          <div className={styles.grid}>
            {yearShows.map((show) => (
              <article key={show.id} className={styles.card}>
                <h3 className={styles.showName}>
                  {show.name}
                  {show.ring && <span className={styles.ring}> · {show.ring}-ring</span>}
                </h3>
                <time dateTime={show.date} className={styles.date}>
                  {formatDate(show.date)}
                </time>
                <table className={styles.table}>
                  <caption className="visually-hidden">
                    Resultat från {show.name} {formatDate(show.date)}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Katt</th>
                      <th scope="col">Resultat</th>
                      <th scope="col">Domare</th>
                    </tr>
                  </thead>
                  <tbody>
                    {show.results.map((r) => (
                      <tr key={r.cat}>
                        <th scope="row">{catName(r.cat)}</th>
                        <td>
                          {isTitle(r.result) ? <strong className={styles.title}>{r.result}</strong> : r.result}
                        </td>
                        <td className={styles.judge}>{r.judge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className={styles.glossarySection} aria-labelledby="glossary-heading">
        <details className={styles.details}>
          <summary className={styles.summaryToggle}>
            <h2 id="glossary-heading" className={styles.glossaryTitle}>Vad betyder förkortningarna?</h2>
          </summary>
          <dl className={styles.glossary}>
            {abbreviations.map((item) => (
              <div key={item.term} className={styles.term}>
                <dt>{item.term}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </details>
      </section>
    </>
  )
}
