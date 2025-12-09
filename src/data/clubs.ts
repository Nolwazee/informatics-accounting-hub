export interface Club {
  id: string;
  name: string;
  description: string;
  contact: string;
  image?: string;
}

export const clubs: Club[] = [
 {
      id: "varisty-genie",
      name: "VarsityGenie",
      description: "Varsity Genie helps students gain real-world project experience, improve employability, and earn valuable certifications that prepare them for industry.",
      contact: "mpendulo@varsitygenie.co.za",
      image: "/VarsityGenie.jpeg",
    },
    {
      id: "ACFE-DUT-Student-Chapter",
      name: "ACFE-DUT Student Chapter",
      description: "A student club that builds skills in fraud detection and investigation, promotes ethical practice, and connects members to global ACFE resources and professional development opportunities.",
      contact: "####",
      image: "/ACFEDUT.jpg",
    },
    {
      id: "the-men-carve",
      name: "The Men Carve",
      description: "The MenCarve supports students through food parcels and sanitary items, and hosts events that address important youth and community issues. They also visit schools and student residences to offer guidance and support.",
      contact: "themencarve12@gmail.com",
      image: "/MenCarve.jpeg",
    },
];

export default clubs;
