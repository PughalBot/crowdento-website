import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashCursor from "./Animations/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <>
    <div className="bg-white min-h-screen">
    <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
    </>
  );
}
