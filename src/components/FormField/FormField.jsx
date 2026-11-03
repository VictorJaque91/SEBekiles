import styles from './FormField.module.css'

export default function FormField({ id, label, hint, error, as: Component = 'input', ...props }) {
  const hintId = `${id}-hint`
  const errorId = `${id}-error`
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {props.required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>
      {hint && <p id={hintId} className={styles.hint}>{hint}</p>}
      <Component
        id={id}
        name={id}
        className={styles.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...props}
      />
      {error && <p id={errorId} className={styles.error}>{error}</p>}
    </div>
  )
}