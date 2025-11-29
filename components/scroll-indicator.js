"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
    return (
        <motion.div
            className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-muted-foreground cursor-pointer z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            onClick={() => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                })
            }}
        >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
                animate={{
                    y: [0, 8, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                }}
            >
                <ChevronDown className="h-5 w-5" />
            </motion.div>
        </motion.div>
    )
}