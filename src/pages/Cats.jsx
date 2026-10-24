import { cats } from '../data/cats.js'
import CatCard from '../components/CatCard/CatCard.jsx'
import styles from './Cats.module.css'
import PageHeader from '../components/PageHeader/PageHeader.jsx'

export default function Cats() {
  const homeCats = cats.filter((cat) => cat.status === 'home')

  return (
    <>
      <title>Våra katter – SE*Bekiles</title>
      <PageHeader title="Våra katter">
        Här bor de som gör uppfödningen till vad den är.
    </PageHeader>
      <div className={styles.grid}>
        {homeCats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
    </>
  )
}