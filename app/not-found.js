// app/not-found.js
"use client"

import Link from "next/link"
import { ShieldAlert, Home, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function NotFound() {
    const phoneNumber = "+917303450710"
    const [animatedElements, setAnimatedElements] = useState([]);

    useEffect(() => {
        const elements = [...Array(5)].map(() => ({
            x: `${Math.random() * 100 - 50}vw`,
            y: `${Math.random() * 100 - 50}vh`,
            duration: Math.random() * 5 + 5,
            delay: Math.random() * 2,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
        }));
        setAnimatedElements(elements);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 overflow-hidden relative">
            {/* Subtle background grid */}
            <div
                className="absolute inset-0 z-0 opacity-5"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(168, 85, 247, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            {/* Animated background elements (optional, for more cyber feel) */}
            {animatedElements.map((element, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-purple-500/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        scale: [0, 1, 0],
                        x: element.x,
                        y: element.y,
                    }}
                    transition={{
                        duration: element.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: element.delay,
                        ease: "linear",
                    }}
                    style={{
                        width: element.width,
                        height: element.height,
                        filter: "blur(20px)",
                    }}
                />
            ))}

            <motion.div
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        filter: ["drop-shadow(0 0 0px #a855f7)", "drop-shadow(0 0 15px #a855f7)", "drop-shadow(0 0 0px #a855f7)"],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                    <ShieldAlert className="w-24 h-24 text-purple-400 mb-6" />
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    404
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-slate-300 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Access Denied: Endpoint Obscured
                </motion.p>
                <motion.p
                    className="text-md md:text-lg text-slate-400 mb-8 max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    {
                        "The resource you're attempting to access seems to have vanished into the digital ether or is beyond your current clearance level."
                    }
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Button
                        asChild
                        variant="outline"
                        className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 group"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                            Return to Secure Zone (Homepage)
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        className="bg-transparent border-sky-500 text-sky-400 hover:bg-sky-500/20 hover:text-sky-300 transition-all duration-300 group"
                        onClick={() => {
                            if (phoneNumber === "YOUR_WHATSAPP_NUMBER_HERE") {
                                alert("WhatsApp number not configured by site admin.")
                                return
                            }
                            window.open(`https://wa.me/${phoneNumber.replace(/\s+/g, "")}`, "_blank")
                        }}
                    >
                        <MessageCircle className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-[15deg]" />
                        Report Anomaly (WhatsApp)
                    </Button>
                </motion.div>
                <p className="mt-8 text-xs text-slate-500">If you believe this is an error, please contact system command.</p>
            </motion.div>
        </div>
    )
}