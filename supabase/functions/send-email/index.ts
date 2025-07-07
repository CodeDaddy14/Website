import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

interface MeetingRequest {
  name: string;
  email: string;
  date: string;
  time: string;
  timezone: string;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { type, data } = await req.json()

    if (type === 'contact') {
      return await handleContactForm(data as ContactFormData)
    } else if (type === 'meeting') {
      return await handleMeetingRequest(data as MeetingRequest)
    } else {
      throw new Error('Invalid request type')
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

async function handleContactForm(formData: ContactFormData) {
  try {
    // In a real implementation, you would integrate with an email service like:
    // - SendGrid
    // - Resend
    // - AWS SES
    // - Mailgun
    
    // For now, we'll simulate the email sending and log the data
    console.log('Contact form submission:', formData)
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically:
    // 1. Send email to admin
    // 2. Send confirmation email to user
    // 3. Store in database if needed
    
    const emailContent = {
      to: 'adityakumar2482@gmail.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Budget:</strong> ${formData.budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `
    }
    
    // Log what would be sent
    console.log('Email would be sent:', emailContent)
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully',
        data: formData
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    throw new Error(`Failed to send contact form: ${error.message}`)
  }
}

async function handleMeetingRequest(meetingData: MeetingRequest) {
  try {
    console.log('Meeting request:', meetingData)
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would typically:
    // 1. Create calendar event
    // 2. Send calendar invites
    // 3. Send confirmation emails
    // 4. Store in database
    
    const meetingDateTime = new Date(`${meetingData.date}T${meetingData.time}`)
    
    const calendarEvent = {
      title: `DigitalCraft Consultation - ${meetingData.name}`,
      start: meetingDateTime.toISOString(),
      end: new Date(meetingDateTime.getTime() + 60 * 60 * 1000).toISOString(),
      attendees: ['adityakumar2482@gmail.com', meetingData.email],
      description: `
        Consultation meeting with ${meetingData.name}
        Email: ${meetingData.email}
        Timezone: ${meetingData.timezone}
        
        ${meetingData.message ? `Message: ${meetingData.message}` : ''}
      `
    }
    
    console.log('Calendar event would be created:', calendarEvent)
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Meeting scheduled successfully',
        data: {
          ...meetingData,
          meetingId: `meeting_${Date.now()}`,
          calendarEvent
        }
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    throw new Error(`Failed to schedule meeting: ${error.message}`)
  }
}