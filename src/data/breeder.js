// Uppgifter om uppfödningen som visas i sidfoten, på startsidan och på Om oss.

export const county = 'Östergötland'

// Kattklubben byts automatiskt det datum medlemskapet ändras.
const clubs = [
  { name: 'Hälsingekatten', from: '2000-01-01' },
  { name: 'Nerikes kattklubb', from: '2027-01-02' },
]

export function currentClub(today = new Date()) {
  const date = today.toISOString().slice(0, 10)
  return clubs.filter((club) => club.from <= date).at(-1).name
}
