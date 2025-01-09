import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <Services />
      <Portfolio />
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
