import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Departments from "@/components/Departments";
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
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
