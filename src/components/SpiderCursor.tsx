'use client'

import { useEffect, useRef } from 'react'

export default function SpiderCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        let mouse = { x: -100, y: -100 }

        // Resize canvas
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.vx = (Math.random() - 0.5) * 1.5
                this.vy = (Math.random() - 0.5) * 1.5
                this.size = Math.random() * 2 + 1
            }

            update() {
                this.x += this.vx
                this.y += this.vy

                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = 'rgba(0, 240, 255, 0.8)'
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const initParticles = () => {
            particles = []
            const numberOfParticles = (canvas.width * canvas.height) / 15000
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            // Draw connections
            connectParticles()

            animationFrameId = requestAnimationFrame(animate)
        }

        const connectParticles = () => {
            if (!ctx) return
            const maxDistance = 150
            const mouseDistance = 200

            for (let i = 0; i < particles.length; i++) {
                // Connect to mouse
                const dxMouse = particles[i].x - mouse.x
                const dyMouse = particles[i].y - mouse.y
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

                if (distMouse < mouseDistance) {
                    ctx.strokeStyle = `rgba(0, 240, 255, ${1 - distMouse / mouseDistance})`
                    ctx.lineWidth = 1
                    ctx.beginPath()
                    ctx.moveTo(particles[i].x, particles[i].y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.stroke()
                }

                // Connect to other particles
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < maxDistance) {
                        ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 * (1 - distance / maxDistance)})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        resize()
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0, // Behind content
                background: 'transparent'
            }}
        />
    )
}
