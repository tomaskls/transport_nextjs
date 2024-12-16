import "../../styles/globals.css"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header/Header"
import Hero from "../../../components/Hero"
import ServiceCard from "../../../components/Services"
import Airports from "../../../components/Airports"
import Contact from "../../../components/Contact"

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <ServiceCard />
      <Airports />
      <Contact />
      <Footer />
    </div>
  );
}