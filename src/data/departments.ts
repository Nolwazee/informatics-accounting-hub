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
    id: "accounting",
    name: "Department of Accounting",
    description: "The Department of Accounting equips students with comprehensive knowledge in financial reporting, auditing, taxation, and management accounting. Our programs blend theoretical foundations with practical applications, preparing graduates for professional accounting careers and advanced research.",
    programmes: [
      "Bachelor of Commerce in Accounting",
      "Bachelor of Accounting Science",
      "Honours in Accounting",
      "Master of Commerce in Accounting",
      "PhD in Accounting"
    ],
    researchAreas: [
      "Financial Reporting and Disclosure",
      "Corporate Governance",
      "Auditing and Assurance",
      "Tax Policy and Planning",
      "Sustainability Accounting"
    ],
    notableProjects: [
      "IFRS Adoption Impact Study",
      "Integrated Reporting Framework",
      "AI in Financial Auditing"
    ]
  },
  {
    id: "informatics",
    name: "Department of Informatics",
    description: "The Department of Informatics focuses on computer science, software engineering, and information systems. We cultivate technical expertise and problem-solving skills, preparing students to design, develop, and manage innovative technological solutions in a rapidly evolving digital landscape.",
    programmes: [
      "Bachelor of Science in Computer Science",
      "Bachelor of Science in Software Engineering",
      "Bachelor of Science in Information Systems",
      "Honours in Computer Science",
      "Master of Science in Informatics",
      "PhD in Computer Science"
    ],
    researchAreas: [
      "Artificial Intelligence and Machine Learning",
      "Cybersecurity and Privacy",
      "Data Science and Analytics",
      "Cloud Computing and Distributed Systems",
      "Human-Computer Interaction"
    ],
    notableProjects: [
      "Smart City IoT Platform",
      "Healthcare Predictive Analytics System",
      "Blockchain for Supply Chain Management"
    ]
  },
  {
    id: "business-information",
    name: "Department of Business Information Systems",
    description: "The Department of Business Information Systems bridges business strategy and technology, focusing on enterprise systems, business analytics, and digital transformation. Our graduates are equipped to align IT solutions with organizational goals and drive competitive advantage through technology.",
    programmes: [
      "Bachelor of Commerce in Business Information Systems",
      "Bachelor of Business Administration in IT Management",
      "Honours in Business Information Systems",
      "Master of Business Administration (IT specialization)",
      "PhD in Business Information Systems"
    ],
    researchAreas: [
      "Enterprise Resource Planning (ERP)",
      "Business Process Management",
      "E-Commerce and Digital Marketing",
      "Business Intelligence and Analytics",
      "IT Governance and Strategy"
    ],
    notableProjects: [
      "Digital Transformation Framework for SMEs",
      "ERP Implementation Success Factors Study",
      "Customer Analytics Dashboard for Retail"
    ]
  },
  {
    id: "data-science",
    name: "Department of Data Science and Analytics",
    description: "The Department of Data Science and Analytics specializes in extracting insights from complex datasets using statistical methods, machine learning, and visualization techniques. We prepare students to become data-driven decision-makers and analysts who can tackle real-world challenges across industries.",
    programmes: [
      "Bachelor of Science in Data Science",
      "Bachelor of Science in Business Analytics",
      "Honours in Data Science",
      "Master of Science in Data Analytics",
      "PhD in Data Science"
    ],
    researchAreas: [
      "Big Data Technologies",
      "Predictive Modeling and Forecasting",
      "Natural Language Processing",
      "Data Visualization and Storytelling",
      "Ethical AI and Algorithmic Fairness"
    ],
    notableProjects: [
      "Social Media Sentiment Analysis Platform",
      "Financial Market Prediction Models",
      "Healthcare Outcome Prediction System"
    ]
  }
];
