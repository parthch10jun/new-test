"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sun, Moon, Shield, FileText, Lock, Globe, Landmark, Cloud, Brain, Crosshair, GraduationCap, Heart, Factory, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useTheme } from "next-themes"

// Product tabs for secondary navbar
const productTabs = [
  { name: "ISO 27001", href: "/services/iso-27001", icon: FileText },
  { name: "SOC 2", href: "/services/soc-2", icon: Lock },
  { name: "SOC 1", href: "/services/soc-1", icon: Landmark },
  { name: "GDPR", href: "/services/gdpr", icon: Globe },
  { name: "PCI DSS", href: "/services/pci-dss", icon: Shield },
  { name: "DPDP Act", href: "/services/dpdp-act", icon: Cloud },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showProductTabs, setShowProductTabs] = useState(false)
  const { theme, setTheme } = useTheme()

  const WHATSAPP_NUMBER = "+917303450710"
  const WHATSAPP_MESSAGE = "Hello! I'd like to inquire about your cybersecurity services."

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      // Show product tabs after scrolling past the hero section
      setShowProductTabs(scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const closeMobileMenuAndDropdown = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  const solutionsDropdown = {
    certifications: [
      { name: "ISO 27001", href: "/services/iso-27001", desc: "Information Security", icon: FileText },
      { name: "ISO 27701", href: "/services/iso-27701", desc: "Privacy Management", icon: Globe },
      { name: "ISO 42001", href: "/services/iso-42001", desc: "AI Management", icon: Brain },
      { name: "SOC 1", href: "/services/soc-1", desc: "Financial Controls", icon: Landmark },
      { name: "SOC 2", href: "/services/soc-2", desc: "Trust Services", icon: Lock },
      { name: "GDPR", href: "/services/gdpr", desc: "EU Data Protection", icon: Globe },
      { name: "DPDP Act", href: "/services/dpdp-act", desc: "India Data Privacy", icon: Shield },
      { name: "PCI DSS", href: "/services/pci-dss", desc: "Payment Security", icon: Lock },
      { name: "HIPAA", href: "/services/hipaa", desc: "Healthcare Privacy", icon: Heart },
      { name: "RBI Compliance", href: "/services/rbi-compliance", desc: "Banking Regulations", icon: Landmark },
    ],
    security: [
      { name: "VAPT", href: "/services/vapt", desc: "Vulnerability Assessment", icon: Crosshair },
      { name: "Penetration Testing", href: "/services/penetration-testing", desc: "Security Testing", icon: Shield },
      { name: "Business Continuity", href: "/services/business-continuity", desc: "BCM Planning", icon: FileText },
      { name: "Disaster Recovery", href: "/services/disaster-recovery", desc: "DR Planning", icon: Cloud },
      { name: "Training & Workshops", href: "/services/training", desc: "Security Education", icon: GraduationCap },
    ],
    industries: [
      { name: "Healthcare & AI", href: "/industries#healthcare", icon: Heart },
      { name: "Fintech & Banking", href: "/industries#fintech", icon: Landmark },
      { name: "SaaS & Technology", href: "/industries#saas-tech", icon: Cloud },
      { name: "Logistics & Enterprise", href: "/industries#manufacturing", icon: Factory },
    ],
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Solutions",
      href: "#",
      dropdown: solutionsDropdown,
    },
    { name: "Resources", href: "/resources" },
  ]

  if (!mounted) {
    return null // Or a loading skeleton for the navbar
  }

  const renderThemeToggleButton = (isMobile = false) => {
    const buttonContent = (
        <>
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          {isMobile && <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
        </>
    )

    const commonButtonProps = {
      variant: "ghost",
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
      "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
    }

    if (isMobile) {
      return (
          <Button
              {...commonButtonProps}
              className="w-full text-lg py-3 justify-start px-3 gap-3 text-foreground hover:text-primary hover:bg-primary/10"
          >
            {buttonContent}
          </Button>
      )
    }

    // Desktop version with Tooltip
    return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
                {...commonButtonProps}
                size="icon"
                className="rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border"
            >
              {buttonContent}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-card text-foreground border-border">
            <p>Switch to {theme === "dark" ? "light" : "dark"} mode</p>
          </TooltipContent>
        </Tooltip>
    )
  }

  return (
      <TooltipProvider>
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible liquid-glass">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2.5" onClick={closeMobileMenuAndDropdown}>
                <div className="relative h-8 w-8 overflow-hidden rounded-lg flex items-center justify-center">
                  <Image
                      src="/logo.png"
                      alt="Tranquility Cybersecurity Logo"
                      width={32}
                      height={32}
                      className="object-cover"
                  />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  Tranquility
                </span>
              </Link>

              <nav className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                    <div key={link.name} className="relative group">
                      {link.dropdown ? (
                          <>
                            <button
                                onClick={() => toggleDropdown(link.name)}
                                className="flex items-center space-x-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium rounded-md hover:bg-muted"
                            >
                              <span>{link.name}</span>
                              <ChevronDown
                                  className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === link.name && (
                                  <motion.div
                                      initial={{ opacity: 0, y: 8 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 8 }}
                                      transition={{ duration: 0.15 }}
                                      className="fixed left-1/2 -translate-x-1/2 top-16 mt-1 w-[90vw] max-w-5xl max-h-[80vh] overflow-y-auto rounded-xl bg-card shadow-2xl border border-border focus:outline-none z-[60]"
                                  >
                                    <div className="grid grid-cols-3 gap-0">
                                      {/* Certifications Column */}
                                      <div className="p-5 border-r border-border">
                                        <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                                          <Shield className="w-3.5 h-3.5" />
                                          Compliance Certifications
                                        </h3>
                                        <div className="space-y-1">
                                          {link.dropdown.certifications.map((item) => (
                                              <Link
                                                  key={item.name}
                                                  href={item.href}
                                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-foreground hover:bg-muted transition-colors duration-100 rounded-lg group"
                                                  onClick={closeMobileMenuAndDropdown}
                                              >
                                                <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                <div>
                                                  <div className="font-medium">{item.name}</div>
                                                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                                                </div>
                                              </Link>
                                          ))}
                                        </div>
                                      </div>

                                      {/* Security & Testing Column */}
                                      <div className="p-5 border-r border-border">
                                        <h3 className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                          <Crosshair className="w-3.5 h-3.5" />
                                          Security & Testing
                                        </h3>
                                        <div className="space-y-1">
                                          {link.dropdown.security.map((item) => (
                                              <Link
                                                  key={item.name}
                                                  href={item.href}
                                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-foreground hover:bg-muted transition-colors duration-100 rounded-lg group"
                                                  onClick={closeMobileMenuAndDropdown}
                                              >
                                                <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-red-500 transition-colors" />
                                                <div>
                                                  <div className="font-medium">{item.name}</div>
                                                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                                                </div>
                                              </Link>
                                          ))}
                                        </div>

                                        {/* Industries sub-section */}
                                        <h3 className="text-xs font-semibold text-purple-500 uppercase tracking-wider mt-6 mb-3 flex items-center gap-2">
                                          <Factory className="w-3.5 h-3.5" />
                                          Industries
                                        </h3>
                                        <div className="space-y-1">
                                          {link.dropdown.industries.map((item) => (
                                              <Link
                                                  key={item.name}
                                                  href={item.href}
                                                  className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors duration-100 rounded-lg group"
                                                  onClick={closeMobileMenuAndDropdown}
                                              >
                                                <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-purple-500 transition-colors" />
                                                <span className="font-medium">{item.name}</span>
                                              </Link>
                                          ))}
                                        </div>
                                      </div>

                                      {/* CTA Column */}
                                      <div className="p-5 bg-muted/30">
                                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                          Get Started
                                        </h3>
                                        <div className="space-y-3">
                                          <Link
                                            href="/services"
                                            className="block p-4 bg-primary/10 hover:bg-primary/20 rounded-lg border border-primary/20 transition-colors group"
                                            onClick={closeMobileMenuAndDropdown}
                                          >
                                            <div className="font-semibold text-foreground mb-1 flex items-center gap-2">
                                              View All Services
                                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                              Explore our complete service catalog
                                            </div>
                                          </Link>
                                          <Link
                                            href="/contact"
                                            className="block p-4 bg-card hover:bg-muted rounded-lg border border-border transition-colors group"
                                            onClick={closeMobileMenuAndDropdown}
                                          >
                                            <div className="font-semibold text-foreground mb-1 flex items-center gap-2">
                                              Book Assessment
                                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                              Free consultation with our experts
                                            </div>
                                          </Link>
                                          <div className="pt-3 border-t border-border mt-4">
                                            <div className="text-xs text-muted-foreground mb-2">Trusted by 50+ enterprises</div>
                                            <div className="flex items-center gap-3">
                                              <div className="text-2xl font-bold text-primary">500+</div>
                                              <div className="text-xs text-muted-foreground">Audits<br/>Delivered</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                      ) : (
                          <Link
                              href={link.href}
                              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium rounded-md hover:bg-muted"
                              onClick={closeMobileMenuAndDropdown}
                          >
                            {link.name}
                          </Link>
                      )}
                    </div>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-3">
                {renderThemeToggleButton()}
                <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 rounded-full"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              <button
                  className="md:hidden text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Secondary Product Tabs - appears on scroll */}
          <AnimatePresence>
            {showProductTabs && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block border-t border-border/50 bg-muted/30"
              >
                <div className="container mx-auto px-4">
                  <div className="flex items-center h-10 gap-1 overflow-x-auto scrollbar-hide">
                    <span className="text-xs font-medium text-muted-foreground mr-3 whitespace-nowrap">Solutions:</span>
                    {productTabs.map((tab) => {
                      const IconComponent = tab.icon
                      return (
                        <Link
                          key={tab.name}
                          href={tab.href}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors whitespace-nowrap"
                        >
                          <IconComponent className="w-3.5 h-3.5" />
                          {tab.name}
                        </Link>
                      )
                    })}
                    <Link
                      href="/services"
                      className="ml-auto text-xs font-medium text-primary hover:underline whitespace-nowrap"
                    >
                      View all →
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-xl border-b border-border shadow-2xl overflow-y-auto max-h-[calc(100vh-5rem)]"
                >
                  <nav className="flex flex-col space-y-1 px-4 py-6">
                    {navLinks.map((link) => (
                        <div key={link.name} className="py-1">
                          {link.dropdown ? (
                              <>
                                <button
                                    onClick={() => toggleDropdown(link.name + "-mobile")}
                                    className="w-full flex items-center justify-between text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                                >
                                  <span>{link.name}</span>
                                  <ChevronDown
                                      className={`h-5 w-5 transition-transform ${activeDropdown === link.name + "-mobile" ? "rotate-180" : ""}`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {activeDropdown === link.name + "-mobile" && (
                                      <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.2, ease: "easeInOut" }}
                                          className="pl-4 mt-1 space-y-1"
                                      >
                                        <div className="mb-4">
                                          <h4 className="text-primary font-semibold text-sm mb-2 pt-2">
                                            Compliance Certifications
                                          </h4>
                                          {link.dropdown.certifications.map((item) => (
                                              <Link
                                                  key={item.name}
                                                  href={item.href}
                                                  className="flex items-center gap-2 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg px-3 transition-colors text-sm"
                                                  onClick={closeMobileMenuAndDropdown}
                                              >
                                                <item.icon className="w-4 h-4" />
                                                {item.name}
                                              </Link>
                                          ))}
                                        </div>
                                        <div className="mb-4">
                                          <h4 className="text-red-500 font-semibold text-sm mb-2">
                                            Security & Testing
                                          </h4>
                                          {link.dropdown.security.map((item) => (
                                              <Link
                                                  key={item.name}
                                                  href={item.href}
                                                  className="flex items-center gap-2 py-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-lg px-3 transition-colors text-sm"
                                                  onClick={closeMobileMenuAndDropdown}
                                              >
                                                <item.icon className="w-4 h-4" />
                                                {item.name}
                                              </Link>
                                          ))}
                                        </div>
                                        <div>
                                          <h4 className="text-purple-500 font-semibold text-sm mb-2">
                                            Industries
                                          </h4>
                                          {link.dropdown.industries.map((item) => (
                                              <Link
                                                  key={item.name}
                                                  href={item.href}
                                                  className="flex items-center gap-2 py-2 text-muted-foreground hover:text-purple-500 hover:bg-purple-500/10 rounded-lg px-3 transition-colors text-sm"
                                                  onClick={closeMobileMenuAndDropdown}
                                              >
                                                <item.icon className="w-4 h-4" />
                                                {item.name}
                                              </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                  )}
                                </AnimatePresence>
                              </>
                          ) : (
                              <Link
                                  href={link.href}
                                  className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                                  onClick={closeMobileMenuAndDropdown}
                              >
                                {link.name}
                              </Link>
                          )}
                        </div>
                    ))}
                    <div className="pt-4 border-t border-border"></div>
                    <div className="pt-4 space-y-3">
                      {renderThemeToggleButton(true)}
                      <Button
                          asChild
                          className="w-full bg-primary text-primary-foreground font-semibold text-lg py-3 rounded-xl shadow-sm dark:shadow-neon-cyan"
                          onClick={closeMobileMenuAndDropdown}
                      >
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </nav>
                </motion.div>
            )}
          </AnimatePresence>
        </header>
      </TooltipProvider>
  )
}
