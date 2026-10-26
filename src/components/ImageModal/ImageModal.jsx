import { useEffect, useRef } from "react"
import styles from './ImageModal.module.css'

export default function ImageModal({ image, caption, open, onClose}) {
    const dialogRef = useRef(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (open && !dialog.open) {
            dialog.showModal()
        } else if (!open && dialog.open) {
            dialog.close()
        }
    }, [open])

    function handleBackdropClick(event) {
        if (event.target === dialogRef.current) {
            dialogRef.current.close()
        }
    }

    return (
        <dialog 
        ref={dialogRef}
        className={styles.dialog}
        onClose={onClose}
        onClick={handleBackdropClick}
        aria-label={caption}
        >
            <figure className={styles.figure}>
                <img src={image.src} alt={image.alt} className={styles.image} />
                <figcaption className={styles.caption}>{caption}</figcaption>
            </figure>
            <button 
            type="button"
            className={styles.close}
            onClick={() => dialogRef.current.close()}
            aria-label="Stäng"
            >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                </svg>
            </button>
        </dialog>
    )
}