import { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES } from '@/constants/menu';
import MenuCategories from './MenuCategories';
import MenuGrid from './MenuGrid';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Appetizers');

  // Filter items based on active category
  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="section bg-accent-gray">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="section-title">Our Menu</h2>

        {/* Divider */}
        <div className="divider" />

        {/* Subtitle */}
        <p className="section-subtitle">
          Discover our exquisite selection of French culinary delights
        </p>

        {/* Category Filter Tabs */}
        <MenuCategories
          categories={MENU_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Menu Items Grid */}
        <MenuGrid items={filteredItems} />
      </div>
    </section>
  );
};

export default MenuSection;
