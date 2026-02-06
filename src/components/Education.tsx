'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import styles from './Education.module.css'

const educationData = [
    {
        degree: 'Bachelor of Science in Computer Science and Engineering',
        institution: 'Daffodil International University',
        year: '2020 - 2024'
    },
    {
        degree: 'Higher Secondary Certificate',
        institution: "St. Gregory's School and College",
        year: '2017 - 2019'
    },
    {
        degree: 'Secondary School Certificate',
        institution: 'Armanitola Govt. High School',
        year: '2015 - 2017'
    }
]

export default function Education() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section id="education" className={styles.education}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My <span className={styles.highlight}>Education</span>
                </motion.h2>

                <div ref={ref} className={styles.timeline}>
                    <motion.div
                        className={styles.line}
                        style={{ scaleY }}
                    />

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div
                                className={styles.dot}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.2 + 0.2 }}
                                viewport={{ once: true }}
                            ></motion.div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.degree}>{item.degree}</h3>
                                <h4 className={styles.institution}>{item.institution}</h4>
                                <span className={styles.year}>{item.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
