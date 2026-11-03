import { cats } from '../data/cats.js'
import PageHeader from '../components/PageHeader/PageHeader.jsx'
import HealthTable from '../components/HealthTable/HealthTable.jsx'
import styles from './Health.module.css'

const glossary = [
  {
    term: 'PK-def',
    description: 'Pyruvatkinasbrist. En ärftlig enzymbrist i de röda blodkropparna som kan ge blodbrist.',
  },
  {
    term: 'HCM',
    description: 'Hypertrofisk kardiomyopati. Hjärtmuskeln blir förtjockad, den vanligaste hjärtsjukdomen hos katt.',
  },
  {
    term: 'SMA',
    description: 'Spinal muskelatrofi. Nervceller i ryggmärgen förtvinar, vilket ger muskelsvaghet.',
  },
  {
    term: 'Blodgrupp',
    description: 'Katter har blodgrupp A, B eller AB. Viktigt vid parning, eftersom fel kombination kan skada kattungarna.',
  },
]

export default function Health() {
  const testedCats = cats.filter((cat) => cat.healthTests.length > 0)
  const homeCats = testedCats.filter((cat) => cat.status === 'home')
  const movedCats = testedCats.filter((cat) => cat.status === 'moved')

  return (
    <>
      <title>Hälsotester – SE*Bekiles</title>
      <PageHeader title="Hälsotester">
        Vi testar våra avelskatter för att minska risken för ärftliga sjukdomar.
        Här är resultaten, katt för katt.
      </PageHeader>

      <section className={styles.section} aria-labelledby="glossary-heading">
        <h2 id="glossary-heading" className={styles.sectionTitle}>Vad testar vi?</h2>
        <dl className={styles.glossary}>
          {glossary.map((item) => (
            <div key={item.term} className={styles.term}>
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.section} aria-labelledby="home-heading">
        <h2 id="home-heading" className={styles.sectionTitle}>Våra katter</h2>
        <div className={styles.list}>
          {homeCats.map((cat) => (
            <HealthTable key={cat.id} cat={cat} />
          ))}
        </div>
      </section>

      {movedCats.length > 0 && (
        <section className={styles.section} aria-labelledby="moved-heading">
          <h2 id="moved-heading" className={styles.sectionTitle}>Katter som flyttat</h2>
          <div className={styles.list}>
            {movedCats.map((cat) => (
              <HealthTable key={cat.id} cat={cat} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}