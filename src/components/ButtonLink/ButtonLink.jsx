import { Link } from "react-router-dom"
import styles from './ButtonLink.module.css'

export default function ButtonLink({ to, variant = 'primary', children}) {
    return (
         <Link to={to} className={`${styles.button} ${styles[variant]}`}>
            {children}
        </Link>
    )
}