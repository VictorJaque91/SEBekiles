import { useId, useState } from 'react'
import styles from './Accordion.module.css'

export default function Accordion({ items, headingLevel = 3 }) {
  const [openId, setOpenId] = useState(null)
  const baseId = useId()
  const Heading = `h${headingLevel}`

  return (
    <div className={styles.accordion}>
      {items.map((item) => {
        const isOpen = openId === item.id
        const buttonId = `${baseId}-${item.id}-button`
        const panelId = `${baseId}-${item.id}-panel`

        return (
          <div key={item.id} className={styles.item}>
            <Heading className={styles.heading}>
              <button
                type="button"
                id={buttonId}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <svg className={styles.icon} aria-hidden="true" width="20" height="20"
                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </Heading>
            <div id={panelId} className={styles.panel} hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}