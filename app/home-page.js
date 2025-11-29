'use client'

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Shield, FileText, Lock, Globe, Landmark, Cloud, Factory,
    ArrowRight, CheckCircle, Heart, ChevronLeft, ChevronRight,
    Brain, GraduationCap, Building, Award, Users, Sparkles,
    Crosshair, UserCheck
} from "lucide-react"
import ParticleBackground from "@/components/particle-background"

// Faster animation variants for smoother experience
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }
}

const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
}

const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
}

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
}

// Trusted logos marquee
const TrustedLogos = () => {
    const logos = [
        "TechCorp", "FinanceHub", "CloudSaaS", "DataSecure", "InnovateCo",
        "TrustBank", "SecureNet", "GlobalTech", "CyberSafe", "ComplianceFirst"
    ]

    return (
        <div className="relative overflow-hidden py-6">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...logos, ...logos].map((logo, i) => (
                    <span
                        key={i}
                        className="mx-8 text-muted-foreground/50 font-semibold text-lg tracking-wide"
                    >
                        {logo}
                    </span>
                ))}
            </div>
        </div>
    )
}

// Service Tab Card - Horizontal carousel style
const ServiceTabCard = ({ service, isActive, onClick }) => {
    const IconComponent = service.icon
    return (
        <button
            onClick={onClick}
            className={`flex-shrink-0 w-[280px] p-6 rounded-xl text-left transition-all duration-300 ${
                isActive
                    ? 'bg-foreground text-background shadow-xl scale-[1.02]'
                    : 'bg-card border border-border hover:border-primary/30 hover:shadow-lg'
            }`}
        >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                isActive ? 'bg-background/20' : service.iconBg
            }`}>
                <IconComponent className={`w-5 h-5 ${isActive ? 'text-background' : service.iconColor}`} />
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${isActive ? 'text-background' : 'text-foreground'}`}>
                {service.title}
            </h3>
            <p className={`text-sm leading-relaxed ${isActive ? 'text-background/70' : 'text-muted-foreground'}`}>
                {service.shortDesc}
            </p>
        </button>
    )
}

// Detailed Service Section with scroll animation


export default function HomePage() {
    const [mounted, setMounted] = useState(false)
    const [activeServiceIndex, setActiveServiceIndex] = useState(0)
    const carouselRef = useRef(null)
    const heroRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])

    useEffect(() => {
        setMounted(true)
    }, [])

    // Auto-scroll carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveServiceIndex((prev) => (prev + 1) % services.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    // Scroll carousel when active index changes
    useEffect(() => {
        if (carouselRef.current) {
            const scrollAmount = activeServiceIndex * 296 // card width + gap
            carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
        }
    }, [activeServiceIndex])

    if (!mounted) {
        return <div className="min-h-screen bg-background" />
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* HERO SECTION - Ditto-inspired centered layout */}
            <section ref={heroRef} className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden min-h-screen">
                {/* Particle constellation background - contained within hero */}
                <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
                    {/* Particle network - rendered first (bottom layer) */}
                    <ParticleBackground />
                    {/* Subtle gradient overlay on top */}
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/10 via-transparent to-background/50 dark:from-slate-900/30 dark:via-transparent dark:to-background/50 pointer-events-none" />
                </div>

                <motion.div
                    className="container mx-auto px-4 relative z-10"
                    style={{ opacity: heroOpacity, y: heroY }}
                >
                    {/* Centered hero content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Company name - large and prominent with serif font */}
                        <motion.h1
                            variants={fadeInUp}
                            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4 tracking-tight"
                        >
                            <span className="text-foreground">Tranquility</span>
                            <span className="text-primary"> Cybersecurity</span>
                        </motion.h1>

                        {/* Tagline - serif for elegance */}
                        <motion.p
                            variants={fadeInUp}
                            className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-4 italic"
                        >
                            your one stop compliance solution. 
                        </motion.p>

                        {/* Subtitle - specific credentials & value proposition */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
                        >
                            <span className="block mt-2 text-foreground/70">
                                Led by ISO Lead Auditors and CEH-certified experts. Serving healthcare AI, fintech, logistics, and enterprise clients across India, USA, Australia, UK and the Middle East.
                            </span>
                        </motion.p>

                        {/* Dual CTAs */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                        >
                            <Button
                                asChild
                                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base font-medium rounded-full shadow-lg w-full sm:w-auto"
                            >
                                <Link href="/services" className="flex items-center gap-2">
                                    Find Your Framework
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-foreground/20 hover:bg-foreground/5 text-foreground h-12 px-8 text-base font-medium rounded-full w-full sm:w-auto"
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    Book Security Assessment
                                    <Shield className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Large Compliance Dashboard Window - MacBook 3D style */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Decorative background shapes - positioned behind window */}
                        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                            <div className="absolute -left-32 top-10 w-80 h-80 bg-gradient-to-br from-yellow-400 to-amber-300 rounded-full opacity-80" />
                            <div className="absolute -left-16 bottom-0 w-64 h-64 bg-gradient-to-tr from-emerald-400 to-green-300 rounded-full opacity-75" />
                            <div className="absolute -right-20 bottom-10 w-96 h-96 bg-gradient-to-bl from-fuchsia-400 to-pink-300 rounded-full opacity-70" />
                            <div className="absolute right-10 -top-10 w-48 h-48 bg-gradient-to-l from-cyan-400 to-blue-300 rounded-full opacity-75" />
                            <div className="absolute left-1/3 -bottom-20 w-56 h-56 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full opacity-65" />
                        </div>

                        {/* MacBook-style Window */}
                        <motion.div
                            initial={{ opacity: 0, y: 60, rotateX: 15 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="relative macbook-window bg-white/95 dark:bg-slate-900/95 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/20"
                            style={{ zIndex: 1 }}
                        >
                            {/* Window Title Bar - macOS style */}
                            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-gray-100/80 to-gray-50/80 dark:from-slate-800/80 dark:to-slate-900/80 border-b border-gray-200/50 dark:border-slate-700/50">
                                {/* Traffic lights */}
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-inner" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-inner" />
                                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-inner" />
                                </div>

                                {/* URL Bar */}
                                <div className="flex-1 max-w-md mx-4">
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-white/60 dark:bg-slate-800/60 rounded-lg border border-gray-200/50 dark:border-slate-600/50">
                                        <Lock className="w-3 h-3 text-green-600" />
                                        <span className="text-xs text-muted-foreground">app.tranquility.co.in/dashboard</span>
                                    </div>
                                </div>

                                {/* Window actions */}
                                <div className="flex items-center gap-2">
                                    <Button size="sm" className="bg-primary text-primary-foreground text-xs rounded-lg h-7 px-3">
                                        <Sparkles className="w-3 h-3 mr-1" />
                                        Ask AI
                                    </Button>
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                        <span className="text-white text-[10px] font-medium">TC</span>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar + Content Layout */}
                            <div className="flex">
                                {/* Sidebar */}
                                <div className="hidden md:block w-56 bg-gray-50/50 dark:bg-slate-800/50 border-r border-gray-100 dark:border-slate-700 p-4">
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Shield className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-semibold text-foreground text-sm">Tranquility</span>
                                    </div>

                                    <div className="space-y-1">
                                        {[
                                            { name: "Dashboard", active: false },
                                            { name: "Frameworks", active: true },
                                            { name: "Documents", active: false },
                                            { name: "Evidence", active: false },
                                            { name: "Audits", active: false },
                                        ].map((item, i) => (
                                            <div key={i} className={`px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${item.active ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-gray-100 dark:hover:bg-slate-700'}`}>
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 p-6 md:p-8">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Frameworks</h3>

                                    {/* Primary Frameworks Grid */}
                                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                                        {[
                                            { name: "ISO 27001", desc: "International standard for information security management", progress: 94, color: "bg-emerald-500" },
                                            { name: "SOC 2 Type II", desc: "Security, availability, and confidentiality controls", progress: 78, color: "bg-blue-500" },
                                            { name: "GDPR", desc: "European data protection and privacy regulation", progress: 81, color: "bg-violet-500" },
                                        ].map((framework, i) => (
                                            <div key={i} className="p-4 rounded-xl border border-gray-100 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
                                                <h4 className="font-semibold text-foreground mb-1">{framework.name}</h4>
                                                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{framework.desc}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-2xl font-bold text-foreground">{framework.progress}%</span>
                                                </div>
                                                <div className="mt-2 h-2 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${framework.progress}%` }}
                                                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                                        className={`h-full ${framework.color} rounded-full`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Secondary Frameworks */}
                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                        {[
                                            { name: "PCI DSS", desc: "Payment card industry data security standard", progress: 96, color: "bg-amber-500" },
                                            { name: "HIPAA", desc: "Healthcare information privacy and security", progress: 88, color: "bg-rose-500" },
                                        ].map((framework, i) => (
                                            <div key={i} className="p-4 rounded-xl border border-gray-100 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
                                                <h4 className="font-semibold text-foreground mb-1">{framework.name}</h4>
                                                <p className="text-xs text-muted-foreground mb-3">{framework.desc}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-2xl font-bold text-foreground">{framework.progress}%</span>
                                                </div>
                                                <div className="mt-2 h-2 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${framework.progress}%` }}
                                                        transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                                                        className={`h-full ${framework.color} rounded-full`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Other Standards Section */}
                                    <h4 className="text-lg font-semibold text-foreground mb-4">Other Standards</h4>
                                    <div className="grid md:grid-cols-3 gap-3">
                                        {[
                                            { name: "SOC 1", desc: "Financial reporting controls" },
                                            { name: "DPDP Act", desc: "India's data protection framework" },
                                            { name: "RBI Guidelines", desc: "Reserve Bank compliance standards" },
                                        ].map((standard, i) => (
                                            <div key={i} className="p-3 rounded-lg border border-gray-100 dark:border-slate-700 bg-white/40 dark:bg-slate-800/40 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all cursor-pointer">
                                                <h5 className="font-medium text-foreground text-sm">{standard.name}</h5>
                                                <p className="text-xs text-muted-foreground">{standard.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* TRUSTED BY SECTION */}
            <section className="py-8 border-y border-border/50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <p className="text-xs text-center text-muted-foreground mb-4 uppercase tracking-widest font-medium">
                        Trusted by industry leaders
                    </p>
                </div>
                <TrustedLogos />
            </section>

            {/* THREE SERVICE PILLARS - Main pathways */}
            <section className="py-20 md:py-28 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <p className="text-primary font-medium mb-3 text-sm uppercase tracking-wide">How We Help</p>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4">
                            Three Pathways to Security & Compliance
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Whether you need certifications, security testing, or ongoing advisory - we have you covered.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {servicePillars.map((pillar, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                                    {/* Top gradient bar */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${pillar.gradient}`} />

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${pillar.iconBg}`}>
                                        <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6">{pillar.description}</p>

                                    {/* Services list */}
                                    <ul className="space-y-2 mb-6">
                                        {pillar.services.map((service, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                                {service}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        href={pillar.href}
                                        className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                                    >
                                        {pillar.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FRAMEWORKS SECTION - Ditto-inspired */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4">
                            Get compliant four times faster
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Structure your approach, prepare for assessments, and earn the certifications you deserve.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {frameworks.map((fw, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Link href={fw.href} className="group block">
                                    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                                        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                                            <fw.icon className={`w-6 h-6 ${fw.iconColor}`} />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">{fw.name}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {fw.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Yellow underline indicator */}
                    <div className="flex justify-center mt-10">
                        <div className="w-12 h-1 bg-secondary rounded-full" />
                    </div>
                </div>
            </section>

            {/* COLORFUL ILLUSTRATION BANNER */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        {/* Abstract shapes */}
                        <div className="absolute inset-0">
                            {/* Trees/Buildings - Abstract shapes */}
                            <div className="absolute bottom-0 left-10 w-20 h-40 bg-green-500 rounded-t-full opacity-80" />
                            <div className="absolute bottom-0 left-24 w-16 h-32 bg-emerald-400 rounded-t-full opacity-80" />
                            <div className="absolute bottom-0 left-36 w-24 h-48 bg-yellow-400 rounded-t-3xl opacity-90" />
                            <div className="absolute bottom-0 right-20 w-32 h-56 bg-pink-500 rounded-t-3xl opacity-80" />
                            <div className="absolute bottom-0 right-48 w-20 h-44 bg-orange-400 rounded-t-3xl opacity-80" />
                            <div className="absolute bottom-0 right-64 w-16 h-36 bg-purple-400 rounded-t-full opacity-80" />

                            {/* Sun */}
                            <div className="absolute top-10 right-1/4 w-16 h-16 bg-yellow-300 rounded-full opacity-90" />

                            {/* People silhouettes as dots */}
                            <div className="absolute bottom-4 left-1/3 flex gap-8">
                                <div className="w-3 h-3 bg-gray-800 rounded-full" />
                                <div className="w-3 h-3 bg-gray-800 rounded-full" />
                            </div>
                        </div>

                        {/* Overlay text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                                <p className="text-xl md:text-2xl font-bold mb-2">Your compliance journey starts here</p>
                                <p className="text-sm md:text-base opacity-90">Expert guidance at every step</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERSECTION GLOBE SECTION - Mercury-style */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                {/* Flowing gradient cloud background - matching theme */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-bl from-fuchsia-400/30 via-pink-300/25 to-purple-300/20 blur-[80px] animate-flow-2" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-cyan-300/25 via-blue-300/20 to-indigo-300/15 blur-[70px] animate-flow-3" />
                    <div className="absolute top-[20%] right-[30%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-amber-300/25 to-yellow-200/20 blur-[60px] animate-flow-4" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Content */}
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="max-w-lg"
                        >
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6 leading-tight">
                                Let compliance power your business operations
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Your security framework should do more than check boxes.
                                It should enable growth, build trust, and open new markets. Now, it can.
                            </p>
                            <Button asChild className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-6 py-3 h-auto">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Explore Demo
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Right - Intersection Globe */}
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative w-full max-w-[520px] mx-auto" style={{ aspectRatio: '1' }}>
                                {/* SVG - hexagonal layout with 3D crystal glass effects */}
                                <svg viewBox="0 0 500 500" className="w-full h-full">
                                    <defs>
                                        {/* 3D Crystal Glass Effects */}
                                        <filter id="crystalShadow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur"/>
                                            <feOffset in="blur" dx="0" dy="8" result="offsetBlur"/>
                                            <feFlood floodColor="#000" floodOpacity="0.15"/>
                                            <feComposite in2="offsetBlur" operator="in" result="shadow"/>
                                            <feMerge>
                                                <feMergeNode in="shadow"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>

                                        {/* Inner glow for glass effect */}
                                        <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur stdDeviation="3" result="glow"/>
                                            <feComposite in="glow" in2="SourceGraphic" operator="in"/>
                                        </filter>

                                        {/* Crystal gradients - more transparent */}
                                        <radialGradient id="crystalBlue" cx="30%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.7)"/>
                                            <stop offset="30%" stopColor="rgba(147,197,253,0.35)"/>
                                            <stop offset="70%" stopColor="rgba(59,130,246,0.18)"/>
                                            <stop offset="100%" stopColor="rgba(37,99,235,0.28)"/>
                                        </radialGradient>

                                        <radialGradient id="crystalPurple" cx="30%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.7)"/>
                                            <stop offset="30%" stopColor="rgba(196,181,253,0.35)"/>
                                            <stop offset="70%" stopColor="rgba(139,92,246,0.18)"/>
                                            <stop offset="100%" stopColor="rgba(109,40,217,0.28)"/>
                                        </radialGradient>

                                        <radialGradient id="crystalPink" cx="30%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.7)"/>
                                            <stop offset="30%" stopColor="rgba(251,207,232,0.35)"/>
                                            <stop offset="70%" stopColor="rgba(236,72,153,0.18)"/>
                                            <stop offset="100%" stopColor="rgba(190,24,93,0.28)"/>
                                        </radialGradient>

                                        <radialGradient id="crystalOrange" cx="30%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.7)"/>
                                            <stop offset="30%" stopColor="rgba(254,215,170,0.35)"/>
                                            <stop offset="70%" stopColor="rgba(249,115,22,0.18)"/>
                                            <stop offset="100%" stopColor="rgba(194,65,12,0.28)"/>
                                        </radialGradient>

                                        <radialGradient id="crystalGreen" cx="30%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.7)"/>
                                            <stop offset="30%" stopColor="rgba(187,247,208,0.35)"/>
                                            <stop offset="70%" stopColor="rgba(34,197,94,0.18)"/>
                                            <stop offset="100%" stopColor="rgba(22,163,74,0.28)"/>
                                        </radialGradient>

                                        <radialGradient id="crystalCyan" cx="30%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.7)"/>
                                            <stop offset="30%" stopColor="rgba(165,243,252,0.35)"/>
                                            <stop offset="70%" stopColor="rgba(6,182,212,0.18)"/>
                                            <stop offset="100%" stopColor="rgba(8,145,178,0.28)"/>
                                        </radialGradient>

                                        <radialGradient id="crystalIndigo" cx="30%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.75)"/>
                                            <stop offset="25%" stopColor="rgba(199,210,254,0.4)"/>
                                            <stop offset="60%" stopColor="rgba(99,102,241,0.25)"/>
                                            <stop offset="100%" stopColor="rgba(67,56,202,0.35)"/>
                                        </radialGradient>

                                        {/* Highlight arc for 3D effect */}
                                        <linearGradient id="highlightArc" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.8)"/>
                                            <stop offset="50%" stopColor="rgba(255,255,255,0)"/>
                                        </linearGradient>
                                    </defs>

                                    {/* Hexagonal arrangement - slightly overlapping */}

                                    {/* Top - ISO 27001 - Blue */}
                                    <g filter="url(#crystalShadow)">
                                        <circle cx="250" cy="135" r="68" fill="url(#crystalBlue)"/>
                                        <ellipse cx="250" cy="110" rx="45" ry="20" fill="url(#highlightArc)" opacity="0.5"/>
                                        <circle cx="250" cy="135" r="68" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
                                    </g>

                                    {/* Top Right - SOC 2 - Purple */}
                                    <g filter="url(#crystalShadow)">
                                        <circle cx="355" cy="192" r="65" fill="url(#crystalPurple)"/>
                                        <ellipse cx="355" cy="169" rx="42" ry="18" fill="url(#highlightArc)" opacity="0.5"/>
                                        <circle cx="355" cy="192" r="65" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1"/>
                                    </g>

                                    {/* Bottom Right - GDPR - Pink */}
                                    <g filter="url(#crystalShadow)">
                                        <circle cx="355" cy="308" r="65" fill="url(#crystalPink)"/>
                                        <ellipse cx="355" cy="285" rx="42" ry="18" fill="url(#highlightArc)" opacity="0.5"/>
                                        <circle cx="355" cy="308" r="65" fill="none" stroke="rgba(236,72,153,0.3)" strokeWidth="1"/>
                                    </g>

                                    {/* Bottom - RBI Audits - Orange */}
                                    <g filter="url(#crystalShadow)">
                                        <circle cx="250" cy="365" r="68" fill="url(#crystalOrange)"/>
                                        <ellipse cx="250" cy="340" rx="45" ry="20" fill="url(#highlightArc)" opacity="0.5"/>
                                        <circle cx="250" cy="365" r="68" fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="1"/>
                                    </g>

                                    {/* Bottom Left - Training - Green */}
                                    <g filter="url(#crystalShadow)">
                                        <circle cx="145" cy="308" r="65" fill="url(#crystalGreen)"/>
                                        <ellipse cx="145" cy="285" rx="42" ry="18" fill="url(#highlightArc)" opacity="0.5"/>
                                        <circle cx="145" cy="308" r="65" fill="none" stroke="rgba(34,197,94,0.3)" strokeWidth="1"/>
                                    </g>

                                    {/* Top Left - PCI DSS - Cyan */}
                                    <g filter="url(#crystalShadow)">
                                        <circle cx="145" cy="192" r="65" fill="url(#crystalCyan)"/>
                                        <ellipse cx="145" cy="169" rx="42" ry="18" fill="url(#highlightArc)" opacity="0.5"/>
                                        <circle cx="145" cy="192" r="65" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
                                    </g>

                                    {/* Center circle - Compliance Hub (on top) */}
                                    <g filter="url(#crystalShadow)">
                                        <circle cx="250" cy="250" r="72" fill="url(#crystalIndigo)"/>
                                        <ellipse cx="250" cy="222" rx="48" ry="22" fill="url(#highlightArc)" opacity="0.55"/>
                                        <circle cx="250" cy="250" r="72" fill="none" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5"/>
                                    </g>

                                    {/* Labels - centered in each circle */}
                                    <text x="250" y="246" textAnchor="middle" fill="#3730a3" style={{ fontSize: '14px', fontWeight: '700' }}>Compliance</text>
                                    <text x="250" y="263" textAnchor="middle" fill="#4f46e5" style={{ fontSize: '10px', fontWeight: '500' }}>Hub</text>

                                    <text x="250" y="131" textAnchor="middle" fill="#1e3a8a" style={{ fontSize: '12px', fontWeight: '600' }}>ISO 27001</text>
                                    <text x="250" y="146" textAnchor="middle" fill="#2563eb" style={{ fontSize: '9px' }}>Information Security</text>

                                    <text x="355" y="188" textAnchor="middle" fill="#4c1d95" style={{ fontSize: '12px', fontWeight: '600' }}>SOC 2</text>
                                    <text x="355" y="203" textAnchor="middle" fill="#7c3aed" style={{ fontSize: '9px' }}>Trust Services</text>

                                    <text x="355" y="304" textAnchor="middle" fill="#831843" style={{ fontSize: '12px', fontWeight: '600' }}>GDPR</text>
                                    <text x="355" y="319" textAnchor="middle" fill="#db2777" style={{ fontSize: '9px' }}>Privacy</text>

                                    <text x="250" y="361" textAnchor="middle" fill="#7c2d12" style={{ fontSize: '12px', fontWeight: '600' }}>RBI Audits</text>
                                    <text x="250" y="376" textAnchor="middle" fill="#ea580c" style={{ fontSize: '9px' }}>Banking Compliance</text>

                                    <text x="145" y="304" textAnchor="middle" fill="#14532d" style={{ fontSize: '12px', fontWeight: '600' }}>Training</text>
                                    <text x="145" y="319" textAnchor="middle" fill="#16a34a" style={{ fontSize: '9px' }}>Awareness</text>

                                    <text x="145" y="188" textAnchor="middle" fill="#164e63" style={{ fontSize: '12px', fontWeight: '600' }}>PCI DSS</text>
                                    <text x="145" y="203" textAnchor="middle" fill="#0891b2" style={{ fontSize: '9px' }}>Payment Security</text>
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SERVICES CAROUSEL SECTION - Horizontal scroll with tabs */}
            <section className="py-20 md:py-28 overflow-hidden bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-3xl mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-primary font-medium mb-3 text-sm uppercase tracking-wide">Compliance Solutions</p>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4">
                            Enterprise-grade compliance,<br />simplified for your business
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Choose from our comprehensive suite of compliance services. Each solution is tailored
                            to help you achieve certification efficiently and maintain it effortlessly.
                        </p>
                    </motion.div>

                    {/* Service tabs carousel */}
                    <div className="relative mb-8">
                        {/* Carousel navigation */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex gap-2">
                                {services.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveServiceIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            i === activeServiceIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/30'
                                        }`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setActiveServiceIndex((prev) => Math.max(0, prev - 1))}
                                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setActiveServiceIndex((prev) => Math.min(services.length - 1, prev + 1))}
                                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Horizontal scrolling tabs */}
                        <div className="service-tabs-container">
                            <div ref={carouselRef} className="service-tabs-scroll gap-4 pb-4">
                                {services.map((service, index) => (
                                    <ServiceTabCard
                                        key={index}
                                        service={service}
                                        isActive={index === activeServiceIndex}
                                        onClick={() => setActiveServiceIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Active service detail */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeServiceIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid lg:grid-cols-2 gap-12 items-center mt-12"
                        >
                            <div>
                                <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-4">
                                    {services[activeServiceIndex].title}
                                </h3>
                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    {services[activeServiceIndex].description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {services[activeServiceIndex].features?.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={services[activeServiceIndex].href}
                                    className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
                                >
                                    Learn more
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {(() => {
                                            const IconComponent = services[activeServiceIndex].icon
                                            return <IconComponent className={`w-32 h-32 ${services[activeServiceIndex].iconColor} opacity-20`} />
                                        })()}
                                    </div>
                                </div>
                                {/* Floating stat */}
                                <div className="absolute -bottom-4 -right-4 bg-foreground text-background px-6 py-4 rounded-xl shadow-xl">
                                    <div className="text-2xl font-bold">{services[activeServiceIndex].stat}</div>
                                    <div className="text-sm text-background/70">{services[activeServiceIndex].statLabel}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* STATS SECTION - Premium glassmorphism design */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-white/60 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* DETAILED SERVICES SECTIONS - Alternating left/right */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <p className="text-primary font-medium mb-3 text-sm uppercase tracking-wide">Our Expertise</p>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4">
                            Comprehensive compliance services
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From ISO certifications to regulatory audits, we provide end-to-end compliance solutions
                        </p>
                    </motion.div>

                    {/* Service detail sections - alternating */}
                    {detailedServices.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`grid lg:grid-cols-2 gap-12 items-center py-16 ${index !== 0 ? 'border-t border-border' : ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Content */}
                            <motion.div
                                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                                className={index % 2 === 1 ? 'lg:order-2' : ''}
                            >
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${service.iconBg}`}>
                                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-4">
                                    {service.title}
                                </h3>
                                {service.highlight && (
                                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground rounded-full mb-4">
                                        {service.highlight}
                                    </span>
                                )}
                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-medium hover:bg-secondary/90 transition-colors"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>

                            {/* Visual - Colorful mockup card */}
                            <motion.div
                                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                            >
                                {/* Colorful background shapes */}
                                <div className="absolute -inset-4 -z-10">
                                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-40 ${
                                        index % 4 === 0 ? 'bg-pink-400' :
                                        index % 4 === 1 ? 'bg-blue-400' :
                                        index % 4 === 2 ? 'bg-purple-400' : 'bg-green-400'
                                    }`} />
                                    <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl opacity-40 ${
                                        index % 4 === 0 ? 'bg-yellow-400' :
                                        index % 4 === 1 ? 'bg-purple-400' :
                                        index % 4 === 2 ? 'bg-orange-400' : 'bg-cyan-400'
                                    }`} />
                                </div>

                                {/* Mockup card */}
                                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                    {/* Card header */}
                                    <div className={`h-2 ${
                                        index % 4 === 0 ? 'bg-gradient-to-r from-pink-500 to-purple-500' :
                                        index % 4 === 1 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                                        index % 4 === 2 ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-green-500 to-emerald-500'
                                    }`} />

                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                                                <span className="font-semibold text-gray-900">{service.title.split(' - ')[0]}</span>
                                            </div>
                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
                                        </div>

                                        {/* Progress indicators */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Compliance Progress</span>
                                                <span className="font-medium text-gray-900">94%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${
                                                    index % 4 === 0 ? 'bg-pink-500' :
                                                    index % 4 === 1 ? 'bg-blue-500' :
                                                    index % 4 === 2 ? 'bg-amber-500' : 'bg-green-500'
                                                }`} style={{ width: '94%' }} />
                                            </div>
                                        </div>

                                        {/* Stat badge */}
                                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Achievement</p>
                                            <p className="text-lg font-bold text-gray-900">{service.stat}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* INDUSTRIES SECTION - Premium cards with framework bundles */}
            <section className="py-20 md:py-28 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <p className="text-secondary font-medium mb-3 text-sm uppercase tracking-wide">Industry Solutions</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-4">
                            Compliance Bundles for Your Industry
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Pre-configured framework combinations designed for your sector's specific regulatory requirements.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {industries.map((industry, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Link href={industry.link} className="group block h-full">
                                    <div className="h-full relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div
                                            className="absolute top-0 left-0 right-0 h-1"
                                            style={{ background: industry.color }}
                                        />
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                            style={{ background: `${industry.color}20` }}
                                        >
                                            <industry.icon className="w-6 h-6" style={{ color: industry.color }} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {industry.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                            {industry.description}
                                        </p>
                                        {/* Framework badges */}
                                        <div className="text-xs font-medium text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full inline-block">
                                            {industry.frameworks}
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 mt-4 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* WHY CHOOSE US - Feature grid */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-accent font-medium mb-3">Why Tranquility</p>
                            <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-6">
                                Built for modern compliance challenges
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                We combine deep expertise with a practical approach to help you achieve
                                compliance without disrupting your business operations.
                            </p>

                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{feature.title}</h4>
                                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Testimonial card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-card border border-border rounded-2xl p-8 shadow-lg"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-foreground text-lg mb-6 leading-relaxed">
                                "Tranquility Cybersecurity transformed our approach to compliance. Their team
                                worked closely with us to develop tailored solutions that achieved compliance
                                and strengthened our security posture."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm">RS</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">Rajiv Sharma</p>
                                    <p className="text-muted-foreground text-sm">CTO, CloudPeak SaaS</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION - Carousel */}
            <section className="py-20 md:py-28 bg-muted/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-12"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-4">
                            What customers are saying
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            Customers of all sizes trust Tranquility for expert compliance guidance.
                        </p>
                        <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6">
                            <Link href="/clients">Read More</Link>
                        </Button>
                    </motion.div>

                    {/* Testimonials carousel */}
                    <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0 w-[350px] md:w-[400px] snap-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                                        {/* Company logo placeholder */}
                                        <div className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">
                                            {testimonial.company}
                                        </div>

                                        <p className="text-foreground text-base mb-6 leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>

                                        <div className="flex items-center gap-3 pt-4 border-t border-border">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                                <span className="text-primary font-semibold text-sm">{testimonial.initials}</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                                                <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Carousel dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i === 1 ? 'w-6 bg-secondary' : 'bg-muted-foreground/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION - Clean and focused */}
            <section className="py-20 md:py-28 bg-foreground dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl font-normal text-background dark:text-foreground mb-4">
                            Ready to simplify your compliance journey?
                        </h2>
                        <p className="text-background/70 dark:text-muted-foreground text-lg mb-8">
                            Get started with a free consultation. Our experts will assess your needs
                            and create a tailored roadmap for your compliance goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                asChild
                                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base font-medium rounded-full"
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    Schedule a consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-background/30 dark:border-border hover:bg-background/10 dark:hover:bg-muted text-background dark:text-foreground h-12 px-8 text-base font-medium rounded-full"
                            >
                                <Link href="/about">Learn about us</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

// Services data for carousel
const services = [
    { title: "ISO 27001", shortDesc: "Information Security Management", icon: FileText, iconBg: "bg-blue-100 dark:bg-blue-900/30", iconColor: "text-blue-600 dark:text-blue-400", href: "/services/iso-27001", description: "Implement a comprehensive ISMS that protects your organization's information assets.", features: ["Gap analysis", "ISMS implementation", "Risk assessment", "Certification prep"], stat: "100% Success", statLabel: "Certification rate" },
    { title: "SOC 2", shortDesc: "Trust Services Compliance", icon: Lock, iconBg: "bg-purple-100 dark:bg-purple-900/30", iconColor: "text-purple-600 dark:text-purple-400", href: "/services/soc-2", description: "Build enterprise trust with SOC 2 Type I and Type II reports.", features: ["Control design", "Evidence automation", "Auditor liaison"], stat: "60% Faster", statLabel: "Than average" },
    { title: "ISO 42001", shortDesc: "AI Management Systems", icon: Brain, iconBg: "bg-pink-100 dark:bg-pink-900/30", iconColor: "text-pink-600 dark:text-pink-400", href: "/services/iso-42001", description: "Lead the AI governance revolution with ISO 42001 certification.", features: ["AI risk assessment", "Governance framework", "Ethical AI audit"], stat: "Future Ready", statLabel: "AI Compliance" },
    { title: "SOC 1", shortDesc: "Financial Controls", icon: Landmark, iconBg: "bg-cyan-100 dark:bg-cyan-900/30", iconColor: "text-cyan-600 dark:text-cyan-400", href: "/services/soc-1", description: "Ensure financial reporting controls meet AICPA standards.", features: ["ITGC controls", "Type I/II reports", "Evidence testing"], stat: "SSAE 18", statLabel: "Compliant" },
    { title: "RBI Audits", shortDesc: "Banking Compliance", icon: Building, iconBg: "bg-amber-100 dark:bg-amber-900/30", iconColor: "text-amber-600 dark:text-amber-400", href: "/services/rbi-compliance", description: "Complete RBI compliance for banks and NBFCs.", features: ["RBI guidelines", "Cyber security framework", "IS audit"], stat: "India", statLabel: "Banking ready" },
    { title: "Training", shortDesc: "Compliance Education", icon: GraduationCap, iconBg: "bg-green-100 dark:bg-green-900/30", iconColor: "text-green-600 dark:text-green-400", href: "/services/training", description: "Expert-led training and workshops for your team.", features: ["Webinars", "Live sessions", "Certifications"], stat: "1000+", statLabel: "Trained" },
]

// Detailed services for alternating sections
const detailedServices = [
    {
        title: "ISO 42001 - AI Management Systems",
        icon: Brain,
        iconBg: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
        iconColor: "text-pink-500",
        href: "/services/iso-42001",
        highlight: "🔥 Key Selling Point",
        description: "As AI transforms every industry, organizations need robust governance frameworks. ISO 42001 is the world's first AI management system standard, helping you demonstrate responsible AI practices to stakeholders, regulators, and customers.",
        features: [
            "AI risk assessment and mitigation strategies",
            "Ethical AI governance framework implementation",
            "Bias detection and fairness auditing",
            "AI transparency and explainability documentation",
            "Continuous monitoring and improvement processes"
        ],
        stat: "First-Mover Advantage"
    },
    {
        title: "ISO 27001 - Information Security",
        icon: FileText,
        iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-500",
        href: "/services/iso-27001",
        description: "The gold standard for information security management. ISO 27001 certification opens doors to enterprise clients globally and demonstrates your commitment to protecting sensitive data.",
        features: [
            "Comprehensive gap analysis and readiness assessment",
            "ISMS design, documentation, and implementation",
            "Risk assessment and treatment planning",
            "Internal audit and management review support",
            "Certification audit preparation and support"
        ],
        stat: "100% Success Rate"
    },
    {
        title: "SOC 2 - Trust Services",
        icon: Lock,
        iconBg: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
        iconColor: "text-purple-500",
        href: "/services/soc-2",
        description: "Essential for SaaS companies and service providers. SOC 2 reports demonstrate your commitment to security, availability, and confidentiality - accelerating enterprise sales cycles.",
        features: [
            "Control design and implementation guidance",
            "Trust Services Criteria mapping",
            "Automated evidence collection setup",
            "Auditor liaison and examination support",
            "Continuous compliance monitoring"
        ],
        stat: "60% Faster Certification"
    },
    {
        title: "RBI & CICRA Audits",
        icon: Building,
        iconBg: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-500",
        href: "/services/rbi-compliance",
        description: "Comprehensive regulatory compliance for Indian financial institutions. We help banks, NBFCs, and payment companies meet RBI cybersecurity framework requirements and CICRA audit standards.",
        features: [
            "RBI Cybersecurity Framework compliance",
            "CICRA audit preparation and support",
            "IS Audit for banking institutions",
            "Business continuity and disaster recovery",
            "Regulatory reporting and documentation"
        ],
        stat: "Banking Sector Experts"
    },
    {
        title: "Training & Consultations",
        icon: GraduationCap,
        iconBg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-500",
        href: "/services/training",
        description: "Empower your team with expert-led compliance training. From awareness sessions to advanced certification prep, we offer comprehensive educational programs.",
        features: [
            "Live webinars and interactive sessions",
            "On-site and virtual training programs",
            "Certification preparation courses",
            "Custom workshops for your organization",
            "Ongoing consultation and advisory services"
        ],
        stat: "1000+ Professionals Trained"
    },
    {
        title: "ISO 27701 - Privacy Management",
        icon: Globe,
        iconBg: "bg-gradient-to-br from-teal-500/20 to-green-500/20",
        iconColor: "text-teal-500",
        href: "/services/iso-27701",
        description: "Extend your ISMS to include privacy management. ISO 27701 helps you demonstrate GDPR, DPDP Act, and other privacy regulation compliance through a structured framework.",
        features: [
            "Privacy information management system (PIMS)",
            "GDPR and DPDP Act compliance mapping",
            "Data processing documentation",
            "Privacy impact assessments",
            "Certification audit preparation"
        ],
        stat: "Privacy-First Approach"
    },
]

// Three Service Pillars data
const servicePillars = [
    {
        title: "Compliance Certification",
        description: "Get audit-ready for global frameworks with our expert-led certification programs.",
        icon: Shield,
        iconBg: "bg-blue-100 dark:bg-blue-900/30",
        iconColor: "text-blue-600 dark:text-blue-400",
        gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
        services: [
            "ISO 27001/27701/42001 Certification",
            "SOC 1/2/3 Implementation & Audit Support",
            "RBI Cybersecurity Framework Alignment",
            "HIPAA, DPDP, GDPR Compliance"
        ],
        cta: "Explore Frameworks",
        href: "/services"
    },
    {
        title: "Security Testing & Validation",
        description: "Identify vulnerabilities before attackers do with comprehensive security assessments.",
        icon: Crosshair,
        iconBg: "bg-red-100 dark:bg-red-900/30",
        iconColor: "text-red-600 dark:text-red-400",
        gradient: "bg-gradient-to-r from-red-500 to-orange-500",
        services: [
            "VAPT (Web, Mobile, Network, Cloud)",
            "Penetration Testing (All Types)",
            "Red Team Engagements",
            "Security Architecture Reviews"
        ],
        cta: "View Testing Services",
        href: "/services/vapt"
    },
    {
        title: "Managed Security & Advisory",
        description: "Ongoing security leadership and compliance expertise for your organization.",
        icon: UserCheck,
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        iconColor: "text-purple-600 dark:text-purple-400",
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
        services: [
            "vCISO (Virtual CISO) Services",
            "DPO as a Service (Data Protection Officer)",
            "Continuous Compliance Monitoring",
            "Third-Party Risk Management"
        ],
        cta: "Explore Advisory",
        href: "/services/training"
    }
]

// Frameworks data for quick access section
const frameworks = [
    { name: "ISO 27001", icon: Shield, iconColor: "text-blue-600", description: "Organize all your audit info and prepare for ISMS certification with confidence.", href: "/services/iso-27001" },
    { name: "SOC 2", icon: Lock, iconColor: "text-purple-600", description: "Build trust with enterprise customers through verified security controls.", href: "/services/soc-2" },
    { name: "ISO 42001", icon: Brain, iconColor: "text-pink-600", description: "Lead the AI governance revolution with the world's first AI management standard.", href: "/services/iso-42001" },
    { name: "GDPR", icon: Globe, iconColor: "text-green-600", description: "Navigate EU data protection requirements and build customer trust.", href: "/services/gdpr" },
]

// Stats data with icons
const stats = [
    { value: "500+", label: "Audits Delivered", icon: <Award className="w-6 h-6 text-blue-400" /> },
    { value: "100%", label: "Success Rate", icon: <CheckCircle className="w-6 h-6 text-green-400" /> },
    { value: "15+", label: "Frameworks Supported", icon: <Shield className="w-6 h-6 text-purple-400" /> },
    { value: "50+", label: "Enterprise Clients", icon: <Users className="w-6 h-6 text-orange-400" /> },
]

// Industries data - Enhanced with framework bundles
const industries = [
    {
        icon: Heart,
        title: "Healthcare & AI Healthcare",
        description: "HIPAA + ISO 27001 + AI Governance (ISO 42001) for healthcare organizations.",
        frameworks: "HIPAA • ISO 27001 • ISO 42001",
        link: "/industries#healthcare",
        color: "#10b981",
    },
    {
        icon: Landmark,
        title: "Fintech & Financial Services",
        description: "RBI Compliance + SOC 2 + ISO 27001 for banks, NBFCs, and payment processors.",
        frameworks: "RBI • SOC 2 • PCI DSS",
        link: "/industries#fintech",
        color: "#3b82f6",
    },
    {
        icon: Cloud,
        title: "SaaS & Technology",
        description: "SOC 2 Type 2 + ISO 27001 + VAPT for technology companies scaling globally.",
        frameworks: "SOC 2 • ISO 27001 • VAPT",
        link: "/industries#saas-tech",
        color: "#8b5cf6",
    },
    {
        icon: Factory,
        title: "Logistics & Enterprise",
        description: "ISO 27001 + Data Privacy + Security Testing for logistics and supply chain.",
        frameworks: "ISO 27001 • DPDP • Security Audit",
        link: "/industries#manufacturing",
        color: "#f97316",
    },
]

// Features data
const features = [
    {
        title: "Expert-led assessments",
        description: "Our certified professionals guide you through every step of the compliance process.",
    },
    {
        title: "Tailored solutions",
        description: "We customize our approach based on your industry, size, and specific requirements.",
    },
    {
        title: "Continuous support",
        description: "From initial assessment to certification and beyond, we're with you every step.",
    },
    {
        title: "Proven methodology",
        description: "Our structured approach has helped 50+ companies achieve compliance successfully.",
    },
]

// Testimonials data
const testimonials = [
    {
        company: "CloudPeak SaaS",
        quote: "Tranquility Cybersecurity transformed our approach to compliance. Their team worked closely with us to achieve SOC 2 certification in record time.",
        name: "Rajiv Sharma",
        role: "CTO",
        initials: "RS",
    },
    {
        company: "FinServe India",
        quote: "A big thank you to Tranquility who guided us with skill and patience. Thank you for helping us structure our RBI compliance. We have improved in every area.",
        name: "Priya Menon",
        role: "Compliance Manager",
        initials: "PM",
    },
    {
        company: "DataGuard Tech",
        quote: "We are delighted with the collaboration. Their involvement enabled us to achieve ISO 27001 certification smoothly. A great team with cheerful energy!",
        name: "Amit Patel",
        role: "Director of Engineering",
        initials: "AP",
    },
    {
        company: "SecureBank NBF",
        quote: "Their expertise in RBI and CICRA audits is unmatched. They helped us navigate complex regulatory requirements with ease and professionalism.",
        name: "Neha Gupta",
        role: "CISO",
        initials: "NG",
    },
    {
        company: "AInnova Labs",
        quote: "The ISO 42001 AI Management certification was crucial for our business. Tranquility's team understood the nuances and delivered beyond expectations.",
        name: "Vikram Singh",
        role: "CEO",
        initials: "VS",
    },
]