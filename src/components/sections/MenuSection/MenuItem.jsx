import PropTypes from 'prop-types';
import { usePreOrder } from '@/context/PreOrderContext';
import Button from '@/components/common/Button/Button';

const MenuItem = ({ item }) => {
  const { addItemToOrder, removeItemFromOrder, isItemSelected } = usePreOrder();
  const isSelected = isItemSelected(item.id);

  const handleToggle = () => {
    if (isSelected) {
      removeItemFromOrder(item.id);
    } else {
      addItemToOrder(item);
    }
  };

  return (
    <article
      className={`
        card-hover transition-all duration-300
        ${isSelected ? 'border-2 border-primary-gold' : 'border-2 border-transparent'}
      `}
      aria-label={`${item.name} - $${item.price}`}
    >
      {/* Menu Item Image */}
      <div className="aspect-square overflow-hidden rounded-sm mb-4 bg-accent-gray-light">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback: Use a solid color background if image fails to load
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Menu Item Content */}
      <div className="space-y-3">
        {/* Name and Price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-serif text-primary-gold font-semibold">
            {item.name}
          </h3>
          <span className="text-lg text-primary-gold font-semibold whitespace-nowrap">
            ${item.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-accent-white/80 leading-relaxed">
          {item.description}
        </p>

        {/* Pre-Select Button */}
        <Button
          variant={isSelected ? 'primary' : 'secondary'}
          size="sm"
          onClick={handleToggle}
          className="w-full"
          aria-pressed={isSelected}
          aria-label={
            isSelected
              ? `Remove ${item.name} from pre-order`
              : `Pre-select ${item.name} for reservation`
          }
        >
          {isSelected ? 'REMOVE' : 'PRE-SELECT'}
        </Button>

        {/* Selected Indicator */}
        {isSelected && (
          <p className="text-xs text-primary-gold text-center font-medium">
            Added to your reservation
          </p>
        )}
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
