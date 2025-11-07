import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create the context
const PreOrderContext = createContext(undefined);

/**
 * PreOrderProvider - Manages global state for pre-selected menu items with quantities
 *
 * This context allows users to select menu items across the Menu Section
 * and have them automatically included in the Reservation Form.
 *
 * State structure: Object with itemId as key
 * Example: {
 *   'app-1': { item: { id, name, price, description }, quantity: 2 },
 *   'main-2': { item: { id, name, price, description }, quantity: 1 }
 * }
 */
export const PreOrderProvider = ({ children }) => {
  const [preOrderItems, setPreOrderItems] = useState({});

  /**
   * Increase item quantity (add item or increment)
   * If item doesn't exist, adds with quantity 1
   * If item exists, increments quantity
   */
  const addItemToOrder = (item) => {
    setPreOrderItems((prevItems) => {
      const existingEntry = prevItems[item.id];

      if (existingEntry) {
        // Increment quantity
        return {
          ...prevItems,
          [item.id]: {
            ...existingEntry,
            quantity: existingEntry.quantity + 1,
          },
        };
      } else {
        // Add new item with quantity 1
        return {
          ...prevItems,
          [item.id]: {
            item,
            quantity: 1,
          },
        };
      }
    });
  };

  /**
   * Decrease item quantity (decrement or remove)
   * If quantity > 1, decrements
   * If quantity = 1, removes item entirely
   */
  const removeItemFromOrder = (itemId) => {
    setPreOrderItems((prevItems) => {
      const existingEntry = prevItems[itemId];

      if (!existingEntry) {
        return prevItems; // Item doesn't exist, no change
      }

      if (existingEntry.quantity > 1) {
        // Decrement quantity
        return {
          ...prevItems,
          [itemId]: {
            ...existingEntry,
            quantity: existingEntry.quantity - 1,
          },
        };
      } else {
        // Remove item entirely
        const { [itemId]: removed, ...rest } = prevItems;
        return rest;
      }
    });
  };

  /**
   * Clear all items from order
   * Used after successful reservation submission
   */
  const clearOrder = () => {
    setPreOrderItems({});
  };

  /**
   * Get quantity for a specific item
   * Returns 0 if item not in order
   */
  const getItemQuantity = (itemId) => {
    return preOrderItems[itemId]?.quantity || 0;
  };

  /**
   * Utility function to check if an item is already selected
   * Returns boolean
   */
  const isItemSelected = (itemId) => {
    return itemId in preOrderItems;
  };

  /**
   * Get total count of selected items (sum of all quantities)
   */
  const getItemCount = () => {
    return Object.values(preOrderItems).reduce(
      (total, entry) => total + entry.quantity,
      0
    );
  };

  /**
   * Get total price of all selected items (price * quantity)
   */
  const getTotalPrice = () => {
    return Object.values(preOrderItems).reduce(
      (total, entry) => total + entry.item.price * entry.quantity,
      0
    );
  };

  /**
   * Get items as array for display purposes
   * Returns: [{ item, quantity }]
   */
  const getItemsArray = () => {
    return Object.values(preOrderItems);
  };

  const value = {
    preOrderItems,
    addItemToOrder,
    removeItemFromOrder,
    clearOrder,
    isItemSelected,
    getItemQuantity,
    getItemCount,
    getTotalPrice,
    getItemsArray,
  };

  return (
    <PreOrderContext.Provider value={value}>
      {children}
    </PreOrderContext.Provider>
  );
};

PreOrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export context for use in custom hook
export { PreOrderContext };
