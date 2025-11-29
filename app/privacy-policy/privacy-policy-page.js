
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function PrivacyPolicyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const contactDetails = {
    email: "spsingh@tcsa.in",
    phone: "+91-9871579705",
    whatsapp: "+917303450710",
    address: "872-B, 4 LAXMAN VIHAR PHASE-2, GURGAON, HARYANA, INDIA- 122001",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <PageHeader
        title="Privacy Policy"
        description="How we handle and protect your data"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trl1-z59YOxNjQ5P9hoI6pbZ2i6sSsVv5F6.png"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-800/50 rounded-lg shadow-lg p-8"
          >
            <p className="text-slate-500 dark:text-slate-400 text-lg">Last Updated: August 24, 2025</p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
            <p>
              Tranquility Cybersecurity Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website, services, and products. By using our services, you agree to the terms of this policy.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of personal and non-personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Identification Information:</strong> Name, email address, phone number, job title, and company name.
              </li>
              <li>
                <strong>Contact Information:</strong> Physical address, billing address, and other contact details.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type and version, operating system, and other technology on the devices you use to access our website.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, products, and services.
              </li>
              <li>
                <strong>Client Data:</strong> Information provided by you or on your behalf to enable us to provide our cybersecurity services. This may include sensitive information about your systems and security posture.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our services.</li>
              <li>To improve, personalize, and expand our services.</li>
              <li>To understand and analyze how you use our services.</li>
              <li>To develop new products, services, features, and functionality.</li>
              <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes.</li>
              <li>To process your transactions.</li>
              <li>To find and prevent fraud.</li>
              <li>For compliance purposes, including enforcing our terms of service, or other legal rights.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
            </p>
            <p>
              Despite these measures, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">6. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">7. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact us:
            </p>
            <div className="space-y-4 mt-4 not-prose">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-800 dark:text-white">Email</h3>
                  <a href={`mailto:${contactDetails.email}`} className="text-purple-600 dark:text-purple-400 hover:underline">{contactDetails.email}</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-800 dark:text-white">Phone / WhatsApp</h3>
                  <p className="text-slate-600 dark:text-slate-300">{contactDetails.phone} (Phone)</p>
                  <p className="text-slate-600 dark:text-slate-300">{contactDetails.whatsapp} (WhatsApp)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-800 dark:text-white">Address</h3>
                  <p className="text-slate-600 dark:text-slate-300">{contactDetails.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
