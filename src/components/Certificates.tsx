'use client'

import { motion } from 'framer-motion'
import { FaCertificate, FaTrophy } from 'react-icons/fa'
import Image from 'next/image'
import styles from './Certificates.module.css'

const professionalCertificates = [
    {
        title: 'Video Editing Course',
        issuer: 'HRDI',
        date: '2023',
        image: '/images/placeholder.svg'
    },
    {
        title: 'Microsoft Excel and PowerPoint',
        issuer: 'HRDI',
        date: '2023',
        image: '/images/placeholder.svg'
    }
]

const cocurricularActivities = [
    {
        title: 'Leadership Boot Camp',
        issuer: 'Metamorphosis',
        date: '2023',
        image: '/images/placeholder.svg'
    },
    {
        title: 'Participation Certificate',
        issuer: 'TEDxDaffodilU',
        date: '2023',
        image: '/images/placeholder.svg'
    },
    {
        title: 'International AWS Cloud Day Volunteering',
        issuer: 'Daffodil International University',
        date: '2023',
        image: '/images/placeholder.svg'
    },
    {
        title: 'Youth Leadership Bootcamp',
        issuer: 'HRDI',
        date: '2023',
        image: '/images/placeholder.svg'
    },
    {
        title: 'Teaching Apprentice Fellowship',
        issuer: 'Daffodil International University',
        date: '2023',
        image: '/images/placeholder.svg'
    }
]

export default function Certificates() {
    return (
        <section id="certificates" className={styles.certificates}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Achievements & <span className={styles.highlight}>Certificates</span>
                </motion.h2>

                {/* Professional Certificates */}
                <motion.h3
                    className={styles.subHeading}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Professional Certificates
                </motion.h3>
                <div className={styles.grid}>
                    {professionalCertificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {cert.image ? (
                                <div className={styles.cardImageContainer}>
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className={styles.cardImage}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            ) : (
                                <div className={styles.iconContainer}>
                                    <FaCertificate />
                                </div>
                            )}
                            <h3 className={styles.title}>{cert.title}</h3>
                            <h4 className={styles.issuer}>{cert.issuer}</h4>
                            <span className={styles.date}>{cert.date}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Co-curricular Activities */}
                <motion.h3
                    className={styles.subHeading}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '5rem' }}
                >
                    Co-curricular Activities
                </motion.h3>
                <div className={styles.grid}>
                    {cocurricularActivities.map((activity, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {activity.image ? (
                                <div className={styles.cardImageContainer}>
                                    <Image
                                        src={activity.image}
                                        alt={activity.title}
                                        fill
                                        className={styles.cardImage}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            ) : (
                                <div className={styles.iconContainer}>
                                    <FaTrophy />
                                </div>
                            )}
                            <h3 className={styles.title}>{activity.title}</h3>
                            <h4 className={styles.issuer}>{activity.issuer}</h4>
                            <span className={styles.date}>{activity.date}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
