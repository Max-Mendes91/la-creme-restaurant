/**
 * Menu Data Constants
 * Contains all menu items organized by category
 */

export const MENU_CATEGORIES = ["Appetizers", "Mains", "Desserts"];

export const MENU_ITEMS = [
  // Appetizers
  {
    id: "app-1",
    category: "Appetizers",
    name: "Foie Gras Terrine",
    description: "House-made terrine with fig compote and toasted brioche",
    price: 24,
    image: "/images/menu/appetizers/foie-gras.webp",
  },
  {
    id: "app-2",
    category: "Appetizers",
    name: "Escargots de Bourgogne",
    description: "Burgundy snails in garlic-herb butter with parsley",
    price: 18,
    image: "/images/menu/appetizers/escargots.webp",
  },
  {
    id: "app-3",
    category: "Appetizers",
    name: "Lobster Bisque",
    description: "Creamy lobster soup with cognac and fresh herbs",
    price: 22,
    image: "/images/menu/appetizers/lobster-bisque.webp",
  },

  // Mains
  {
    id: "main-1",
    category: "Mains",
    name: "Beef Wellington",
    description:
      "Prime beef tenderloin wrapped in puff pastry with mushroom duxelles",
    price: 68,
    image: "/images/menu/mains/beef-wellington.webp",
  },
  {
    id: "main-2",
    category: "Mains",
    name: "Coq au Vin",
    description:
      "Braised chicken in red wine sauce with pearl onions and mushrooms",
    price: 42,
    image: "/images/menu/mains/coq-au-vin.webp",
  },
  {
    id: "main-3",
    category: "Mains",
    name: "Dover Sole Meunière",
    description: "Pan-fried Dover sole with brown butter, lemon, and capers",
    price: 56,
    image: "/images/menu/mains/dover-sole.webp",
  },
  {
    id: "main-4",
    category: "Mains",
    name: "Duck à l'Orange",
    description:
      "Roasted duck breast with orange reduction and seasonal vegetables",
    price: 52,
    image: "/images/menu/mains/duck-orange.webp",
  },

  // Desserts
  {
    id: "des-1",
    category: "Desserts",
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar crust",
    price: 14,
    image: "/images/menu/desserts/creme-brulee.webp",
  },
  {
    id: "des-2",
    category: "Desserts",
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla ice cream",
    price: 16,
    image: "/images/menu/desserts/chocolate-souffle.webp",
  },
  {
    id: "des-3",
    category: "Desserts",
    name: "Tarte Tatin",
    description: "Upside-down caramelized apple tart with crème fraîche",
    price: 15,
    image: "/images/menu/desserts/tarte-tatin.webp",
  },
];

/**
 * Discovery Items - Exclusive in-house only selections
 * These items are not available for pre-order and have no fixed pricing
 */
export const DISCOVERY_ITEMS = [
  {
    id: "disc-1",
    name: "Truffle Risotto with Gold Leaf",
    description:
      "Arborio rice finished tableside with white truffle shavings and 24-karat gold leaf",
  },
  {
    id: "disc-2",
    name: "Wagyu Beef Tasting Experience",
    description:
      "A curated selection of A5 Japanese Wagyu from three regions, prepared to your preference",
  },
  {
    id: "disc-3",
    name: "Caviar Service",
    description:
      "Beluga or Ossetra caviar presented with traditional accompaniments and champagne pairing",
  },
  {
    id: "disc-4",
    name: "Chef's Omakase Tasting Menu",
    description:
      "Seven-course journey through seasonal ingredients, curated daily by our executive chef",
  },
  {
    id: "disc-5",
    name: "Vintage Wine Pairing Experience",
    description:
      "Sommelier-selected rare vintages paired with each course, featuring bottles from our private cellar",
  },
  {
    id: "disc-6",
    name: "Flambé Dessert Presentation",
    description:
      "Dramatic tableside preparation of Crêpes Suzette or Bananas Foster for two",
  },
];
