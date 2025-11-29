"use client"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"

export default function AnimatedHeading({ title, subtitle, className = "" }) {
    // Split title into "Tranquility" and "Cybersecurity"
    const [firstWord, secondWord] = title.split(" ")

    // Animation variants for the title
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    // Animation variants for the subtitle
    const subtitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
            },
        },
    }

    // Animation for the letters
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    }

    // Split words into letters for animation
    const firstWordLetters = firstWord.split("")
    const secondWordLetters = secondWord ? secondWord.split("") : []

    return (
        <div className={`relative flex flex-col items-center ${className}`}>
            {/* Sparkles background */}
            <div className="absolute inset-0 h-full w-full">
                <SparklesCore
                    id="tsparticles"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleColor="#8b5cf6"
                    particleDensity={70}
                    speed={1}
                    className="w-full h-full"
                />
            </div>

            {/* Title with letter-by-letter animation */}
            <motion.h1
                className="relative z-10 flex flex-col sm:flex-row sm:items-baseline justify-center text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-6 tracking-tight text-primary"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span className="sr-only">{title}</span>
                <div className="flex flex-col sm:flex-row sm:space-x-2 text-center">
                    {/* First word: Tranquility */}
                    <span className="inline-block" aria-hidden="true">
            {firstWordLetters.map((letter, index) => (
                <motion.span
                    key={`first-${index}`}
                    custom={index}
                    variants={letterVariants}
                    className="inline-block text-primary"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
          </span>
                    {/* Second word: Cybersecurity */}
                    {secondWord && (
                        <span className="inline-block" aria-hidden="true">
              {secondWordLetters.map((letter, index) => (
                  <motion.span
                      key={`second-${index}`}
                      custom={index + firstWordLetters.length}
                      variants={letterVariants}
                      className="inline-block text-primary"
                  >
                      {letter === " " ? "\u00A0" : letter}
                  </motion.span>
              ))}
            </span>
                    )}
                </div>
            </motion.h1>

            {/* Subtitle with fade-in animation */}
            <motion.p
                className="relative z-10 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {subtitle}
            </motion.p>
        </div>
    )
}
