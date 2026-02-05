'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'
import styles from './Contact.module.css'

const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/fayjul-islam-bappi', color: '#0077b5' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/fayjulislambappi', color: '#333' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/fayjulislambappi', color: '#1877f2' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/fayjul_islam_bappi', color: '#e4405f' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@fayjulbappy7886', color: '#ff0000' },
]

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get in <span className={styles.highlight}>Touch</span>
                </motion.h2>

                <div className={styles.contentWrapper}>
                    <motion.div
                        className={styles.formContainer}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className={styles.form} onSubmit={async (e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const data = {
                                name: formData.get('name'),
                                email: formData.get('email'),
                                phone: formData.get('phone'),
                                message: formData.get('message'),
                            };

                            try {
                                const response = await fetch('/api/contact', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(data),
                                });
                                if (response.ok) {
                                    alert('Message sent successfully!');
                                    (e.target as HTMLFormElement).reset();
                                } else {
                                    alert('Failed to send message.');
                                }
                            } catch {
                                alert('Error sending message.');
                            }
                        }}>
                            <div className={styles.inputGroup}>
                                <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <input type="email" name="email" placeholder="Your Email" required className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <input type="tel" name="phone" placeholder="Your Phone Number" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea name="message" placeholder="Your Message" required className={styles.textarea} rows={5}></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </form>
                    </motion.div>

                    <motion.div
                        className={styles.socialContainer}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className={styles.text}>
                            Feel free to connect with me on social media or drop a message.
                        </p>
                        <div className={styles.socialGrid}>
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialCard}
                                    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <link.icon className={styles.icon} style={{ color: link.color }} />
                                    <span className={styles.linkName}>{link.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
