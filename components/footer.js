"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function Footer() {
  return (
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          {/* Main footer content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                <div className="relative h-8 w-8 mr-2 rounded-lg flex items-center justify-center">
                  <Image
                      src="/logo.png"
                      alt="Tranquility Cybersecurity"
                      width={32}
                      height={32}
                      className="object-contain"
                  />
                </div>
                <span className="text-lg font-semibold text-foreground">Tranquility</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Compliance infrastructure for modern businesses. Navigate ISO 27001, SOC 2, GDPR, and more with expert guidance.
              </p>
              <Link
                  href="https://www.linkedin.com/company/tranq-cybersecurity"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Follow us on LinkedIn
              </Link>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-2.5">
                {[
                  { name: "ISO 27001", href: "/services/iso-27001" },
                  { name: "SOC 2", href: "/services/soc-2" },
                  { name: "SOC 1", href: "/services/soc-1" },
                  { name: "GDPR", href: "/services/gdpr" },
                  { name: "PCI DSS", href: "/services/pci-dss" },
                  { name: "DPDP Act", href: "/services/dpdp-act" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Industries", href: "/industries" },
                  { name: "Resources", href: "/resources" },
                  { name: "Contact", href: "/contact" },
                  { name: "Privacy Policy", href: "/privacy-policy" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    872-B, 4 Laxman Vihar Phase-2<br />
                    Gurgaon, Haryana, India 122001
                  </span>
                </li>
                <li className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                  <Link
                      href="tel:+919871579705"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91 98715 79705
                  </Link>
                </li>
                <li className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                  <Link
                      href="mailto:spsingh@tcsa.in"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    spsingh@tcsa.in
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Tranquility Cybersecurity. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}
