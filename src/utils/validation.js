const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[0-9+\-\s()]{6,20}$/

// Små hjälpare som båda formulären använder. Varje funktion returnerar
// ett felmeddelande, eller null om värdet är okej.

function checkName(value) {
  return value.trim().length < 2 ? 'Skriv ditt namn.' : null
}

function checkEmail(value) {
  const email = value.trim()
  if (!email) return 'Skriv din e-postadress.'
  if (!emailPattern.test(email)) {
    return 'E-postadressen ser inte rätt ut. Skriv den som namn@exempel.se.'
  }
  return null
}

function checkPhone(value) {
  const phone = value.trim()
  if (phone && !phonePattern.test(phone)) {
    return 'Telefonnumret får bara innehålla siffror, mellanslag, +, - och parenteser.'
  }
  return null
}

function checkMinLength(value, min, message) {
  return value.trim().length < min ? message : null
}

function checkConsent(value, what) {
  return value ? null : `Du behöver godkänna att vi sparar dina uppgifter för att kunna skicka ${what}.`
}

// Tar bort fält utan fel, så att {} fortfarande betyder "allt okej".
function onlyErrors(results) {
  return Object.fromEntries(
    Object.entries(results).filter(([, message]) => message !== null)
  )
}

export function validateInterest(values) {
  return onlyErrors({
    name: checkName(values.name),
    email: checkEmail(values.email),
    phone: checkPhone(values.phone),
    about: checkMinLength(values.about, 20, 'Berätta lite mer om dig och ditt hem (minst 20 tecken).'),
    consent: checkConsent(values.consent, 'anmälan'),
  })
}

export function validateContact(values) {
  return onlyErrors({
    name: checkName(values.name),
    email: checkEmail(values.email),
    message: checkMinLength(values.message, 10, 'Skriv ett meddelande (minst 10 tecken).'),
    consent: checkConsent(values.consent, 'meddelandet'),
  })
}
