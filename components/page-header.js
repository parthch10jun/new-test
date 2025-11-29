"use client"

import { motion } from "framer-motion"

export default function PageHeader({ title, description, image }) {
  return (
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          {image ? (
              <img
                  src={image || "/placeholder.svg?width=1200&height=400&query=abstract+header+background"}
                  alt={title || "Page Header"}
                  className="absolute inset-0 w-full h-full object-cover"
              />
          ) : (
              <div className="absolute inset-0 bg-gradient-to-r from-muted via-accent/20 to-muted dark:from-cyber-darker dark:via-accent/30 dark:to-cyber-darker"></div>
          )}
          <div className="absolute inset-0 bg-background/20 dark:bg-background/50 backdrop-blur-sm"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <motion.h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>

          {/* Animated Bottom Border */}
          <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </div>
      </div>
  )
}
