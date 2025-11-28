export interface Club {
  id: string;
  name: string;
  description: string;
  contact: string;
}

export const clubs: Club[] = [
  {
    id: "coding-club",
    name: "Coding & Robotics Club",
    description: "Hands-on coding projects, hackathons and robotics workshops.",
    contact: "coding@faculty.edu",
  },
  {
    id: "finance-society",
    name: "Finance Society",
    description: "Guest speakers, investment challenges and student mentoring in finance.",
    contact: "finance@faculty.edu",
  },
  {
    id: "data-club",
    name: "Data Science Club",
    description: "Workshops on analytics, machine learning and data visualisation.",
    contact: "data@faculty.edu",
  }
];

export default clubs;
