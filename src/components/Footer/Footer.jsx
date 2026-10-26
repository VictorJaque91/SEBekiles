import { Link } from 'react-router-dom'
import { footerLinks } from '../../data/navigation.js'
import styles from './Footer.module.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className= {styles.inner}>
                <div>
                    <p className={styles.name}>SE*Bekiles</p>
                    <address className={styles.text}>
                        Annika Kiel Olsson<br />
                        Linköping
                        </address>
                </div>

                <p className={styles.text}>
                    Uppfödning av Sibirisk katt med tillstånd från Länsstyrelsen [LÄN]. Medlem i [KATTKLUBB].
                </p>
                
                <nav aria-label="Sidfot">
                    <ul className={styles.linkList}>
                        {footerLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className={styles.link}>
                                {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <p className={styles.copyright}>{"\u00A9"} {year} SE*Bekiles</p>
        </footer>
    )
}