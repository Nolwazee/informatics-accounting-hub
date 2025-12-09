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
    description: " A high-tech training hub offering hands-on experience with advanced 4IR technologies, robotics, and engineering tools, empowering students with industry-ready technical and innovation skills.",
    location: "Building C, Room DC1124",
    equipment: ["Accounting software terminals", "Financial simulation tools", "financial calculators"],
  },
 
  {
    id: "luban-nbiot-workshop",
    name: "Luban NBIOT Workshop",
    description: "A high-tech training hub offering hands-on experience with advanced 4IR technologies, robotics, and engineering tools, empowering students with industry-ready technical and innovation skills.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  }, 
  {
    id: "luban-additive-manufacturing-workshop",
    name: "Luban Additive Manufacturing Workshop",
    description: "A modern workshop equipped with advanced 3D printing and digital fabrication tools, enabling students to design, prototype, and produce innovative additive manufacturing solutions.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  },

  {
    id: "immersive-space",
    name: "Immersive Space",
    description: "An interactive digital environment using VR and AR technologies to let students explore immersive simulations, enhance learning experiences, and experiment with virtual design and innovation.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  }, 
  {
    id: "icm-simulation-lab",
    name: "ICM Simulation Lab",
    description: "A specialized simulation environment that uses advanced modeling tools to help students analyze industrial processes, test system behaviour, and develop problem-solving skills in a controlled, realistic setting.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  }, 

    {
    id: "brics-workshop",
    name: "BRICS Workshop",
    description: "A collaborative innovation space where students engage in technology, engineering, and research projects aligned with BRICS initiatives, promoting global skills development, teamwork, and advanced practical learning.",
    location: "Building B, Room 100",
    equipment: ["Large-format 3D printers", "material storage units", "CAD workstations"],
  }, 
  

];

export default labs;
