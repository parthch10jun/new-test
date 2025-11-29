import {
  Shield,
  FileCheck,
  Lock,
  Network,
  Brain,
  CheckCircle,
  Cloud,
  Siren,
  ShieldCheck,
  ServerCrash,
  Stethoscope, HeartPulse, Landmark, CreditCard, ShieldAlert, BanknoteIcon
} from "lucide-react"

export const hardcodedServices = [
  {
    id: "iso-27001",
    title: "ISO 27001 Compliance",
    subtitle: "Information Security Management",
    category: "Compliance",
    description:
        "Achieve and maintain ISO 27001 certification with our comprehensive information security management system (ISMS) implementation services. We guide organizations through the entire certification process, from gap analysis to certification audit preparation.",
    features: [
      "Gap Analysis",
      "Risk Assessment",
      "Policy Development",
      "Implementation Support",
      "Internal Audits",
      "Certification Support",
    ],
    icon: Shield,
    image: "/ISO27001.webp",
    tags: ["Compliance", "ISMS", "Certification", "Information Security"],
    benefits: [
      "Demonstrate security commitment to clients and stakeholders",
      "Systematically manage and minimize information security risks",
      "Meet regulatory and contractual requirements",
      "Improve internal processes and security posture",
      "Enhance business resilience and continuity",
      "Gain a competitive advantage in the marketplace",
    ],
    reportTypes: [
      { type: "Stage 1 Audit Report", scope: "Documentation Review & ISMS Design", auditPeriod: "N/A (Snapshot)" },
      {
        type: "Stage 2 Audit Report",
        scope: "Implementation & Effectiveness of ISMS",
        auditPeriod: "Typically 3-6 months observation",
      },
      {
        type: "Surveillance Audit Report",
        scope: "Ongoing ISMS Maintenance & Improvement",
        auditPeriod: "Annually post-certification",
      },
    ],
    approach: {
      introduction:
          "Our proven methodology for ISO 27001 Compliance is designed for clarity and efficiency, guiding you from initial assessment to final certification and beyond.",
      steps: [
        {
          title: "Phase 1: Planning & Scoping",
          description:
              "Define ISMS scope, objectives, and context. Conduct initial gap analysis against ISO 27001 requirements.",
        },
        {
          title: "Phase 2: Risk Assessment & Treatment",
          description:
              "Identify assets, threats, vulnerabilities. Conduct thorough risk assessment and develop a risk treatment plan (RTP).",
        },
        {
          title: "Phase 3: ISMS Documentation & Implementation",
          description: "Develop policies, procedures, Statement of Applicability (SoA), and implement controls.",
        },
        {
          title: "Phase 4: Internal Audit & Management Review",
          description:
              "Conduct internal audits to verify ISMS effectiveness. Perform management reviews to ensure suitability and adequacy.",
        },
        {
          title: "Phase 5: Certification Audit Support",
          description: "Support during Stage 1 and Stage 2 certification audits by an accredited body.",
        },
        {
          title: "Phase 6: Continual Improvement",
          description: "Establish processes for ongoing monitoring, review, and improvement of the ISMS.",
        },
      ],
    },
    packages: [
      {
        name: "ISO 27001 Foundation Package",
        duration: "3-6 months*",
        keyArtefacts: [
          "Gap Analysis Report",
          "Risk Treatment Plan",
          "Basic ISMS Documentation Set (Core Policies)",
          "Internal Audit Plan",
        ],
        popular: true,
      },
      {
        name: "ISO 27001 Comprehensive Package",
        duration: "6-12 months*",
        keyArtefacts: [
          "Full ISMS Documentation Suite (All Policies & Procedures)",
          "Statement of Applicability (SoA)",
          "Internal Audit Reports & Management Review Records",
          "Certification Audit Support",
        ],
        popular: false,
      },
      {
        name: "ISO 27001 Maintenance & Surveillance Support",
        duration: "Ongoing*",
        keyArtefacts: [
          "Annual Internal Audit Support",
          "Surveillance Audit Preparation",
          "ISMS Continual Improvement Guidance",
        ],
        popular: false,
      },
    ],
    packageNote: "*Typical averages for ISO 27001 Compliance—final schedule set during kickoff.",
    differentiators: [
      {
        title: "Certified Lead Auditors & Implementers",
        description: "Our team consists of certified ISO 27001 Lead Auditors and Implementers with deep experience.",
      },
      {
        title: "Tailored & Pragmatic Solutions",
        description:
            "We provide solutions customized to your specific needs and business context, avoiding boilerplate approaches.",
      },
      {
        title: "Actionable Insights & Guidance",
        description:
            "Receive clear, practical recommendations to improve your ISMS and achieve certification efficiently.",
      },
      {
        title: "Ongoing Support & Partnership",
        description:
            "We offer continued support for surveillance audits and ISMS continual improvement to ensure sustained success.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       '"Partnering with TCSA for ISO 27001 Compliance was a game-changer. Their expertise was invaluable in achieving certification smoothly."',
    //   clientInfo: "CISO, Global Tech Solutions Provider",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is ISO 27001?",
        answer:
            "ISO 27001 is an international standard for information security management systems (ISMS). It provides a framework for establishing, implementing, maintaining, and continually improving an ISMS.",
      },
      {
        question: "Why is ISO 27001 certification important?",
        answer:
            "Certification demonstrates to customers, partners, and stakeholders that an organization has implemented a robust ISMS to manage and protect sensitive information, enhancing trust and often meeting contractual or regulatory requirements.",
      },
      {
        question: "How long does ISO 27001 implementation take?",
        answer:
            "The duration varies depending on the organization's size, complexity, and existing security posture, but typically ranges from 6 to 12 months.",
      },
      {
        question: "What are the key benefits of ISO 27001?",
        answer:
            "Key benefits include improved information security, enhanced risk management, compliance with legal and regulatory requirements, increased customer confidence, and a competitive advantage.",
      },
      {
        question: "What is a Statement of Applicability (SoA)?",
        answer:
            "The SoA is a crucial document in ISO 27001 that lists all controls from Annex A, states whether each control is implemented, justifies its inclusion or exclusion, and references relevant documentation.",
      },
    ],
    cta: {
      heading: "Ready to Master ISO 27001 Compliance?",
      text: "Schedule a free consultation to discuss your ISO 27001 needs with our expert team.",
      buttonText: "Book ISO 27001 Consultation",
      buttonLink: "/contact?service=iso-27001",
      secondaryLinkText: "Learn More About ISO 27001",
      secondaryLinkHref: "/resources/learn-more-iso-27001",
    },
    relatedServices: ["soc-2", "gdpr", "pci-dss", "risk-assessment"],
  },
  {
    id: "soc-1",
    title: "SOC 1 Compliance",
    subtitle: "Prove your internal controls over financial reporting (ICFR).",
    category: "Compliance",
    description:
        "SOC 1 (SSAE 18) reports on controls at a service organization relevant to user entities' internal control over financial reporting. Ideal for service providers impacting client financial statements.",
    features: [
      "Type I & Type II Audit Readiness",
      "ICFR Control Design & Testing",
      "COSO Framework Mapping",
      "Support for Vendor Questionnaires",
    ],
    icon: FileCheck,
    image: "/SOC1.png?width=1200&height=600",
    tags: ["SOC 1", "Financial Audit", "ICFR", "Compliance", "SSAE 18"],
    benefits: [
      "Meet enterprise client requirements for financial controls.",
      "Prepare for IPO, SOX, or other regulatory demands.",
      "Demonstrate trust and transparency to financial partners.",
      "Streamline audit processes with expert guidance.",
    ],
    reportTypes: [
      { type: "Type I", scope: 'Control design "as of" a single date', auditPeriod: "0 days (snapshot)" },
      { type: "Type II", scope: "Design and operating effectiveness", auditPeriod: "3–12 months" },
    ],
    approach: {
      introduction:
          "Our proven SOC 1 methodology is designed for clarity and efficiency, guiding you from initial assessment to final attestation.",
      steps: [
        { title: "Readiness Assessment", description: "Map your systems to COSO & ICFR, identify gaps." },
        {
          title: "Remediation Sprint",
          description: "Provide templates for narratives, flowcharts, and evidence plans.",
        },
        {
          title: "Control Walk-throughs",
          description: "Joint sessions with your finance team and external accountants.",
        },
        {
          title: "Continuous Evidence Collection",
          description: "AI engine tags GL exports, bank recs, change-tickets.",
        },
        { title: "Audit Coordination", description: "Liaise with independent CPA; resolve queries in real time." },
        {
          title: "Final Report & Executive Debrief",
          description: "Deliver auditor-signed SOC 1 and next-step roadmap.",
        },
      ],
    },
    packages: [
      {
        name: "Type I Express",
        duration: "6–8 weeks*",
        keyArtefacts: ["Readiness report", "ICFR control matrix", "Auditor-signed SOC 1 Type I"],
        popular: true,
      },
      {
        name: "Type II Complete",
        duration: "6+ months (3–12 mo review)*",
        keyArtefacts: ["Interim gap remediation", "Continuous evidence portal", "Auditor-signed SOC 1 Type II"],
        popular: false,
      },
    ],
    packageNote: "*Typical averages—final schedule set during kickoff.",
    differentiators: [
      { title: "Finance-savvy experts", description: "Team of CPAs + security pros fluent in SOX & COSO." },
      {
        title: "AI-powered evidence",
        description: "Auto-classifies GL, bank recs, ticket logs—cuts manual effort by 40%.",
      },
      { title: "ICFR templates", description: "Ready-made narratives, RACMs, flowcharts to accelerate documentation." },
      { title: "Fixed-fee pricing", description: "No surprise overruns; clear milestones and weekly status calls." },
    ],
    faqs: [
      {
        question: "Do we need SOC 1 if we already have SOC 2?",
        answer:
            "Yes—SOC 2 covers trust-services criteria; SOC 1 focuses strictly on controls that impact your customers’ financial reporting. Many enterprise finance teams require both.",
      },
      {
        question: "How much overlap is there with SOX testing?",
        answer:
            "Significant. SOC 1 testing aligns to COSO and ICFR, so work done for SOC 1 reduces SOX audit effort later.",
      },
      {
        question: "What systems are in-scope for SOC 1?",
        answer:
            "Anything that can affect client financial data—e.g., transaction engines, billing platforms, data interfaces, change-management workflows.",
      },
      {
        question: "Can we reuse evidence gathered for ISO 27001?",
        answer:
            "Absolutely. Controls like access management and change control map closely; our platform cross-references evidence to avoid duplication.",
      },
    ],
    cta: {
      heading: "Ready to Prove Your ICFR?",
      text: "Schedule a free SOC 1 readiness call with our CPA-led team.",
      buttonText: "Book SOC 1 Consultation",
      buttonLink: "/contact?service=soc-1",
      secondaryLinkText: "Need SOC 2 as well? → Explore our SOC 2 services",
      secondaryLinkHref: "/services/soc-2",
    },
    relatedServices: ["iso-27001", "nist", "soc-2", "risk-assessment"],
  },
  {
    id: "soc-2",
    title: "SOC 2 Compliance",
    subtitle: "Trust Services Criteria",
    category: "Compliance",
    description:
        "Achieve SOC 2 compliance, demonstrating security, availability, processing integrity, confidentiality, or privacy of your systems.",
    features: [
      "Type I & Type II Audits",
      "Trust Services Criteria Mapping",
      "Gap Analysis",
      "Remediation Support",
      "Continuous Monitoring Guidance",
    ],
    icon: CheckCircle,
    image: "/SOC2.png?width=1200&height=600",
    tags: ["SOC 2", "Security", "Compliance", "Trust", "AICPA"],
    benefits: [
      "Build client trust and confidence",
      "Meet vendor and enterprise requirements",
      "Improve security posture and operational excellence",
      "Demonstrate commitment to data protection",
    ],
    reportTypes: [
      { type: "Type I Report", scope: "Design of controls as of a point in time", auditPeriod: "N/A (Snapshot)" },
      {
        type: "Type II Report",
        scope: "Design and operating effectiveness of controls over a period",
        auditPeriod: "Typically 6-12 months",
      },
    ],
    approach: {
      introduction:
          "Our proven methodology for SOC 2 Compliance is designed for clarity and efficiency, guiding you through the Trust Services Criteria.",
      steps: [
        {
          title: "Step 1: Scoping & TSC Selection",
          description:
              "Determine report type (Type I/II) and applicable Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy).",
        },
        {
          title: "Step 2: Readiness Assessment & Gap Analysis",
          description: "Conduct a thorough gap analysis against selected TSCs and identify areas for remediation.",
        },
        {
          title: "Step 3: Remediation & Control Implementation",
          description:
              "Develop and implement necessary policies, procedures, and technical controls to address identified gaps.",
        },
        {
          title: "Step 4: Evidence Collection & Pre-Audit Testing",
          description: "Gather evidence of control operation and perform internal testing to ensure audit readiness.",
        },
        {
          title: "Step 5: Audit Support & Report Issuance",
          description: "Liaise with the external CPA firm during the audit and support the report issuance process.",
        },
      ],
    },
    packages: [
      {
        name: "SOC 2 Readiness Package",
        duration: "8-12 weeks*",
        keyArtefacts: ["Readiness Assessment Report", "Control Matrix (TSC mapped)", "Remediation Roadmap"],
        popular: true,
      },
      {
        name: "SOC 2 Implementation & Audit Support Package",
        duration: "6-12 months*",
        keyArtefacts: [
          "Full Control Implementation Support",
          "Evidence Management Platform Access (Optional)",
          "Auditor-signed SOC 2 Report",
        ],
        popular: false,
      },
    ],
    packageNote: "*Typical averages for SOC 2 Compliance—final schedule set during kickoff.",
    differentiators: [
      {
        title: "Expertise in All Trust Services Criteria",
        description: "Our team consists of certified experts with deep experience in all five Trust Services Criteria.",
      },
      {
        title: "Tailored & CPA Firm Agnostic Solutions",
        description:
            "We provide solutions customized to your specific needs and business context, working with your chosen CPA firm.",
      },
      {
        title: "Actionable Insights & Automated Evidence Collection",
        description:
            "Receive clear, practical recommendations. We can help implement automated evidence collection to streamline audits.",
      },
      {
        title: "Ongoing Support & Report Leverage",
        description:
            "We offer continued support to ensure sustained compliance and help you leverage your SOC 2 report effectively.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       '"Partnering with TCSA for SOC 2 Compliance was essential for our enterprise clients. Their expertise was invaluable and made the process seamless."',
    //   clientInfo: "CEO, B2B SaaS Provider",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is SOC 2 Compliance?",
        answer:
            "SOC 2 is a reporting framework developed by the AICPA that assesses a service organization's controls relevant to Security, Availability, Processing Integrity, Confidentiality, and/or Privacy (Trust Services Criteria).",
      },
      {
        question: "Why is SOC 2 Compliance important?",
        answer:
            "It builds client trust, meets vendor due diligence requirements, improves security posture, and can be a significant competitive differentiator, especially for SaaS and cloud service providers.",
      },
      {
        question: "Which Trust Services Criteria (TSCs) should we select?",
        answer:
            "Security is always required. The other TSCs (Availability, Confidentiality, Processing Integrity, Privacy) depend on the services you provide and the commitments you make to your customers.",
      },
      {
        question: "How often do we need a SOC 2 report?",
        answer:
            "A SOC 2 report is typically renewed annually to demonstrate ongoing compliance and effectiveness of controls.",
      },
      {
        question: "What's the difference between SOC 2 Type I and Type II?",
        answer:
            "A Type I report assesses the design of controls at a specific point in time. A Type II report assesses both the design and operating effectiveness of controls over a period (usually 6-12 months).",
      },
    ],
    cta: {
      heading: "Ready to Master SOC 2 Compliance?",
      text: "Schedule a free consultation to discuss your SOC 2 needs with our expert team.",
      buttonText: "Book SOC 2 Consultation",
      buttonLink: "/contact?service=soc-2",
      secondaryLinkText: "Learn More About SOC 2",
      secondaryLinkHref: "/resources/learn-more-soc-2",
    },
    relatedServices: ["soc-1", "iso-27001", "pci-dss", "hipaa", "gdpr"],
  },
  {
    id: "gdpr",
    title: "GDPR Compliance",
    subtitle: "European Data Protection",
    category: "Compliance",
    description:
        "Navigate the complexities of the General Data Protection Regulation with our expert guidance. We provide comprehensive GDPR compliance services to help organizations protect personal data and respect privacy rights of EU citizens.",
    features: [
      "Data Mapping & Inventory (RoPA)",
      "Privacy Impact Assessments (DPIA)",
      "Consent Management Frameworks",
      "Data Subject Rights (DSR) Handling",
      "Breach Response Planning & Notification",
      "DPO Services (Outsourced/Advisory)",
    ],
    icon: Lock,
    image: "/gdpr.jpg?width=1200&height=600",
    tags: ["Privacy", "EU Regulation", "Data Protection", "GDPR"],
    benefits: [
      "Avoid significant financial penalties (up to 4% of global turnover)",
      "Build customer trust through robust privacy protection",
      "Create sustainable data governance practices",
      "Enable compliant international data transfers",
    ],
    reportTypes: [
      {
        type: "Data Protection Impact Assessment (DPIA) Report",
        scope: "High-risk processing activities",
        auditPeriod: "N/A (As needed per project)",
      },
      {
        type: "GDPR Audit Report / Gap Analysis",
        scope: "Overall compliance status against GDPR articles",
        auditPeriod: "Typically Annually or Biennially",
      },
    ],
    approach: {
      introduction:
          "Our GDPR Compliance methodology ensures your organization meets the stringent requirements of the EU's data protection regulation.",
      steps: [
        {
          title: "Step 1: GDPR Applicability & Scoping",
          description:
              "Determine how GDPR applies to your organization and define the scope of personal data processing activities.",
        },
        {
          title: "Step 2: Data Mapping & Gap Analysis (RoPA)",
          description:
              "Create a Record of Processing Activities (RoPA) and assess current practices against GDPR requirements.",
        },
        {
          title: "Step 3: Policy Development & Implementation",
          description:
              "Develop and implement necessary policies (privacy, data retention, DSR), procedures, and controls.",
        },
        {
          title: "Step 4: DPO Support & Staff Training",
          description:
              "Provide Data Protection Officer (DPO) support if required, and conduct staff awareness training on GDPR principles.",
        },
        {
          title: "Step 5: DPIAs, DSRs & Breach Management",
          description:
              "Establish processes for conducting DPIAs, handling Data Subject Rights requests, and managing data breaches.",
        },
        {
          title: "Step 6: Audit & Continuous Monitoring",
          description:
              "Conduct internal audits and establish processes for ongoing GDPR compliance monitoring and improvement.",
        },
      ],
    },
    packages: [
      {
        name: "GDPR Essentials Package",
        duration: "2-4 months*",
        keyArtefacts: [
          "GDPR Gap Analysis Report",
          "Record of Processing Activities (RoPA) Template & Guidance",
          "Basic Privacy Policy Template",
        ],
        popular: true,
      },
      {
        name: "GDPR Advanced Package",
        duration: "4-8 months*",
        keyArtefacts: [
          "Full Suite of GDPR Policies & Procedures",
          "DPIA Execution Support & Templates",
          "Data Breach Notification Protocol",
          "DSR Handling Workflow",
        ],
        popular: false,
      },
    ],
    packageNote: "*Typical averages for GDPR Compliance—final schedule set during kickoff.",
    differentiators: [
      {
        title: "Deep GDPR Expertise (CIPP/E Certified)",
        description:
            "Our consultants are certified privacy professionals (e.g., CIPP/E) with extensive experience in GDPR.",
      },
      {
        title: "Pragmatic & Risk-Based Solutions",
        description:
            "We focus on practical, risk-based approaches to GDPR compliance tailored to your business operations.",
      },
      {
        title: "International Perspective",
        description: "We understand the nuances of GDPR for businesses operating globally and handling EU data.",
      },
      {
        title: "Ongoing Advisory & DPO Services",
        description:
            "Post-implementation support and outsourced/advisory DPO services to help you maintain compliance effectively.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       '"TCSA\'s GDPR guidance was crucial for our EU market entry. Their practical approach made a complex regulation manageable. Highly recommend!"',
    //   clientInfo: "CEO, Global E-commerce Platform",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is GDPR?",
        answer:
            "The General Data Protection Regulation (GDPR) is an EU law on data protection and privacy for all individuals within the European Union (EU) and the European Economic Area (EEA). It also addresses the transfer of personal data outside the EU and EEA areas.",
      },
      {
        question: "Does my business need to comply with GDPR?",
        answer:
            "If your business processes personal data of EU residents, or offers goods/services to them, GDPR likely applies, regardless of your business's physical location.",
      },
      {
        question: "What are the penalties for GDPR non-compliance?",
        answer:
            "Fines can be severe, up to €20 million or 4% of the company’s global annual turnover of the preceding financial year, whichever is higher.",
      },
      {
        question: "What is a Data Protection Officer (DPO)?",
        answer:
            "A DPO is a role mandated by GDPR for certain organizations (e.g., public authorities, or those whose core activities involve large-scale, regular, and systematic monitoring of individuals or processing of sensitive data). The DPO oversees data protection strategy and GDPR compliance.",
      },
      {
        question: "What is a Data Protection Impact Assessment (DPIA)?",
        answer:
            "A DPIA is a process to help identify and minimize the data protection risks of a project or plan. It is required under GDPR for processing likely to result in a high risk to individuals’ rights and freedoms.",
      },
    ],
    cta: {
      heading: "Navigate GDPR Compliance with Confidence?",
      text: "Ensure your data practices meet EU standards. Contact us for a GDPR assessment.",
      buttonText: "Get GDPR Consultation",
      buttonLink: "/contact?service=gdpr",
      secondaryLinkText: "Explore GDPR Resources",
      secondaryLinkHref: "/resources/learn-more-gdpr",
    },
    relatedServices: ["dpdp-act", "soc-2", "iso-27001", "privacy-by-design"],
  },


  {
    id: "dpdp-act",
    title: "DPDP Act Compliance",
    subtitle: "Protect Personal Data under India’s DPDP Act",
    category: "Compliance",
    description:
        "Navigate India’s Digital Personal Data Protection Act (DPDP Act) with our expert compliance services. We help organizations protect personal data and comply with India’s data protection framework, ensuring privacy and accountability.",
    features: [
      "Personal Data Inventory & Mapping",
      "Data Protection Impact Assessments (DPIA)",
      "Consent Management Systems",
      "Data Subject Rights Handling",
      "Breach Notification Frameworks",
      "Data Protection Officer (DPO) Support"
    ],
    icon: ShieldAlert,
    image: "/DPDP.jpg?width=1200&height=600",
    tags: ["DPDP Act", "Data Privacy", "India Compliance", "Personal Data Protection"],
    benefits: [
      "Ensure compliance with India’s DPDP Act.",
      "Protect personal data and avoid penalties.",
      "Build trust with customers and stakeholders.",
      "Enable secure data processing practices."
    ],
    reportTypes: [
      {
        type: "DPDP Act Compliance Assessment Report",
        scope: "Evaluate adherence to DPDP Act requirements",
        auditPeriod: "Annually or as needed"
      },
      {
        type: "Data Protection Impact Assessment (DPIA) Report",
        scope: "High-risk personal data processing activities",
        auditPeriod: "As needed per project"
      }
    ],
    approach: {
      introduction:
          "Our DPDP Act compliance methodology ensures your organization meets India’s data protection requirements effectively.",
      steps: [
        {
          title: "Step 1: DPDP Act Applicability & Scoping",
          description:
              "Determine how the DPDP Act applies to your organization and scope personal data processing."
        },
        {
          title: "Step 2: Data Mapping & Gap Analysis",
          description:
              "Map personal data flows and assess compliance with DPDP Act requirements."
        },
        {
          title: "Step 3: Policy & Procedure Development",
          description:
              "Develop DPDP-compliant policies for data protection, consent, and rights handling."
        },
        {
          title: "Step 4: Staff Training & DPO Support",
          description:
              "Train employees on DPDP Act principles and provide DPO support if required."
        },
        {
          title: "Step 5: DPIAs & Breach Management",
          description:
              "Establish processes for DPIAs, data subject rights, and breach notifications."
        },
        {
          title: "Step 6: Audits & Continuous Monitoring",
          description:
              "Conduct audits and monitor compliance with the DPDP Act."
        }
      ]
    },
    packages: [
      {
        name: "DPDP Act Essentials Package",
        duration: "2-4 months*",
        keyArtefacts: [
          "DPDP Act Gap Analysis Report",
          "Personal Data Inventory Template",
          "Basic DPDP Policy Templates"
        ],
        popular: true
      },
      {
        name: "DPDP Act Advanced Package",
        duration: "4-8 months*",
        keyArtefacts: [
          "Full Suite of DPDP Policies",
          "DPIA Execution Support",
          "Breach Notification Protocol",
          "Data Subject Rights Workflow"
        ],
        popular: false
      }
    ],
    packageNote: "*Typical averages for DPDP Act Compliance—final schedule set during kickoff.",
    differentiators: [
      {
        title: "India-Specific Expertise",
        description: "Our team specializes in DPDP Act compliance for Indian businesses."
      },
      {
        title: "Practical Compliance Solutions",
        description: "We provide tailored, risk-based approaches to meet DPDP Act requirements."
      },
      {
        title: "Regulatory Updates",
        description: "Stay compliant with evolving DPDP Act guidelines."
      },
      {
        title: "Ongoing Support",
        description: "Continuous guidance to maintain DPDP Act compliance."
      }
    ],
    // clientSuccess: {
    //   quote:
    //       "TCSA’s DPDP Act services made compliance straightforward and helped us protect customer data effectively.",
    //   clientInfo: "Privacy Officer, Tech Startup",
    //   avatar: "/placeholder.svg?width=40&height=40"
    // },
    faqs: [
      {
        question: "What is the DPDP Act?",
        answer:
            "The DPDP Act is India’s data protection law governing the processing of personal data."
      },
      {
        question: "Who needs to comply with the DPDP Act?",
        answer:
            "Any organization processing personal data of Indian residents must comply."
      },
      {
        question: "What are the penalties for DPDP Act non-compliance?",
        answer:
            "Penalties can include fines up to ₹250 crore per violation, depending on the severity."
      },
      {
        question: "What is a Data Protection Officer (DPO)?",
        answer:
            "A DPO oversees an organization’s data protection strategy and DPDP Act compliance."
      }
    ],
    cta: {
      heading: "Navigate DPDP Act Compliance with Ease",
      text: "Protect personal data and meet India’s DPDP Act standards. Contact us for a compliance assessment.",
      buttonText: "Get DPDP Act Consultation",
      buttonLink: "/contact?service=dpdp-act",
      secondaryLinkText: "Explore DPDP Act Resources",
      secondaryLinkHref: "/resources/learn-more-dpdp-act"
    },
    relatedServices: ["data-privacy-assessment", "gdpr", "compliance-audit"]
  },

  {
    id: "pci-dss",
    title: "PCI DSS Compliance",
    subtitle: "Secure Payment Card Data with Confidence",
    category: "Compliance",
    description:
        "Ensure your organization meets PCI DSS standards for protecting cardholder data with our expert compliance services. We help businesses handling payment cards implement robust security measures and maintain compliance.",
    features: [
      "Cardholder Data Inventory",
      "Security Controls Assessment",
      "PCI DSS Policy Development",
      "Vulnerability Management",
      "Incident Response Planning",
      "Staff Training on PCI DSS"
    ],
    icon: CreditCard,
    image: "/PCI.png?width=1200&height=600",
    tags: ["PCI DSS", "Payment Security", "Cardholder Data", "Compliance"],
    benefits: [
      "Achieve and maintain PCI DSS compliance.",
      "Protect cardholder data from breaches.",
      "Avoid fines and reputational damage.",
      "Build trust with customers and partners."
    ],
    reportTypes: [
      {
        type: "PCI DSS Gap Analysis Report",
        scope: "Evaluate compliance with PCI DSS requirements",
        auditPeriod: "Annually or as needed"
      },
      {
        type: "Report on Compliance (ROC)",
        scope: "Comprehensive PCI DSS compliance status",
        auditPeriod: "Annually for Level 1 merchants"
      }
    ],
    approach: {
      introduction:
          "Our PCI DSS compliance methodology ensures your organization secures cardholder data and meets industry standards.",
      steps: [
        {
          title: "Step 1: PCI DSS Applicability & Scoping",
          description:
              "Determine how PCI DSS applies to your organization and scope cardholder data environments."
        },
        {
          title: "Step 2: Gap Analysis & Data Mapping",
          description:
              "Map cardholder data flows and assess compliance with PCI DSS requirements."
        },
        {
          title: "Step 3: Policy & Control Development",
          description:
              "Develop PCI DSS-compliant policies and security controls for payment environments."
        },
        {
          title: "Step 4: Staff Training & Awareness",
          description:
              "Train employees on PCI DSS standards and secure payment handling."
        },
        {
          title: "Step 5: Incident Response & Vulnerability Management",
          description:
              "Establish processes for vulnerability scanning and incident response."
        },
        {
          title: "Step 6: Audits & Continuous Monitoring",
          description:
              "Conduct regular audits and monitor compliance with PCI DSS standards."
        }
      ]
    },
    packages: [
      {
        name: "PCI DSS Essentials Package",
        duration: "2-4 months*",
        keyArtefacts: [
          "PCI DSS Gap Analysis Report",
          "Cardholder Data Inventory Template",
          "Basic PCI DSS Policy Templates"
        ],
        popular: true
      },
      {
        name: "PCI DSS Advanced Package",
        duration: "4-8 months*",
        keyArtefacts: [
          "Full Suite of PCI DSS Policies",
          "Vulnerability Management Plan",
          "Incident Response Protocol",
          "Audit Preparation Support"
        ],
        popular: false
      }
    ],
    packageNote: "*Typical averages for PCI DSS Compliance—final schedule set during kickoff.",
    differentiators: [
      {
        title: "Payment Security Expertise",
        description: "Our team specializes in PCI DSS compliance for payment environments."
      },
      {
        title: "Practical Solutions",
        description: "We provide tailored, risk-based approaches to meet PCI DSS requirements."
      },
      {
        title: "Audit Support",
        description: "We prepare you for PCI DSS audits and assessments."
      },
      {
        title: "Ongoing Guidance",
        description: "Continuous support to maintain PCI DSS compliance."
      }
    ],
    // clientSuccess: {
    //   quote:
    //       "TCSA’s PCI DSS services helped us secure cardholder data and achieve compliance effortlessly.",
    //   clientInfo: "IT Manager, Retail Chain",
    //   avatar: "/placeholder.svg?width=40&height=40"
    // },
    faqs: [
      {
        question: "What is PCI DSS?",
        answer:
            "PCI DSS is a set of security standards to protect cardholder data during payment transactions."
      },
      {
        question: "Who needs to comply with PCI DSS?",
        answer:
            "Any organization that processes, stores, or transmits cardholder data must comply."
      },
      {
        question: "What are the penalties for PCI DSS non-compliance?",
        answer:
            "Fines can range from $5,000 to $100,000 per month, plus potential loss of payment processing privileges."
      },
      {
        question: "What is a Report on Compliance (ROC)?",
        answer:
            "A ROC is a detailed report required for Level 1 merchants to demonstrate PCI DSS compliance."
      }
    ],
    cta: {
      heading: "Secure Payments with PCI DSS Compliance",
      text: "Protect cardholder data and meet PCI DSS standards. Contact us for a compliance assessment.",
      buttonText: "Get PCI DSS Consultation",
      buttonLink: "/contact?service=pci-dss",
      secondaryLinkText: "Explore PCI DSS Resources",
      secondaryLinkHref: "/resources/learn-more-pci-dss"
    },
    relatedServices: ["payment-security", "vulnerability-assessment", "compliance-audit"]
  },

  {
    id: "rbi-compliance",
    title: "RBI Guidelines Compliance",
    subtitle: "Secure Financial Data with RBI Standards",
    category: "Compliance",
    description:
        "Navigate the Reserve Bank of India’s cybersecurity and data protection guidelines with our expert services. We help banks, NBFCs, and financial institutions comply with RBI’s stringent requirements for data security and fraud prevention.",
    features: [
      "Data Inventory & Mapping",
      "Cybersecurity Risk Assessments",
      "RBI-Compliant Policy Development",
      "Fraud Prevention Frameworks",
      "Incident Response Planning",
      "Staff Training on RBI Guidelines"
    ],
    icon: BanknoteIcon,
    image: "/rbi.png?width=1200&height=600",
    tags: ["RBI Guidelines", "Financial Cybersecurity", "Data Protection", "Compliance"],
    benefits: [
      "Ensure compliance with RBI’s cybersecurity mandates.",
      "Protect sensitive financial data from breaches.",
      "Avoid regulatory penalties and reputational damage.",
      "Build customer trust in your financial services."
    ],
    reportTypes: [
      {
        type: "RBI Cybersecurity Assessment Report",
        scope: "Evaluate adherence to RBI’s cybersecurity framework",
        auditPeriod: "Annually or as required"
      },
      {
        type: "RBI Compliance Audit Report",
        scope: "Overall compliance with RBI guidelines",
        auditPeriod: "Typically Annually"
      }
    ],
    approach: {
      introduction:
          "Our RBI compliance methodology ensures financial institutions meet regulatory standards for cybersecurity and data protection.",
      steps: [
        {
          title: "Step 1: RBI Applicability & Scoping",
          description:
              "Identify how RBI guidelines apply to your institution and scope data processing activities."
        },
        {
          title: "Step 2: Risk Assessment & Gap Analysis",
          description:
              "Map sensitive data flows and assess compliance with RBI’s cybersecurity requirements."
        },
        {
          title: "Step 3: Policy & Procedure Development",
          description:
              "Create RBI-compliant policies for data protection, fraud prevention, and incident response."
        },
        {
          title: "Step 4: Staff Training & Awareness",
          description:
              "Train employees on RBI guidelines, fraud prevention, and secure data handling."
        },
        {
          title: "Step 5: Incident Response & Management",
          description:
              "Establish processes for detecting, responding to, and reporting security incidents."
        },
        {
          title: "Step 6: Audits & Continuous Monitoring",
          description:
              "Conduct regular audits and monitor compliance with evolving RBI guidelines."
        }
      ]
    },
    packages: [
      {
        name: "RBI Essentials Package",
        duration: "2-4 months*",
        keyArtefacts: [
          "RBI Gap Analysis Report",
          "Data Inventory Template",
          "Basic RBI Policy Templates"
        ],
        popular: true
      },
      {
        name: "RBI Advanced Package",
        duration: "4-8 months*",
        keyArtefacts: [
          "Full Suite of RBI Policies",
          "Cybersecurity Risk Assessment",
          "Incident Response Protocol",
          "Fraud Prevention Framework"
        ],
        popular: false
      }
    ],
    packageNote: "*Typical averages for RBI Compliance—final schedule set during kickoff.",
    differentiators: [
      {
        title: "Financial Sector Expertise",
        description: "Our team specializes in RBI compliance for banks and NBFCs."
      },
      {
        title: "Practical Solutions",
        description: "We provide tailored, risk-based approaches to meet RBI requirements."
      },
      {
        title: "Regulatory Updates",
        description: "Stay compliant with the latest RBI guidelines and updates."
      },
      {
        title: "Ongoing Support",
        description: "Continuous guidance to maintain RBI compliance."
      }
    ],
    // clientSuccess: {
    //   quote:
    //       "TCSA’s RBI compliance services ensured we met regulatory standards and protected our customers’ data.",
    //   clientInfo: "Risk Manager, Regional Bank",
    //   avatar: "/placeholder.svg?width=40&height=40"
    // },
    faqs: [
      {
        question: "What are RBI Guidelines for cybersecurity?",
        answer:
            "RBI guidelines mandate cybersecurity and data protection measures for banks, NBFCs, and other financial institutions."
      },
      {
        question: "Who needs to comply with RBI guidelines?",
        answer:
            "All RBI-regulated entities, including banks, NBFCs, and payment system providers, must comply."
      },
      {
        question: "What are the penalties for non-compliance?",
        answer:
            "Penalties include fines, restrictions, or reputational damage, depending on the violation."
      },
      {
        question: "What is a cybersecurity framework under RBI?",
        answer:
            "It’s a set of policies and controls to protect financial data and prevent cyber threats."
      }
    ],
    cta: {
      heading: "Achieve RBI Compliance with Confidence",
      text: "Secure your financial institution with our RBI Guidelines compliance services.",
      buttonText: "Get RBI Consultation",
      buttonLink: "/contact?service=rbi-guidelines",
      secondaryLinkText: "Explore RBI Resources",
      secondaryLinkHref: "/resources/learn-more-rbi"
    },
    relatedServices: ["financial-security-assessment", "fraud-detection", "compliance-audit"]
  },

  {
    id: "hipaa",
    title: "HIPAA Compliance",
    subtitle: "Protect Healthcare Data with Confidence",
    category: "Compliance",
    description:
        "Ensure your organization meets HIPAA requirements with our expert compliance services. We guide healthcare providers and business associates in safeguarding Protected Health Information (PHI) and respecting patient privacy rights.",
    features: [
      "PHI Data Mapping & Inventory",
      "Risk Assessments & Mitigation Plans",
      "HIPAA Policy Development",
      "Breach Notification Procedures",
      "Staff Training on HIPAA Rules",
      "Business Associate Agreement (BAA) Management"
    ],
    icon: Stethoscope,
    image: "/hipaa.jpg?width=1200&height=600",
    tags: ["HIPAA", "Healthcare Privacy", "PHI Protection", "Compliance"],
    benefits: [
      "Avoid hefty HIPAA fines and penalties.",
      "Protect patient data from breaches.",
      "Build trust with patients and partners.",
      "Ensure audit-ready compliance practices."
    ],
    reportTypes: [
      {
        type: "HIPAA Risk Assessment Report",
        scope: "Identify risks to PHI security and privacy",
        auditPeriod: "Annually or as needed"
      },
      {
        type: "HIPAA Compliance Audit Report",
        scope: "Overall compliance with HIPAA Privacy and Security Rules",
        auditPeriod: "Typically Annually"
      }
    ],
    approach: {
      introduction:
          "Our HIPAA compliance methodology ensures your organization protects PHI and meets regulatory requirements effectively.",
      steps: [
        {
          title: "Step 1: HIPAA Applicability & Scoping",
          description:
              "Determine how HIPAA applies to your organization and identify PHI processing activities."
        },
        {
          title: "Step 2: Risk Assessment & Gap Analysis",
          description:
              "Conduct a thorough risk assessment and map PHI data flows to identify compliance gaps."
        },
        {
          title: "Step 3: Policy & Procedure Development",
          description:
              "Develop HIPAA-compliant policies (e.g., Privacy, Security, Breach Notification) and controls."
        },
        {
          title: "Step 4: Staff Training & Awareness",
          description:
              "Train employees on HIPAA rules, PHI handling, and breach prevention."
        },
        {
          title: "Step 5: Breach Management & Response",
          description:
              "Establish processes for breach detection, response, and notification to comply with HIPAA."
        },
        {
          title: "Step 6: Continuous Monitoring & Audits",
          description:
              "Perform regular audits and monitor compliance to maintain HIPAA adherence."
        }
      ]
    },
    packages: [
      {
        name: "HIPAA Essentials Package",
        duration: "2-4 months*",
        keyArtefacts: [
          "HIPAA Gap Analysis Report",
          "PHI Data Inventory Template",
          "Basic HIPAA Policy Templates"
        ],
        popular: true
      },
      {
        name: "HIPAA Advanced Package",
        duration: "4-8 months*",
        keyArtefacts: [
          "Full Suite of HIPAA Policies",
          "Risk Assessment & Mitigation Plan",
          "Breach Response Protocol",
          "BAA Templates & Guidance"
        ],
        popular: false
      }
    ],
    packageNote: "*Typical averages for HIPAA Compliance—final schedule set during kickoff.",
    differentiators: [
      {
        title: "Healthcare Expertise",
        description: "Our team specializes in HIPAA compliance for healthcare providers and associates."
      },
      {
        title: "Practical Compliance Solutions",
        description: "We offer tailored, risk-based approaches to meet HIPAA requirements."
      },
      {
        title: "Audit-Ready Framework",
        description: "Our services ensure your organization is prepared for HIPAA audits."
      },
      {
        title: "Ongoing Support",
        description: "We provide continuous guidance to maintain HIPAA compliance."
      }
    ],
    // clientSuccess: {
    //   quote:
    //       "TCSA’s HIPAA services helped us secure PHI and pass our audit with ease. Their expertise is top-notch!",
    //   clientInfo: "Compliance Officer, Healthcare Clinic",
    //   avatar: "/placeholder.svg?width=40&height=40"
    // },
    faqs: [
      {
        question: "What is HIPAA?",
        answer:
            "HIPAA is a U.S. law that sets standards for protecting sensitive patient health information (PHI) and ensuring privacy and security."
      },
      {
        question: "Who needs to comply with HIPAA?",
        answer:
            "Healthcare providers, health plans, clearinghouses, and their business associates handling PHI must comply."
      },
      {
        question: "What are the penalties for HIPAA non-compliance?",
        answer:
            "Fines can range from $100 to $50,000 per violation, with a maximum of $1.5 million per year for repeated violations."
      },
      {
        question: "What is a Business Associate Agreement (BAA)?",
        answer:
            "A BAA is a contract between a HIPAA-covered entity and a vendor to ensure PHI is protected."
      }
    ],
    cta: {
      heading: "Achieve HIPAA Compliance with Ease",
      text: "Safeguard patient data and meet HIPAA standards. Contact us for a compliance assessment.",
      buttonText: "Get HIPAA Consultation",
      buttonLink: "/contact?service=hipaa",
      secondaryLinkText: "Explore HIPAA Resources",
      secondaryLinkHref: "/resources/learn-more-hipaa"
    },
    relatedServices: ["data-privacy-assessment", "incident-response", "healthcare-security"]
  },

  {
    id: "business-continuity",
    title: "Business Continuity Planning (BCP)",
    subtitle: "Ensure operational resilience and minimize disruption.",
    category: "Resilience & Recovery",
    description:
        "Develop robust Business Continuity Plans (BCP) to ensure your organization can continue critical operations during and after a disruptive event. We help you identify critical functions, assess risks, and create actionable plans.",
    features: [
      "Business Impact Analysis (BIA)",
      "Risk Assessment for BCP",
      "BCP Strategy Development",
      "Plan Documentation & Development",
      "BCP Testing & Exercises",
      "Training & Awareness Programs",
    ],
    icon: ShieldCheck,
    image: "/BCP.webp?width=1200&height=600",
    tags: ["BCP", "Business Resilience", "Operational Continuity", "Risk Management"],
    benefits: [
      "Minimize financial losses during disruptions.",
      "Maintain customer confidence and brand reputation.",
      "Ensure regulatory compliance for continuity.",
      "Protect employees and assets.",
      "Enable faster recovery of critical operations.",
    ],
    reportTypes: [
      {
        type: "Business Impact Analysis (BIA) Report",
        scope: "Critical business processes, RTOs, RPOs",
        auditPeriod: "Reviewed Annually",
      },
      {
        type: "Business Continuity Plan (BCP)",
        scope: "Strategies, procedures, roles for continuity",
        auditPeriod: "Live Document, Tested Annually",
      },
    ],
    approach: {
      introduction: "Our BCP methodology focuses on practical and actionable plans to keep your business running.",
      steps: [
        {
          title: "Step 1: Project Initiation & Scoping",
          description: "Define BCP objectives, scope, and governance structure.",
        },
        {
          title: "Step 2: Business Impact Analysis (BIA)",
          description: "Identify critical business functions, dependencies, and recovery time objectives (RTOs/RPOs).",
        },
        {
          title: "Step 3: Risk Assessment",
          description: "Identify potential threats and vulnerabilities that could disrupt operations.",
        },
        {
          title: "Step 4: Strategy Development",
          description: "Develop strategies to maintain or recover critical functions within defined RTOs.",
        },
        {
          title: "Step 5: Plan Development & Documentation",
          description: "Create detailed BCPs, including roles, responsibilities, and procedures.",
        },
        {
          title: "Step 6: Testing, Training & Maintenance",
          description: "Conduct regular tests, train staff, and establish a process for plan review and updates.",
        },
      ],
    },
    packages: [
      {
        name: "BCP Foundation Package",
        duration: "2-4 months*",
        keyArtefacts: ["Business Impact Analysis Report", "High-Level BCP Strategy Document", "Core BCP Template"],
        popular: true,
      },
      {
        name: "BCP Comprehensive Package",
        duration: "4-6 months*",
        keyArtefacts: [
          "Detailed BIA & Risk Assessment Reports",
          "Full Business Continuity Plan Suite",
          "BCP Test Plan & Exercise Facilitation",
        ],
        popular: false,
      },
    ],
    packageNote: "*Typical averages for BCP development—final schedule set during kickoff.",
    differentiators: [
      {
        title: "Certified BCP Professionals",
        description: "Our team includes certified experts (e.g., CBCP) with extensive BCP experience.",
      },
      {
        title: "Industry-Specific Expertise",
        description: "We tailor BCP solutions to your specific industry risks and regulatory requirements.",
      },
      {
        title: "Focus on Actionable Plans",
        description:
            "We develop practical, easy-to-understand plans that can be effectively implemented during a crisis.",
      },
      {
        title: "Integrated Approach with DRP",
        description: "We ensure seamless integration between your BCP and Disaster Recovery Plans.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       '"TCSA helped us develop a comprehensive BCP that gave us confidence to face any disruption. Their process was thorough and insightful."',
    //   clientInfo: "COO, Financial Services Firm",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is Business Continuity Planning (BCP)?",
        answer:
            "BCP is the process of creating systems of prevention and recovery to deal with potential threats to a company. The goal is to enable ongoing operations before and during execution of disaster recovery.",
      },
      {
        question: "Why is BCP important?",
        answer:
            "BCP helps organizations protect their assets, maintain operational capabilities, safeguard their reputation, and meet regulatory obligations during and after a disruptive event.",
      },
      {
        question: "What is a Business Impact Analysis (BIA)?",
        answer:
            "A BIA identifies and evaluates the potential effects (financial, legal, reputational, etc.) of an interruption to critical business operations as a result of a disaster, accident or emergency.",
      },
      {
        question: "How often should a BCP be tested?",
        answer:
            "BCPs should be tested regularly, at least annually, or whenever significant changes occur in the business or IT environment. Types of tests include tabletop exercises, simulations, and full interruption tests.",
      },
    ],
    cta: {
      heading: "Ensure Your Business Resilience?",
      text: "Prepare for the unexpected. Contact us to develop your Business Continuity Plan.",
      buttonText: "Discuss BCP Needs",
      buttonLink: "/contact?service=business-continuity",
      secondaryLinkText: "Learn About Disaster Recovery →",
      secondaryLinkHref: "/services/disaster-recovery",
    },
    relatedServices: ["disaster-recovery", "risk-assessment", "incident-response", "iso-22301"],
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery Planning (DRP)",
    subtitle: "Safeguard your IT systems and data from disasters.",
    category: "Resilience & Recovery",
    description:
        "Develop comprehensive Disaster Recovery Plans (DRP) to protect your IT infrastructure and data, ensuring timely recovery after a disruptive event. We focus on minimizing downtime and data loss for critical IT systems.",
    features: [
      "IT Risk Assessment for DRP",
      "Recovery Time Objective (RTO) & Recovery Point Objective (RPO) Definition",
      "DR Strategy Development (Cloud, On-Prem, Hybrid)",
      "DR Plan Documentation & Procedures",
      "DR Testing & Drills",
      "Data Backup & Replication Strategies",
    ],
    icon: ServerCrash,
    image: "/dr.webp?width=1200&height=600",
    tags: ["DRP", "IT Resilience", "Data Recovery", "System Recovery", "Cyber Resilience"],
    benefits: [
      "Minimize IT downtime and associated costs.",
      "Protect critical data from loss or corruption.",
      "Ensure rapid recovery of essential IT services.",
      "Meet compliance and contractual obligations for IT recovery.",
      "Enhance overall business resilience.",
    ],
    reportTypes: [
      {
        type: "IT Disaster Recovery Plan (DRP)",
        scope: "Procedures for IT system recovery",
        auditPeriod: "Live Document, Tested Annually",
      },
      { type: "DR Test Report", scope: "Results and lessons learned from DR drills", auditPeriod: "Post-Test" },
    ],
    approach: {
      introduction: "Our DRP methodology ensures your IT systems can be recovered efficiently and effectively.",
      steps: [
        {
          title: "Step 1: IT Infrastructure Assessment",
          description: "Identify critical IT assets, systems, applications, and dependencies.",
        },
        {
          title: "Step 2: Risk Assessment & RTO/RPO Definition",
          description: "Assess IT-specific risks and define RTOs and RPOs for critical systems.",
        },
        {
          title: "Step 3: DR Strategy Selection",
          description: "Develop DR strategies (e.g., hot site, cold site, cloud-based DR) based on RTO/RPO and budget.",
        },
        {
          title: "Step 4: DR Plan Development",
          description: "Document detailed recovery procedures, roles, responsibilities, and communication plans.",
        },
        {
          title: "Step 5: Implementation of DR Solutions",
          description: "Implement backup, replication, and failover solutions as per the DR strategy.",
        },
        {
          title: "Step 6: Testing, Training & Maintenance",
          description: "Conduct regular DR tests, train IT staff, and maintain the DRP with ongoing updates.",
        },
      ],
    },
    packages: [
      {
        name: "DRP Foundation Package",
        duration: "2-3 months*",
        keyArtefacts: ["IT Risk Assessment Summary", "RTO/RPO Definition Document", "Core DRP Template"],
        popular: true,
      },
      {
        name: "DRP Comprehensive Package",
        duration: "3-5 months*",
        keyArtefacts: [
          "Detailed IT Risk Assessment & BIA for IT",
          "Full Disaster Recovery Plan Suite",
          "DR Test Plan & Facilitation Support",
        ],
        popular: false,
      },
    ],
    packageNote: "*Typical averages for DRP development—final schedule set during kickoff.",
    differentiators: [
      {
        title: "Certified DR Professionals",
        description: "Our team includes experts certified in disaster recovery and business continuity.",
      },
      {
        title: "Technology Agnostic Solutions",
        description: "We provide unbiased advice on DR technologies and solutions (cloud, on-prem, hybrid).",
      },
      {
        title: "Focus on Testable & Achievable RTOs/RPOs",
        description: "We help you set realistic recovery objectives and develop plans to meet them.",
      },
      {
        title: "Alignment with Business Continuity",
        description: "We ensure your DRP effectively supports your overall Business Continuity objectives.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       '"TCSA\'s DRP services were critical in ensuring our IT systems could recover quickly from any incident. Their expertise in cloud DR was particularly valuable."',
    //   clientInfo: "CTO, E-commerce Company",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is Disaster Recovery Planning (DRP)?",
        answer:
            "DRP is a documented process or set of procedures to recover and protect a business IT infrastructure in the event of a disaster. It focuses on the IT systems supporting critical business functions.",
      },
      {
        question: "What's the difference between BCP and DRP?",
        answer:
            "BCP is broader, focusing on keeping the entire business operational during a disruption. DRP is a component of BCP, specifically addressing the recovery of IT systems and infrastructure.",
      },
      {
        question: "What are RTO and RPO?",
        answer:
            "Recovery Time Objective (RTO) is the maximum tolerable duration of an outage. Recovery Point Objective (RPO) is the maximum acceptable amount of data loss measured in time (e.g., 1 hour of data).",
      },
      {
        question: "How often should a DRP be tested?",
        answer:
            "DRPs should be tested at least annually, or after significant changes to IT infrastructure. Testing ensures the plan is effective and staff are familiar with procedures.",
      },
    ],
    cta: {
      heading: "Protect Your IT Infrastructure?",
      text: "Minimize downtime and data loss. Contact us to build your Disaster Recovery Plan.",
      buttonText: "Discuss DRP Needs",
      buttonLink: "/contact?service=disaster-recovery",
      secondaryLinkText: "Explore Business Continuity →",
      secondaryLinkHref: "/services/business-continuity",
    },
    relatedServices: ["business-continuity", "cloud-security", "data-backup-solutions", "incident-response"],
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    subtitle: "Simulate real-world attacks to identify vulnerabilities.",
    description:
        "Our penetration testing services help you identify and address security vulnerabilities in your systems and applications. We use a combination of automated tools and manual techniques to simulate real-world attacks and provide you with a detailed report of our findings.",
    icon: Shield,
    image: "/Pen.jpg?width=1200&height=600",
    category: "Security Testing",
    tags: ["penetration testing", "security testing", "vulnerability assessment", "ethical hacking"],
    benefits: [
      "Identify security vulnerabilities before attackers do.",
      "Improve your security posture.",
      "Meet compliance requirements.",
      "Protect your data and reputation.",
    ],
    approach: {
      introduction: "Our penetration testing approach is comprehensive and tailored to your specific needs.",
      steps: [
        {
          title: "Planning and Scoping",
          description: "We work with you to define the scope of the penetration test and identify your goals.",
        },
        {
          title: "Reconnaissance",
          description:
              "We gather information about your systems and applications to identify potential vulnerabilities.",
        },
        {
          title: "Vulnerability Scanning",
          description: "We use automated tools to scan your systems and applications for known vulnerabilities.",
        },
        {
          title: "Exploitation",
          description: "We attempt to exploit identified vulnerabilities to gain access to your systems and data.",
        },
        {
          title: "Reporting",
          description:
              "We provide you with a detailed report of our findings, including recommendations for remediation.",
        },
      ],
    },
    packages: [
      {
        name: "Web Application Penetration Test",
        price: "Custom",
        features: ["OWASP Top 10", "Detailed Report", "Remediation Advice"],
        popular: true,
      },
      {
        name: "Network Penetration Test",
        price: "Custom",
        features: ["Internal and External Testing", "Vulnerability Scanning", "Exploitation"],
        popular: false,
      },
      {
        name: "Mobile Application Penetration Test",
        price: "Custom",
        features: ["iOS and Android", "Static and Dynamic Analysis", "API Testing"],
        popular: false,
      },
    ],
    differentiators: [
      {
        title: "Experienced Testers",
        description:
            "Our penetration testers have years of experience and are certified in industry-leading methodologies.",
      },
      {
        title: "Customized Approach",
        description: "We tailor our penetration testing approach to your specific needs and goals.",
      },
      {
        title: "Actionable Reporting",
        description:
            "We provide you with a detailed report of our findings, including actionable recommendations for remediation.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       "Tranquility Cybersecurity helped us identify and address critical security vulnerabilities in our web application. Their penetration testing services were invaluable.",
    //   name: "CTO",
    //   company: "Tech Startup",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is penetration testing?",
        answer:
            "Penetration testing is a security assessment that simulates real-world attacks to identify vulnerabilities in your systems and applications.",
      },
      {
        question: "How often should I have a penetration test?",
        answer:
            "We recommend having a penetration test at least annually, or more frequently if you make significant changes to your systems or applications.",
      },
      {
        question: "What is the difference between penetration testing and vulnerability scanning?",
        answer:
            "Vulnerability scanning is an automated process that identifies known vulnerabilities in your systems and applications. Penetration testing is a more comprehensive assessment that simulates real-world attacks to identify and exploit vulnerabilities.",
      },
    ],
    cta: {
      title: "Secure Your Systems Today",
      description: "Protect your business from cyber threats with our expert penetration testing services.",
      buttonText: "Get a Free Quote",
      buttonLink: "/contact?service=penetration-testing",
    },
    relatedServices: ["vulnerability-assessment", "web-app-security", "network-security"],
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    subtitle: "Identify and prioritize security vulnerabilities in your systems.",
    description:
        "Our vulnerability assessment services help you identify and prioritize security vulnerabilities in your systems and applications. We use a combination of automated tools and manual techniques to scan your systems for known vulnerabilities and provide you with a detailed report of our findings.",
    icon: FileCheck,
    image: "/placeholder.svg?width=1200&height=600",
    category: "Security Testing",
    tags: ["vulnerability assessment", "security scanning", "vulnerability management"],
    benefits: [
      "Identify security vulnerabilities before attackers do.",
      "Prioritize vulnerabilities based on risk.",
      "Improve your security posture.",
      "Meet compliance requirements.",
    ],
    approach: {
      introduction: "Our vulnerability assessment approach is comprehensive and tailored to your specific needs.",
      steps: [
        {
          title: "Planning and Scoping",
          description: "We work with you to define the scope of the vulnerability assessment and identify your goals.",
        },
        {
          title: "Vulnerability Scanning",
          description: "We use automated tools to scan your systems and applications for known vulnerabilities.",
        },
        {
          title: "Analysis and Prioritization",
          description: "We analyze the results of the vulnerability scan and prioritize vulnerabilities based on risk.",
        },
        {
          title: "Reporting",
          description:
              "We provide you with a detailed report of our findings, including recommendations for remediation.",
        },
      ],
    },
    packages: [
      {
        name: "Basic Vulnerability Assessment",
        price: "Custom",
        features: ["Network Scan", "Web Application Scan", "Detailed Report"],
        popular: true,
      },
      {
        name: "Advanced Vulnerability Assessment",
        price: "Custom",
        features: ["Authenticated Scanning", "Manual Verification", "Remediation Advice"],
        popular: false,
      },
      {
        name: "Continuous Vulnerability Assessment",
        price: "Custom",
        features: ["Automated Scanning", "Real-time Monitoring", "Alerting"],
        popular: false,
      },
    ],
    differentiators: [
      {
        title: "Comprehensive Scanning",
        description:
            "We use a variety of tools and techniques to scan your systems for a wide range of vulnerabilities.",
      },
      {
        title: "Risk-Based Prioritization",
        description: "We prioritize vulnerabilities based on risk, so you can focus on the most critical issues first.",
      },
      {
        title: "Actionable Reporting",
        description:
            "We provide you with a detailed report of our findings, including actionable recommendations for remediation.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       "Tranquility Cybersecurity's vulnerability assessment services helped us identify and address critical security vulnerabilities in our network. Their services were invaluable.",
    //   name: "Security Manager",
    //   company: "Financial Institution",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is vulnerability assessment?",
        answer:
            "Vulnerability assessment is a security assessment that identifies and prioritizes security vulnerabilities in your systems and applications.",
      },
      {
        question: "How often should I have a vulnerability assessment?",
        answer:
            "We recommend having a vulnerability assessment at least quarterly, or more frequently if you make significant changes to your systems or applications.",
      },
      {
        question: "What is the difference between vulnerability assessment and penetration testing?",
        answer:
            "Vulnerability assessment is an automated process that identifies known vulnerabilities in your systems and applications. Penetration testing is a more comprehensive assessment that simulates real-world attacks to identify and exploit vulnerabilities.",
      },
    ],
    cta: {
      title: "Protect Your Systems Today",
      description:
          "Identify and address security vulnerabilities in your systems with our expert vulnerability assessment services.",
      buttonText: "Get a Free Quote",
      buttonLink: "/contact?service=vulnerability-assessment",
    },
    relatedServices: ["penetration-testing", "web-app-security", "network-security"],
  },
  {
    id: "web-app-security",
    title: "Web Application Security",
    subtitle: "Secure your web applications from cyber threats.",
    description:
        "Our web application security services help you secure your web applications from cyber threats. We offer a variety of services, including vulnerability assessment, penetration testing, and secure code review.",
    icon: Lock,
    image: "/wat.avif?width=1200&height=600",
    category: "Security Testing",
    tags: [
      "web application security",
      "security testing",
      "vulnerability assessment",
      "penetration testing",
      "secure code review",
    ],
    benefits: [
      "Protect your web applications from cyber threats.",
      "Improve your security posture.",
      "Meet compliance requirements.",
      "Protect your data and reputation.",
    ],
    approach: {
      introduction: "Our web application security approach is comprehensive and tailored to your specific needs.",
      steps: [
        {
          title: "Planning and Scoping",
          description:
              "We work with you to define the scope of the web application security assessment and identify your goals.",
        },
        {
          title: "Vulnerability Assessment",
          description: "We use automated tools to scan your web applications for known vulnerabilities.",
        },
        {
          title: "Penetration Testing",
          description:
              "We simulate real-world attacks to identify and exploit vulnerabilities in your web applications.",
        },
        {
          title: "Secure Code Review",
          description: "We review your web application code to identify security vulnerabilities.",
        },
        {
          title: "Reporting",
          description:
              "We provide you with a detailed report of our findings, including recommendations for remediation.",
        },
      ],
    },
    packages: [
      {
        name: "Web Application Security Assessment",
        price: "Custom",
        features: ["Vulnerability Assessment", "Penetration Testing", "Detailed Report"],
        popular: true,
      },
      {
        name: "Secure Code Review",
        price: "Custom",
        features: ["Manual Code Review", "Static Analysis", "Remediation Advice"],
        popular: false,
      },
      {
        name: "Web Application Firewall (WAF) Configuration",
        price: "Custom",
        features: ["WAF Deployment", "Rule Tuning", "Monitoring"],
        popular: false,
      },
    ],
    differentiators: [
      {
        title: "Comprehensive Approach",
        description: "We offer a comprehensive suite of web application security services to meet your needs.",
      },
      {
        title: "Experienced Security Experts",
        description: "Our security experts have years of experience in web application security.",
      },
      {
        title: "Actionable Reporting",
        description:
            "We provide you with a detailed report of our findings, including actionable recommendations for remediation.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       "Tranquility Cybersecurity helped us secure our web applications from cyber threats. Their services were invaluable.",
    //   name: "Director of Engineering",
    //   company: "E-commerce Company",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is web application security?",
        answer: "Web application security is the process of protecting web applications from cyber threats.",
      },
      {
        question: "Why is web application security important?",
        answer:
            "Web applications are a common target for cyber attacks. Securing your web applications can help protect your data and reputation.",
      },
      {
        question: "What are the different types of web application security services?",
        answer:
            "We offer a variety of web application security services, including vulnerability assessment, penetration testing, and secure code review.",
      },
    ],
    cta: {
      title: "Secure Your Web Applications Today",
      description: "Protect your business from cyber threats with our expert web application security services.",
      buttonText: "Get a Free Quote",
      buttonLink: "/contact?service=web-app-security",
    },
    relatedServices: ["penetration-testing", "vulnerability-assessment", "network-security"],
  },
  {
    id: "network-security",
    title: "Network Security",
    subtitle: "Protect your network from cyber threats.",
    description:
        "Our network security services help you protect your network from cyber threats. We offer a variety of services, including firewall configuration, intrusion detection and prevention, and network segmentation.",
    icon: Network,
    image: "/placeholder.svg?width=1200&height=600",
    category: "Infrastructure Security",
    tags: ["network security", "firewall", "intrusion detection", "intrusion prevention", "network segmentation"],
    benefits: [
      "Protect your network from cyber threats.",
      "Improve your security posture.",
      "Meet compliance requirements.",
      "Protect your data and reputation.",
    ],
    approach: {
      introduction: "Our network security approach is comprehensive and tailored to your specific needs.",
      steps: [
        {
          title: "Network Assessment",
          description: "We assess your network infrastructure to identify security vulnerabilities.",
        },
        {
          title: "Firewall Configuration",
          description: "We configure your firewalls to protect your network from unauthorized access.",
        },
        {
          title: "Intrusion Detection and Prevention",
          description: "We implement intrusion detection and prevention systems to detect and prevent cyber attacks.",
        },
        {
          title: "Network Segmentation",
          description: "We segment your network to limit the impact of a cyber attack.",
        },
        {
          title: "Monitoring and Reporting",
          description: "We monitor your network for security threats and provide you with regular reports.",
        },
      ],
    },
    packages: [
      {
        name: "Network Security Assessment",
        price: "Custom",
        features: ["Vulnerability Scanning", "Configuration Review", "Detailed Report"],
        popular: true,
      },
      {
        name: "Firewall Configuration",
        price: "Custom",
        features: ["Rule Creation", "Policy Enforcement", "Monitoring"],
        popular: false,
      },
      {
        name: "Intrusion Detection and Prevention",
        price: "Custom",
        features: ["IDS/IPS Deployment", "Signature Updates", "Alerting"],
        popular: false,
      },
    ],
    differentiators: [
      {
        title: "Experienced Security Experts",
        description: "Our security experts have years of experience in network security.",
      },
      {
        title: "Comprehensive Approach",
        description: "We offer a comprehensive suite of network security services to meet your needs.",
      },
      { title: "Proactive Monitoring", description: "We proactively monitor your network for security threats." },
    ],
    // clientSuccess: {
    //   quote:
    //       "Tranquility Cybersecurity helped us protect our network from cyber threats. Their services were invaluable.",
    //   name: "IT Director",
    //   company: "Manufacturing Company",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is network security?",
        answer: "Network security is the process of protecting your network from cyber threats.",
      },
      {
        question: "Why is network security important?",
        answer:
            "Your network is the backbone of your business. Securing your network can help protect your data and reputation.",
      },
      {
        question: "What are the different types of network security services?",
        answer:
            "We offer a variety of network security services, including firewall configuration, intrusion detection and prevention, and network segmentation.",
      },
    ],
    cta: {
      title: "Secure Your Network Today",
      description: "Protect your business from cyber threats with our expert network security services.",
      buttonText: "Get a Free Quote",
      buttonLink: "/contact?service=network-security",
    },
    relatedServices: ["penetration-testing", "vulnerability-assessment", "web-app-security"],
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    subtitle: "Secure your cloud infrastructure and applications.",
    description:
        "Our cloud security services help you secure your cloud infrastructure and applications. We offer a variety of services, including cloud security assessments, cloud security architecture design, and cloud security implementation.",
    icon: Cloud,
    image: "/placeholder.svg?width=1200&height=600",
    category: "Infrastructure Security",
    tags: [
      "cloud security",
      "aws security",
      "azure security",
      "gcp security",
      "cloud security assessment",
      "cloud security architecture",
      "cloud security implementation",
    ],
    benefits: [
      "Protect your cloud infrastructure and applications from cyber threats.",
      "Improve your security posture.",
      "Meet compliance requirements.",
      "Protect your data and reputation.",
    ],
    approach: {
      introduction: "Our cloud security approach is comprehensive and tailored to your specific needs.",
      steps: [
        {
          title: "Cloud Security Assessment",
          description: "We assess your cloud infrastructure and applications to identify security vulnerabilities.",
        },
        {
          title: "Cloud Security Architecture Design",
          description: "We design a secure cloud architecture that meets your specific needs.",
        },
        {
          title: "Cloud Security Implementation",
          description: "We implement cloud security controls to protect your cloud infrastructure and applications.",
        },
        {
          title: "Monitoring and Reporting",
          description: "We monitor your cloud environment for security threats and provide you with regular reports.",
        },
      ],
    },
    packages: [
      {
        name: "Cloud Security Assessment",
        price: "Custom",
        features: ["Configuration Review", "Vulnerability Scanning", "Compliance Check"],
        popular: true,
      },
      {
        name: "Cloud Security Architecture Design",
        price: "Custom",
        features: ["Reference Architecture", "Security Controls", "Deployment Guidance"],
        popular: false,
      },
      {
        name: "Cloud Security Implementation",
        price: "Custom",
        features: ["Security Tool Deployment", "Policy Enforcement", "Automation"],
        popular: false,
      },
    ],
    differentiators: [
      { title: "Cloud Security Expertise", description: "Our security experts have deep expertise in cloud security." },
      {
        title: "Vendor-Neutral Approach",
        description: "We work with all major cloud providers, including AWS, Azure, and GCP.",
      },
      {
        title: "Comprehensive Security Solutions",
        description: "We offer a comprehensive suite of cloud security solutions to meet your needs.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       "Tranquility Cybersecurity helped us secure our cloud infrastructure and applications. Their services were invaluable.",
    //   name: "VP of Engineering",
    //   company: "SaaS Company",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is cloud security?",
        answer:
            "Cloud security is the process of protecting your cloud infrastructure and applications from cyber threats.",
      },
      {
        question: "Why is cloud security important?",
        answer:
            "Your cloud infrastructure and applications are a critical part of your business. Securing your cloud environment can help protect your data and reputation.",
      },
      {
        question: "What are the different types of cloud security services?",
        answer:
            "We offer a variety of cloud security services, including cloud security assessments, cloud security architecture design, and cloud security implementation.",
      },
    ],
    cta: {
      title: "Secure Your Cloud Today",
      description: "Protect your business from cyber threats with our expert cloud security services.",
      buttonText: "Get a Free Quote",
      buttonLink: "/contact?service=cloud-security",
    },
    relatedServices: ["penetration-testing", "vulnerability-assessment", "network-security"],
  },
  {
    id: "incident-response",
    title: "Incident Response",
    subtitle: "Respond to and recover from cyber incidents quickly and effectively.",
    description:
        "Our incident response services help you respond to and recover from cyber incidents quickly and effectively. We offer a variety of services, including incident response planning, incident detection and analysis, and incident containment and eradication.",
    icon: Siren,
    image: "/placeholder.svg?width=1200&height=600",
    category: "Security Operations",
    tags: [
      "incident response",
      "cyber incident",
      "incident response plan",
      "incident detection",
      "incident analysis",
      "incident containment",
      "incident eradication",
    ],
    benefits: [
      "Respond to and recover from cyber incidents quickly and effectively.",
      "Minimize the impact of cyber incidents on your business.",
      "Protect your data and reputation.",
      "Meet compliance requirements.",
    ],
    approach: {
      introduction: "Our incident response approach is comprehensive and tailored to your specific needs.",
      steps: [
        {
          title: "Incident Response Planning",
          description: "We develop an incident response plan that meets your specific needs.",
        },
        {
          title: "Incident Detection and Analysis",
          description: "We detect and analyze cyber incidents to determine the scope and impact.",
        },
        {
          title: "Incident Containment and Eradication",
          description: "We contain and eradicate cyber incidents to prevent further damage.",
        },
        {
          title: "Post-Incident Activity",
          description:
              "We provide post-incident activity to help you learn from the incident and improve your security posture.",
        },
      ],
    },
    packages: [
      {
        name: "Incident Response Retainer",
        price: "Custom",
        features: ["24/7 Incident Response Support", "Incident Response Plan", "Tabletop Exercises"],
        popular: true,
      },
      {
        name: "Incident Response Investigation",
        price: "Custom",
        features: ["Incident Analysis", "Forensic Investigation", "Root Cause Analysis"],
        popular: false,
      },
      {
        name: "Incident Response Remediation",
        price: "Custom",
        features: ["Malware Removal", "System Hardening", "Data Recovery"],
        popular: false,
      },
    ],
    differentiators: [
      {
        title: "Experienced Incident Responders",
        description: "Our incident responders have years of experience in responding to cyber incidents.",
      },
      { title: "Rapid Response", description: "We respond to cyber incidents quickly and effectively." },
      {
        title: "Comprehensive Approach",
        description: "We offer a comprehensive suite of incident response services to meet your needs.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       "Tranquility Cybersecurity helped us respond to and recover from a major cyber incident. Their services were invaluable.",
    //   name: "CIO",
    //   company: "Healthcare Organization",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is incident response?",
        answer: "Incident response is the process of responding to and recovering from cyber incidents.",
      },
      {
        question: "Why is incident response important?",
        answer:
            "Cyber incidents can have a significant impact on your business. Having an incident response plan in place can help you minimize the impact of cyber incidents and protect your data and reputation.",
      },
      {
        question: "What are the different types of incident response services?",
        answer:
            "We offer a variety of incident response services, including incident response planning, incident detection and analysis, and incident containment and eradication.",
      },
    ],
    cta: {
      title: "Be Prepared for Cyber Incidents",
      description: "Protect your business from cyber incidents with our expert incident response services.",
      buttonText: "Get a Free Quote",
      buttonLink: "/contact?service=incident-response",
    },
    relatedServices: ["penetration-testing", "vulnerability-assessment", "network-security"],
  },
  {
    id: "security-awareness-training",
    title: "Security Awareness Training",
    subtitle: "Educate your employees about cyber security threats and best practices.",
    description:
        "Our security awareness training services help you educate your employees about cyber security threats and best practices. We offer a variety of training options, including online training, in-person training, and simulated phishing attacks.",
    icon: Brain,
    image: "/placeholder.svg?width=1200&height=600",
    category: "Security Education",
    tags: ["security awareness training", "cyber security training", "phishing training", "security education"],
    benefits: [
      "Reduce the risk of cyber attacks caused by human error.",
      "Improve your security posture.",
      "Meet compliance requirements.",
      "Protect your data and reputation.",
    ],
    approach: {
      introduction: "Our security awareness training approach is comprehensive and tailored to your specific needs.",
      steps: [
        {
          title: "Training Needs Assessment",
          description: "We assess your employees' current level of security awareness.",
        },
        {
          title: "Training Content Development",
          description: "We develop training content that is relevant to your employees' roles and responsibilities.",
        },
        {
          title: "Training Delivery",
          description:
              "We deliver training through a variety of methods, including online training, in-person training, and simulated phishing attacks.",
        },
        {
          title: "Training Evaluation",
          description: "We evaluate the effectiveness of the training and make adjustments as needed.",
        },
      ],
    },
    packages: [
      {
        name: "Basic Security Awareness Training",
        price: "Custom",
        features: ["Online Training Modules", "Phishing Simulation", "Progress Tracking"],
        popular: true,
      },
      {
        name: "Advanced Security Awareness Training",
        price: "Custom",
        features: ["Customized Training Content", "In-Person Training", "Role-Based Training"],
        popular: false,
      },
      {
        name: "Security Awareness Training Program",
        price: "Custom",
        features: ["Annual Training Plan", "Regular Training Updates", "Reporting"],
        popular: false,
      },
    ],
    differentiators: [
      { title: "Engaging Training Content", description: "Our training content is engaging and easy to understand." },
      { title: "Customized Training", description: "We customize our training to meet your specific needs." },
      {
        title: "Measurable Results",
        description: "We provide you with measurable results to track the effectiveness of the training.",
      },
    ],
    // clientSuccess: {
    //   quote:
    //       "Tranquility Cybersecurity's security awareness training helped us reduce the risk of cyber attacks caused by human error. Their services were invaluable.",
    //   name: "HR Director",
    //   company: "Retail Company",
    //   avatar: "/placeholder.svg?width=40&height=40",
    // },
    faqs: [
      {
        question: "What is security awareness training?",
        answer:
            "Security awareness training is the process of educating your employees about cyber security threats and best practices.",
      },
      {
        question: "Why is security awareness training important?",
        answer:
            "Human error is a leading cause of cyber attacks. Security awareness training can help reduce the risk of cyber attacks caused by human error.",
      },
      {
        question: "What are the different types of security awareness training?",
        answer:
            "We offer a variety of training options, including online training, in-person training, and simulated phishing attacks.",
      },
    ],
    cta: {
      title: "Empower Your Employees to Be Cyber Smart",
      description: "Protect your business from cyber threats with our expert security awareness training services.",
      buttonText: "Get a Free Quote",
      buttonLink: "/contact?service=security-awareness-training",
    },
    relatedServices: ["penetration-testing", "vulnerability-assessment", "network-security"],
  },
]
