export interface Project {
  id: string;
  title: string;
  description: string;
  lab: string;
  department?: string;
  technologies?: string[];
  year: number;
  type: "student" | "staff";
  contributors: string;
  sponsors?: string[];
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Project-Based Learning Initiative",
    description: " A practical learning model designed by professors and the Financial Accounting Department to help students think creatively and develop innovative solutions for small businesses. Students work on real-world financial challenges to build entrepreneurial and analytical skills.",
    lab: "Accounting Center of Excellence",
    department: "financial-accounting",
    technologies: ["Python", "TensorFlow", "Pandas", "Flask", "React"],
    year: 2025,
    type: "student",
    contributors: "Mr. Ntando Majola , Ms. Busi Mzila, Ms. Zanele Zuma, "
  },
  {
    id: "proj-2",
    title: "Revenue Anomaly Detection Using Machine Learning",
    description: "A machine learning project that identifies unusual patterns, inconsistencies, and errors in financial statements. Students apply regression analysis and anomaly detection algorithms to help identify revenue irregularities and potential fraud.",
    lab: "Moses Kotana Lab",
    department: "financial-accounting",
    technologies: ["Python"],
    year: 2025,
    type: "student",
    contributors: "Mr. Ntando Majola , Ms. Busi Mzila, Ms. Zanele Zuma"
  },
  {
    id: "proj-3",
    title: "Financial Statement Preparation Website for Public Schools",
    description: "A web platform designed to help public schools prepare accurate financial statements. It simplifies reporting requirements and guides schools through proper financial documentation.",
    lab: "4IR Lab of Excellence",
    department: "financial-accounting",
    technologies: ["Python"],
    year: 2025,
    type: "student",
    contributors: "Ms. Yoliswa Mkhize, "
  },
  
  {
    id: "proj-6",
    title: "Community Engagement: The Men Carve Initiative",
    description: "A community-based project supporting a student-led feeding scheme. Students work closely with department staff to help community members with meal preparation, budgeting, and resource management.",
  lab: "Arm Ecosystem Lab",
  department: "info-corporate-management",
  sponsors: ["SA Harvest, DUT"],
    year: 2025,
    type: "student",
    contributors: "Mr Zakhe Khuzwayo"
  },
  
];
