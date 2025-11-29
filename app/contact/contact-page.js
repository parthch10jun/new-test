"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast, customToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Loader2, Calendar, Users, MessageSquare } from "lucide-react"
import PageHeader from "@/components/page-header"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const YOUR_WHATSAPP_PHONE_NUMBER = "+917303450710"
const YOUR_CONTACT_EMAIL = "spsingh@tcsa.in"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    company: z.string().optional(),
    // message: z.string().min(10, { message: "Message must be at least 10 characters." }),
    contactType: z.enum(["general", "service", "call"], {
        required_error: "Please select a contact type.",
    }),
    serviceInterest: z.string().optional(),
})

export default function ContactPage() {
    const [isSubmittingWhatsapp, setIsSubmittingWhatsapp] = useState(false)
    const [isSubmittingEmail, setIsSubmittingEmail] = useState(false)
    const [contactType, setContactType] = useState("general")

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            contactType: "general",
            serviceInterest: "",
        },
    })

    const watchContactType = form.watch("contactType")

    useEffect(() => {
        setContactType(watchContactType)
    }, [watchContactType])

    const generateMessageBody = (data) => {
        let message = `New Contact Form Submission:\n\n`
        message += `Name: ${data.name}\n`
        message += `Email: ${data.email}\n`
        if (data.phone) message += `Phone: ${data.phone}\n`
        if (data.company) message += `Company: ${data.company}\n`
        message += `\nContact Type: ${data.contactType.charAt(0).toUpperCase() + data.contactType.slice(1)}\n`
        if (data.contactType === "service" && data.serviceInterest) {
            message += `Interested Service: ${data.serviceInterest}\n`
        }
        if (data.contactType === "call") {
            message += `Wants to schedule a 1:1 call.\n`
        }
        message += `\nMessage:\n${data.message}`
        return message
    }

    const handleWhatsAppSubmit = async () => {
        const isValid = await form.trigger()
        if (!isValid) {
            toast({ title: "Please fix the errors in the form.", variant: "destructive" })
            return
        }
        setIsSubmittingWhatsapp(true)
        const data = form.getValues()
        const whatsappMessage = generateMessageBody(data)
        const encodedMessage = encodeURIComponent(whatsappMessage)
        const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`

        try {
            window.open(whatsappUrl, "_blank")
            customToast({
                title: "Preparing your message...",
                description: "Opening WhatsApp, hold on!",
                duration: 3000, // Example duration
            })
            form.reset()
        } catch (error) {
            console.error("Error opening WhatsApp:", error)
            toast({
                title: "Error",
                description: "Could not open WhatsApp. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmittingWhatsapp(false)
        }
    }

    const handleEmailSubmit = async () => {
        const isValid = await form.trigger()
        if (!isValid) {
            toast({ title: "Please fix the errors in the form.", variant: "destructive" })
            return
        }
        setIsSubmittingEmail(true)
        const data = form.getValues()
        const subject = "New Contact Form Submission from Website"
        const body = generateMessageBody(data)
        const encodedSubject = encodeURIComponent(subject)
        const encodedBody = encodeURIComponent(body)
        const mailtoLink = `mailto:${YOUR_CONTACT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`

        try {
            window.location.href = mailtoLink
            customToast({
                title: "Preparing your message...",
                description: "Spawning your mail client, hold on!",
                duration: 3000, // Example duration
            })
            form.reset()
        } catch (error) {
            console.error("Error opening email client:", error)
            toast({
                title: "Error",
                description: "Could not open your email client. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmittingEmail(false)
        }
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 dark:from-cyber-darker dark:to-cyber-dark">
            <PageHeader
                title="Contact Us"
                description="Get in touch with our cybersecurity experts"
                image="https://pimwp.s3-accelerate.amazonaws.com/2021/08/cyber-security-banner.jpg?width=1200&height=400"
            />

            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid gap-12 md:grid-cols-2">
                        <motion.div variants={fadeIn} initial="hidden" animate="visible">
                            <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Get In Touch</h2>
                            <p className="text-muted-foreground mb-8">
                                Have questions about our services or want to discuss your cybersecurity needs? Fill out the form and our
                                team will get back to you as soon as possible.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
                                        <Mail className="h-6 w-6 text-accent" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-foreground">Email Us</h3>
                                        <p className="text-muted-foreground">{YOUR_CONTACT_EMAIL}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
                                        <Phone className="h-6 w-6 text-accent" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-foreground">Call Us</h3>
                                        <p className="text-muted-foreground">+91-9871579705</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
                                        <MapPin className="h-6 w-6 text-accent" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-foreground">Visit Us</h3>
                                        <p className="text-muted-foreground">
                                            872-B, 4 LAXMAN VIHAR PHASE-2
                                            <br />
                                            GURGAON, HARYANA, INDIA- 122001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                            <Card className="glass-card border-border">
                                <CardHeader>
                                    <CardTitle className="text-foreground">Send Us a Message</CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        Fill out the form below to get started
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Form {...form}>
                                        <form className="space-y-6">
                                            <div className="grid gap-6 md:grid-cols-2">
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-foreground">Name</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Your name"
                                                                    {...field}
                                                                    className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-foreground">Email</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Your email"
                                                                    type="email"
                                                                    {...field}
                                                                    className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <div className="grid gap-6 md:grid-cols-2">
                                                <FormField
                                                    control={form.control}
                                                    name="phone"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-foreground">Phone (Optional)</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Your phone number"
                                                                    {...field}
                                                                    className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="company"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-foreground">Company (Optional)</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Your company"
                                                                    {...field}
                                                                    className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <FormField
                                                control={form.control}
                                                name="contactType"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-foreground">What would you like to do?</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                defaultValue={field.value}
                                                                className="flex flex-col space-y-1"
                                                            >
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="general" />
                                                                    </FormControl>
                                                                    <FormLabel className="text-muted-foreground font-normal">General Inquiry</FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="service" />
                                                                    </FormControl>
                                                                    <FormLabel className="text-muted-foreground font-normal">
                                                                        I'm interested in a specific service
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="call" />
                                                                    </FormControl>
                                                                    <FormLabel className="text-muted-foreground font-normal">
                                                                        I'd like to schedule a 1:1 call with an expert
                                                                    </FormLabel>
                                                                </FormItem>
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            {contactType === "service" && (
                                                <FormField
                                                    control={form.control}
                                                    name="serviceInterest"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-foreground">Which service are you interested in?</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="bg-muted/50 border-border text-foreground">
                                                                        <SelectValue placeholder="Select a service" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent className="bg-card border-border text-foreground">
                                                                    <SelectItem value="penetration-testing" className="hover:bg-muted">
                                                                        Penetration Testing
                                                                    </SelectItem>
                                                                    <SelectItem value="vulnerability-assessment" className="hover:bg-muted">
                                                                        Vulnerability Assessment
                                                                    </SelectItem>
                                                                    <SelectItem value="compliance-auditing" className="hover:bg-muted">
                                                                        Compliance & Auditing
                                                                    </SelectItem>
                                                                    <SelectItem value="incident-response" className="hover:bg-muted">
                                                                        Incident Response
                                                                    </SelectItem>
                                                                    <SelectItem value="managed-security" className="hover:bg-muted">
                                                                        Managed Security Services
                                                                    </SelectItem>
                                                                    <SelectItem value="security-training" className="hover:bg-muted">
                                                                        Security Training
                                                                    </SelectItem>
                                                                    <SelectItem value="other" className="hover:bg-muted">
                                                                        Other
                                                                    </SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            )}
                                            {contactType === "call" && (
                                                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                                                    <div className="flex items-center mb-3">
                                                        <Calendar className="h-5 w-5 text-accent mr-2" />
                                                        <p className="text-sm text-accent">
                                                            Our team will contact you to schedule a convenient time for your 1:1 call with our
                                                            security experts.
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Users className="h-5 w-5 text-accent mr-2" />
                                                        <p className="text-sm text-accent">
                                                            Please provide details about your security concerns in the message field below.
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-foreground">Message</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder={
                                                                    contactType === "call"
                                                                        ? "Please describe your security concerns and preferred time for a call..."
                                                                        : "How can we help you?"
                                                                }
                                                                {...field}
                                                                className="min-h-32 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                                <Button
                                                    type="button"
                                                    onClick={handleWhatsAppSubmit}
                                                    className="w-full flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                                                    disabled={isSubmittingWhatsapp || isSubmittingEmail}
                                                >
                                                    {isSubmittingWhatsapp ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Redirecting...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <MessageSquare className="mr-2 h-4 w-4" /> Send via WhatsApp
                                                        </>
                                                    )}
                                                </Button>
                                                <Button
                                                    type="button"
                                                    onClick={handleEmailSubmit}
                                                    variant="outline"
                                                    className="w-full flex-1 border-primary text-primary hover:bg-primary/10"
                                                    disabled={isSubmittingWhatsapp || isSubmittingEmail}
                                                >
                                                    {isSubmittingEmail ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Opening...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Mail className="mr-2 h-4 w-4" /> Send via Email
                                                        </>
                                                    )}
                                                </Button>
                                            </div>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
