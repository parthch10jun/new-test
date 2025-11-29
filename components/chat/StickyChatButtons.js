"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import TranqAssistant from "./tranq-assistant"

export default function StickyChatButtons() {
    const [isAssistantOpen, setIsAssistantOpen] = useState(false)

    const toggleAssistant = () => {
        setIsAssistantOpen(!isAssistantOpen)
    }

    const WHATSAPP_NUMBER = "+917303450710"
    const WHATSAPP_MESSAGE = "Hello! I'd like to inquire about your cybersecurity services."
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\s+/g, "")}${WHATSAPP_MESSAGE ? `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}` : ""}`

    return (
        <TooltipProvider>
            <div className="fixed right-2 xs:right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-3">
                <motion.div
                    initial={{ scale: 0, x: 100 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                onClick={toggleAssistant}
                                className={`rounded-full w-12 xs:w-14 h-12 xs:h-14 flex items-center justify-center shadow-lg text-white
                                    ${isAssistantOpen
                                        ? "bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                                        : "bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700"
                                    }`}
                                aria-label={isAssistantOpen ? "Close AI Assistant" : "Open AI Assistant"}
                            >
                                {isAssistantOpen ? <X size={20} /> : <MessageSquare size={20} />}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-slate-800 text-white border-slate-700 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600">
                            <p>AI Assistant</p>
                        </TooltipContent>
                    </Tooltip>
                </motion.div>

                <motion.div
                    initial={{ scale: 0, x: 100 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-full w-12 xs:w-14 h-12 xs:h-14"
                                onClick={() => window.open(whatsappLink, "_blank")}
                            >
                                <a aria-label="Chat on WhatsApp">
                                    <Image src="/whatsapp.webp" alt="WhatsApp" width={48} height={48} className="w-12 h-12 xs:w-14 xs:h-14"/>
                                </a>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-slate-800 text-white border-slate-700 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600">
                            <p>Chat on WhatsApp</p>
                        </TooltipContent>
                    </Tooltip>
                </motion.div>
            </div>
            <TranqAssistant isOpen={isAssistantOpen} toggleChat={toggleAssistant} />
        </TooltipProvider>
    )
}