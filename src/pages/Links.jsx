import { linkGroups } from '../data/links.js'
import PageHeader from '../components/PageHeader/PageHeader.jsx'
import ExternalLink from '../components/ExternalLink/ExternalLink.jsx'
import styles from './Links.module.css'

export default function Links() {
  return (
    <>
      <title>Länkar – SE*Bekiles</title>
      <PageHeader title="Länkar och vänner">
        Uppfödare vi har samarbetat med och sidor där du kan läsa mer om rasen.
      </PageHeader>

      {linkGroups.map((group) => (
        <section key={group.id} className={styles.section} aria-labelledby={`${group.id}-heading`}>
          <h2 id={`${group.id}-heading`} className={styles.sectionTitle}>{group.title}</h2>
          <ul className={styles.list}>
            {group.links.map((link) => (
              <li key={link.url} className={styles.item}>
                <ExternalLink href={link.url} className={styles.name}>{link.name}</ExternalLink>
                <p className={styles.description}>{link.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
