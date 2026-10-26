import { Link } from 'react-router-dom'
import { cats } from '../data/cats.js'
import { litters } from '../data/litters.js'
import PageHeader from '../components/PageHeader/PageHeader.jsx'
import LitterStatus from '../components/LitterStatus/LitterStatus.jsx'
import styles from './Kittens.module.css'
import Accordion from '../components/Accordion/Accordion.jsx'
import { faq } from '../data/faq.js'
import InterestForm from '../components/InterestForm/InterestForm.jsx'

const processSteps = [
  { title: 'Intresseanmälan', text: 'Berätta om dig och ditt hem i formuläret längre ner.' },
  { title: 'Vi hörs', text: 'Ett samtal så att vi lär känna varandra och du kan ställa frågor.' },
  { title: 'Besök', text: 'Kom och hälsa på kullen när kattungarna är stora nog.' },
  { title: 'Flytt', text: 'Kattungen flyttar tidigast vid [ÅLDER] veckors ålder, med köpeavtal.' },
]

const included = [
  '[Stamtavla]',
  '[Vaccinationer]',
  '[ID-märkning]',
  '[Veterinärbesiktning]',
  '[Startpaket / försäkring]',
]

function LitterCard({ litter }) {
  const mother = cats.find((cat) => cat.id === litter.mother)
  if (!mother) return null

  return (
    <article className={styles.litter}>
      {mother.image.src ? (
        <img
          src={mother.image.src}
          alt={mother.image.alt}
          width="400"
          height="400"
          className={styles.motherImage}
        />
      ) : (
        <div className={styles.motherImage} aria-hidden="true" />
      )}

      <div className={styles.litterBody}>
        <h3 className={styles.litterTitle}>
          {litter.father ? `${mother.callName} × ${litter.father}` : mother.callName}
        </h3>
        {!litter.father && <p className={styles.litterMeta}>Hane meddelas senare.</p>}
        {litter.note && <p className={styles.litterMeta}>{litter.note}</p>}
        <LitterStatus status={litter.status} dates={litter.dates} />
      </div>
    </article>
  )
}

export default function Kittens() {
  return (
    <>
      <title>Kattungar – SE*Bekiles</title>
      <PageHeader title="Kattungar & planer">
        Vi har bara några få kullar per år. Här ser du vad som är på gång och hur
        du gör om du vill bli kattägare hos oss.
      </PageHeader>

      <section className={styles.section} aria-labelledby="litters-heading">
        <h2 id="litters-heading" className={styles.sectionTitle}>Kullar</h2>
        {litters.length > 0 ? (
          litters.map((litter) => <LitterCard key={litter.id} litter={litter} />)
        ) : (
          <p className={styles.empty}>
            Just nu har vi inga planerade kullar.{' '}
            <Link to="/kontakt">Hör gärna av dig</Link> ändå om du är intresserad.
          </p>
        )}
      </section>

      <section className={styles.section} aria-labelledby="process-heading">
        <h2 id="process-heading" className={styles.sectionTitle}>Så går det till</h2>
        <ol className={styles.process}>
          {processSteps.map((step) => (
            <li key={step.title} className={styles.processStep}>
              <h3 className={styles.processTitle}>{step.title}</h3>
              <p className={styles.processText}>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className={`${styles.section} ${styles.split}`}>
  <section aria-labelledby="included-heading" className={styles.included}>
    <h2 id="included-heading" className={styles.sectionTitle}>Det här ingår</h2>
    <ul className={styles.includedList}>
      {included.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <p className={styles.price}>Pris: [PRIS] kr</p>
  </section>

  <section className={styles.formColumn}>
    <InterestForm />
  </section>
</div>
      <section className={styles.section} aria-labelledby="faq-heading">
  <h2 id="faq-heading" className={styles.sectionTitle}>Vanliga frågor</h2>
  <Accordion items={faq} />
</section>
    </>
  )
}