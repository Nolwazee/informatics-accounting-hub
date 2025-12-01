import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/Overview";
import Departments from "@/components/Departments";
import Labs from "@/components/Labs";
import Projects from "@/components/Projects";
import StudentClubs from "@/components/StudentClubs";
import LabGallery from "@/components/LabGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Departments />
        <Labs />
        <LabGallery />
        <StudentClubs />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
