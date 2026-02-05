import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy}>
                &copy; {new Date().getFullYear()} Md. Fayjul Islam Bappi. All rights reserved.
            </p>
        </footer>
    )
}
