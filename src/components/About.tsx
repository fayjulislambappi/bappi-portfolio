'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className={styles.imageContainer}
                    >
                        <Image
                            src="/images/about-final.png"
                            alt="About Me"
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                        />
                    </motion.div>
                </motion.div>

                <div className={styles.content}>
                    <motion.h2
                        className={styles.heading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        About <span className={styles.highlight}>Me</span>
                    </motion.h2>

                    <motion.p
                        className={styles.text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        I am a developer with a diverse skillset ranging from
                        <span className={styles.bold}> Graphics Design</span> to
                        <span className={styles.bold}> Web Development</span>.
                        Currently, I focus on <span className={styles.bold}>Front End Development</span> and
                        Graphics Design, Where I design and develop websites, web applications and other product packages.
                    </motion.p>

                    <motion.p
                        className={styles.text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        I love combining code with design to create applications that are not just functional
                        but visually stunning. Whether it&apos;s building complex web apps or analyzing data,
                        I bring passion and precision to every project.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
