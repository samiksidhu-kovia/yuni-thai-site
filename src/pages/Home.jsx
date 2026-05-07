import Header from '../components/yunithai/Header';
import Hero from '../components/yunithai/Hero';
import About from '../components/yunithai/About';
import Experience from '../components/yunithai/Experience';
import BeyondTheRing from '../components/yunithai/BeyondTheRing';
import Masters from '../components/yunithai/Masters';
import Accommodations from '../components/yunithai/Accommodations';
import Gallery from '../components/yunithai/Gallery';
import Alumni from '../components/yunithai/Alumni';
import Dagaz from '../components/yunithai/Dagaz';
import FAQ from '../components/yunithai/FAQ';
import Contact from '../components/yunithai/Contact';
import Footer from '../components/yunithai/Footer';
import CustomCursor from '../components/yunithai/CustomCursor';
import ScrollProgress from '../components/yunithai/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Experience />
      <BeyondTheRing />
      <Masters />
      <Accommodations />
      <Gallery />
      <Alumni />
      <Dagaz />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}