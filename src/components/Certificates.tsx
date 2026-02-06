'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCertificate, FaTrophy, FaTimes, FaArrowLeft } from 'react-icons/fa'
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
        image: '/images/AWS Cloud Day Volunteer Certificate.jpg'
    },
    {
        title: 'Youth Leadership Bootcamp',
        issuer: 'HRDI',
        date: '2023',
        image: '/images/placeholder.svg'
    },
    {
        title: 'Teaching Apprentice Fellowship Volunteering',
        issuer: 'Daffodil International University',
        date: '2023',
        image: '/images/TAF Volunteer Certificate.jpg'
    }
]

export default function Certificates() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
                            onClick={() => cert.image && setSelectedImage(cert.image)}
                            style={{ cursor: cert.image ? 'pointer' : 'default' }}
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
                            onClick={() => activity.image && setSelectedImage(activity.image)}
                            style={{ cursor: activity.image ? 'pointer' : 'default' }}
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

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className={styles.backButton}
                            onClick={() => setSelectedImage(null)}
                            title="Back"
                        >
                            <FaArrowLeft />
                        </button>

                        <button
                            className={styles.closeButton}
                            onClick={() => setSelectedImage(null)}
                            title="Close"
                        >
                            <FaTimes />
                        </button>

                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            <div style={{ position: 'relative', width: 'auto', height: 'auto' }}>
                                <Image
                                    src={selectedImage}
                                    alt="Certificate Full View"
                                    width={1200}
                                    height={800}
                                    className={styles.modalImage}
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
