import { breedNames, formatTestDate } from '../../utils/catHelpers.js'
import styles from './HealthTable.module.css'

export default function HealthTable({ cat }) {
  const captionId = `${cat.id}-tests`

  return (
    <article className={styles.card} id={cat.id}>
      <h3 className={styles.name}>{cat.callName}</h3>
      <p className={styles.registered}>
        {cat.registeredName} · {breedNames[cat.breed]}
      </p>

      <div
        className={styles.tableWrapper}
        role="region"
        aria-labelledby={captionId}
        tabIndex={0}
      >
        <table className={styles.table}>
          <caption id={captionId} className="visually-hidden">
            Hälsotester för {cat.callName}
          </caption>
          <thead>
            <tr>
              <th scope="col">Test</th>
              <th scope="col">Resultat</th>
              <th scope="col">Källa</th>
              <th scope="col">Datum</th>
            </tr>
          </thead>
          <tbody>
            {cat.healthTests.map((test) => (
              <tr key={test.name}>
                <th scope="row">{test.name}</th>
                <td>{test.result}</td>
                <td>{test.source}</td>
                <td>{test.date ? formatTestDate(test.date) : '–'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}