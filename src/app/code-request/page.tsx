'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { FaExclamationTriangle } from 'react-icons/fa'
import styles from './CodeRequest.module.css'

function CodeRequestContent() {
    const searchParams = useSearchParams()
    const project = searchParams.get('project') || 'Unknown Project'
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('loading')

        const formData = new FormData(e.currentTarget)
        const data = {
            project,
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            reason: formData.get('reason'),
            agreed: formData.get('agreed') === 'on'
        }

        try {
            const response = await fetch('/api/code-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <h2 className={styles.heading} style={{ color: '#4caf50' }}>Request Sent!</h2>
                    <p className={styles.warningText} style={{ textAlign: 'center' }}>
                        Your request for <strong>{project}</strong> source code has been received.
                        I will review your request and get back to you via email shortly.
                    </p>
                </motion.div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.card}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <h1 className={styles.heading}>
                    Request Code: <span className={styles.projectName}>{project}</span>
                </h1>

                <div className={styles.warning}>
                    <div className={styles.warningTitle}>
                        <FaExclamationTriangle />
                        COPYRIGHT WARNING
                    </div>
                    <p className={styles.warningText}>
                        This source code is the intellectual property of Md. Fayjul Islam Bappi.
                        Requesting access implies you agree to use it for educational purposes only.
                        <strong> You may NOT redistribute, resell, or claim this code as your own.</strong>
                    </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input type="text" name="name" required className={styles.input} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address</label>
                        <input type="email" name="email" required className={styles.input} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Phone Number</label>
                        <input type="tel" name="phone" className={styles.input} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Why do you need this code?</label>
                        <textarea
                            name="reason"
                            required
                            className={styles.textarea}
                            rows={4}
                            placeholder="Please explain your purpose..."
                        />
                    </div>

                    <div className={styles.checkboxGroup}>
                        <input type="checkbox" name="agreed" required className={styles.checkbox} />
                        <label className={styles.checkboxLabel}>
                            I understand and agree to the copyright terms. I will not distribute or claim this code.
                        </label>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                        {status === 'loading' ? 'Sending Request...' : 'Submit Request'}
                    </button>

                    {status === 'error' && (
                        <p style={{ color: 'red', textAlign: 'center' }}>Failed to send request. Please try again.</p>
                    )}
                </form>
            </motion.div>
        </div>
    )
}

export default function CodeRequestPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CodeRequestContent />
        </Suspense>
    )
}
