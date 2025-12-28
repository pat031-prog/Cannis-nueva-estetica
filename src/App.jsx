import SmoothScroll from './components/SmoothScroll';
import NetworkBackground from './components/NetworkBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProfileSelector from './components/ProfileSelector';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen">
        <NetworkBackground />
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <ProfileSelector />
            <PricingPlans />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
