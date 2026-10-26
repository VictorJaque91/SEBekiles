import styles from './PageHeader.module.css'

export default function PageHeader({ title, children }) {
  return (
    <header className={styles.pageHeader}>
      <h1 className={styles.title}>{title}</h1>
      {children && <p className={styles.intro}>{children}</p>}
    </header>
  )
}