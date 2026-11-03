import { Link } from 'react-router-dom'
import { cats } from '../data/cats.js'
import { news } from '../data/news.js'
import CatCard from '../components/CatCard/CatCard.jsx'
import NewsCard from '../components/NewsCard/NewsCard.jsx'
import ButtonLink from '../components/ButtonLink/ButtonLink.jsx'
import styles from './Home.module.css'


const trustPoints = [
  { text: 'Certifierad uppfödare', image: '/images/certifierad.webp' },
  { text: 'Tillstånd från Länsstyrelsen' },
  { text: 'Medlem i [KATTKLUBB]' },
  { text: 'Hälsotestade avelskatter' },
]

export default function Home() {
  const featuredCats = cats.filter((cat) => cat.featured && cat.status === 'home')
  const latestNews = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)

  return (
    <>
      <title>SE*Bekiles – Sibirisk katt i Linköping</title>

      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Linköping · sedan 2013</p>
          <h1 id="hero-heading" className={styles.heroTitle}>
            Sociala, friska katter uppvuxna mitt i familjen
          </h1>
          <p className={styles.heroIntro}>
            Vi är en liten hemuppfödning av Sibirisk katt. Våra kullar växer upp
            i vardagsrummet, hälsotestas och socialiseras med både barn och vuxna
            innan de flyttar till sina nya hem.
          </p>
          <div className={styles.heroActions}>
            <ButtonLink to="/katter">Möt våra katter</ButtonLink>
            <ButtonLink to="/kattungar" variant="secondary">Kattungar & planer</ButtonLink>
          </div>
        </div>
        <img
          /* TODO: byt mot riktig bild från mamma + skriv alt-text */
          src="/images/hero-placeholder.png"
          alt="[BESKRIV BILDEN]"
          width="1200"
          height="900"
          fetchPriority="high"
          className={styles.heroImage}
        />
      </section>

      <section className={styles.section} aria-label="Om uppfödningen">
        <ul className={styles.trustList}>
          {trustPoints.map((point) => (
            <li key={point.text} className={styles.trustItem}>
              {point.image ? (
                <img src={point.image} alt={point.text} className={styles.trustImage} />
              ) : (
                point.text
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="current-heading">
        <div className={styles.current}>
          <div>
            <p className={styles.eyebrow}>Aktuellt</p>
            <h2 id="current-heading" className={styles.currentTitle}>
              Nästa kull: vi väntar in Vega
            </h2>
            <p className={styles.currentText}>
              Intresseanmälan är öppen – läs mer om hur det går till.
            </p>
          </div>
          <Link to="/kattungar" className={styles.textLink}>
            Till kattungar <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="news-heading">
        <div className={styles.sectionHeader}>
          <h2 id="news-heading" className={styles.sectionTitle}>Senaste nytt</h2>
        </div>
        <div className={styles.newsGrid}>
          {latestNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="cats-heading">
        <div className={styles.sectionHeader}>
          <h2 id="cats-heading" className={styles.sectionTitle}>Möt katterna</h2>
          <Link to="/katter" className={styles.textLink}>
            Alla katter <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.catGrid}>
          {featuredCats.map((cat) => (
            <CatCard key={cat.id} cat={cat} headingLevel={3} />
          ))}
        </div>
      </section>
    </>
  )
}