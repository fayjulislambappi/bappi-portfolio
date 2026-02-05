'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const roles = [
    "Front-end Developer",
    "UI/UX Developer",
    "Graphics Designer",
    "Gamer"
]

export default function Hero() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="hero" className={styles.hero}>
            {/* Background Glow */}
            <div className={styles.glow} />

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.p
                        className={styles.greeting}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Hi, I&apos;m
                    </motion.p>
                    <motion.h1
                        className={styles.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        Md. Fayjul Islam <span className={styles.highlight}>Bappi</span>
                    </motion.h1>
                    <div className={styles.sliderContainer}>
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={index}
                                className={styles.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className={styles.gradientText}>{roles[index]}</span>
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Crafting premium, high-performance web experiences with modern
                        technologies and pixel-perfect precision.
                    </motion.p>

                    <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3 }}
                    >
                        <a href="#projects" className={styles.primaryBtn}>
                            View Projects
                        </a>
                        <a href="/Md.%20Fayjul%20Islam%20Bappi%20CV.pdf" download="Md. Fayjul Islam Bappi CV.pdf" className={styles.cvBtn}>
                            Download CV
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ clipPath: 'inset(100% 0 0 0)' }}
                    animate={{ clipPath: 'inset(0 0 0 0)' }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className={styles.imageContainer}>
                        <div className={styles.imageInner}>
                            <Image
                                src="/images/hero-latest.png"
                                alt="Md. Fayjul Islam Bappi"
                                fill
                                className={styles.image}
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
