import { useEffect, useRef, useState } from 'react'
import FormField from '../FormField/FormField.jsx'
import { validateContact } from '../../utils/validation.js'
import styles from './ContactForm.module.css'

const initialValues = {
  name: '',
  email: '',
  message: '',
  consent: false,
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [attempted, setAttempted] = useState(false)
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)
  const successRef = useRef(null)

  const errors = attempted ? validateContact(values) : {}

  useEffect(() => {
    if (sent) successRef.current.focus()
  }, [sent])

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setAttempted(true)

    const foundErrors = validateContact(values)
    const firstInvalid = Object.keys(foundErrors)[0]

    if (firstInvalid) {
      formRef.current.elements[firstInvalid].focus()
      return
    }

    // TODO: skicka till Formspree eller liknande tjänst
    setSent(true)
  }

  if (sent) {
    return (
      <div ref={successRef} tabIndex={-1} className={styles.box}>
        <h2 className={styles.title}>Tack för ditt meddelande!</h2>
        <p className={styles.text}>Vi svarar till {values.email} så snart vi kan.</p>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      className={styles.box}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className={styles.title}>Skicka ett meddelande</h2>
      <p className={styles.text}>Fält markerade med * är obligatoriska.</p>

      <div className={styles.row}>
        <FormField
          id="name"
          label="Namn"
          required
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormField
          id="email"
          label="E-post"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <FormField
        id="message"
        as="textarea"
        rows={6}
        label="Meddelande"
        required
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />

      <div>
        <div className={styles.checkboxRow}>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className={styles.checkbox}
            checked={values.consent}
            onChange={handleChange}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <label htmlFor="consent">
            Jag godkänner att SE*Bekiles sparar mina uppgifter för att kunna svara på meddelandet.
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className={styles.error}>{errors.consent}</p>
        )}
      </div>

      <button type="submit" className={styles.submit}>Skicka</button>
    </form>
  )
}
