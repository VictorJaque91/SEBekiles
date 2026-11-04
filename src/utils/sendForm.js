/**
 * Skickar ett formulär till Formspree.
 * Kastar ett fel om något går snett, så att formuläret kan visa ett felmeddelande.
 * @param {string} formId  ID från Formspree, t.ex. 'myeeowdo'
 * @param {Record<string, string>} data  Fälten som ska mejlas
 */
export async function sendForm(formId, data) {
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Formspree svarade ${response.status}`)
  }
}
