
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import PageHeader from "@/components/page-header"

export default function ClientsPage() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setClients([])
    setLoading(false)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 dark:from-cyber-darker dark:to-cyber-dark">
      <PageHeader
        title="Our Clients"
        description="Organizations that trust us with their cybersecurity"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trl1-z59YOxNjQ5P9hoI6pbZ2i6sSsVv5F6.png"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-normal text-foreground mb-4">Trusted By Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're proud to protect organizations across various industries with our comprehensive cybersecurity
              solutions
            </p>
          </div>

          {loading ? (
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array(8)
                .fill()
                .map((_, i) => (
                  <Card key={i} className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <Skeleton className="h-16 w-16 rounded-full bg-muted" />
                        <Skeleton className="h-4 w-24 bg-muted" />
                        <Skeleton className="h-3 w-16 bg-muted" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {clients.length > 0 ? (
                clients.map((client) => (
                  <motion.div key={client.id} variants={fadeIn}>
                    <Card className="h-full glass-card glass-card-hover overflow-hidden transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center justify-center space-y-4">
                          {client.logo && client.logo.url ? (
                            <div className="h-16 w-16 overflow-hidden rounded-full bg-white dark:bg-white p-2">
                              <img
                                src={client.logo.url || "/placeholder.svg"}
                                alt={client.name}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ) : client.logoUrl ? (
                            <div className="h-16 w-16 overflow-hidden rounded-full bg-white dark:bg-white p-2">
                              <img
                                src={client.logoUrl || "/placeholder.svg"}
                                alt={client.name}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-accent/20 text-accent text-xl font-bold">
                              {client.name.charAt(0)}
                            </div>
                          )}
                          <h3 className="text-lg font-medium text-foreground text-center">{client.name}</h3>
                          <p className="text-sm text-muted-foreground text-center">{client.industry}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No clients found</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30 dark:bg-black/20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-normal text-foreground mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear what our clients have to say about our cybersecurity services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="h-full">
              <Card className="h-full glass-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      "Tranquility Cybersecurity Services has transformed our security posture. Their team identified
                      vulnerabilities we weren't even aware of and implemented robust solutions that have kept us
                      protected."
                    </p>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mr-3">
                          JD
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">John Doe</h4>
                          <p className="text-sm text-muted-foreground">CTO, TechCorp Inc.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <Card className="h-full glass-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      "After experiencing a security breach, we turned to Tranquility for help. Their incident response
                      team was exceptional, and their ongoing security management has given us confidence in our digital
                      operations."
                    </p>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mr-3">
                          JS
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">Jane Smith</h4>
                          <p className="text-sm text-muted-foreground">CEO, Retail Solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="h-full"
            >
              <Card className="h-full glass-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      "The compliance expertise at Tranquility has been invaluable for our healthcare organization.
                      They've helped us navigate complex regulations while ensuring our patient data remains secure."
                    </p>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mr-3">
                          RJ
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">Robert Johnson</h4>
                          <p className="text-sm text-muted-foreground">CISO, HealthFirst</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
