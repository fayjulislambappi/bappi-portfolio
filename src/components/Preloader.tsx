'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './Preloader.module.css'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check if preloader has already run in this session
        const hasLoaded = sessionStorage.getItem('preloaderShown')

        if (hasLoaded) {
            setIsLoading(false)
        } else {
            // Only lock scroll if actually loading
            document.body.style.overflow = 'hidden'

            const timer = setTimeout(() => {
                setIsLoading(false)
                document.body.style.overflow = 'unset'
                sessionStorage.setItem('preloaderShown', 'true')
            }, 2200)
            return () => {
                clearTimeout(timer)
                document.body.style.overflow = 'unset'
            }
        }
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    className={styles.preloader}
                    initial={{ opacity: 1 }}
                    exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <div className={styles.container}>
                        <div className={styles.logoContainer}>
                            <motion.span
                                className={styles.text}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                Bappi
                            </motion.span>
                            <motion.span
                                className={styles.dot}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "backOut", delay: 0.8 }}
                            >
                                .
                            </motion.span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
