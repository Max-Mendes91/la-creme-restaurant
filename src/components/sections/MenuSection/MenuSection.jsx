import { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, DISCOVERY_ITEMS } from '@/constants/menu';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import MenuCategories from './MenuCategories';
import MenuGrid from './MenuGrid';
import DiscoverySection from './DiscoverySection';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Appetizers');
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [gridRef, gridVisible] = useIntersectionObserver();

  // Filter items based on active category
  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="section section-reduced-top bg-accent-gray">
      <div className="container-custom">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
        </div>

        {/* Menu Items Grid */}
        <div
          ref={gridRef}
          className={`transition-all duration-700 delay-200 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <MenuGrid items={filteredItems} />
        </div>

        {/* Discovery Section */}
        <DiscoverySection items={DISCOVERY_ITEMS} />
      </div>
    </section>
  );
};

export default MenuSection;
