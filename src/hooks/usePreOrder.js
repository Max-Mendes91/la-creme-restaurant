import { useContext } from 'react';
import { PreOrderContext } from '@/context/PreOrderContext';

/**
 * Custom hook to use PreOrderContext
 * Throws error if used outside of PreOrderProvider
 *
 * @returns {Object} Pre-order context value
 */
export const usePreOrder = () => {
  const context = useContext(PreOrderContext);

  if (context === undefined) {
    throw new Error('usePreOrder must be used within a PreOrderProvider');
  }

  return context;
};
