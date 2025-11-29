
"use client"

import { motion } from "framer-motion"
import { Shield, Users, Award, Zap, Clock, Globe, ClipboardCheck, Bug, BrainCircuit } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 dark:from-cyber-darker dark:to-cyber-dark">
        <PageHeader
            title="About Us"
            description="Governance • Security • Compliance • AI Innovation."
            image="https://www.stldigital.tech/wp-content/uploads/2023/08/PoV-A-Complete-Guide-to-Cybersecurity-in-the-Modern-World-scaled.jpg?width=1200&height=400"
        />

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div variants={fadeIn} initial="hidden" animate="visible">
                <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Our Mission</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-muted-foreground text-lg mb-4">
                    At Tranquility Cybersecurity, we empower businesses to navigate the complex landscape of IT governance
                    and regulatory demands. We specialize in frameworks like ISO 27001, SOC 2, DPDP Act 2023, and PCI-DSS,
                    transforming compliance from a burden into a strategic advantage.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Our expert vCISO and vDPO services provide robust leadership, enabling your organization to innovate
                    with confidence. We focus on removing compliance friction, allowing you to focus on growth while we
                    ensure your digital assets are secure and your operations meet stringent industry standards.
                  </p>
                </div>
              </motion.div>

              <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="relative"
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                      src="/mission.jpeg?width=600&height=375"
                      alt="Team discussing compliance strategy"
                      className="w-full h-auto object-cover aspect-[16/10]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16 px-4 bg-muted/30 dark:bg-cyber-dark/50">
          <div className="container mx-auto">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-4">Our Core Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tailored solutions to meet your organization's unique security and compliance needs.
              </p>
            </motion.div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-8 md:grid-cols-1 lg:grid-cols-3"
            >
              <motion.div variants={fadeIn}>
                <Card className="h-full glass-card glass-card-hover overflow-hidden transition-all duration-300">
                  <CardHeader>
                    <ClipboardCheck className="h-12 w-12 mb-4 text-accent" />
                    <CardTitle className="text-foreground">Compliance & GRC</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Navigate complex regulations like ISO 27001, SOC 2, and GDPR with our expert guidance. We establish
                      robust Governance, Risk, and Compliance frameworks, simplifying audits and ensuring your operations
                      meet the highest industry standards for data protection and operational integrity.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="h-full glass-card glass-card-hover overflow-hidden transition-all duration-300">
                  <CardHeader>
                    <Bug className="h-12 w-12 mb-4 text-accent" />
                    <CardTitle className="text-foreground">Vulnerability Assessment & Pen-Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Identify and mitigate critical security weaknesses before attackers exploit them. Our VAPT services
                      simulate real-world cyber-attacks, providing actionable insights to strengthen your defenses across
                      networks, applications, and cloud environments, safeguarding your valuable digital assets
                      effectively.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="h-full glass-card glass-card-hover overflow-hidden transition-all duration-300">
                  <CardHeader>
                    <BrainCircuit className="h-12 w-12 mb-4 text-accent" />
                    <CardTitle className="text-foreground">AI-Driven Security Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Leverage the power of Artificial Intelligence to proactively detect and respond to sophisticated
                      threats. Our AI solutions enhance threat intelligence, automate security operations, and provide
                      predictive analytics, offering a smarter, more resilient defense for your organization's future.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The core principles that guide our approach to governance, security, and compliance.
              </p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              <motion.div variants={fadeIn}>
                <Card className="h-full glass-card overflow-hidden">
                  <CardHeader>
                    <Shield className="h-12 w-12 mb-4 text-accent" />
                    <CardTitle className="text-foreground">Integrity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Uncompromising ethics in every audit, assessment, and advisory engagement, ensuring transparent and
                      trustworthy compliance partnerships.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="h-full glass-card overflow-hidden">
                  <CardHeader>
                    <Zap className="h-12 w-12 mb-4 text-accent" />
                    <CardTitle className="text-foreground">Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Continuously evolving our compliance solutions and AI tools to address emerging regulatory
                      landscapes and advanced cyber threats effectively.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="h-full glass-card overflow-hidden">
                  <CardHeader>
                    <Users className="h-12 w-12 mb-4 text-accent" />
                    <CardTitle className="text-foreground">Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Working as an extension of your team to understand unique compliance challenges and co-create
                      tailored governance strategies.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="h-full glass-card overflow-hidden">
                  <CardHeader>
                    <Award className="h-12 w-12 mb-4 text-accent" />
                    <CardTitle className="text-foreground">Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Striving for the highest quality in compliance documentation, VAPT reporting, and strategic security
                      advisory services.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="h-full glass-card overflow-hidden">
                  <CardHeader>
                    <Clock className="h-12 w-12 mb-4 text-accent" />
                    <CardTitle className="text-foreground">Precision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Meticulous attention to detail in every compliance audit and policy implementation, ensuring
                      accuracy and thoroughness.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="h-full glass-card overflow-hidden">
                  <CardHeader>
                    <Globe className="h-12 w-12 mb-4 text-accent" />
                    <CardTitle className="text-foreground">Foresight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Anticipating future compliance trends and cyber threats to provide proactive strategies that keep
                      our clients ahead.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        {/*<section classNamee="py-16 px-4">*/}
        {/*  <div className="container mx-auto">*/}
        {/*    <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center mb-12">*/}
        {/*      <h2 className={`text-3xl font-bold ${headingColor} mb-4`}>Our Leadership</h2>*/}
        {/*      <p className={`${textColor} max-w-2xl mx-auto`}>*/}
        {/*        Experienced professionals dedicated to your organization's security and compliance success.*/}
        {/*      </p>*/}
        {/*    </motion.div>*/}

        {/*    <motion.div*/}
        {/*        variants={staggerContainer}*/}
        {/*        initial="hidden"*/}
        {/*        animate="visible"*/}
        {/*        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"*/}
        {/*    >*/}
        {/*      /!* Example Team Member - Apply similar pattern to others *!/*/}
        {/*      <motion.div variants={fadeIn} className="text-center">*/}
        {/*        <div*/}
        {/*            className={`mb-4 overflow-hidden rounded-full mx-auto w-32 h-32 border-2 border-purple-500 dark:border-purple-600`}*/}
        {/*        >*/}
        {/*          <img*/}
        {/*              src="/placeholder.svg?width=128&height=128"*/}
        {/*              alt="Chief Security & Compliance Officer"*/}
        {/*              className="w-full h-full object-cover"*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*        <h3 className={`text-xl font-bold ${headingColor}`}>[Name Here]</h3>*/}
        {/*        <p className="text-purple-500 dark:text-purple-400 mb-2">Chief Security & Compliance Officer</p>*/}
        {/*        <p className={`${textColor} text-sm`}>*/}
        {/*          Oversees all compliance strategies and GRC framework implementations, ensuring clients meet rigorous*/}
        {/*          industry standards and regulatory requirements.*/}
        {/*        </p>*/}
        {/*      </motion.div>*/}
        {/*      <motion.div variants={fadeIn} className="text-center">*/}
        {/*        <div*/}
        {/*            className={`mb-4 overflow-hidden rounded-full mx-auto w-32 h-32 border-2 border-purple-500 dark:border-purple-600`}*/}
        {/*        >*/}
        {/*          <img*/}
        {/*              src="/placeholder.svg?width=128&height=128"*/}
        {/*              alt="Compliance Specialist"*/}
        {/*              className="w-full h-full object-cover"*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*        <h3 className={`text-xl font-bold ${headingColor}`}>[Name Here]</h3>*/}
        {/*        <p className="text-purple-500 dark:text-purple-400 mb-2">Compliance Specialist</p>*/}
        {/*        <p className={`${textColor} text-sm`}>*/}
        {/*          Expert in ISO 27001, SOC 2, and data privacy laws. Guides organizations through complex audit processes*/}
        {/*          and policy development.*/}
        {/*        </p>*/}
        {/*      </motion.div>*/}
        {/*      <motion.div variants={fadeIn} className="text-center">*/}
        {/*        <div*/}
        {/*            className={`mb-4 overflow-hidden rounded-full mx-auto w-32 h-32 border-2 border-purple-500 dark:border-purple-600`}*/}
        {/*        >*/}
        {/*          <img*/}
        {/*              src="/placeholder.svg?width=128&height=128"*/}
        {/*              alt="Penetration Testing Lead"*/}
        {/*              className="w-full h-full object-cover"*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*        <h3 className={`text-xl font-bold ${headingColor}`}>[Name Here]</h3>*/}
        {/*        <p className="text-purple-500 dark:text-purple-400 mb-2">Penetration Testing Lead</p>*/}
        {/*        <p className={`${textColor} text-sm`}>*/}
        {/*          Manages all VAPT engagements, identifying critical vulnerabilities and providing strategic remediation*/}
        {/*          plans to bolster client defenses effectively.*/}
        {/*        </p>*/}
        {/*      </motion.div>*/}
        {/*      <motion.div variants={fadeIn} className="text-center">*/}
        {/*        <div*/}
        {/*            className={`mb-4 overflow-hidden rounded-full mx-auto w-32 h-32 border-2 border-purple-500 dark:border-purple-600`}*/}
        {/*        >*/}
        {/*          <img*/}
        {/*              src="/placeholder.svg?width=128&height=128"*/}
        {/*              alt="AI Solutions Architect"*/}
        {/*              className="w-full h-full object-cover"*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*        <h3 className={`text-xl font-bold ${headingColor}`}>[Name Here]</h3>*/}
        {/*        <p className="text-purple-500 dark:text-purple-400 mb-2">AI Solutions Architect</p>*/}
        {/*        <p className={`${textColor} text-sm`}>*/}
        {/*          Designs and implements cutting-edge AI-driven security solutions for advanced threat detection,*/}
        {/*          response, and predictive security analytics.*/}
        {/*        </p>*/}
        {/*      </motion.div>*/}
        {/*    </motion.div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </div>
  )
}
