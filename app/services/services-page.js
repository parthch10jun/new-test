
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import PageHeader from "@/components/page-header"
import Link from "next/link"
import { hardcodedServices } from "@/lib/servicesData"

// Service card component
const ServiceCard = ({ service, isLink = false }) => {
    const Icon = service.icon

    const cardContent = (
        <motion.div
            className="glass-card glass-card-hover rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
        >
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3">
                    {Icon && <Icon className="h-7 w-7 text-accent mr-3" />}
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground leading-tight">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">{service.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-4">{service.description}</p>

                <div className="mt-auto pt-4">
                    {service.tags && service.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                            {service.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )

    if (isLink) {
        return (
            <Link href={`/services/${service.id}`} className="block group h-full">
                {cardContent}
            </Link>
        )
    }

    return cardContent
}

export default function ServicesPage() {
    const [allServicesData, setAllServicesData] = useState([])
    const [displayedServices, setDisplayedServices] = useState([])
    const [loading, setLoading] = useState(true)
    // const searchParams = useSearchParams(); // Not used
    // const router = useRouter(); // Not used

    const orderedServiceIds = [
        "iso-27001",
        "soc-1",
        "soc-2",
        "gdpr",
        "rbi-compliance",
        "pci-dss",
        "nist",
        "hipaa",
        "dpdp-act",
        "business-continuity",
        "disaster-recovery",
        "penetration-testing",
        "ai-security",
        "web-app-security",
    ]

    useEffect(() => {
        async function fetchAndPrepareServices() {
            try {
                setLoading(true)
                const currentServices = [...hardcodedServices]

                

                setAllServicesData(currentServices)
                const servicesToDisplay = orderedServiceIds
                    .map((id) => currentServices.find((service) => service.id === id))
                    .filter((service) => service !== undefined)
                setDisplayedServices(servicesToDisplay)
            } catch (error) {
                console.error("Error setting up services:", error)
                const fallbackServicesToDisplay = orderedServiceIds
                    .map((id) => hardcodedServices.find((service) => service.id === id))
                    .filter((service) => service !== undefined)
                setDisplayedServices(fallbackServicesToDisplay)
            } finally {
                setLoading(false)
            }
        }
        fetchAndPrepareServices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 dark:from-cyber-darker dark:to-cyber-dark">
            <PageHeader
                title="Our Services"
                description="Comprehensive cybersecurity solutions to protect your business"
                image="/serviceban.jpeg?width=1200&height=400"
            />

            <section className="py-16 px-4">
                <div className="container mx-auto">
                    {displayedServices.length > 0 ? (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 },
                                },
                            }}
                            initial="hidden"
                            animate="visible"
                        >
                            {displayedServices.map((service) => (
                                <ServiceCard key={service.id} service={service} isLink={true} />
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">Services information is currently unavailable.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
