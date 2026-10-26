import { breedNames, sexLabel, formatDate, getAge } from '../../utils/catHelpers.js'
import styles from './CatCard.module.css'

export default function CatCard({ cat }) {
  return (
    <article className={styles.card}>
      {cat.image.src ? (
        <img
          src={cat.image.src}
          alt={cat.image.alt}
          width="800"
          height="600"
          loading="lazy"
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder} aria-hidden="true" />
      )}

      <div className={styles.body}>
        <ul className={styles.tags} aria-label="Egenskaper">
          <li>{breedNames[cat.breed]}</li>
          <li>{sexLabel(cat)}</li>
        </ul>

        <h2 className={styles.name}>{cat.callName}</h2>
        <p className={styles.registered}>
          {[...cat.titles, cat.registeredName].join(' ')}
        </p>

        <dl className={styles.facts}>
          <dt>Född</dt>
          <dd>
            <time dateTime={cat.born}>{formatDate(cat.born)}</time> ({getAge(cat.born)})
          </dd>
          <dt>Färg</dt>
          <dd>{cat.color.name} ({cat.color.ems})</dd>
        </dl>

        {cat.pedigreeUrl && (
          <a
            href={cat.pedigreeUrl}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Stamtavla
            <span className="visually-hidden"> för {cat.callName} (öppnas i ny flik)</span>
          </a>
        )}
      </div>
    </article>
  )
}