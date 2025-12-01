export interface Club {
  id: string;
  name: string;
  description: string;
  contact: string;
}

export const clubs: Club[] = [
  {
    id: "Varsity-Genie",
    name: "Varsity Genie",
    description: "Varsity Genie helps students gain real-world project experience, improve employability, and earn valuable certifications that prepare them for industry.",
    contact: "varsitygenie@dut.ac.za",
  },
  {
    id: "###",
    name: "####",
    description: "ASK TG",
    contact: "## ##",
  },
  {
    id: "the-men-carve",
    name: "The Men Carve",
    description: "The MenCarve supports students through food parcels and sanitary items, and hosts events that address important youth and community issues. They also visit schools and student residences to offer guidance and support.",
    contact: "themencarve.@dut.ac.za",
  }
];

export default clubs;
