"use client"

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export const MeteorCTA = () => {
    return (
        <BackgroundBeamsWithCollision className="h-auto py-24 relative bg-gradient-to-b from-background to-muted/50 dark:from-cyber-darker dark:to-cyber-dark">
            <div className="container mx-auto px-4">
                <motion.div
                    className="relative max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Gradient border effect */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary opacity-50 blur-sm" />

                    <div className="relative glass-card p-8 md:p-12 rounded-2xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                    <span className="text-primary text-sm font-medium">Ready to Get Started?</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Secure Your Future with{" "}
                                    <span className="text-gradient-cyber">Tranquility</span>
                                </h2>
                                <p className="text-muted-foreground mb-6 md:mb-0 max-w-xl">
                                    Get a tailored compliance and security assessment today. Our experts are ready to help you achieve your security goals.
                                </p>
                            </div>
                            <Button
                                className="bg-primary text-primary-foreground font-semibold px-8 py-6 text-lg whitespace-nowrap rounded-xl shadow-md hover:shadow-lg dark:shadow-neon-cyan dark:hover:shadow-glow-lg transition-all duration-300"
                                asChild
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    Get Started <ChevronRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </BackgroundBeamsWithCollision>
    )
}
