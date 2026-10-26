import { litterSteps } from '../../data/litters.js'
import { formatDate } from '../../utils/catHelpers.js'
import styles from './LitterStatus.module.css'

export default function LitterStatus({ status, dates = {} }) {
  const currentIndex = litterSteps.findIndex((step) => step.id === status)
  const progress = (currentIndex / (litterSteps.length - 1)) * 100

  return (
    <div className={styles.wrapper} style={{ '--steps': litterSteps.length }}>
      <div className={styles.track} aria-hidden="true">
        <div className={styles.fill} style={{ width: `${progress}%` }} />
      </div>

      <ol className={styles.steps} aria-label="Kullens status">
        {litterSteps.map((step, index) => {
          const state =
            index < currentIndex ? 'done' : index === currentIndex ? 'current' : 'upcoming'

          return (
            <li
              key={step.id}
              className={`${styles.step} ${styles[state]}`}
              aria-current={state === 'current' ? 'step' : undefined}
            >
              <span className={styles.marker} aria-hidden="true">
                {state === 'done' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </span>
              <span className={styles.label}>
                {step.label}
                {state === 'done' && <span className="visually-hidden"> (klart)</span>}
              </span>
              {dates[step.id] && (
                <time dateTime={dates[step.id]} className={styles.date}>
                  {formatDate(dates[step.id])}
                </time>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}