import { DollarSign, Cloud, Heart, Factory, ShoppingCart, GraduationCap } from "lucide-react"

export const industriesData = [
    {
        id: "fintech",
        name: "Fintech & Financial Services",
        icon: DollarSign,
        description:
            "The fintech and financial services sector operates under stringent regulatory scrutiny and faces sophisticated cyber threats. Protecting sensitive financial data, ensuring transaction integrity, and maintaining customer trust are paramount for survival and growth.",
        challenges: [
            "Compliance with PCI DSS, RBI Guidelines, SOC 1/2, GDPR/DPDP, and other financial regulations.",
            "Preventing advanced fraud, money laundering, and financial cybercrimes.",
            "Securing mobile banking platforms, APIs, and payment gateways.",
            "Managing risks associated with third-party vendors and open banking initiatives.",
            "Ensuring data privacy and security for vast amounts of customer financial information.",
        ],
        solutions: [
            "Comprehensive risk assessments tailored to financial services.",
            "Implementation and certification for ISO 27001, SOC 2, PCI DSS.",
            "Advanced Vulnerability Assessment and Penetration Testing (VAPT) for financial applications.",
            "Robust Data Loss Prevention (DLP) strategies and encryption solutions.",
            "Tailored incident response plans and business continuity for financial operations.",
            "Secure software development lifecycle (SSDLC) consulting for fintech products.",
        ],
        image: "/fint.png",
    },
    {
        id: "saas-tech",
        name: "SaaS & Technology",
        icon: Cloud,
        description:
            "SaaS and technology companies are prime targets due to the valuable intellectual property and customer data they handle. Ensuring platform security, availability, and data integrity is crucial for customer retention and market leadership.",
        challenges: [
            "Protecting multi-tenant architectures and customer-segregated data.",
            "Securing cloud infrastructure (AWS, Azure, GCP) and CI/CD pipelines.",
            "Compliance with SOC 2, ISO 27001, GDPR, and CCPA.",
            "Preventing API abuse and ensuring secure integrations.",
            "Scaling security operations with rapid growth and product evolution.",
        ],
        solutions: [
            "Cloud security posture management (CSPM) and configuration reviews.",
            "DevSecOps integration and secure code review practices.",
            "SOC 2 Type I/II and ISO 27001 readiness and audit support.",
            "Application security testing (SAST, DAST, IAST) for SaaS platforms.",
            "Threat modeling for new features and services.",
            "Data privacy consulting and GDPR/CCPA compliance programs.",
        ],
        image: "/saast.webp?width=600&height=350",
    },
    {
        id: "healthcare",
        name: "Healthcare & Life Sciences",
        icon: Heart,
        description:
            "The healthcare sector manages highly sensitive Protected Health Information (PHI) and faces increasing cyberattacks. Compliance with HIPAA, GDPR, and other regulations is critical, alongside ensuring patient safety and data confidentiality.",
        challenges: [
            "Adherence to HIPAA, HITECH, GDPR, and other healthcare data protection laws.",
            "Securing Electronic Health Records (EHR/EMR) systems and medical devices (IoMT).",
            "Protecting patient data from ransomware and insider threats.",
            "Ensuring secure telehealth platforms and remote patient monitoring.",
            "Managing data security in clinical trials and research.",
        ],
        solutions: [
            "HIPAA compliance assessments and remediation strategies.",
            "Security risk analysis for healthcare organizations as per HIPAA requirements.",
            "Medical device security testing and vulnerability management.",
            "Secure network design for hospitals and clinics.",
            "Employee training on data privacy and security best practices.",
            "Business Continuity and Disaster Recovery Planning for critical healthcare systems.",
        ],
        image: "/hclc.jpg?width=600&height=350",
    },
    {
        id: "manufacturing",
        name: "Manufacturing & Automotive",
        icon: Factory,
        description:
            "Modern manufacturing and automotive industries rely heavily on interconnected Industrial Control Systems (ICS) and IoT devices, creating new attack surfaces. Protecting operational technology (OT) and intellectual property is vital.",
        challenges: [
            "Securing Industrial Control Systems (ICS) and SCADA environments.",
            "Protecting intellectual property and sensitive design data.",
            "Managing vulnerabilities in IoT and connected car technologies.",
            "Ensuring supply chain security and resilience.",
            "Compliance with industry-specific standards like TISAX for automotive.",
        ],
        solutions: [
            "OT/ICS security assessments and network segmentation.",
            "Vulnerability management for industrial equipment and software.",
            "Secure architecture design for smart factories and connected vehicles.",
            "Supply chain risk management programs.",
            "ISO 27001 implementation for manufacturing plants.",
            "Incident response for OT environments.",
        ],
        image: "/manauto.webp?width=600&height=350",
    },
    {
        id: "ecommerce",
        name: "E-commerce & Retail",
        icon: ShoppingCart,
        description:
            "E-commerce and retail businesses handle large volumes of customer data and payment transactions, making them attractive targets for cybercriminals. Ensuring secure online experiences and protecting payment information is key.",
        challenges: [
            "Compliance with PCI DSS for payment card data security.",
            "Protecting customer accounts from takeover and credential stuffing.",
            "Securing e-commerce platforms against web application attacks (e.g., XSS, SQLi).",
            "Preventing online fraud and data breaches.",
            "Managing security for mobile commerce applications.",
        ],
        solutions: [
            "PCI DSS readiness, assessment, and QSA advisory.",
            "Web application security testing for e-commerce sites.",
            "Secure payment gateway integration consulting.",
            "Customer data protection strategies in line with GDPR/CCPA.",
            "Fraud detection and prevention mechanisms.",
            "Security awareness training for retail staff.",
        ],
        image: "/ecom.jpg?width=600&height=350",
    },
    {
        id: "education",
        name: "Education & EdTech",
        icon: GraduationCap,
        description:
            "Educational institutions and EdTech platforms manage sensitive student data and intellectual property. They face challenges in securing diverse IT environments, remote learning platforms, and ensuring CIPA/FERPA compliance.",
        challenges: [
            "Protecting student data (PII) and complying with FERPA, CIPA, and GDPR.",
            "Securing online learning platforms and digital content.",
            "Preventing cyberbullying and ensuring online safety for students.",
            "Managing security across diverse devices (BYOD) and networks.",
            "Protecting research data and intellectual property in higher education.",
        ],
        solutions: [
            "Data privacy assessments and compliance programs (FERPA, GDPR).",
            "Security testing for EdTech applications and learning management systems (LMS).",
            "Network security assessments for school and university campuses.",
            "Cybersecurity awareness training for students, faculty, and staff.",
            "Incident response planning for educational institutions.",
            "Secure configuration guidelines for classroom technology.",
        ],
        image: "/ed.png?width=600&height=350",
    },
]
