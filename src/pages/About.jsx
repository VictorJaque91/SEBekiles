import { cats } from '../data/cats.js'
import PageHeader from '../components/PageHeader/PageHeader.jsx'
import ButtonLink from '../components/ButtonLink/ButtonLink.jsx'
import { county, currentClub } from '../data/breeder.js'
import styles from './About.module.css'

const credentialsBase = [
  {
    title: 'Certifierad uppfödare',
    text: 'Annika har gått diplomeringsutbildningen, Uppfödarettan och certifiering.',
  },
  {
    title: 'PawPeds G1–G3',
    text: 'Utbildning i kattgenetik och avelsplanering.',
  },
  {
    title: 'Länsstyrelsens tillstånd',
    text: `Tillstånd från Länsstyrelsen ${county} att föda upp och sälja katter från egen uppfödning.`,
  },
]

const listFormat = new Intl.ListFormat('sv', { style: 'long', type: 'conjunction' })

export default function About() {
  const credentials = [
    ...credentialsBase,
    { title: currentClub(), text: 'Medlemmar i kattklubben och aktiva på utställningar.' },
  ]

  const homeCatNames = cats
    .filter((cat) => cat.status === 'home')
    .map((cat) => cat.callName)
    .sort((a, b) => a.localeCompare(b, 'sv'))

  return (
    <>
      <title>Om oss – SE*Bekiles</title>
      <PageHeader title="Om oss" />

      <section className={styles.intro} aria-labelledby="intro-heading">
        <img
          src="/images/annika-bernt.webp"
          alt="Annika håller Vega och Bernt håller Bjärven, hemma i vardagsrummet"
          width="900"
          height="1200"
          className={styles.photo}
        />
        <div className={styles.introText}>
          <p className={styles.eyebrow}>Sedan 2013</p>
          <h2 id="intro-heading" className={styles.introTitle}>Ett kattokigt par i Linköping</h2>
          <p>
            Vi har fött upp Sibiriska katter sedan 2013. Katterna bor med oss hemma,
            och just nu delar vi vardagen med {listFormat.format(homeCatNames)}.
          </p>
          <p>
            Vi har inga hemmaboende barn, så när en kull ska socialiseras ”lånar” vi
            in barn så att kattungarna vänjer sig vid människor i alla åldrar. Vi gillar
            utställningar och att träffa andra kattokiga människor.
          </p>
          <div className={styles.actions}>
            <ButtonLink to="/katter">Möt våra katter</ButtonLink>
            <ButtonLink to="/kontakt" variant="secondary">Kontakta oss</ButtonLink>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="credentials-heading">
        <h2 id="credentials-heading" className={styles.sectionTitle}>Utbildning och trygghet</h2>
        <ul className={styles.cards}>
          {credentials.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
