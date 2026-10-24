import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <title>Sidan hittades inte – SE*Bekiles</title>
      <h1>404 - Sidan hittades inte</h1>
      <p>Den här sidan kanske har flyttat, precis som några av katterna.</p>
      <Link to="/">Tillbaka till startsidan</Link>
    </>
  )
}