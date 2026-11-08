import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cats } from '../data/cats.js'
import { litters } from '../data/litters.js'
import PageHeader from '../components/PageHeader/PageHeader.jsx'
import LitterStatus from '../components/LitterStatus/LitterStatus.jsx'
import styles from './Kittens.module.css'
import Accordion from '../components/Accordion/Accordion.jsx'
import { faq } from '../data/faq.js'
import InterestForm from '../components/InterestForm/InterestForm.jsx'
import ExternalLink from '../components/ExternalLink/ExternalLink.jsx'
import ImageModal from '../components/ImageModal/ImageModal.jsx'

const processSteps = [
  { title: 'Intresseanmälan', text: 'Berätta om dig och ditt hem i formuläret längre ner.' },
  { title: 'Vi hörs', text: 'Ett samtal så att vi lär känna varandra och du kan ställa frågor.' },
  { title: 'Besök', text: 'Kom och hälsa på kullen när kattungarna är stora nog.' },
  { title: 'Flytt', text: 'Kattungen flyttar tidigast vid 14 veckors ålder, med köpeavtal.' },
]

const included = [
  'Stamtavla',
  'Vaccinationer',
  'ID-märkning',
  'Veterinärbesiktning',
  'Startpaket och försäkring',
  'Sammanfattning av mat och kattsand som kattungen är van vid',
  'Livslång support',
]

const kittenStatus = {
  available: 'Ledig',
  reserved: 'Tingad',
  sold: 'Har flyttat',
  staying: 'Stannar hos oss',
}

function KittenGrid({ litter }) {
  if (litter.kittens.length === 0 && litter.images.length === 0) return null

  return (
    <div className={styles.kittens}>
      {litter.kittens.map((kitten) => (
        <figure key={kitten.id} className={styles.kitten}>
          {kitten.image.src ? (
            <img
              src={kitten.image.src}
              alt={kitten.image.alt}
              width="400"
              height="400"
              loading="lazy"
              className={styles.kittenImage}
            />
          ) : (
            <div className={styles.kittenImage} aria-hidden="true" />
          )}
          <figcaption className={styles.kittenCaption}>
            <span className={styles.kittenName}>{kitten.name}</span>
            <span>
              {kitten.sex === 'male' ? 'Hane' : 'Hona'} · {kitten.color.name}
            </span>
            <span className={`${styles.kittenStatus} ${styles[kitten.status]}`}>
              {kittenStatus[kitten.status]}
            </span>
          </figcaption>
        </figure>
      ))}
      {litter.images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          width="400"
          height="400"
          loading="lazy"
          className={styles.kittenImage}
        />
      ))}
    </div>
  )
}

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
        {litter.status !== 'archived' && (
          <LitterStatus status={litter.status} dates={litter.dates} />
        )}
      </div>
      <KittenGrid litter={litter} />
    </article>
  )
}

const bornFormat = new Intl.DateTimeFormat('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })
const nameList = new Intl.ListFormat('sv', { type: 'conjunction' })

function PastLitterCard({ litter }) {
  const motherName =
    cats.find((cat) => cat.id === litter.mother)?.callName ?? litter.motherName
  const parents = [motherName, litter.father].filter(Boolean).join(' × ')
  const born = litter.dates.born
  const photo = litter.images[0]
  const [imageOpen, setImageOpen] = useState(false)
  const title = litter.name ?? parents

  return (
    <article className={styles.pastLitter}>
      {photo && (
        <>
          <button
            type="button"
            className={styles.pastImageButton}
            onClick={() => setImageOpen(true)}
            aria-label={`Visa större bild på ${title}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width="1000"
              height="750"
              loading="lazy"
              className={styles.pastImage}
              style={photo.position ? { objectPosition: photo.position } : undefined}
            />
          </button>
          <ImageModal
            image={photo}
            caption={title}
            open={imageOpen}
            onClose={() => setImageOpen(false)}
          />
        </>
      )}
      <h3 className={styles.litterTitle}>{title}</h3>
      <p className={styles.litterMeta}>
        {born && <>Född <time dateTime={born}>{bornFormat.format(new Date(born))}</time></>}
        {born && parents && ' · '}
        {parents}
      </p>
      {(litter.kittenCount || litter.kittenNames?.length > 0) && (
        <p className={styles.pastKittens}>
          {litter.kittenCount && `${litter.kittenCount} kattungar`}
          {litter.kittenCount && litter.kittenNames?.length > 0 && ': '}
          {litter.kittenNames?.length > 0 && nameList.format(litter.kittenNames)}
        </p>
      )}
      {litter.note && <p className={styles.litterMeta}>{litter.note}</p>}
      {litter.blogUrl && (
        <ExternalLink href={litter.blogUrl}>Läs om kullen på bloggen</ExternalLink>
      )}
    </article>
  )
}

export default function Kittens() {
  const currentLitters = litters.filter((litter) => litter.status !== 'archived')
  const pastLitters = litters
    .filter((litter) => litter.status === 'archived')
    .sort((a, b) => (b.dates.born ?? '').localeCompare(a.dates.born ?? ''))
  const hasKittens = currentLitters.some((litter) => litter.status === 'born' || litter.status === 'ready')

  return (
    <>
      <title>Kattungar – SE*Bekiles</title>
      <PageHeader title="Kattungar & planer">
        Vi har bara några få kullar per år. Här ser du vad som är på gång och hur
        du gör om du vill bli kattägare hos oss.
      </PageHeader>

      <section className={styles.section} aria-labelledby="litters-heading">
        <h2 id="litters-heading" className={styles.sectionTitle}>Kullar</h2>
        {!hasKittens && (
          <p className={styles.notice}>
            Just nu finns det inga kattungar, men håll utkik!
            {currentLitters.length > 0 && ' Här nedan ser du vad som är på gång.'}
          </p>
        )}
        {currentLitters.length > 0 ? (
          currentLitters.map((litter) => <LitterCard key={litter.id} litter={litter} />)
        ) : (
          <p className={styles.empty}>
            Just nu har vi inga planerade kullar.{' '}
            <Link to="/kontakt">Hör gärna av dig</Link> ändå om du är intresserad.
          </p>
        )}
      </section>

      {pastLitters.length > 0 && (
        <section className={styles.section} aria-labelledby="past-heading">
          <h2 id="past-heading" className={styles.sectionTitle}>Tidigare kullar</h2>
          <div className={styles.pastGrid}>
            {pastLitters.map((litter) => <PastLitterCard key={litter.id} litter={litter} />)}
          </div>
        </section>
      )}

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
    <p className={styles.price}>
      Priset diskuteras vid affär. Kattungar tingas efter besök med SVERAKs
      tingningsavtal.
    </p>
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