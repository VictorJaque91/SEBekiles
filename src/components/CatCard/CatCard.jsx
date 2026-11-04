import { breedNames, sexLabel, formatDate, getAge } from '../../utils/catHelpers.js'
import styles from './CatCard.module.css'
import { useState } from 'react'
import ImageModal from '../ImageModal/ImageModal.jsx'
import ExternalLink from '../ExternalLink/ExternalLink.jsx'

export default function CatCard({ cat, headingLevel = 2 }) {
  const [imageOpen, setImageOpen] = useState(false)
  const Heading = `h${headingLevel}`

  return (
    <article className={styles.card}>
      {cat.image.src ? (
        <>
          <button
            type="button"
            className={styles.imageButton}
            onClick={() => setImageOpen(true)}
            aria-label={`Visa större bild på ${cat.callName}`}
          >
            <img
              src={cat.image.src}
              alt={cat.image.alt}
              width="800"
              height="600"
              loading="lazy"
              className={styles.image}
            />
          </button>
          <ImageModal
            image={cat.image}
            caption={cat.callName}
            open={imageOpen}
            onClose={() => setImageOpen(false)}
          />
        </>
      ) : (
        <div className={styles.placeholder} aria-hidden="true" />
      )}

      <div className={styles.body}>
        <ul className={styles.tags} aria-label="Egenskaper">
          <li>{breedNames[cat.breed]}</li>
          <li>{sexLabel(cat)}</li>
        </ul>

        <Heading className={styles.name}>{cat.callName}</Heading>
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
        {(cat.pedigreeUrl || cat.sverakUrl) && (
          <ul className={styles.links} aria-label={`Länkar om ${cat.callName}`}>
            {cat.pedigreeUrl && (
              <li>
                <ExternalLink href={cat.pedigreeUrl} className={styles.link}>Stamtavla</ExternalLink>
              </li>
            )}
            {cat.sverakUrl && (
              <li>
                <ExternalLink href={cat.sverakUrl} className={styles.link}>SVERAK</ExternalLink>
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  )
}