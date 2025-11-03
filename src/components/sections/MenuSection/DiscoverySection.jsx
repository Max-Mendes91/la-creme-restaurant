import PropTypes from 'prop-types';

const DiscoverySection = ({ items }) => {
  return (
    <div className="mt-20 pt-16 border-t border-primary-gold/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h3 className="text-3xl md:text-4xl font-serif text-primary-gold text-center mb-4">
          The Chef&apos;s Selections
        </h3>

        {/* Intro Text */}
        <p className="text-center text-accent-white/80 italic mb-12 max-w-2xl mx-auto">
          Exquisite experiences available exclusively in-house.
          Our culinary team presents these rare selections with the artistry and attention they deserve.
        </p>

        {/* Discovery Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {items.map((item) => (
            <div key={item.id} className="space-y-2">
              {/* Item Name */}
              <h4 className="text-lg font-serif text-primary-gold font-semibold">
                {item.name}
              </h4>

              {/* Item Description */}
              <p className="text-sm text-accent-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-accent-white/60 italic mt-8">
          *Prices available upon consultation with your server
        </p>
      </div>
    </div>
  );
};

DiscoverySection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DiscoverySection;
