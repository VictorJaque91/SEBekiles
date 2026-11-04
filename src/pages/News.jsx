import { news } from '../data/news.js'
import PageHeader from '../components/PageHeader/PageHeader.jsx'
import NewsCard from '../components/NewsCard/NewsCard.jsx'
import styles from './News.module.css'

export default function News() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <title>Nyheter – SE*Bekiles</title>
      <PageHeader title="Nyheter">Allt som har hänt hos oss, det senaste först.</PageHeader>
      <div className={styles.grid}>
        {sorted.map((item) => (
          <NewsCard key={item.id} item={item} headingLevel={2} />
        ))}
      </div>
    </>
  )
}
