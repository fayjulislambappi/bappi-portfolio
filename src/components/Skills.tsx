'use client'

import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaMicrosoft } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase, SiRedux, SiAdobeillustrator, SiCanva, SiFigma, SiAdobexd } from 'react-icons/si'
import styles from './Skills.module.css'

const skillCategories = [
    {
        title: "Web Developing Tools & Languages",
        skills: [
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "JavaScript", icon: FaJs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Redux", icon: SiRedux },
            { name: "Node.js", icon: FaNodeJs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Firebase", icon: SiFirebase },
            { name: "Git", icon: FaGitAlt },
            { name: "Microsoft Office", icon: FaMicrosoft },
        ]
    },
    {
        title: "Design Software",
        skills: [
            { name: "Figma", icon: SiFigma },
            { name: "Adobe XD", icon: SiAdobexd },
            { name: "Illustrator", icon: SiAdobeillustrator },
            { name: "Canva", icon: SiCanva },
        ]
    }
]

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical <span className={styles.highlight}>Skills</span>
                </motion.h2>

                <div className={styles.categories}>
                    {skillCategories.map((category, catIndex) => (
                        <div key={category.title} className={styles.category}>
                            <motion.h3
                                className={styles.categoryTitle}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.2 }}
                            >
                                {category.title}
                            </motion.h3>
                            <div className={styles.grid}>
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className={styles.card}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ delay: index * 0.05 + catIndex * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <skill.icon className={styles.icon} />
                                        <span className={styles.name}>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
