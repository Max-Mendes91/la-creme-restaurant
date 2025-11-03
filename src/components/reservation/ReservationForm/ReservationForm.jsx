import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useReservation } from '@hooks/useReservation';
import { usePreOrder } from '@/hooks/usePreOrder';

const ReservationForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Touch tracking for real-time validation
  const [touched, setTouched] = useState({});

  // Use reservation hook
  const { makeReservation, isLoading, error: apiError, success, reset } = useReservation();

  // Use pre-order context
  const { getItemsArray, clearOrder } = usePreOrder();

  // Format pre-order items for EmailJS with quantities
  const formatPreOrderItems = (itemsArray) => {
    if (itemsArray.length === 0) return 'No pre-selected items';

    return itemsArray
      .map(
        ({ item, quantity }) =>
          `${item.name} x${quantity} - $${item.price * quantity}`
      )
      .join('\n');
  };

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        return '';

      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        return '';

      case 'phone':
        if (!value.trim()) {
          return 'Phone number is required';
        }
        const phoneRegex = /^[\d\s()+-]+$/;
        if (!phoneRegex.test(value)) {
          return 'Please enter a valid phone number';
        }
        if (value.replace(/\D/g, '').length < 10) {
          return 'Phone number must be at least 10 digits';
        }
        return '';

      case 'date':
        if (!value) {
          return 'Date is required';
        }
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          return 'Please select a future date';
        }
        return '';

      case 'time':
        if (!value) {
          return 'Time is required';
        }
        return '';

      case 'guests':
        if (!value) {
          return 'Number of guests is required';
        }
        const guestCount = parseInt(value, 10);
        if (guestCount < 1) {
          return 'Must have at least 1 guest';
        }
        if (guestCount > 20) {
          return 'Maximum 20 guests. For larger parties, please call us';
        }
        return '';

      default:
        return '';
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  // Handle blur to mark field as touched
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate on blur
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'specialRequests') {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        date: true,
        time: true,
        guests: true,
      });
      return;
    }

    try {
      // Get items as array and format for email
      const itemsArray = getItemsArray();
      const formattedPreOrder = formatPreOrderItems(itemsArray);

      // Include pre-order items in the reservation data
      const reservationData = {
        ...formData,
        preOrderItems: formattedPreOrder,
      };

      await makeReservation(reservationData);

      // Clear pre-order after successful submission
      clearOrder();
    } catch (err) {
      // Error handled by hook
    }
  };

  // Reset form after successful submission
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          specialRequests: '',
        });
        setErrors({});
        setTouched({});
        reset();
      }, 5000); // Reset after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [success, reset]);

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Pre-Selected Items Preview */}
        {getItemsArray().length > 0 && (
          <div className="p-6 rounded-sm bg-accent-gray border-2 border-primary-gold">
            <h3 className="text-lg font-serif text-primary-gold mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Pre-Selected Menu Items
            </h3>
            <ul className="space-y-2">
              {getItemsArray().map(({ item, quantity }) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between text-sm text-accent-white border-b border-accent-gray-light pb-2"
                >
                  <span>
                    {item.name} <span className="text-primary-gold">x{quantity}</span>
                  </span>
                  <span className="text-primary-gold font-semibold">
                    ${item.price * quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-primary-gold flex items-center justify-between">
              <span className="font-semibold text-accent-white">Total</span>
              <span className="text-xl font-bold text-primary-gold">
                ${getItemsArray().reduce((sum, { item, quantity }) => sum + item.price * quantity, 0)}
              </span>
            </div>
            <p className="text-xs text-accent-white/60 mt-3">
              These items will be included in your reservation confirmation
            </p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div
            className="p-4 rounded-sm bg-green-900/20 border border-green-500/50 text-green-400"
            role="alert"
            aria-live="polite"
          >
            <p className="font-semibold">Reservation Confirmed!</p>
            <p className="text-sm mt-1">
              We've sent a confirmation email to {formData.email}. We look forward to serving you!
            </p>
          </div>
        )}

        {/* API Error Message */}
        {apiError && (
          <div
            className="p-4 rounded-sm bg-red-900/20 border border-red-500/50 text-red-400"
            role="alert"
            aria-live="polite"
          >
            <p className="font-semibold">Reservation Failed</p>
            <p className="text-sm mt-1">{apiError}</p>
          </div>
        )}

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="label">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input ${errors.name && touched.name ? 'input-error' : ''}`}
            placeholder="John Doe"
            aria-required="true"
            aria-invalid={errors.name && touched.name ? 'true' : 'false'}
            aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
            disabled={isLoading}
          />
          {errors.name && touched.name && (
            <p id="name-error" className="error-message" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="label">
            Email Address <span className="text-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input ${errors.email && touched.email ? 'input-error' : ''}`}
            placeholder="john.doe@example.com"
            aria-required="true"
            aria-invalid={errors.email && touched.email ? 'true' : 'false'}
            aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
            disabled={isLoading}
          />
          {errors.email && touched.email && (
            <p id="email-error" className="error-message" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="label">
            Phone Number <span className="text-error">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input ${errors.phone && touched.phone ? 'input-error' : ''}`}
            placeholder="+1 (555) 123-4567"
            aria-required="true"
            aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
            aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
            disabled={isLoading}
          />
          {errors.phone && touched.phone && (
            <p id="phone-error" className="error-message" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Date and Time Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Field */}
          <div>
            <label htmlFor="date" className="label">
              Date <span className="text-error">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              onBlur={handleBlur}
              min={getMinDate()}
              className={`input ${errors.date && touched.date ? 'input-error' : ''}`}
              aria-required="true"
              aria-invalid={errors.date && touched.date ? 'true' : 'false'}
              aria-describedby={errors.date && touched.date ? 'date-error' : undefined}
              disabled={isLoading}
            />
            {errors.date && touched.date && (
              <p id="date-error" className="error-message" role="alert">
                {errors.date}
              </p>
            )}
          </div>

          {/* Time Field */}
          <div>
            <label htmlFor="time" className="label">
              Time <span className="text-error">*</span>
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input ${errors.time && touched.time ? 'input-error' : ''}`}
              aria-required="true"
              aria-invalid={errors.time && touched.time ? 'true' : 'false'}
              aria-describedby={errors.time && touched.time ? 'time-error' : undefined}
              disabled={isLoading}
            />
            {errors.time && touched.time && (
              <p id="time-error" className="error-message" role="alert">
                {errors.time}
              </p>
            )}
          </div>
        </div>

        {/* Guests Field */}
        <div>
          <label htmlFor="guests" className="label">
            Number of Guests <span className="text-error">*</span>
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            onBlur={handleBlur}
            min="1"
            max="20"
            className={`input ${errors.guests && touched.guests ? 'input-error' : ''}`}
            placeholder="2"
            aria-required="true"
            aria-invalid={errors.guests && touched.guests ? 'true' : 'false'}
            aria-describedby={errors.guests && touched.guests ? 'guests-error' : undefined}
            disabled={isLoading}
          />
          {errors.guests && touched.guests && (
            <p id="guests-error" className="error-message" role="alert">
              {errors.guests}
            </p>
          )}
        </div>

        {/* Special Requests Field */}
        <div>
          <label htmlFor="specialRequests" className="label">
            Special Requests <span className="text-muted">(Optional)</span>
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="4"
            className="input resize-none"
            placeholder="Any dietary restrictions, allergies, or special occasions..."
            aria-describedby="special-requests-help"
            disabled={isLoading}
          />
          <p id="special-requests-help" className="text-sm text-muted mt-1">
            Let us know if you have any special requirements or celebrations
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary btn-lg w-full"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Confirming Reservation...</span>
            </span>
          ) : (
            'Reserve Table'
          )}
        </button>
      </form>
    </div>
  );
};

ReservationForm.propTypes = {};

export default ReservationForm;
