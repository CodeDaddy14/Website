/**
 * Email Service
 * Handles contact form submissions and meeting scheduling via Supabase Edge Functions
 */

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface MeetingRequest {
  name: string;
  email: string;
  date: string;
  time: string;
  timezone: string;
  message?: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

/**
 * Sends contact form data via Supabase Edge Function
 */
export const sendContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact',
        data: formData
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send contact form');
    }

    const result = await response.json();
    console.log('Contact form sent successfully:', result);
    
    // Show success notification
    showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
    
    return true;
  } catch (error) {
    console.error('Error sending contact form:', error);
    
    // Fallback to mailto if edge function fails
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Service: ${formData.service}
Budget: ${formData.budget || 'Not specified'}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:adityakumar2482@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    showNotification('Opening email client as fallback. Please send the email manually.', 'warning');
    return true;
  }
};

/**
 * Schedules a meeting via Supabase Edge Function
 */
export const scheduleMeeting = async (meetingData: MeetingRequest): Promise<boolean> => {
  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'meeting',
        data: meetingData
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to schedule meeting');
    }

    const result = await response.json();
    console.log('Meeting scheduled successfully:', result);
    
    showNotification('Meeting scheduled successfully! You\'ll receive calendar invites shortly.', 'success');
    
    return true;
  } catch (error) {
    console.error('Error scheduling meeting:', error);
    
    // Fallback to Google Calendar
    const meetingDateTime = new Date(`${meetingData.date}T${meetingData.time}`);
    const endDateTime = new Date(meetingDateTime.getTime() + 60 * 60 * 1000);
    
    const startDate = meetingDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const eventTitle = `DigitalCraft Consultation - ${meetingData.name}`;
    const eventDescription = `
Consultation meeting with ${meetingData.name}
Email: ${meetingData.email}
${meetingData.message ? `Message: ${meetingData.message}` : ''}
    `.trim();

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDescription)}&location=Online%20Meeting`;
    
    window.open(calendarUrl, '_blank');
    
    showNotification('Opening Google Calendar as fallback. Please save the event manually.', 'warning');
    return true;
  }
};

/**
 * Shows a notification to the user
 */
const showNotification = (message: string, type: 'success' | 'error' | 'warning' = 'success') => {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform translate-x-full`;
  
  // Set colors based on type
  const colors = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black'
  };
  
  notification.className += ` ${colors[type]}`;
  notification.textContent = message;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
};

/**
 * Gets user's timezone
 */
export const getUserTimezone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

/**
 * Formats date for input field
 */
export const formatDateForInput = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

/**
 * Gets minimum date (today)
 */
export const getMinDate = (): string => {
  return formatDateForInput(new Date());
};

/**
 * Gets maximum date (3 months from now)
 */
export const getMaxDate = (): string => {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  return formatDateForInput(maxDate);
};