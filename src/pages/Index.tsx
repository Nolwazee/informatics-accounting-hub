import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Departments from "@/components/Departments";
import Labs from "@/components/Labs";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Departments />
        <Labs />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
