const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[0-9+\-\s()]{6,20}$/

export function validateInterest(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Skriv ditt namn.'
  }

  if (!values.email.trim()) {
    errors.email = 'Skriv din e-postadress.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'E-postadressen ser inte rätt ut. Skriv den som namn@exempel.se.'
  }

  if (values.phone.trim() && !phonePattern.test(values.phone.trim())) {
    errors.phone = 'Telefonnumret får bara innehålla siffror, mellanslag, +, - och parenteser.'
  }

  if (values.about.trim().length < 20) {
    errors.about = 'Berätta lite mer om dig och ditt hem (minst 20 tecken).'
  }

  if (!values.consent) {
    errors.consent = 'Du behöver godkänna att vi sparar dina uppgifter för att kunna skicka anmälan.'
  }

  return errors
}