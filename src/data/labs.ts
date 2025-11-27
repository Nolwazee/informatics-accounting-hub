export interface Lab {
  id: string;
  name: string;
  description: string;
  location: string;
  equipment: string[];
  inCharge: string;
}

export const labs: Lab[] = [
  {
    id: "4IR Lab of Excellence",
    name: "4IR Lab of Excellence",
    description: "A cutting-edge innovation space equipped with advanced robots, 3D printers, and emerging technologies designed for hands-on learning and experimentation in Fourth Industrial Revolution solutions.",
    location: "Building B, Room 100",
    equipment: ["Desktop workstations", "Network switches", "Routers", "Virtualization servers", "humanoid robots", "3D printers"],
    inCharge: "Mr Fanie Ndlovu"
  },
  {
    id: "Arm Lab",
    name: "Arm Lab",
    description: "A practical development environment focused on IoT, embedded systems, and microcontroller-based applications, enabling students to design and test real-world connected devices.",
    location: "Building B, Room 100",
    equipment: ["microcontroller kits", "Raspberry Pi boards", "Arduino boards", "IoT sensors"],
    inCharge: "Mr Fanie Ndlovu"
  },
  {
    id: "Moses Kotana Lab",
    name: "Moses Kotana Lab",
    description: "A robotics-driven workspace dedicated to robot programming, intelligent systems, and automation, supporting research and training in advanced robotics.",
    location: "Building B, Room 100",
    equipment: ["industrial robots", "educational robots", "motor controllers", "simulation PCs"],
    inCharge: "Dr. S. Nkosi"
  },
  {
    id: "Accounting Lab",
    name: "Accounting Lab",
    description: " A specialized learning environment providing access to financial software, accounting tools, and business simulations that strengthen practical financial skills.",
    location: "Building B, Room 100",
    equipment: ["Accounting software terminals", "Financial simulation tools", "financial calculators"],
    inCharge: "Ms. T. Dlamini"
  },
  {
    id: "Lubaan Lab",
    name: "Lubaan Lab",
    description: "A high-capacity fabrication space featuring industrial-grade 3D printers designed for large-scale prototyping, product design, and advanced additive manufacturing projects.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
    inCharge: "Mr Fanie Ndlovu"
  }
];

export default labs;
