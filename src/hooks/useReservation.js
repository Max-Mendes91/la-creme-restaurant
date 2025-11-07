import { useState } from 'react';
import { submitReservation } from '@services/api/reservations';

export const useReservation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const makeReservation = async (data) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await submitReservation(data);
      setSuccess(true);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsLoading(false);
    setError(null);
    setSuccess(false);
  };

  return { makeReservation, isLoading, error, success, reset };
};
