import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import SplitContent from './components/SplitContent';
import GlobalMap from './components/GlobalMap';
import Gallery from './components/Gallery';
import InstitutionalMandate from './components/InstitutionalMandate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Split Content (Services) */}
        <SplitContent />

        {/* Section 3: Animated Statistics */}
        <StatsCounter />

        {/* Section 4: Interactive Global Map */}
        <GlobalMap />

        {/* Section 5: Institutional Mandate */}
        <InstitutionalMandate />

        {/* Section 6: Photo Gallery */}
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
