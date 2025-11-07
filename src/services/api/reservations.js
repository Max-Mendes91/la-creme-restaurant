import emailjs from '@emailjs/browser';

export const submitReservation = async (reservationData) => {
  try {
    // Get environment variables
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Debug: Log env variables (remove in production)
    console.log('EmailJS Config:', { publicKey, serviceId, templateId });

    // Validate EmailJS credentials
    if (!publicKey || !serviceId || !templateId) {
      throw new Error('EmailJS credentials are missing. Check your .env.local file.');
    }

    // Initialize EmailJS with public key
    emailjs.init(publicKey);

    // Validate required fields
    const required = ['name', 'email', 'phone', 'date', 'time', 'guests'];
    const missing = required.filter(field => !reservationData[field]);

    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }

    // Match YOUR EmailJS template variable names exactly
    const templateParams = {
      user_name: reservationData.name,
      user_email: reservationData.email,
      user_phone: reservationData.phone,
      reservation_date: reservationData.date,
      reservation_time: reservationData.time,
      guests: reservationData.guests,
      special_requests: reservationData.specialRequests || 'None',
      pre_order_items: reservationData.preOrderItems || 'No pre-selected items',
    };

    console.log('Sending with template params:', templateParams);

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Reservation confirmed! Check your email.',
        reservationId: `RES-${Date.now()}`,
      };
    } else {
      throw new Error('Failed to send reservation');
    }
  } catch (error) {
    console.error('Reservation error:', error);
    throw new Error(error.message || 'Failed to submit. Please try again.');
  }
};
