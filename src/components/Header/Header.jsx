import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const links = [
    { to: '/', label: 'Hem' },
    { to: '/katter', label: 'Våra Katter' },
    { to: '/kattungar', label: 'Kattungar' },
    { to: '/utstallning', label: 'Utställning' },
    { to: '/halsa', label: 'Hälsa' },
    { to: '/om-oss', label: 'Om oss' },
    { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>SE*Bekiles</Link>
            <p className={styles.tagline}>en liten uppfödning av Sibirisk katt</p>

            <button
                type="button"
                className={styles.menuButton}
                aria-label="Meny"
                aria-expanded={open}
                aria-controls="huvudmeny"
                onClick={() => setOpen((prev) => !prev)}
            >
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    {open
                        ? <path d="M6 6l12 12M18 6L6 18" />
                        : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
            </button>

<nav className={styles.nav} aria-label="Huvudmeny">
        <ul
          id="huvudmeny"
          className={open ? `${styles.navList} ${styles.open}` : styles.navList}
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    )
}