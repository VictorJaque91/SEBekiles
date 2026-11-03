import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader.jsx'
import ExternalLink from '../components/ExternalLink/ExternalLink.jsx'
import styles from './Breed.module.css'

// TODO: låt mamma läsa igenom och komplettera texterna.
const facts = [
  {
    title: 'Ursprung',
    text: 'Sibirisk katt är en naturlig ras från de skogsklädda delarna av Ryssland. De första tio sibiriska katterna för avel registrerades i Sverige år 2000, och i dag är rasen en av de vanligaste i landet.',
  },
  {
    title: 'Utseende',
    text: 'En kraftig, medelstor till stor katt med halvlång päls. Pälsen har tät underull som skyddar mot kyla och väta, och den fäller mer vid årstidsskiften.',
  },
  {
    title: 'Temperament',
    text: 'Sibiriska katter är ofta sociala, lekfulla och nyfikna, och trivs bäst mitt i familjens vardag. De mognar långsamt och kan vara lekfulla långt upp i åldern.',
  },
  {
    title: 'Skötsel',
    text: 'Pälsen behöver borstas regelbundet, särskilt under fällningen. Precis som alla katter behöver de sällskap, aktivering och regelbunden kontroll hos veterinär.',
  },
]

export default function Breed() {
  return (
    <>
      <title>Om rasen – SE*Bekiles</title>
      <PageHeader title="Sibirisk katt">
        En kraftig skogskatt med mjuk päls och ett socialt sinne.
      </PageHeader>

      <section className={styles.section} aria-label="Om Sibirisk katt">
        <div className={styles.grid}>
          {facts.map((fact) => (
            <article key={fact.title} className={styles.card}>
              <h2 className={styles.cardTitle}>{fact.title}</h2>
              <p className={styles.cardText}>{fact.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="more-heading">
        <div className={styles.more}>
          <h2 id="more-heading" className={styles.moreTitle}>Vill du veta mer?</h2>
          <p className={styles.moreText}>
            Mer om rasen finns hos rasringen{' '}
            <ExternalLink href="https://sibiriskkatt.se/">Sällskapet Sibirisk katt</ExternalLink>.
            Undrar du över allergi, ålder vid flytt eller annat? Läs våra{' '}
            <Link to="/kattungar">vanliga frågor</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
