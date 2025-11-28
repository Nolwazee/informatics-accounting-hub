export interface Lab {
  id: string;
  name: string;
  description: string;
  location: string;
  equipment: string[];
}

export const labs: Lab[] = [
  {
    id: "4ir-lab-of-excellence",
    name: "4IR Lab of Excellence",
    description: "A cutting-edge innovation space equipped with advanced robots, 3D printers, and emerging technologies designed for hands-on learning and experimentation in Fourth Industrial Revolution solutions.",
    location: "Ritson, Block C, Room DC1116",
    equipment: ["Desktop workstations", "Network switches", "Routers", "Virtualization servers", "humanoid robots", "3D printers"],
    },

  {
   id: "moses-kotana-lab",
   name: "Moses Kotana Lab",
    description: "A robotics-driven workspace dedicated to robot programming, intelligent systems, and automation, supporting research and training in advanced robotics.",
    location: "Building C, Room DC1117",
    equipment: ["industrial robots", "educational robots", "motor controllers", "simulation PCs"],
  },
 
  {
    id: "arm-ecosystem-lab",
    name: "Arm Ecosystem Lab",
    description: "A practical development environment focused on IoT, embedded systems, and microcontroller-based applications, enabling students to design and test real-world connected devices.",
    location: "Building C, Room DC1124",
    equipment: ["Microcontroller kits", "Raspberry Pi boards", "Arduino boards", "IoT sensors"],
  },

  {
   id: "accounting-center-of-excellence",
   name: "Accounting Center of Excellence",
    description: " A specialized learning environment providing access to financial software, accounting tools, and business simulations that strengthen practical financial skills.",
    location: "Building C, Room DC1124",
    equipment: ["Accounting software terminals", "Financial simulation tools", "financial calculators"],
  },
 
  {
    id: "luban-nbiot-workshop",
    name: "Luban NBIOT Workshop",
    description: "A high-capacity fabrication space featuring industrial-grade 3D printers designed for large-scale prototyping, product design, and advanced additive manufacturing projects.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  }, 
  {
    id: "luban-additive-manufacturing-workshop",
    name: "Luban Additive Manufacturing Workshop",
    description: "A high-capacity fabrication space featuring industrial-grade 3D printers designed for large-scale prototyping, product design, and advanced additive manufacturing projects.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  },

  {
    id: "immersive-space",
    name: "Immersive Space",
    description: "A high-capacity fabrication space featuring industrial-grade 3D printers designed for large-scale prototyping, product design, and advanced additive manufacturing projects.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  }, 
  {
    id: "icm-simulation-lab",
    name: "ICM Simulation Lab",
    description: "A high-capacity fabrication space featuring industrial-grade 3D printers designed for large-scale prototyping, product design, and advanced additive manufacturing projects.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  }, 

    {
    id: "brics-workshop",
    name: "BRICS Workshop",
    description: "A high-capacity fabrication space featuring industrial-grade 3D printers designed for large-scale prototyping, product design, and advanced additive manufacturing projects.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  }, 
  

];

export default labs;
