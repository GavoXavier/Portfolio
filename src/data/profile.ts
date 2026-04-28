export const contactInfo = {
  name: "Gavinlee Xavier Fernandes",
  role: "Manager – IT Digital Production Support",
  summary:
    "Manager – IT Digital Production Support at Diamond Trust Bank, responsible for L1/L2 production support across in-house applications, APIs, and integration services. Keeping East Africa's banking infrastructure resilient — one incident at a time.",
  location: "Nairobi, Kenya",
  phone: "+254 700 485000",
  email: "gavoxavier@gmail.com",
  linkedin: "https://www.linkedin.com/in/gavinlee-fernandes-a347a9281/",
  github: "https://github.com/GavoXavier",
  whatsapp: "https://wa.me/254700485000",
  resumeUrl: "/Gavinlee_Fernandes_Resume.pdf",
};

export const timeline = [
  {
    timeframe: "Jan 2026 – Present",
    title: "Manager – IT Digital Production Support",
    organisation: "Diamond Trust Bank",
    highlights: [
      "Provide L1/L2 production support for in-house applications, APIs, and integration services including EATTA, Digital IPF, Payment Gateway, and Digital Channels.",
      "Monitor systems and respond to alerts, incidents, and service requests; perform initial triage, diagnostics, and timely resolution or escalation.",
      "Support production deployments end-to-end: pre-deployment checks, execution support, and post-deployment validation.",
      "Manage digital partner onboarding and support on Astra, Xborder, Developer Portal, and new platforms.",
      "Monitor API performance and integration flows; execute routine operational tasks including log analysis, job monitoring, and data validation.",
      "Maintain accurate incident logs and documentation; support audits, compliance checks, and production governance processes.",
    ],
  },
  {
    timeframe: "Nov 2024 – Dec 2025",
    title: "Technical Implementation Engineer",
    organisation: "Diamond Trust Bank (via FinSense Africa)",
    highlights: [
      "Delivered daily production support across Billers (NSSF, SHA, ECZ, KPA), Payments, and Western Union systems.",
      "Administered digital certificate processes for high-risk systems ensuring secure PROD environments.",
      "Built and deployed 10+ production-ready APIs in Fiorano ESB following QA & UAT protocols.",
      "Engineered automation utilities (JavaScript, Node.js) for validations & fintech integrations.",
      "Developed dynamic PDF generation tools using Rhino/JS for DB/XML data extraction.",
      "Built API Documentation Site with Next.js + MySQL for centralised developer access.",
    ],
  },
  {
    timeframe: "May 2024 – Aug 2024",
    title: "Software Engineering Intern",
    organisation: "Quantum Plus Kenya",
    highlights: [
      "Developed and maintained dynamic web applications with React.js and Meteor.js.",
      "Implemented responsive UIs with HTML5, CSS, and Tailwind CSS.",
      "Managed MongoDB databases and collaborated on version control via GitHub.",
      "Participated in agile ceremonies: stand-ups, code reviews, and sprint planning.",
    ],
  },
  {
    timeframe: "Oct 2024",
    title: "BSc Mathematics & Computer Science",
    organisation: "Kenya Methodist University",
    highlights: [
      "Graduated with a strong blend of mathematical rigour and applied computing foundations.",
    ],
  },
];

export const skills = {
  expertise: [
    "Production Support (L1/L2)",
    "Incident Management & Triage",
    "Fiorano ESB",
    "Finacle (FCUBS)",
    "REST APIs & SOAP",
    "IPN & TIBCO Integration",
    "Digital Partner Onboarding",
    "OAuth2 & Certificate Lifecycle Mgmt",
    "API Performance Monitoring",
    "Compliance & Audit Support",
    "SLA Management",
    "Oracle Cloud Infrastructure",
  ],
  tooling: [
    "EATTA · Digital IPF · Payment Gateway",
    "Astra · Xborder · Developer Portal",
    "Next.js",
    "React.js",
    "Node.js",
    "Docker",
    "Azure DevOps",
    "GitHub Actions",
    "Postman",
    "MySQL · MongoDB · Oracle SQL",
    "Linux / Unix",
    "Trivy",
  ],
  experimentation: [
    "C++ / Rhino JS Scripting",
    "Log Analysis & Data Validation",
    "On-Call Incident Response",
    "AI Prototyping",
    "Python FastAPI",
    "Power BI Dashboards",
    "Terraform (Foundational)",
    "PHP / Web Development",
  ],
};

export const certifications = [
  {
    title: "Beneficial Ownership",
    issuer: "Diamond Trust Bank",
    category: "Banking & Compliance",
    icon: "shield",
  },
  {
    title: "Customer Due Diligence",
    issuer: "Diamond Trust Bank",
    category: "Banking & Compliance",
    icon: "shield",
  },
  {
    title: "Data Protection Training I & II",
    issuer: "Diamond Trust Bank",
    category: "Banking & Compliance",
    icon: "shield",
  },
  {
    title: "PEP Training",
    issuer: "Diamond Trust Bank",
    category: "Banking & Compliance",
    icon: "shield",
  },
  {
    title: "Sanctions CTF CPF",
    issuer: "Diamond Trust Bank",
    category: "Banking & Compliance",
    icon: "shield",
  },
  {
    title: "Fiorano Associate Developer – Cloud Native Integration",
    issuer: "Fiorano Software",
    category: "Personal Endeavours",
    icon: "cpu",
  },
  {
    title: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    category: "Personal Endeavours",
    icon: "cloud",
  },
  {
    title: "Cisco CPP Advanced Programming",
    issuer: "Cisco",
    category: "Personal Endeavours",
    icon: "cpu",
  },
];

export const projects = [
  {
    title: "Fiorano API Documentation Hub",
    description:
      "Centralised documentation portal for DTB partner APIs, automating schema ingestion and self-service onboarding for fintech partners.",
    outcomes: [
      "Built with Next.js, React MDX, and Tailwind CSS served via containerised Docker images.",
      "Integrated MySQL-backed content management and Azure DevOps pipelines for automated preview builds.",
      "Improved onboarding turnaround for partner teams via searchable API specs and usage guides.",
    ],
    technologies: ["Next.js", "TypeScript", "Docker", "Azure DevOps", "MySQL"],
    demo: "#",
    details: {
      overview:
        "The documentation hub gives partner engineers a single workspace to explore DTB APIs, compare environments, and download onboarding assets without waiting on email threads.",
      features: [
        {
          title: "Schema-driven explorer",
          description:
            "Transforms OpenAPI definitions into searchable endpoint catalogs with sample payloads, environment selectors, and error-handling snippets.",
        },
        {
          title: "Guide authoring workflow",
          description:
            "MDX-backed playbooks walk partners through authentication, sandbox cutovers, and go-live checklists with reusable partials.",
        },
        {
          title: "Release governance",
          description:
            "Azure DevOps pipelines run container builds, smoke tests, and automated approvals before promoting documentation to production.",
        },
      ],
      stack: [
        { label: "Frontend", items: ["Next.js App Router", "TypeScript", "Tailwind CSS"] },
        { label: "Content & Data", items: ["MDX content collections", "OpenAPI schema ingestion", "MySQL metadata store"] },
        { label: "DevOps", items: ["Docker images", "Azure DevOps multi-stage pipelines", "Container registry release flow"] },
      ],
    },
  },
  {
    title: "FCUBS Account Creation JSON ↔ XML Mapper",
    description:
      "Bi-directional mapping engine transforming partner JSON payloads into FCUBS-compliant XML envelopes with automated schema validation.",
    outcomes: [
      "Standardised orchestrations across Fiorano ESB and internal APIs to reduce manual transformations.",
      "Introduced deterministic error reporting for relationship managers.",
    ],
    technologies: ["Fiorano ESB", "Node.js", "TypeScript", "XML/XSD", "Postman"],
    demo: "#",
  },
  {
    title: "Fingerprint Login System",
    description:
      "Secure authentication system integrating a hardware fingerprint scanner with a C++ backend and web application interface.",
    outcomes: [
      "Integrated hardware biometric scanner with C++ processing layer and web app frontend.",
      "Delivered secure passwordless authentication flow with audit logging.",
    ],
    technologies: ["C++", "JavaScript", "HTML/CSS", "Hardware Integration"],
    demo: "#",
    details: {
      overview:
        "A hardware-software integration project combining a physical fingerprint scanner with a C++ processing backend and web-based authentication interface.",
      features: [
        {
          title: "Hardware integration",
          description: "Direct USB/serial communication with fingerprint scanner hardware via C++ driver layer.",
        },
        {
          title: "Web authentication bridge",
          description: "RESTful API bridge between the C++ backend and the web authentication interface.",
        },
      ],
      stack: [
        { label: "Backend", items: ["C++ scanner driver", "REST API bridge", "Secure storage"] },
        { label: "Frontend", items: ["HTML5/CSS3", "JavaScript", "Authentication UI"] },
      ],
    },
  },
  {
    title: "Donation & Event Management System",
    description:
      "Final year university project — a web platform built for Meru School for Mentally Handicapped Children to manage donations, donor records, and community fundraising events.",
    outcomes: [
      "Streamlined donation tracking and donor management for the school's administrative team.",
      "Event scheduling and attendance management for community fundraising activities.",
      "Secure donor portal with records management and reporting dashboards.",
    ],
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
    demo: "#",
    details: {
      overview:
        "A cause-driven web application developed as a final year project at Kenya Methodist University. The system enables Meru School for Mentally Handicapped Children to manage donor relationships, track fundraising campaigns, and organise community events from a single admin interface.",
      features: [
        {
          title: "Donor management",
          description: "Complete donor profiles with contribution history, contact records, and automated acknowledgement workflows.",
        },
        {
          title: "Event coordination",
          description: "Event creation, ticket management, and attendance tracking for fundraising activities and school open days.",
        },
        {
          title: "Reporting dashboard",
          description: "Summary analytics for total donations, event attendance, and donor engagement trends.",
        },
      ],
      stack: [
        { label: "Backend", items: ["PHP", "MySQL database", "Session-based authentication"] },
        { label: "Frontend", items: ["HTML5/CSS3", "Bootstrap", "Vanilla JavaScript"] },
      ],
    },
  },
  {
    title: "Employee Attendance System",
    description:
      "Check-in/check-out attendance management platform with statistical analytics for performance insights and HR reporting.",
    outcomes: [
      "Real-time check-in/out tracking with statistical performance analytics.",
      "Automated reporting dashboards for HR teams and management.",
    ],
    technologies: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
    demo: "#",
  },
  {
    title: "Hotel Booking Platform",
    description:
      "Full-featured online hotel booking platform with reservation management, availability search, and guest portal.",
    outcomes: [
      "Built complete reservation management system with availability calendars.",
      "Integrated payment flow and guest notification system.",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    demo: "#",
  },
  {
    title: "Padel Court Booking App",
    description:
      "Responsive padel booking experience with real-time slot availability, payments integration, and admin dashboards.",
    outcomes: [
      "Implemented booking workflows with Next.js server actions and Prisma.",
      "Added webhook-driven notifications and waitlist automation to boost court utilisation.",
    ],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Stripe"],
    demo: "#",
  },
];

export const experience = [
  {
    company: "Diamond Trust Bank",
    role: "Manager – IT Digital Production Support",
    period: "Jan 2026 – Present",
    bullets: [
      "Provide L1/L2 production support for EATTA, Digital IPF, Payment Gateway, Digital Channels, and all internally built applications.",
      "Monitor systems, respond to alerts and incidents; perform triage, diagnostics, and timely resolution or escalation to senior engineers.",
      "Support production deployments including pre-deployment checks, execution, and post-deployment validation.",
      "Lead digital partner onboarding and support on Astra, Xborder, Developer Portal, and new digital platforms.",
      "Monitor API performance and integration flows; execute log analysis, job monitoring, and data validation tasks.",
      "Maintain incident logs and documentation; support audits, compliance checks, and production governance processes.",
      "Participate in on-call rotations and support after-hours incidents; liaise with development teams to resolve bugs and defects.",
    ],
  },
  {
    company: "Diamond Trust Bank (via FinSense Africa)",
    role: "Technical Implementation Engineer",
    period: "Nov 2024 – Dec 2025",
    bullets: [
      "Delivered daily production support across Billers (NSSF, SHA, ECZ, KPA), Payments, and Western Union systems.",
      "Administered digital certificate processes for high-risk systems ensuring secure PROD environments.",
      "Managed API integration and partner onboarding, resolving API-related challenges across Fiorano ESB.",
      "Built and deployed 10+ production-ready APIs following QA & UAT protocols.",
      "Engineered automation utilities (JavaScript, Node.js) for validations & fintech integrations.",
      "Developed dynamic PDF generation tools using Rhino/JS for DB/XML data extraction.",
    ],
  },
  {
    company: "Quantum Plus Kenya",
    role: "Software Engineering Intern",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Developed and maintained dynamic web applications using React.js and Meteor.js.",
      "Implemented responsive UIs with HTML5, CSS, and Tailwind CSS.",
      "Managed MongoDB databases and collaborated on version control via GitHub.",
      "Provided IT system support and managed updates and software installations.",
      "Participated in agile methodologies: stand-ups, code reviews, sprint planning.",
    ],
  },
];

export const achievements = [
  "2025 Inter Banks Games Snooker Winner",
  "Best Chess Player Award (2015, 2016, 2021)",
  "Chess Captain (2014–2016)",
  "Table Tennis Vice Captain (2018–2022)",
  "1st Runners Up – Allan Gray Foundation Competition (2021)",
  "2nd Runners Up – Young Scientists Kenya",
  "English Access Scholarship USA Program Member (2018–2021)",
];

export const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gavinlee-fernandes-a347a9281/",
    description: "Professional updates, fintech insights, and connecting with peers across East Africa.",
  },
  {
    label: "GitHub",
    href: "https://github.com/GavoXavier",
    description: "Side projects, integration tooling, and open-source experiments.",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/254700485000",
    description: "Quickest way to reach me for project discussions or urgent queries.",
  },
];
