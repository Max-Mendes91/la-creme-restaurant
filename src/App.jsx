import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import MenuSection from "./components/sections/MenuSection";
import GallerySection from "./components/sections/GallerySection";
import ContactSection from "./components/sections/ContactSection";
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
        <GallerySection />

        {/* Contact Section */}
        <ContactSection />

        {/* Reservations Section */}
        <section id="reservation" className="section">
          <div className="container-narrow">
            <h2 className="section-title">Make a Reservation</h2>
            <div className="divider" />
            <ReservationForm />
          </div>
        </section>
      </div>
    </Layout>
    </PreOrderProvider>
  );
}

export default App;
