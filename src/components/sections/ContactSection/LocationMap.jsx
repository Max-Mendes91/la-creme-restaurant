const LocationMap = () => {
  return (
    <div className="w-full aspect-video rounded overflow-hidden shadow-gold-glow">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5042.611821598516!2d19.11368173673746!3d50.806970646149956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spl!4v1762520429810!5m2!1spt-PT!2spl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="La Crème Restaurant Location"
      />
    </div>
  );
};

export default LocationMap;
