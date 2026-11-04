import { formatDate } from '../../utils/catHelpers.js'
import styles from './NewsCard.module.css'

export default function NewsCard({ item, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`

  return (
    <article className={styles.card}>
      <time dateTime={item.date} className={styles.date}>
        {formatDate(item.date)}
      </time>
      <Heading className={styles.title}>{item.title}</Heading>
      <p className={styles.text}>{item.text}</p>
    </article>
  )
}