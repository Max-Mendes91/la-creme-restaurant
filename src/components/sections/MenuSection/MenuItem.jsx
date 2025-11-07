import PropTypes from 'prop-types';
import { usePreOrder } from '@/hooks/usePreOrder';

const MenuItem = ({ item }) => {
  const { addItemToOrder, removeItemFromOrder, getItemQuantity } = usePreOrder();
  const quantity = getItemQuantity(item.id);
  const isSelected = quantity > 0;

  const handleIncrement = () => {
    addItemToOrder(item);
  };

  const handleDecrement = () => {
    removeItemFromOrder(item.id);
  };

  return (
    <article
      className={`
        card-hover transition-all duration-300 flex flex-col h-full
        ${isSelected ? 'border-2 border-primary-gold' : 'border-2 border-transparent'}
      `}
      aria-label={`${item.name} - $${item.price}`}
    >
      {/* Menu Item Image */}
      <div className="aspect-square overflow-hidden rounded-sm mb-4 bg-accent-gray-light">
        <picture>
          <source
            srcSet={`${item.image.replace('.webp', '-400w.webp')} 400w, ${item.image.replace('.webp', '-800w.webp')} 800w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            type="image/webp"
          />
          <source
            srcSet={`${item.image.replace('.webp', '-400w.jpg')} 400w, ${item.image.replace('.webp', '-800w.jpg')} 800w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            type="image/jpeg"
          />
          <img
            src={item.image.replace('.webp', '-400w.jpg')}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Fallback: Use a solid color background if image fails to load
              e.target.style.display = 'none';
            }}
          />
        </picture>
      </div>

      {/* Menu Item Content - grows to fill space */}
      <div className="flex flex-col grow space-y-3">
        {/* Name and Price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-serif text-primary-gold font-semibold">
            {item.name}
          </h3>
          <span className="text-lg text-primary-gold font-semibold whitespace-nowrap">
            ${item.price}
          </span>
        </div>

        {/* Description - grows to fill available space */}
        <p className="text-sm text-accent-white/80 leading-relaxed grow">
          {item.description}
        </p>

        {/* Quantity Controls Section - stays at bottom */}
        <div className="space-y-2 mt-auto">
          {/* Quantity Controls */}
          <div
            className={`
              flex items-center justify-center gap-4 py-3 rounded-sm border-2 transition-all
              ${
                isSelected
                  ? 'border-primary-gold bg-primary-gold/10'
                  : 'border-accent-gray-light'
              }
            `}
          >
            {/* Decrement Button */}
            <button
              onClick={handleDecrement}
              disabled={quantity === 0}
              className={`
                w-8 h-8 rounded-sm flex items-center justify-center font-bold text-lg
                transition-all duration-200
                ${
                  quantity === 0
                    ? 'bg-accent-gray-light text-accent-white/30 cursor-not-allowed'
                    : 'bg-accent-gray-light text-primary-gold hover:bg-primary-gold hover:text-primary-black'
                }
              `}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              −
            </button>

            {/* Quantity Display */}
            <span
              className={`
                min-w-[2rem] text-center font-semibold text-lg
                ${isSelected ? 'text-primary-gold' : 'text-accent-white/50'}
              `}
              aria-label={`Quantity: ${quantity}`}
            >
              {quantity}
            </span>

            {/* Increment Button */}
            <button
              onClick={handleIncrement}
              className="
                w-8 h-8 rounded-sm flex items-center justify-center font-bold text-lg
                bg-accent-gray-light text-primary-gold
                hover:bg-primary-gold hover:text-primary-black
                transition-all duration-200
              "
              aria-label={`Increase quantity of ${item.name}`}
            >
              +
            </button>
          </div>

          {/* Selected Indicator */}
          {isSelected && (
            <p className="text-xs text-primary-gold text-center font-medium">
              {quantity} {quantity === 1 ? 'item' : 'items'} in your reservation
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
