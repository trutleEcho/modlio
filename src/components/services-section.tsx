'use client'

import {motion, useInView} from "framer-motion";
import {Card} from "@/components/ui/card";
import {ArrowRight, CheckCircle, Code2, Laptop, Palette, Phone, Rocket, Shield} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRef} from "react";

export default function ServicesSection(){
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.substring(1))
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    const services = [
        {
            icon: Code2,
            title: "Web Development",
            description: "Custom web applications built with cutting-edge technologies and best practices.",
            features: ["React, Vue, Remix & Next.js", "TypeScript", "API Integration", "Performance Optimization"]
        },
        {
            icon: Phone,
            title: "Mobile Development",
            description: "Mobile apps that bring your ideas to life on the go.",
            features: ["React Native", "Swift", "CMP", "Cross-Platform Support"]
        },
        {
            icon: Laptop,
            title: "Desktop Development",
            description: "Desktop applications that bring your ideas to life on the desktop.",
            features: ["CMP", "Windows", "Linux", "MacOS"]
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement.",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
        },
        {
            icon: Rocket,
            title: "Digital Strategy",
            description: "Comprehensive digital transformation strategies tailored to your business goals.",
            features: ["Market Analysis", "Technology Roadmap", "Growth Planning", "ROI Optimization"]
        },
        {
            icon: Shield,
            title: "Security & Performance",
            description: "Robust security measures and performance optimization for enterprise-grade solutions.",
            features: ["Security Audits", "Performance Testing", "Monitoring", "Compliance"]
        }
    ]

    return(
        <section id="services" className="section-padding bg-muted/30" ref={ref}>
            {/* Services Section */}
            <div className="container mx-auto container-padding">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
                            Our <span className="bg-gradient-to-r from-primary top to-primary/40 bg-clip-text text-transparent">
                Services
              </span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            From concept to deployment, we offer comprehensive digital solutions
                            that drive growth and innovation for your business.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 py-24">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                            <service.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {service.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                transition={{ duration: 0.6, delay: 1 + index * 0.1 + featureIndex * 0.05 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-center"
                    >
                        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Transform Your Digital Presence?
                            </h3>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Let&apos;s discuss how we can help you achieve your digital goals with our
                                comprehensive suite of services and expertise.
                            </p>
                            <Button
                                size="lg"
                                onClick={() => scrollToSection("#contact")}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg group"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}