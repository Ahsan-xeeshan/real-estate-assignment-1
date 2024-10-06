import About from "./components/About/About";
import Available from "./components/Available/Available";
import CallToAction from "./components/CallToAction/CallToAction";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Available />
      <About />
      <CallToAction />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
