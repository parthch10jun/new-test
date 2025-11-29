"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function AnimatedText({
  text,
  className = "",
  highlightWords = [],
  highlightClassName = "",
  animation = "default",
}) {
  const [words, setWords] = useState([])

  useEffect(() => {
    // Split text into words
    const textWords = text.split(" ")
    setWords(textWords)
  }, [text])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  const glitchVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    glitch1: {
      opacity: 1,
      skew: [0, 3, -3, 0],
      x: [0, 3, -3, 0],
      color: ["#ffffff", "#8b5cf6", "#3b82f6", "#ffffff"],
      transition: { duration: 0.3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 },
    },
    glitch2: {
      opacity: 1,
      y: [0, -2, 2, 0],
      color: ["#ffffff", "#3b82f6", "#8b5cf6", "#ffffff"],
      transition: { duration: 0.3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5, delay: 0.15 },
    },
  }

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 0.5,
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  // Choose animation style
  const getAnimationVariant = (word, index) => {
    switch (animation) {
      case "glitch":
        return index % 2 === 0 ? "glitch1" : "glitch2"
      case "typewriter":
        return "visible"
      default:
        return "visible"
    }
  }

  // Check if word should be highlighted
  const isHighlighted = (word) => {
    return highlightWords.some((highlight) => word.toLowerCase().includes(highlight.toLowerCase()))
  }

  if (animation === "typewriter") {
    return (
      <div className={className}>
        <motion.div
          variants={typewriterVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden whitespace-nowrap"
        >
          {text}
        </motion.div>
      </div>
    )
  }

  if (animation === "fade") {
    return (
      <motion.div variants={fadeInVariants} initial="hidden" animate="visible" className={className}>
        {text}
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={animation === "glitch" ? glitchVariants : wordVariants}
          animate={getAnimationVariant(word, index)}
          className={`mr-2 ${isHighlighted(word) ? highlightClassName : ""}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
