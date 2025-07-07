/**
 * Email Service
 * Handles contact form submissions and meeting scheduling
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

const ADMIN_EMAIL = 'adityakumar2482@gmail.com';

/**
 * Sends contact form data via email
 */
export const sendContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Create email content
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `
New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Service: ${formData.service}
Budget: ${formData.budget || 'Not specified'}

Message:
${formData.message}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink);

    // Also send confirmation email to user
    const confirmationSubject = 'Thank you for contacting DigitalCraft';
    const confirmationBody = `
Dear ${formData.name},

Thank you for reaching out to DigitalCraft! We have received your inquiry and will get back to you within 24 hours.

Your submission details:
- Service: ${formData.service}
- Budget: ${formData.budget || 'To be discussed'}

We're excited to discuss how we can help bring your vision to life.

Best regards,
The DigitalCraft Team
    `.trim();

    const confirmationLink = `mailto:${formData.email}?subject=${encodeURIComponent(confirmationSubject)}&body=${encodeURIComponent(confirmationBody)}`;
    
    // Small delay before opening confirmation email
    setTimeout(() => {
      window.open(confirmationLink);
    }, 1000);

    return true;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return false;
  }
};

/**
 * Schedules a meeting and sends calendar invite
 */
export const scheduleMeeting = async (meetingData: MeetingRequest): Promise<boolean> => {
  try {
    // Parse date and time
    const meetingDateTime = new Date(`${meetingData.date}T${meetingData.time}`);
    const endDateTime = new Date(meetingDateTime.getTime() + 60 * 60 * 1000); // 1 hour meeting

    // Format dates for calendar
    const startDate = meetingDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    // Create calendar event details
    const eventTitle = `DigitalCraft Consultation - ${meetingData.name}`;
    const eventDescription = `
Consultation meeting with ${meetingData.name} from ${meetingData.email}

${meetingData.message ? `Message: ${meetingData.message}` : ''}

Meeting scheduled via DigitalCraft website.
    `.trim();

    // Create Google Calendar link
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDescription)}&location=Online%20Meeting&add=${encodeURIComponent(ADMIN_EMAIL)}&add=${encodeURIComponent(meetingData.email)}`;

    // Open calendar to create event
    window.open(calendarUrl, '_blank');

    // Send email notification to admin
    const adminSubject = `New Meeting Scheduled - ${meetingData.name}`;
    const adminBody = `
New meeting has been scheduled:

Client: ${meetingData.name}
Email: ${meetingData.email}
Date: ${meetingData.date}
Time: ${meetingData.time} (${meetingData.timezone})

Message: ${meetingData.message || 'No additional message'}

Please check your calendar for the meeting invite.

---
Scheduled at: ${new Date().toLocaleString()}
    `.trim();

    const adminMailto = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(adminSubject)}&body=${encodeURIComponent(adminBody)}`;
    
    // Small delay before opening admin email
    setTimeout(() => {
      window.open(adminMailto);
    }, 1500);

    // Send confirmation email to client
    const clientSubject = 'Meeting Scheduled - DigitalCraft Consultation';
    const clientBody = `
Dear ${meetingData.name},

Your consultation meeting with DigitalCraft has been scheduled!

Meeting Details:
- Date: ${new Date(meetingData.date).toLocaleDateString()}
- Time: ${meetingData.time} (${meetingData.timezone})
- Duration: 1 hour
- Type: Online consultation

You should receive a calendar invite shortly. We'll send you the meeting link 24 hours before the scheduled time.

We're looking forward to discussing your project and how we can help bring your vision to life!

Best regards,
The DigitalCraft Team

---
If you need to reschedule, please reply to this email.
    `.trim();

    const clientMailto = `mailto:${meetingData.email}?subject=${encodeURIComponent(clientSubject)}&body=${encodeURIComponent(clientBody)}`;
    
    // Send client confirmation
    setTimeout(() => {
      window.open(clientMailto);
    }, 2000);

    return true;
  } catch (error) {
    console.error('Error scheduling meeting:', error);
    return false;
  }
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