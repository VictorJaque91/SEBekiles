import PageHeader from '../components/PageHeader/PageHeader.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx'
import styles from './Contact.module.css'

const contactWays = [
  {
    id: 'email',
    label: 'E-post',
    value: 'annika.olsson.ako@gmail.com',
    href: 'mailto:annika.olsson.ako@gmail.com',
    icon: 'M4 6h16v12H4zM4 7l8 6 8-6',
  },
  {
    id: 'annika',
    label: 'Annika',
    value: '072-749 09 20',
    href: 'tel:+46727490920',
    icon: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  },
  {
    id: 'bernt',
    label: 'Bernt',
    value: '070-600 63 17',
    href: 'tel:+46706006317',
    icon: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  },
]

function Icon({ path }) {
  return (
    <svg
      className={styles.icon}
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}

export default function Contact() {
  return (
    <>
      <title>Kontakt – SE*Bekiles</title>
      <PageHeader title="Hör av dig">
        Frågor om kattungar, rasen eller våra katter? Vi svarar så snart vi kan.
      </PageHeader>

      <div className={styles.layout}>
        <section className={styles.ways} aria-labelledby="ways-heading">
          <h2 id="ways-heading" className="visually-hidden">Kontaktuppgifter</h2>
          <ul className={styles.list}>
            {contactWays.map((way) => (
              <li key={way.id}>
                <a href={way.href} className={styles.card}>
                  <Icon path={way.icon} />
                  <span>
                    <span className={styles.label}>{way.label}</span>
                    <span className={styles.value}>{way.value}</span>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <div className={`${styles.card} ${styles.static}`}>
                <Icon path="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                <span>
                  <span className={styles.label}>Var</span>
                  <span className={styles.value}>Linköping – adressen får du vid besök</span>
                </span>
              </div>
            </li>
          </ul>
        </section>

        <section className={styles.formColumn}>
          <ContactForm />
        </section>
      </div>
    </>
  )
}
