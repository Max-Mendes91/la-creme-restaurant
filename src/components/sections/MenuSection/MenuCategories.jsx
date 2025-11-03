import PropTypes from 'prop-types';

const MenuCategories = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-12">
      {/* Category Tabs Container */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                px-6 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider
                transition-all duration-300 border-2
                ${
                  isActive
                    ? 'bg-primary-gold text-primary-black border-primary-gold'
                    : 'bg-transparent text-primary-gold border-primary-gold hover:bg-primary-gold/20'
                }
              `}
              aria-pressed={isActive}
              aria-label={`Filter menu by ${category}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

MenuCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default MenuCategories;
