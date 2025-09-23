import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../pages/Education";

function Home() {
  useEffect(() => {
    // Nonaktifkan scroll restoration bawaan browser
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Scroll ke atas saat komponen pertama kali dimount
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // fungsi scroll ke section portfolio
  const handleLearnMore = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navbar />
      <Header onLearnMore={handleLearnMore} />
      <Portfolio />
      <About />
      <Education />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
