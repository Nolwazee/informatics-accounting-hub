export interface Department {
  id: string;
  name: string;
  description: string;
  programmes: string[];
  researchAreas: string[];
  notableProjects: string[];
  location: string;

}

export const departments: Department[] = [
  {
    id: "auditing-taxation",
    name: "Auditing and Taxation",
    location: "Building A, Room 101",
    description: "Focuses on auditing standards, internal controls, and tax legislation. Students gain practical skills in financial statement auditing, tax planning, and advisory services.",
    programmes: [
      "Diploma in Internal Auditing",
      "Diploma in Taxation ",
      "Postgraduate Diploma in Internal Audit ",
      "Advanced Diploma in Taxation ",
      "Advanced Diploma in Internal Auditing ",
      "Master of Accounting "
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
    location: "Building A, Room 102",
    description: "Combines financial management with information systems to prepare students for careers in financial analysis, investment management, and financial information systems, emphasizing data-driven decision-making.",
    programmes: [
      "Diploma in Accounting",
      "Diploma in Business and Information Management",
      "Advanced Diploma in Business and Information Management",
      "Doctor of Philosophy in Business and Information Management"
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
    location: "Building A, Room 102",
    description: "Provides training in accounting principles and financial reporting. Students learn to prepare and analyze financial statements, apply accounting regulations, and follow international reporting standards.",
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
    location: "Building A, Room 102",
    description: "Bridges IT and corporate management, focusing on strategic management, organizational behaviour, and information systems for effective decision-making.",
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
    location: "Building A, Room 102",
    description: "Offers training in software development, network administration, and emerging technologies with hands-on experience in IT infrastructure and application development.",
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
    id: "information-systems",
    name: "Information Systems",
    location: "Building A, Room 102",
    description: "Focuses on using ICT to solve business problems, equipping students with skills in business analysis, information management, and technology solution design.",
    programmes: [
      "Diploma in ICT in Business Analysis",
      "Bachelor of Information & Communications Technology (IoT) — Internet of Things specialization",
      "Diploma in Library & Information Studies ",
      "Master of Management Sciences in Library and Information Science",
      "Doctor of Philosophy in Library and Information Science"
    ],
    researchAreas: [
      "Business Analysis & Process Improvement",
      "Digital Transformation & ICT Adoption",
      "Inclusive & Accessible Technology",
      "Internet of Things (IoT) Applications",
      "ICT for Information Management"
    ],
    notableProjects: [
      "Business Process Automation Tools",
      "Digital Access & Inclusion Initiative",
      "IoT Integration for Smart Business Systems"
    ]
  }, 

  {
    id: "management-accounting",
    name: "Management Accounting",
    location: "Building A, Room 102",
    description: "Focuses on internal financial information for decision-making and performance management, teaching cost accounting, budgeting, and strategic management accounting techniques.",
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
  }, 
];
