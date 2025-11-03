import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import MenuSection from "./components/sections/MenuSection";
import ReservationForm from "./components/reservation/ReservationForm/ReservationForm";
import { PreOrderProvider } from "./context/PreOrderContext";

function App() {
  return (
    <PreOrderProvider>
      <Layout>
        <div className="min-h-screen bg-primary-black">
        {/* Hero Section */}
        <HeroSection />

        {/* Menu Section */}
        <MenuSection />

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
          <div className="container-narrow">
            <h2 className="section-title">Make a Reservation</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Reserve your table for an unforgettable dining experience
            </p>
            <ReservationForm />
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
    </PreOrderProvider>
  );
}

export default App;
