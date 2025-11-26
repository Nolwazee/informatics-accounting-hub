export interface Department {
  id: string;
  name: string;
  description: string;
  programmes: string[];
  researchAreas: string[];
  notableProjects: string[];
}

export const departments: Department[] = [
  {
    id: "auditing-taxation",
    name: "Auditing and Taxation",
    description: "The Auditing and Taxation department focuses on developing expertise in auditing standards, internal controls, tax legislation, and compliance. Students gain practical skills in financial statement auditing, tax planning, and advisory services for individuals and organizations.",
    programmes: [
      "Bachelor of Commerce in Auditing",
      "Bachelor of Commerce in Taxation",
      "Postgraduate Diploma in Auditing",
      "Honours in Taxation",
      "Master of Commerce in Auditing"
    ],
    researchAreas: [
      "Audit Quality and Independence",
      "Tax Compliance and Planning",
      "Internal Audit and Risk Management",
      "Forensic Auditing",
      "International Tax Standards"
    ],
    notableProjects: [
      "Audit Technology Implementation Study",
      "Tax Evasion Detection Systems",
      "Corporate Tax Optimization Framework"
    ]
  },
  {
    id: "finance-info-management",
    name: "Finance and Information Management",
    description: "This department integrates financial management principles with information systems to prepare students for careers in financial analysis, investment management, and financial information systems. The curriculum emphasizes data-driven financial decision-making and technology-enabled financial services.",
    programmes: [
      "Bachelor of Commerce in Finance",
      "Bachelor of Commerce in Financial Information Systems",
      "Honours in Finance",
      "Master of Finance",
      "Postgraduate Diploma in Financial Management"
    ],
    researchAreas: [
      "Financial Markets and Instruments",
      "Investment Analysis and Portfolio Management",
      "Financial Risk Management",
      "FinTech and Digital Banking",
      "Corporate Finance and Valuation"
    ],
    notableProjects: [
      "Algorithmic Trading Platform Development",
      "Cryptocurrency Market Analysis",
      "Financial Risk Assessment Models"
    ]
  },
  {
    id: "financial-accounting",
    name: "Financial Accounting",
    description: "The Financial Accounting department provides comprehensive training in accounting principles, financial reporting standards, and corporate financial management. Students develop expertise in preparing and analyzing financial statements, understanding accounting regulations, and applying international financial reporting standards.",
    programmes: [
      "Bachelor of Commerce in Financial Accounting",
      "Bachelor of Accounting Science",
      "Honours in Financial Accounting",
      "Master of Commerce in Accounting",
      "Chartered Accountant (CA) Preparatory Programme"
    ],
    researchAreas: [
      "IFRS and Financial Reporting",
      "Earnings Management",
      "Financial Statement Analysis",
      "Corporate Financial Disclosure",
      "Accounting for Complex Transactions"
    ],
    notableProjects: [
      "IFRS Implementation Impact Assessment",
      "Fair Value Accounting Research",
      "Integrated Reporting Systems"
    ]
  },
  {
    id: "info-corporate-management",
    name: "Information and Corporate Management",
    description: "This department bridges information technology and corporate management, focusing on strategic management, organizational behavior, and information systems for decision-making. Students learn to leverage technology for organizational effectiveness and strategic advantage.",
    programmes: [
      "Bachelor of Commerce in Corporate Management",
      "Bachelor of Business Administration",
      "Honours in Business Management",
      "Master of Business Administration (MBA)",
      "Postgraduate Diploma in Management"
    ],
    researchAreas: [
      "Strategic Information Systems",
      "Corporate Governance and Ethics",
      "Organizational Change Management",
      "Business Process Optimization",
      "Digital Transformation Strategies"
    ],
    notableProjects: [
      "Corporate Governance Framework Study",
      "Digital Transformation Roadmap for Enterprises",
      "Management Information Systems Implementation"
    ]
  },
  {
    id: "information-technology",
    name: "Information Technology",
    description: "The Information Technology department offers comprehensive training in software development, network administration, database management, and emerging technologies. Students gain hands-on experience in designing, implementing, and maintaining IT infrastructure and applications for modern organizations.",
    programmes: [
      "Bachelor of Science in Information Technology",
      "Bachelor of Science in Software Development",
      "National Diploma in IT",
      "Honours in Information Technology",
      "Master of Science in Information Technology"
    ],
    researchAreas: [
      "Cloud Computing and Virtualization",
      "Cybersecurity and Network Defense",
      "Mobile and Web Application Development",
      "Internet of Things (IoT)",
      "Artificial Intelligence and Machine Learning"
    ],
    notableProjects: [
      "Smart Campus IoT Infrastructure",
      "Cybersecurity Threat Detection System",
      "AI-Powered Student Support Chatbot"
    ]
  },
  {
    id: "management-accounting",
    name: "Management Accounting",
    description: "The Management Accounting department focuses on providing financial information for internal decision-making, strategic planning, and performance management. Students learn cost accounting, budgeting, performance measurement, and strategic management accounting techniques essential for organizational success.",
    programmes: [
      "Bachelor of Commerce in Management Accounting",
      "Postgraduate Diploma in Management Accounting",
      "Honours in Management Accounting",
      "Master of Commerce in Management Accounting",
      "CIMA Professional Qualification"
    ],
    researchAreas: [
      "Cost Management and Control",
      "Performance Measurement Systems",
      "Strategic Management Accounting",
      "Activity-Based Costing",
      "Sustainability Management Accounting"
    ],
    notableProjects: [
      "Balanced Scorecard Implementation Study",
      "Cost Optimization Framework for Manufacturing",
      "Performance Dashboard Development"
    ]
  }
];
