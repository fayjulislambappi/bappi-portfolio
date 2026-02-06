'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import HireMeModal from './HireMeModal'
import styles from './Navbar.module.css'

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHireModalOpen, setIsHireModalOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Basic active section detection
            const sections = navLinks.map(link => document.querySelector(link.href))
            const scrollPosition = window.scrollY + 100

            sections.forEach((section, index) => {
                if (section) {
                    const top = (section as HTMLElement).offsetTop
                    const height = (section as HTMLElement).offsetHeight
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveIndex(index)
                    }
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            <motion.nav
                className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isOpen ? styles.opened : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className={styles.container}>
                    <a href="#" className={styles.logo} onClick={() => setIsOpen(false)}>
                        Bapp<span className={styles.highlight}>i.</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <span className={`${styles.bar} ${isOpen ? styles.bar1 : ''}`}></span>
                        <span className={`${styles.bar} ${isOpen ? styles.bar2 : ''}`}></span>
                        <span className={`${styles.bar} ${isOpen ? styles.bar3 : ''}`}></span>
                    </div>

                    <ul className={`${styles.links} ${isOpen ? styles.active : ''}`}>
                        {/* Sliding Pill Background */}
                        <motion.div
                            className={styles.navHoverPill}
                            initial={false}
                            animate={{
                                x: (hoveredIndex !== null ? hoveredIndex : activeIndex) * 100 + '%',
                                opacity: (hoveredIndex !== null || activeIndex !== null) ? 1 : 0
                            }}
                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />

                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className={activeIndex === index ? styles.activeLi : ''}
                            >
                                <a href={link.href} onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                        <li className={styles.mobileOnly}>
                            <button
                                className={styles.hireMeBtn}
                                onClick={() => {
                                    setIsOpen(false)
                                    setIsHireModalOpen(true)
                                }}
                            >
                                Hire Me
                            </button>
                        </li>
                    </ul>

                    <div className={styles.navActions}>
                        <motion.button
                            onClick={() => setIsHireModalOpen(true)}
                            className={`${styles.hireMeBtn} ${styles.desktopOnly}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(0, 240, 255, 0.6)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hire Me
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <HireMeModal
                isOpen={isHireModalOpen}
                onClose={() => setIsHireModalOpen(false)}
            />
        </>
    )
}
