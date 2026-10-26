import { useState } from 'react'
import { cats } from '../data/cats.js'
import CatCard from '../components/CatCard/CatCard.jsx'
import PageHeader from '../components/PageHeader/PageHeader.jsx'
import styles from './Cats.module.css'

const filters = [
  { id: 'all', label: 'Alla', test: (cat) => cat.status === 'home' },
  { id: 'male', label: 'Hanar', test: (cat) => cat.status === 'home' && cat.sex === 'male' },
  { id: 'female', label: 'Honor', test: (cat) => cat.status === 'home' && cat.sex === 'female' },
  { id: 'moved', label: 'Har flyttat', test: (cat) => cat.status === 'moved' },
]

export default function Cats() {
  const [activeFilter, setActiveFilter] = useState('all')

  const current = filters.find((filter) => filter.id === activeFilter)
  const visibleCats = cats.filter(current.test)
  const count = visibleCats.length

  return (
    <>
      <title>Våra katter – SE*Bekiles</title>
      <PageHeader title="Våra katter">
        Här bor de som gör uppfödningen till vad den är.
      </PageHeader>

      <div className={styles.filters} role="group" aria-label="Filtrera katter">
        {filters.map((filter) => {
          const isActive = filter.id === activeFilter
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              className={isActive ? `${styles.filterButton} ${styles.active}` : styles.filterButton}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label} <span className={styles.count}>({cats.filter(filter.test).length})</span>
            </button>
          )
        })}
      </div>

      <p className="visually-hidden" aria-live="polite">
        Visar {count} {count === 1 ? 'katt' : 'katter'}
      </p>

      {count > 0 ? (
        <div className={styles.grid}>
          {visibleCats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>Inga katter i den här kategorin just nu.</p>
      )}
    </>
  )
}