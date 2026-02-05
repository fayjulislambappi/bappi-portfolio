'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Projects.module.css'

const projects = [
    {
        title: 'HelperHub',
        desc: 'A service platform connecting users with local helpers. Features real-time requests and user management.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/fayjulislambappi/helperhub-frontend',
        live: '#',
        image: '/images/placeholder.svg'
    },
    {
        title: 'Free AI Hub',
        desc: 'A centralized resource hub for AI tools and technologies, built to help developers explore AI.',
        tech: ['React', 'JavaScript', 'CSS'],
        github: 'https://github.com/fayjulislambappi/free-ai-hub',
        live: 'https://ai-hub-free.vercel.app/',
        image: '/images/free-ai-hub.jpg'
    },
    {
        title: 'Prompt Calculator',
        desc: 'A utility tool designed to calculate and optimize prompt metrics for AI engineering.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/fayjulislambappi/Prompt-Calculator',
        live: 'https://modern-calculatorx.netlify.app/',
        image: '/images/Calculator.JPG'
    },
    {
        title: 'Namtas',
        desc: 'An educational application for learning multiplication tables (Namtas) in an interactive way.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/fayjulislambappi/Namtas',
        live: '#',
        image: '/images/placeholder.svg'
    },
    {
        title: 'Time Converter',
        desc: 'A simple yet efficient utility for converting between different time formats and timezones.',
        tech: ['HTML', 'JavaScript'],
        github: 'https://github.com/fayjulislambappi/Time-Converter',
        live: '#',
        image: '/images/placeholder.svg'
    }
]

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My <span className={styles.highlight}>Projects</span>
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.projectImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.links}>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.previewBtn}>
                                            View Project
                                        </a>
                                        <Link href={`/code-request?project=${encodeURIComponent(project.title)}`} target="_blank" rel="noopener noreferrer" className={styles.codeBtn}>
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.desc}</p>
                                <div className={styles.techStack}>
                                    {project.tech.map(t => (
                                        <span key={t} className={styles.tag}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

