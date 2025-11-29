"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { Share2, Printer, ChevronRight } from "lucide-react"
import Head from "next/head"

import Breadcrumbs from "@/components/Breadcrumbs" // Ensure this is theme-aware
import ServicePackageCard from "@/components/ServicePackageCard" // Ensure this is theme-aware
import TestimonialCard from "@/components/TestimonialCard" // Ensure this is theme-aware
import FAQAccordion from "@/components/FAQAccordion" // Ensure this is theme-aware
import CTACard from "@/components/CTACard" // Ensure this is theme-aware
import { hardcodedServices } from "@/lib/servicesData"

// Helper function to generate JSON-LD schema for SEO
const ServiceSchema = (service) => {
  if (!service) return null
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.subtitle,
    provider: {
      "@type": "Organization",
      name: "Tranquility Cybersecurity",
    },
    serviceType: service.category,
  }
}

// Helper function to find a service by ID
const findServiceById = (id) => hardcodedServices.find((service) => service.id === id)

// Helper function to find related services by their IDs
const findRelatedServices = (relatedIds) => relatedIds.map((id) => findServiceById(id)).filter(Boolean)

export default function ServiceDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { id } = params

  const [service, setService] = useState(null)
  const [relatedServicesData, setRelatedServicesData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Theme-aware style strings using semantic tokens
  const pageBg = "bg-gradient-to-b from-background to-muted/50 dark:from-cyber-darker dark:to-cyber-dark transition-colors duration-300"
  const textColor = "text-muted-foreground"
  const headingColor = "text-foreground"

  const loadingBg = "bg-background"
  const loadingSpinnerColor = "border-primary"

  const errorTextColor = "text-red-600 dark:text-red-400"
  const errorContainerBg = "bg-background"
  const backButtonStyles =
      "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition duration-300"

  const notFoundContainerBg = "bg-background"
  const notFoundTextColor = "text-muted-foreground"

  const actionButtonBg = "bg-muted hover:bg-muted/80"
  const actionButtonIconColor = "text-foreground"

  const headerIconColor = "text-accent"
  const headerSubtitleColor = "text-muted-foreground"

  const sectionTitleColor = "text-primary"
  const contentTextColor = "text-muted-foreground"
  const contentStrongTextColor = "text-foreground"

  const infoBlockBg = "glass-card"
  const infoBlockTitleColor = "text-primary"
  const infoBlockTextColor = "text-muted-foreground"

  const approachStepNumberBg = "bg-primary"
  const approachStepNumberColor = "text-primary-foreground"

  const relatedServicesBg = "glass-card"
  const relatedServicesTitleColor = "text-primary"
  const relatedServicesLinkBg = "bg-muted hover:bg-muted/80"
  const relatedServicesLinkTextColor = "text-foreground"
  const relatedServicesLinkHoverTextColor = "group-hover:text-primary"
  const relatedServicesChevronColor = "text-muted-foreground"
  const relatedServicesChevronHoverColor = "group-hover:text-primary"
  const relatedServicesEmptyTextColor = "text-muted-foreground"

  useEffect(() => {
    if (id) {
      setIsLoading(true)
      try {
        const currentService = findServiceById(id)
        if (currentService) {
          setService(currentService)
          if (currentService.relatedServices) {
            const related = findRelatedServices(currentService.relatedServices)
            setRelatedServicesData(related)
          }
        } else {
          setError("Service not found.")
        }
      } catch (e) {
        console.error("Error fetching service:", e)
        setError("Failed to load service details.")
      }
      setIsLoading(false)
    }
  }, [id, router])

  if (isLoading) {
    return (
        <div className={`flex justify-center items-center min-h-screen ${loadingBg} ${textColor}`}>
          <div className={`animate-spin rounded-full h-16 w-16 border-t-4 ${loadingSpinnerColor}`}></div>
        </div>
    )
  }

  if (error) {
    return (
        <div className={`min-h-screen ${errorContainerBg}`}>
          <div className={`container mx-auto px-4 py-12 text-center ${errorTextColor}`}>
            <h1 className={`text-3xl font-bold ${headingColor}`}>Error</h1>
            <p className="mt-4 text-lg">{error}</p>
            <Link href="/services" className={`mt-6 inline-block ${backButtonStyles}`}>
              Back to Services
            </Link>
          </div>
        </div>
    )
  }

  if (!service) {
    return (
        <div className={`min-h-screen ${notFoundContainerBg}`}>
          <div className={`container mx-auto px-4 py-12 text-center ${notFoundTextColor}`}>
            <p className="text-lg">Service details are currently unavailable.</p>
            <Link href="/services" className={`mt-6 inline-block ${backButtonStyles}`}>
              Back to Services
            </Link>
          </div>
        </div>
    )
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title, href: `/services/${service.id}` },
  ]

  const serviceSchemaJson = ServiceSchema(service)

  return (
      <div className={`${pageBg} ${textColor} min-h-screen`}>
        {serviceSchemaJson && (
            <Head>
              <script type="application/ld+json">{JSON.stringify(serviceSchemaJson)}</script>
            </Head>
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <Breadcrumbs items={breadcrumbItems} /> {/* Ensure Breadcrumbs is theme-aware */}
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <button
                  onClick={() => window.print()}
                  className={`p-2 rounded-full ${actionButtonBg} transition duration-150`}
                  title="Print Page"
              >
                <Printer size={20} className={actionButtonIconColor} />
              </button>
              <button
                  onClick={() =>
                      navigator.share
                          ? navigator.share({ title: service.title, text: service.subtitle, url: window.location.href })
                          : alert("Share not supported")
                  }
                  className={`p-2 rounded-full ${actionButtonBg} transition duration-150`}
                  title="Share Page"
              >
                <Share2 size={20} className={actionButtonIconColor} />
              </button>
            </div>
          </div>

          <header className="mb-10 md:mb-16 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              {service.icon && <service.icon className={`h-10 w-10 md:h-12 md:w-12 ${headerIconColor} mr-3 md:mr-4`} />}
              <h1
                  className={`text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 dark:from-purple-400 dark:via-pink-400 dark:to-orange-300 pb-1 md:pb-2`}
              >
                {service.title}
              </h1>
            </div>
            <p className={`text-xl md:text-2xl ${headerSubtitleColor} max-w-3xl mx-auto`}>{service.subtitle}</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <main className="lg:col-span-2 space-y-10 md:space-y-12">
              {service.image && (
                  <motion.img
                      src={service.image || `/placeholder.svg?width=800&height=400&query=${service.title} illustration`}
                      alt={service.title}
                      className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-2xl mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                  />
              )}

              {service.description && (
                  <section id="description">
                    <h2 className={`text-2xl font-semibold ${sectionTitleColor} mb-4`}>Overview</h2>
                    <p className={`${contentTextColor} leading-relaxed whitespace-pre-line`}>{service.description}</p>
                  </section>
              )}

              {service.reportTypes && (
                  <section id="report-types">
                    <h2 className={`text-2xl font-semibold ${sectionTitleColor} mb-4`}>Report Types</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.reportTypes.map((type, index) => (
                          <div key={index} className={`${infoBlockBg} p-6 rounded-lg shadow-lg`}>
                            <h3 className={`text-xl font-semibold ${infoBlockTitleColor} mb-2`}>{type.type}</h3>
                            <p className={`${infoBlockTextColor}`}>
                              <strong className={`${contentStrongTextColor}`}>Scope:</strong> {type.scope}
                            </p>
                            <p className={`${infoBlockTextColor}`}>
                              <strong className={`${contentStrongTextColor}`}>Audit Period:</strong> {type.auditPeriod}
                            </p>
                          </div>
                      ))}
                    </div>
                  </section>
              )}

              {service.benefits && service.benefits.length > 0 && (
                  <section id="benefits">
                    <h2 className={`text-2xl font-semibold ${sectionTitleColor} mb-4`}>Key Benefits</h2>
                    <ul className={`space-y-3 list-inside list-disc ${contentTextColor}`}>
                      {service.benefits.map((benefit, index) => (
                          <li key={index} className="leading-relaxed">
                            {benefit}
                          </li>
                      ))}
                    </ul>
                  </section>
              )}

              {service.approach && (
                  <section id="approach">
                    <h2 className={`text-2xl font-semibold ${sectionTitleColor} mb-4`}>Our Approach</h2>
                    <p className={`${infoBlockTextColor} mb-6 leading-relaxed`}>{service.approach.introduction}</p>
                    <div className="space-y-6">
                      {service.approach.steps.map((step, index) => (
                          <div key={index} className={`${infoBlockBg} p-6 rounded-lg shadow-lg flex items-start`}>
                            <div
                                className={`flex-shrink-0 ${approachStepNumberBg} ${approachStepNumberColor} rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold`}
                            >
                              {index + 1}
                            </div>
                            <div>
                              <h3 className={`text-xl font-semibold ${infoBlockTitleColor} mb-1`}>{step.title}</h3>
                              <p className={`${infoBlockTextColor} leading-relaxed`}>{step.description}</p>
                            </div>
                          </div>
                      ))}
                    </div>
                  </section>
              )}

              {service.packages && service.packages.length > 0 && (
                  <section id="packages">
                    <h2 className={`text-2xl font-semibold ${sectionTitleColor} mb-6`}>Service Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.packages.map((pkg, index) => (
                          <ServicePackageCard key={index} packageData={pkg} /> // Ensure ServicePackageCard is theme-aware
                      ))}
                    </div>
                    {service.packageNote && <p className={`text-sm ${infoBlockTextColor} mt-4`}>{service.packageNote}</p>}
                  </section>
              )}

              {service.differentiators && service.differentiators.length > 0 && (
                  <section id="differentiators">
                    <h2 className={`text-2xl font-semibold ${sectionTitleColor} mb-4`}>Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.differentiators.map((diff, index) => (
                          <div key={index} className={`${infoBlockBg} p-6 rounded-lg shadow-lg`}>
                            <h3 className={`text-xl font-semibold ${infoBlockTitleColor} mb-2`}>{diff.title}</h3>
                            <p className={`${infoBlockTextColor} leading-relaxed`}>{diff.description}</p>
                          </div>
                      ))}
                    </div>
                  </section>
              )}

              {service.clientSuccess && (
                  <section id="client-success">
                    <h2 className={`text-2xl font-semibold ${sectionTitleColor} mb-6`}>Client Success</h2>
                    <TestimonialCard testimonial={service.clientSuccess} /> {/* Ensure TestimonialCard is theme-aware */}
                  </section>
              )}

              {service.faqs && service.faqs.length > 0 && (
                  <section id="faqs">
                    <h2 className={`text-2xl font-semibold ${sectionTitleColor} mb-6`}>Frequently Asked Questions</h2>
                    <FAQAccordion faqs={service.faqs} /> {/* Ensure FAQAccordion is theme-aware */}
                  </section>
              )}

              {service.cta && (
                  <section id="cta" className="mt-12">
                    <CTACard ctaData={service.cta} serviceId={service.id} /> {/* Ensure CTACard is theme-aware */}
                  </section>
              )}
            </main>

            <aside className="lg:col-span-1 space-y-8">
              <div className={`${relatedServicesBg} p-6 rounded-lg shadow-xl`}>
                <h3 className={`text-xl font-semibold ${relatedServicesTitleColor} mb-4`}>Related Services</h3>
                {relatedServicesData.length > 0 ? (
                    <ul className="space-y-3">
                      {relatedServicesData.map((related) => (
                          <li key={related.id}>
                            <Link
                                href={`/services/${related.id}`}
                                className={`flex items-center justify-between p-4 ${relatedServicesLinkBg} rounded-md transition duration-150 group`}
                            >
                        <span className={`${relatedServicesLinkTextColor} ${relatedServicesLinkHoverTextColor}`}>
                          {related.title}
                        </span>
                              <ChevronRight
                                  size={20}
                                  className={`${relatedServicesChevronColor} ${relatedServicesChevronHoverColor}`}
                              />
                            </Link>
                          </li>
                      ))}
                    </ul>
                ) : (
                    <p className={`${relatedServicesEmptyTextColor}`}>No related services found.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
  )
}
