
"use client"

import { useEffect, useRef } from "react"
import { industriesData } from "@/lib/industriesData"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function IndustriesPage() {
    const sectionsRef = useRef({})

    useEffect(() => {
        const hash = window.location.hash.substring(1)
        if (hash && sectionsRef.current[hash]) {
            sectionsRef.current[hash].scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [])

    // Theme-aware and responsive style definitions with fixes for text cutoff
    const pageContainerStyles =
        "min-h-screen pt-16 xs:pt-20 sm:pt-28 md:pt-32 pb-10 xs:pb-12 sm:pb-16 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 overflow-x-hidden"
    const headerTitleStyles =
        "font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 mb-2 xs:mb-3 sm:mb-4 break-words"
    const headerSubtitleStyles =
        "text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-full xs:max-w-3xl mx-auto px-2 xs:px-4 break-words leading-tight"

    const sectionBaseStyles =
        "py-6 xs:py-8 sm:py-12 md:py-16 px-2 xs:px-4 sm:px-6 md:px-10 rounded-xl shadow-2xl overflow-hidden"
    const sectionBgEven = "bg-slate-100 dark:bg-slate-900"
    const sectionBgOdd = "bg-slate-50 dark:bg-slate-800/70 dark:backdrop-blur-sm"

    const industryIconColor = "text-purple-600 dark:text-purple-400"
    const industryNameStyles =
        "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 break-words"
    const industryDescriptionStyles =
        "text-slate-700 dark:text-slate-300 mb-3 xs:mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base leading-relaxed break-words"

    const subHeadingStyles =
        "text-base xs:text-lg sm:text-xl font-semibold text-sky-600 dark:text-sky-300 mb-1 xs:mb-2 sm:mb-3 break-words"
    const listItemTextStyles =
        "text-slate-600 dark:text-slate-300 text-[0.65rem] xs:text-xs sm:text-sm md:text-base break-words leading-tight"
    const checkIconColor = "text-green-500 dark:text-green-400"

    const industryButtonStyles =
        "mt-4 xs:mt-6 sm:mt-8 bg-purple-600 hover:bg-purple-700 text-white text-xs xs:text-sm sm:text-base py-1.5 xs:py-2 sm:py-3 px-3 xs:px-4 sm:px-6 shadow-lg dark:shadow-purple-700/30 transition-all duration-300 transform hover:scale-105"

    const imageOverlayStyles =
        "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent dark:from-black/50"

    const ctaSectionStyles =
        "text-center mt-8 xs:mt-12 sm:mt-16 md:mt-24 py-6 xs:py-8 sm:py-12 rounded-xl shadow-2xl px-2 xs:px-4 sm:px-6 bg-slate-100 dark:bg-slate-900"
    const ctaTitleStyles =
        "font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl font-normal text-slate-900 dark:text-white mb-3 xs:mb-4 sm:mb-6 break-words"
    const ctaTextStyles =
        "text-slate-700 dark:text-slate-300 max-w-full xs:max-w-xl sm:max-w-2xl mx-auto mb-4 xs:mb-6 sm:mb-8 text-xs xs:text-sm sm:text-base break-words leading-tight"
    const ctaButtonStyles =
        "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs xs:text-sm sm:text-lg py-1.5 xs:py-2 sm:py-3 px-4 xs:px-6 sm:px-8 shadow-xl dark:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"

    return (
        <div className={pageContainerStyles}>
            <div className="container mx-auto px-2 xs:px-4 sm:px-6 max-w-full">
                <header className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16">
                    <h1 className={headerTitleStyles}>Industries We Serve</h1>
                    <p className={headerSubtitleStyles}>
                        Tranquility Cybersecurity provides tailored security solutions to meet the unique challenges and regulatory
                        demands of diverse industries. Discover how we empower your sector to operate securely and confidently.
                    </p>
                </header>

                <div className="space-y-8 xs:space-y-12 sm:space-y-16 md:space-y-24">
                    {industriesData.map((industry, index) => (
                        <section
                            key={industry.id}
                            id={industry.id}
                            ref={(el) => (sectionsRef.current[industry.id] = el)}
                            className={`${sectionBaseStyles} ${index % 2 === 0 ? sectionBgEven : sectionBgOdd}`}
                        >
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-12 items-center">
                                <div className={`min-w-0 order-2 md:order-${index % 2 === 0 ? 1 : 2}`}>
                                    <div className="flex items-center mb-2 xs:mb-3 sm:mb-4 flex-wrap">
                                        <industry.icon className={`h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 mr-2 xs:mr-3 sm:mr-4 flex-shrink-0 ${industryIconColor}`} />
                                        <h2 className={industryNameStyles}>{industry.name}</h2>
                                    </div>
                                    <p className={industryDescriptionStyles}>{industry.description}</p>

                                    <div className="mb-3 xs:mb-4 sm:mb-6">
                                        <h3 className={subHeadingStyles}>Key Challenges:</h3>
                                        <ul className="space-y-0.5 xs:space-y-1 sm:space-y-2">
                                            {industry.challenges.map((challenge, i) => (
                                                <li key={i} className="flex items-start">
                                                    <CheckCircle className={`h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1 xs:mr-2 mt-0.5 flex-shrink-0 ${checkIconColor}`} />
                                                    <span className={listItemTextStyles}>{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className={subHeadingStyles}>Our Solutions:</h3>
                                        <ul className="space-y-0.5 xs:space-y-1 sm:space-y-2">
                                            {industry.solutions.map((solution, i) => (
                                                <li key={i} className="flex items-start">
                                                    <CheckCircle className={`h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1 xs:mr-2 mt-0.5 flex-shrink-0 ${checkIconColor}`} />
                                                    <span className={listItemTextStyles}>{solution}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button asChild className={industryButtonStyles}>
                                        <Link href="/contact">Secure Your {industry.name.replace(/ & | and /g, " ")} Business</Link>
                                    </Button>
                                </div>
                                <div
                                    className={`relative w-full aspect-[16/9] xs:aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 md:order-${index % 2 === 0 ? 2 : 1}`}
                                >
                                    <Image
                                        src={industry.image || `/placeholder.svg?width=600&height=450&query=industry+${industry.name}`}
                                        alt={`${industry.name} Cybersecurity Solutions by Tranquility`}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    />
                                    <div className={imageOverlayStyles}></div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
                <div className={ctaSectionStyles}>
                    <h2 className={ctaTitleStyles}>Ready to Strengthen Your Industry's Defenses?</h2>
                    <p className={ctaTextStyles}>
                        No matter your industry, Tranquility Cybersecurity has the expertise to help you navigate the complex threat
                        landscape and achieve your security goals. Let's build a resilient future for your business.
                    </p>
                    <Button asChild size="lg" className={ctaButtonStyles}>
                        <Link href="/contact">Get a Consultation</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
