"use client"

import {motion} from "framer-motion"
import {useEffect, useState} from "react"

interface Particle {
    id: number
    x: number
    y: number
    size: number
    opacity: number
    duration: number
}

export function AnimatedBackground() {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        const generateParticles = () => {
            const newParticles: Particle[] = []
            for (let i = 0; i < 50; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 4 + 1,
                    opacity: Math.random() * 0.3 + 0.1,
                    duration: Math.random() * 20 + 10,
                })
            }
            setParticles(newParticles)
        }

        generateParticles()
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"/>

            {/* Animated Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-primary/20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.2, 1],
                        opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Geometric Shapes */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/10 rounded-full"
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute top-3/4 right-1/4 w-24 h-24 border border-secondary/10 rounded-lg"
                animate={{
                    rotate: -360,
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute top-1/5 left-2/3 w-28 h-28 border border-accent/10 rounded-full"
                animate={{
                    rotate: 360,
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute bottom-1/5 right-1/5 w-20 h-20 border border-primary/10 rounded-lg"
                animate={{
                    rotate: -360,
                    scale: [1, 0.85, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />


            {/* Gradient Orbs */}
            <motion.div
                className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full opacity-15"
                style={{
                    background: "radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)",
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-2/3 right-1/2 w-56 h-56 rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.1, 0.35, 0.1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

        </div>
    )
}

export function GridBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-border"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"/>
            </svg>
        </div>
    )
}

