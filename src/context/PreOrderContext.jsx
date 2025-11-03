import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create the context
const PreOrderContext = createContext(undefined);

/**
 * PreOrderProvider - Manages global state for pre-selected menu items
 *
 * This context allows users to select menu items across the Menu Section
 * and have them automatically included in the Reservation Form.
 *
 * State structure: Array of menu item objects
 * Example: [{ id: 'app-1', name: 'Foie Gras Terrine', price: 24, description: '...' }]
 */
export const PreOrderProvider = ({ children }) => {
  const [preOrderItems, setPreOrderItems] = useState([]);

  /**
   * Add item to pre-order list
   * Only adds if item doesn't already exist (prevents duplicates)
   */
  const addItemToOrder = (item) => {
    setPreOrderItems((prevItems) => {
      // Check if item already exists
      const exists = prevItems.some((existingItem) => existingItem.id === item.id);

      if (exists) {
        return prevItems; // Don't add duplicate
      }

      // Add new item immutably
      return [...prevItems, item];
    });
  };

  /**
   * Remove item from pre-order list by ID
   */
  const removeItemFromOrder = (itemId) => {
    setPreOrderItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  /**
   * Clear all items from order
   * Used after successful reservation submission
   */
  const clearOrder = () => {
    setPreOrderItems([]);
  };

  /**
   * Utility function to check if an item is already selected
   * Returns boolean
   */
  const isItemSelected = (itemId) => {
    return preOrderItems.some((item) => item.id === itemId);
  };

  /**
   * Get total count of selected items
   */
  const getItemCount = () => {
    return preOrderItems.length;
  };

  /**
   * Get total price of all selected items
   */
  const getTotalPrice = () => {
    return preOrderItems.reduce((total, item) => total + item.price, 0);
  };

  const value = {
    preOrderItems,
    addItemToOrder,
    removeItemFromOrder,
    clearOrder,
    isItemSelected,
    getItemCount,
    getTotalPrice,
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

/**
 * Custom hook to use PreOrderContext
 * Throws error if used outside of PreOrderProvider
 */
export const usePreOrder = () => {
  const context = useContext(PreOrderContext);

  if (context === undefined) {
    throw new Error('usePreOrder must be used within a PreOrderProvider');
  }

  return context;
};
