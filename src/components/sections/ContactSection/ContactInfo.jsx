const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Hours */}
      <div>
        <h3 className="text-xl font-serif text-primary-gold mb-3">Hours</h3>
        <div className="space-y-2 text-accent-white">
          <p>
            <span className="font-semibold">Monday - Thursday:</span> 11:00 AM - 10:00 PM
          </p>
          <p>
            <span className="font-semibold">Friday - Sunday:</span> 11:00 AM - 11:00 PM
          </p>
        </div>
      </div>

      {/* Phone */}
      <div>
        <h3 className="text-xl font-serif text-primary-gold mb-3">Phone</h3>
        <a
          href="tel:+15551234567"
          className="text-accent-white hover:text-primary-gold transition-colors"
        >
          (555) 123-4567
        </a>
      </div>

      {/* Email */}
      <div>
        <h3 className="text-xl font-serif text-primary-gold mb-3">Email</h3>
        <a
          href="mailto:reservations@lacreme.com"
          className="text-accent-white hover:text-primary-gold transition-colors"
        >
          reservations@lacreme.com
        </a>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-xl font-serif text-primary-gold mb-3">Location</h3>
        <address className="text-accent-white not-italic">
          <p>123 Rue de la Gastronomie</p>
          <p>San Francisco, CA 94102</p>
        </address>
      </div>
    </div>
  );
};

export default ContactInfo;
