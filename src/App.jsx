import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <Layout>
      <div className="min-h-screen bg-primary-black">
        {/* Hero Section */}
        <HeroSection />

        {/* Menu Section */}
        <section id="menu" className="section bg-accent-gray">
          <div className="container-custom">
            <h2 className="section-title">Our Menu</h2>
            <p className="section-subtitle">
              Discover our exquisite selection of French culinary delights
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section bg-primary-black">
          <div className="container-custom">
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">
              A glimpse into our elegant atmosphere and culinary artistry
            </p>
          </div>
        </section>

        {/* Reservations Section */}
        <section id="reservations" className="section bg-accent-gray">
          <div className="container-custom">
            <h2 className="section-title">Reservations</h2>
            <p className="section-subtitle">
              Reserve your table for an unforgettable dining experience
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-primary-black pb-20">
          <div className="container-custom">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Get in touch with us for inquiries and special requests
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
