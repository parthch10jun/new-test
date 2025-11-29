"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils" // Assuming cn is available for utility classes

const CustomToast = ({ id, title, description, onDismiss, className, ...props }) => {
    return (
        <AnimatePresence>
            <motion.div
                key={id}
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.5 }}
                className={cn(
                    "fixed bottom-4 right-4 z-[9999] w-full max-w-sm rounded-lg border bg-white/10 p-4 shadow-lg backdrop-blur-md backdrop-filter",
                    "border-gray-200/20 text-white", // Glass panel effect
                    "overflow-hidden", // For scratched effect
                    className
                )}
                {...props}
            >
                <div className="relative z-10">
                    {title && <h3 className="text-lg font-bold">{title}</h3>}
                    {description && <p className="text-sm">{description}</p>}
                    <button
                        onClick={() => onDismiss(id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
                    >
                        &times;
                    </button>
                </div>
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{
                    backgroundImage: "url('/premium.jpeg')",
                    backgroundSize: "cover",
                    backgroundBlendMode: "overlay"
                }}>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}

const CustomToaster = ({ toasts, onDismiss }) => {
    return (
        <>
            {toasts.map((toast) => (
                <CustomToast key={toast.id} {...toast} onDismiss={onDismiss} />
            ))}
        </>
    )
}

export { CustomToast, CustomToaster }