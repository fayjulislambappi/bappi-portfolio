'use client'

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaPalette, FaGamepad, FaRocket, FaCode } from 'react-icons/fa'
import styles from './Hero.module.css'
import ThemeToggle from './ThemeToggle'

const roles = [
    "Front-end Developer",
    "UI/UX Developer",
    "Graphics Designer",
    "Gamer"
]

export default function Hero() {
    const [index, setIndex] = useState(0)

    const shimmerProgress = useMotionValue(0)
    const backgroundPosition = useTransform(shimmerProgress, (v) => `${v}% center`)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length)
        }, 3000)

        // Persistent Shimmer Logic - Animating 0 to 150 for a 300% background width
        const controls = animate(shimmerProgress, [0, 150], {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
        })

        return () => {
            clearInterval(interval)
            controls.stop()
        }
    }, [shimmerProgress])

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
                        Md Fayjul Islam <span className={styles.highlight}>Bappi</span>
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
                                <motion.span
                                    className={styles.gradientText}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    style={{ backgroundPosition: backgroundPosition as any }}
                                >
                                    {roles[index]}
                                </motion.span>
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
                    {/* Decorative Background Rings */}
                    <div className={styles.ringContainer}>
                        <motion.div
                            className={`${styles.decorativeRing} ${styles.ring1}`}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className={`${styles.decorativeRing} ${styles.ring2}`}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {/* Tech Particles */}
                    <div className={styles.particlesContainer}>
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={styles.particle}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0.2, 0.5, 0.2],
                                    scale: [1, 1.2, 1],
                                    y: [0, -40, 0],
                                    x: [0, (i % 2 === 0 ? 20 : -20), 0]
                                }}
                                transition={{
                                    duration: 5 + i,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                }}
                            />
                        ))}
                    </div>

                    {/* Floating Skill Icons */}
                    <motion.div
                        className={`${styles.iconCircle} ${styles.iconRocket}`}
                        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        title="High Performance"
                    >
                        <FaRocket />
                    </motion.div>

                    <motion.div
                        className={`${styles.iconCircle} ${styles.iconCode}`}
                        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        title="Clean Code"
                    >
                        <FaCode />
                    </motion.div>

                    <motion.div
                        className={`${styles.iconCircle} ${styles.iconDesign}`}
                        animate={{ y: [0, -12, 0], x: [0, -8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        title="Graphics Designer"
                    >
                        <FaPalette />
                    </motion.div>

                    <motion.div
                        className={`${styles.iconCircle} ${styles.iconGame}`}
                        animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        title="Pro Gamer"
                    >
                        <FaGamepad />
                    </motion.div>

                    <div className={styles.heroToggleWrapper}>
                        <ThemeToggle />
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageInner}>
                            <Image
                                src="/images/hero-latest.png"
                                alt="Md. Fayjul Islam Bappi"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 950px"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
