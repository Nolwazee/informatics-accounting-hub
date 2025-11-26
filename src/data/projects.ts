export interface Project {
  id: string;
  title: string;
  description: string;
  department: string;
  technologies: string[];
  year: number;
  type: "student" | "staff";
  contributors: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Automated Financial Statement Analyzer",
    description: "An AI-powered tool that analyzes financial statements, detects anomalies, and provides insights on company financial health using machine learning algorithms.",
    department: "accounting",
    technologies: ["Python", "TensorFlow", "Pandas", "Flask", "React"],
    year: 2024,
    type: "staff",
    contributors: "Dr. Sarah Johnson, Prof. Michael Chen"
  },
  {
    id: "proj-2",
    title: "Tax Compliance Dashboard for SMEs",
    description: "A user-friendly web application helping small and medium enterprises track tax obligations, deadlines, and generate compliance reports automatically.",
    department: "accounting",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js"],
    year: 2023,
    type: "student",
    contributors: "Emma Williams, James Brown"
  },
  {
    id: "proj-3",
    title: "Blockchain-Based Audit Trail System",
    description: "Immutable ledger system for financial transactions ensuring transparency and reducing fraud in corporate environments.",
    department: "accounting",
    technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS"],
    year: 2024,
    type: "student",
    contributors: "Alex Thompson, Maria Garcia"
  },
  {
    id: "proj-4",
    title: "Smart Campus IoT Network",
    description: "Comprehensive IoT infrastructure monitoring environmental conditions, energy usage, and security across campus buildings with real-time analytics.",
    department: "informatics",
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana"],
    year: 2024,
    type: "staff",
    contributors: "Dr. Robert Lee, Dr. Linda Martinez"
  },
  {
    id: "proj-5",
    title: "Healthcare Patient Management System",
    description: "Cloud-based platform for managing patient records, appointment scheduling, and telemedicine consultations with end-to-end encryption.",
    department: "informatics",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    year: 2023,
    type: "student",
    contributors: "Sophia Anderson, David Wilson"
  },
  {
    id: "proj-6",
    title: "Cybersecurity Threat Detection Framework",
    description: "Machine learning-based system for real-time detection and response to network intrusions and cybersecurity threats.",
    department: "informatics",
    technologies: ["Python", "Scikit-learn", "Wireshark", "Elasticsearch"],
    year: 2024,
    type: "staff",
    contributors: "Prof. Emily Davis, Dr. Kevin White"
  },
  {
    id: "proj-7",
    title: "E-Commerce Recommendation Engine",
    description: "Personalized product recommendation system using collaborative filtering and deep learning to enhance customer experience.",
    department: "business-information",
    technologies: ["Python", "TensorFlow", "Redis", "FastAPI", "React"],
    year: 2024,
    type: "student",
    contributors: "Olivia Taylor, Liam Moore"
  },
  {
    id: "proj-8",
    title: "Digital Transformation Maturity Assessment Tool",
    description: "Web-based assessment platform helping organizations evaluate their digital maturity and receive customized transformation roadmaps.",
    department: "business-information",
    technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
    year: 2023,
    type: "staff",
    contributors: "Dr. Patricia Jackson, Prof. George Harris"
  },
  {
    id: "proj-9",
    title: "Supply Chain Optimization Platform",
    description: "Analytics platform optimizing inventory management, logistics, and supplier relationships using data-driven insights.",
    department: "business-information",
    technologies: ["Power BI", "Azure", "Python", "SQL Server"],
    year: 2024,
    type: "student",
    contributors: "Isabella Martin, Noah Clark"
  },
  {
    id: "proj-10",
    title: "Predictive Maintenance for Manufacturing",
    description: "ML-based system predicting equipment failures and optimizing maintenance schedules to reduce downtime in manufacturing facilities.",
    department: "data-science",
    technologies: ["Python", "Keras", "Apache Kafka", "Tableau"],
    year: 2024,
    type: "staff",
    contributors: "Dr. Jessica Rodriguez, Dr. Daniel Lewis"
  },
  {
    id: "proj-11",
    title: "Social Media Sentiment Analysis Dashboard",
    description: "Real-time analysis of social media sentiment for brands, tracking public opinion and identifying trending topics using NLP.",
    department: "data-science",
    technologies: ["Python", "NLTK", "Spark", "Elasticsearch", "Kibana"],
    year: 2023,
    type: "student",
    contributors: "Mia Walker, Ethan Hall"
  },
  {
    id: "proj-12",
    title: "Financial Fraud Detection System",
    description: "Advanced anomaly detection system identifying fraudulent transactions in real-time using ensemble machine learning methods.",
    department: "data-science",
    technologies: ["Python", "XGBoost", "AWS", "PostgreSQL", "Streamlit"],
    year: 2024,
    type: "staff",
    contributors: "Prof. Amanda Young, Dr. Christopher King"
  }
];
