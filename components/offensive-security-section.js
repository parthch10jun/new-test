"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Bug, Flame, Terminal, Code, Zap } from "lucide-react"

export default function OffensiveSecuritySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("offensive-security-section")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const glitchVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, -3, 5, -5, 3, 0],
      transition: {
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 5,
      },
    },
  }

  return (
    <section id="offensive-security-section" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Proactive Security Validation
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We rigorously test your defenses to identify weaknesses, ensuring your security controls are effective and aligned with compliance mandates.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Card 1: Penetration Testing */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg overflow-hidden group interactive-card"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            ></motion.div>

            <div className="p-8 relative z-10 h-full flex flex-col">
              <div className="mb-6 flex justify-between items-start">
                <motion.div
                  className="p-3 bg-purple-900/30 rounded-lg text-purple-400"
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Terminal size={32} />
                </motion.div>
                <motion.div
                  variants={glitchVariants}
                  initial="initial"
                  animate="animate"
                  className="text-xs font-mono text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full"
                >
                  Identify & Mitigate
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                Penetration Testing
              </h3>

              <p className="text-slate-300 mb-6 flex-grow">
                Our ethical hackers simulate real-world attacks to uncover vulnerabilities in your systems, applications, and networks, providing actionable insights to strengthen defenses and meet compliance requirements (e.g., PCI-DSS, ISO 27001).
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Network</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Web Apps</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">API</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Cloud</span>
              </div>

              <div className="flex items-center text-sm text-purple-400">
                <span>Strengthen Defenses</span>
                <motion.div variants={pulseVariants} initial="initial" animate="animate" className="ml-2">
                  <Shield size={16} />
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
          </motion.div>

          {/* Card 2: Bug Bounty */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg overflow-hidden group interactive-card"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            ></motion.div>

            <div className="p-8 relative z-10 h-full flex flex-col">
              <div className="mb-6 flex justify-between items-start">
                <motion.div
                  className="p-3 bg-blue-900/30 rounded-lg text-blue-400"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Bug size={32} />
                </motion.div>
                <motion.div
                  variants={glitchVariants}
                  initial="initial"
                  animate="animate"
                  className="text-xs font-mono text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full"
                >
                  Global Expertise
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                Continuous Vulnerability Discovery
              </h3>

              <p className="text-slate-300 mb-6 flex-grow">
                Leverage the power of a global network of security researchers through our managed bug bounty programs to continuously identify emerging vulnerabilities in your evolving systems.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Crowdsourced</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Continuous</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Diverse</span>
              </div>

              <div className="flex items-center text-sm text-blue-400">
                <span>Uncover Emerging Threats</span>
                <motion.div variants={floatVariants} initial="initial" animate="animate" className="ml-2">
                  <Code size={16} />
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            ></motion.div>
          </motion.div>

          {/* Card 3: Red Teaming */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg overflow-hidden group interactive-card"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            ></motion.div>

            <div className="p-8 relative z-10 h-full flex flex-col">
              <div className="mb-6 flex justify-between items-start">
                <motion.div
                  className="p-3 bg-red-900/30 rounded-lg text-red-400"
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Flame size={32} />
                </motion.div>
                <motion.div
                  variants={glitchVariants}
                  initial="initial"
                  animate="animate"
                  className="text-xs font-mono text-red-400 bg-red-900/30 px-3 py-1 rounded-full"
                >
                  Test Resilience
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                Red Team Operations
              </h3>

              <p className="text-slate-300 mb-6 flex-grow">
                Our advanced red team operations simulate sophisticated, objective-driven attacks to realistically test your organization's detection capabilities, incident response procedures, and overall security resilience.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Advanced</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Targeted</span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Stealthy</span>
              </div>

              <div className="flex items-center text-sm text-red-400">
                <span>Measure Resilience</span>
                <motion.div variants={pulseVariants} initial="initial" animate="animate" className="ml-2">
                  <Shield size={16} />
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
