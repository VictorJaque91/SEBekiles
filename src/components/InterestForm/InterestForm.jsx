import { useEffect, useRef, useState } from 'react'
import FormField from '../FormField/FormField.jsx'
import { validateInterest } from '../../utils/validation.js'
import { sendForm } from '../../utils/sendForm.js'
import { formIds, fallbackEmail } from '../../data/forms.js'
import styles from './InterestForm.module.css'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  wish: '',
  about: '',
  consent: false,
}

export default function InterestForm() {
  const [values, setValues] = useState(initialValues)
  const [attempted, setAttempted] = useState(false)
  const [sent, setSent] = useState(false)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'error'
  const formRef = useRef(null)
  const successRef = useRef(null)

  const errors = attempted ? validateInterest(values) : {}

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

  async function handleSubmit(event) {
    event.preventDefault()
    setAttempted(true)

    const foundErrors = validateInterest(values)
    const firstInvalid = Object.keys(foundErrors)[0]

    if (firstInvalid) {
      formRef.current.elements[firstInvalid].focus()
      return
    }

    setStatus('sending')
    try {
      await sendForm(formIds.interest, {
        _subject: `Ny intresseanmälan från ${values.name}`,
        Namn: values.name,
        email: values.email, // Formspree använder fältet "email" som svarsadress
        Telefon: values.phone,
        Önskemål: values.wish,
        'Om mig och mitt hem': values.about,
      })
      setSent(true)
    } catch {
      setStatus('error')
    }
  }

  if (sent) {
    return (
      <div ref={successRef} tabIndex={-1} className={styles.box}>
        <h2 className={styles.title}>Tack för din anmälan!</h2>
        <p className={styles.text}>
          Vi hör av oss till {values.email} så snart vi kan.
        </p>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      className={styles.box}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="interest-heading"
    >
      <h2 id="interest-heading" className={styles.title}>Intresseanmälan</h2>
      <p className={styles.note}>Fält markerade med * är obligatoriska.</p>

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
      <FormField
        id="phone"
        label="Telefon"
        type="tel"
        autoComplete="tel"
        hint="Frivilligt"
        value={values.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <FormField
        id="wish"
        label="Önskemål"
        hint="T.ex. kön, färg, eller om du söker sällskapskatt eller avelskatt."
        value={values.wish}
        onChange={handleChange}
      />
      <FormField
        id="about"
        as="textarea"
        rows={5}
        label="Berätta om dig och ditt hem"
        hint="Vilka bor hemma, finns det andra djur, hur ser vardagen ut?"
        required
        value={values.about}
        onChange={handleChange}
        error={errors.about}
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
            Jag godkänner att SE*Bekiles sparar mina uppgifter för att hantera min anmälan.
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className={styles.error}>{errors.consent}</p>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className={styles.error}>
          Något gick fel och meddelandet skickades inte. Försök igen, eller mejla oss
          direkt på <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
        </p>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Skickar…' : 'Skicka anmälan'}
      </button>
    </form>
  )
}