'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaTimes, FaRocket } from 'react-icons/fa'
import styles from './HireMeModal.module.css'

interface HireMeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            projectType: formData.get('projectType'),
            budget: formData.get('budget'),
            message: formData.get('message'),
            subject: `Hiring Inquiry: ${formData.get('projectType')}`
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.modalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={styles.modalContent}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeButton} onClick={onClose}>
                            <FaTimes />
                        </button>

                        <div className={styles.header}>
                            <h2 className={styles.title}>
                                Let&apos;s Build Something <span className={styles.highlight}>Amazing</span>
                            </h2>
                            <p className={styles.subtitle}>Tell me about your project and let&apos;s get started.</p>
                        </div>

                        {status === 'success' ? (
                            <motion.div
                                className={styles.successMessage}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <FaRocket style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '1rem' }} />
                                <h3>Thank You!</h3>
                                <p>Your message has been sent successfully. I&apos;ll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.inputGroup}>
                                    <input type="text" name="name" placeholder="Full Name" required className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="email" name="email" placeholder="Email Address" required className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="tel" name="phone" placeholder="Phone Number" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <select name="projectType" required className={styles.select}>
                                        <option value="" disabled selected>Project Type</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Video Editing">Video Editing</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <select name="budget" required className={styles.select}>
                                        <option value="" disabled selected>Budget Range</option>
                                        <option value="<$500">&lt; $500</option>
                                        <option value="$500 - $1000">$500 - $1000</option>
                                        <option value="$1000 - $5000">$1000 - $5000</option>
                                        <option value="$5000+">$5000+</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <textarea name="message" placeholder="Project Details" required className={styles.textarea} rows={4}></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                {status === 'error' && (
                                    <p style={{ color: '#ff4d4d', textAlign: 'center', marginTop: '1rem' }}>
                                        Oops! Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
