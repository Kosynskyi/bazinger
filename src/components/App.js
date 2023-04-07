import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Gallery from './Gallery';
import Video from './Video';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop/BackToTop';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Video />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
