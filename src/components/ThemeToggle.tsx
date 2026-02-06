'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setTimeout(() => setMounted(true), 0)
    }, [])

    if (!mounted) {
        return <div className={styles.placeholder}></div>
    }

    return (
        <button
            className={styles.toggle}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Theme"
        >
            <div className={styles.iconWrapper}>
                {theme === 'dark' ? (
                    <FiSun className={styles.sunIcon} />
                ) : (
                    <FiMoon className={styles.moonIcon} />
                )}
            </div>
        </button>
    )
}
