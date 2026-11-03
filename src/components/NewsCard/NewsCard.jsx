import { formatDate } from '../../utils/catHelpers.js'
import styles from './NewsCard.module.css'

export default function NewsCard({ item }) {
  return (
    <article className={styles.card}>
      {item.image.src ? (
        <img
          src={item.image.src}
          alt={item.image.alt}
          width="900"
          height="600"
          loading="lazy"
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder} aria-hidden="true" />
      )}
      <h3 className={styles.title}>{item.title}</h3>
      <time dateTime={item.date} className={styles.date}>
        {formatDate(item.date)}
      </time>
      <p className={styles.text}>{item.text}</p>
    </article>
  )
}