"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendMessageToGemini } from "./gemini-client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import { SparklesCore } from "@/components/ui/sparkles"

const demoQuestions = [
    { id: 1, text: "What is SOC 2 compliance?" },
    { id: 2, text: "Tell me about penetration testing." },
    { id: 3, text: "How do you handle incident response?" },
    { id: 4, text: "What are your cloud security services?" },
    { id: 5, text: "Explain GDPR requirements." },
    { id: 6, text: "What's involved in a vulnerability assessment?" },
]

export default function TranqAssistant({ isOpen, toggleChat }) {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi! I'm TranQ Assistant. How can I help you with your cybersecurity needs today?",
        },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    // Theme-aware and responsive style variables
    const chatWidgetBg = "bg-white dark:bg-slate-900"
    const chatWidgetBorder = "border-slate-300 dark:border-purple-800/50"
    const chatHeaderBg = "bg-slate-100 dark:bg-slate-800"
    const chatHeaderBorder = "border-b border-slate-300 dark:border-purple-800/30"
    const chatHeaderText = "text-slate-800 dark:text-white break-words"
    const chatHeaderSubtext = "text-slate-500 dark:text-slate-300 break-words"
    const chatHeaderIconBg = "bg-purple-500 dark:bg-purple-600"
    const chatHeaderIconColor = "text-white"
    const closeButtonText = "text-slate-500 dark:text-slate-300"
    const closeButtonHoverBg = "hover:bg-slate-200 dark:hover:bg-slate-700"
    const closeButtonHoverText = "hover:text-slate-700 dark:hover:text-white"

    const messagesContainerBg = "bg-white dark:bg-slate-900"

    const userMessageBg = "bg-purple-500 dark:bg-purple-600"
    const userMessageText = "text-white break-words"

    const assistantMessageBg = "bg-slate-100 dark:bg-slate-800"
    const assistantMessageText = "text-slate-800 dark:text-slate-100 break-words"
    const assistantMessageBorder = "border border-slate-300 dark:border-purple-800/30"

    const loadingMessageBg = assistantMessageBg
    const loadingMessageText = assistantMessageText
    const loadingMessageBorder = assistantMessageBorder
    const loadingSpinnerColor = "text-purple-500 dark:text-purple-400"
    const loadingTextColor = "text-slate-500 dark:text-slate-300 break-words"

    const errorMessageBg = "bg-red-100 dark:bg-red-900/30"
    const errorMessageText = "text-red-700 dark:text-red-200 break-words"
    const errorMessageBorder = "border border-red-300 dark:border-red-800/30"

    const demoQuestionsContainerBg = "bg-slate-50 dark:bg-slate-800/50"
    const demoQuestionsBorder = "border-slate-200 dark:border-purple-800/20"
    const demoQuestionButtonBg = "bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
    const demoQuestionButtonText = "text-purple-700 dark:text-purple-300 break-words"

    const inputFormBg = "bg-slate-100 dark:bg-slate-800"
    const inputFormBorder = "border-t border-slate-300 dark:border-purple-800/30"
    const inputFieldBg = "bg-white dark:bg-slate-700"
    const inputFieldBorder = "border-slate-300 dark:border-slate-600"
    const inputFieldText = "text-slate-900 dark:text-white break-words"
    const inputFieldPlaceholder = "placeholder-slate-400 dark:placeholder-slate-400"
    const inputFieldFocusRing = "focus:ring-purple-500 dark:focus:ring-purple-500"

    const sendButtonBg = "bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700"
    const sendButtonIconColor = "text-white"

    const footerTextColor = "text-slate-500 dark:text-slate-400 break-words"

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleDemoQuestionClick = (question) => {
        setInput(question)
        inputRef.current?.focus()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return
        const userMessage = { role: "user", content: input }
        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)
        setError(null)
        try {
            const response = await sendMessageToGemini([...messages, userMessage])
            const assistantMessage = { role: "assistant", content: response }
            setMessages((prev) => [...prev, assistantMessage])
        } catch (err) {
            console.error("Error sending message:", err)
            setError("Sorry, I encountered an error connecting to the AI service. Please try again later.")
        } finally {
            setIsLoading(false)
        }
    }

    const MarkdownComponents = {
        h1: ({ node, ...props }) => (
            <h1 className={`text-base xs:text-lg font-bold mt-1 xs:mt-2 mb-0.5 xs:mb-1 text-purple-700 dark:text-purple-300 break-words`} {...props} />
        ),
        h2: ({ node, ...props }) => (
            <h2 className={`text-sm xs:text-md font-bold mt-1 xs:mt-2 mb-0.5 xs:mb-1 text-purple-600 dark:text-purple-200 break-words`} {...props} />
        ),
        h3: ({ node, ...props }) => (
            <h3 className={`text-xs xs:text-sm font-bold mt-0.5 xs:mt-1 mb-0.5 xs:mb-1 text-purple-500 dark:text-purple-100 break-words`} {...props} />
        ),
        p: ({ node, ...props }) => <p className="mb-0.5 xs:mb-1 break-words" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc pl-3 xs:pl-4 mb-0.5 xs:mb-1" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal pl-3 xs:pl-4 mb-0.5 xs:mb-1" {...props} />,
        li: ({ node, ...props }) => <li className="mb-0.5 break-words" {...props} />,
        a: ({ node, ...props }) => (
            <a
                className={`underline text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 break-words`}
                {...props}
                target="_blank"
                rel="noopener noreferrer"
            />
        ),
        code: ({ node, inline, className, children, ...props }) => {
            const codeBlockBg = "bg-slate-200 dark:bg-slate-700"
            const codeText = "text-slate-800 dark:text-slate-200"
            if (inline) {
                return (
                    <code className={`${codeBlockBg} ${codeText} px-0.5 xs:px-1 py-0.5 rounded text-[0.6rem] xs:text-xs break-words`} {...props}>
                        {children}
                    </code>
                )
            }
            return (
                <div className={`${codeBlockBg} rounded-md p-1 xs:p-2 my-1 xs:my-2 overflow-x-auto`}>
                    <code className={`${codeText} text-[0.6rem] xs:text-xs break-words`} {...props}>
                        {children}
                    </code>
                </div>
            )
        },
        blockquote: ({ node, ...props }) => (
            <blockquote className={`border-l-2 pl-1 xs:pl-2 italic my-1 xs:my-2 border-purple-400 dark:border-purple-500 break-words`} {...props} />
        ),
        table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-1 xs:my-2">
                <table className="min-w-full border-collapse" {...props} />
            </div>
        ),
        th: ({ node, ...props }) => (
            <th
                className={`px-1 xs:px-2 py-0.5 xs:py-1 text-left text-[0.6rem] xs:text-xs font-medium uppercase tracking-wider bg-slate-200 text-purple-700 dark:bg-slate-700 dark:text-purple-300 break-words`}
                {...props}
            />
        ),
        td: ({ node, ...props }) => (
            <td className={`px-1 xs:px-2 py-0.5 xs:py-1 text-[0.6rem] xs:text-xs border-t border-slate-300 dark:border-slate-700 break-words`} {...props} />
        ),
        strong: ({ node, ...props }) => (
            <strong className={`font-bold text-purple-600 dark:text-purple-200 break-words`} {...props} />
        ),
        em: ({ node, ...props }) => <em className={`italic text-purple-500 dark:text-purple-100 break-words`} {...props} />,
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`fixed bottom-2 xs:bottom-4 right-2 xs:right-4 w-[85vw] xs:w-[90vw] sm:w-[400px] h-[70vh] xs:h-[600px] rounded-lg shadow-xl z-40 flex flex-col overflow-hidden ${chatWidgetBg} ${chatWidgetBorder}`}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div className={`p-2 xs:p-4 flex items-center justify-between ${chatHeaderBg} ${chatHeaderBorder}`}>
                            <div className="flex items-center">
                                <div className={`w-6 xs:w-8 h-6 xs:h-8 rounded-full flex items-center justify-center mr-2 xs:mr-3 ${chatHeaderIconBg}`}>
                                    <MessageSquare size={14} className={`xs:w-18 xs:h-18 ${chatHeaderIconColor}`} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className={`font-bold text-sm xs:text-base ${chatHeaderText}`}>TranQ Assistant</h3>
                                    <p className={`text-[0.6rem] xs:text-xs ${chatHeaderSubtext}`}>Tranquility Cybersecurity</p>
                                </div>
                            </div>
                            <Button
                                onClick={toggleChat}
                                variant="ghost"
                                size="icon"
                                className={`${closeButtonText} ${closeButtonHoverBg} ${closeButtonHoverText}`}
                            >
                                <X size={16} className="xs:w-20 xs:h-20"/>
                            </Button>
                        </div>

                        <div
                            className={`flex-1 overflow-y-auto p-2 xs:p-4 space-y-3 xs:space-y-4 ${messagesContainerBg}`}
                            style={{ scrollbarWidth: "thin" }}
                        >
                            {messages.map((message, index) => (
                                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[90%] xs:max-w-[80%] rounded-2xl px-2 xs:px-4 py-1 xs:py-2 
                                            ${
                                            message.role === "user"
                                                ? `${userMessageBg} ${userMessageText} rounded-tr-none`
                                                : `${assistantMessageBg} ${assistantMessageText} ${assistantMessageBorder} rounded-tl-none`
                                        }`}
                                    >
                                        {message.role === "user" ? (
                                            <p className="text-[0.65rem] xs:text-sm">{message.content}</p>
                                        ) : (
                                            <div className="markdown-content text-[0.65rem] xs:text-sm">
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    rehypePlugins={[rehypeHighlight]}
                                                    components={MarkdownComponents}
                                                >
                                                    {message.content}
                                                </ReactMarkdown>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div
                                        className={`max-w-[90%] xs:max-w-[80%] rounded-2xl px-2 xs:px-4 py-1 xs:py-2 ${loadingMessageBg} ${loadingMessageText} ${loadingMessageBorder} rounded-tl-none`}
                                    >
                                        <div className="flex items-center space-x-1 xs:space-x-2">
                                            <Loader2 className={`h-3 w-3 xs:h-4 xs:w-4 animate-spin ${loadingSpinnerColor}`} />
                                            <p className={`text-[0.65rem] xs:text-sm ${loadingTextColor}`}>TranQ is thinking...</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {error && (
                                <div className="flex justify-start">
                                    <div
                                        className={`max-w-[90%] xs:max-w-[80%] rounded-2xl px-2 xs:px-4 py-1 xs:py-2 ${errorMessageBg} ${errorMessageText} ${errorMessageBorder} rounded-tl-none`}
                                    >
                                        <p className="text-[0.65rem] xs:text-sm">{error}</p>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Demo Questions Section */}
                        <div className={`px-1 xs:px-2 pt-1 xs:pt-2 pb-0.5 xs:pb-1 border-y ${demoQuestionsContainerBg} ${demoQuestionsBorder}`}>
                            <div className="overflow-hidden relative h-8 xs:h-10">
                                <div className="flex animate-marquee whitespace-nowrap group">
                                    {[...demoQuestions, ...demoQuestions].map(
                                        (question, index) => (
                                            <Button
                                                key={`${question.id}-${index}`}
                                                variant="ghost"
                                                size="sm"
                                                className={`mr-1 xs:mr-2 px-1 xs:px-2 py-0.5 xs:py-1 h-auto text-[0.6rem] xs:text-xs rounded-md relative overflow-visible group-hover:animation-pause ${demoQuestionButtonBg} ${demoQuestionButtonText}`}
                                                onClick={() => handleDemoQuestionClick(question.text)}
                                            >
                                                <SparklesCore
                                                    id={`sparkles-${question.id}-${index}`}
                                                    background="transparent"
                                                    minSize={0.3}
                                                    maxSize={0.6}
                                                    particleDensity={600}
                                                    className="absolute inset-0 w-full h-full"
                                                    particleColor="#A78BFA"
                                                />
                                                <span className="relative z-10">{question.text}</span>
                                            </Button>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className={`p-2 xs:p-4 ${inputFormBg} ${inputFormBorder}`}>
                            <div className="flex items-center">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Ask about our cybersecurity services..."
                                    className={`flex-1 min-w-0 py-1 xs:py-2 px-2 xs:px-4 rounded-l-md focus:outline-none focus:ring-2 ${inputFieldBg} ${inputFieldBorder} ${inputFieldText} ${inputFieldPlaceholder} ${inputFieldFocusRing}`}
                                    disabled={isLoading}
                                />
                                <Button
                                    type="submit"
                                    className={`rounded-l-none px-2 xs:px-4 py-1 xs:py-2 ${sendButtonBg} ${sendButtonIconColor}`}
                                    disabled={isLoading || !input.trim()}
                                >
                                    {isLoading ? <Loader2 className="h-4 w-4 xs:h-5 xs:w-5 animate-spin" /> : <Send size={14} className="xs:w-18 xs:h-18"/>}
                                </Button>
                            </div>
                            <div className={`mt-1 xs:mt-2 text-[0.6rem] xs:text-xs text-center ${footerTextColor}`}>
                                TranQ Assistant provides information about Tranquility's cybersecurity services
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}