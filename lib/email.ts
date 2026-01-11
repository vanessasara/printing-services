/**
 * Email utility functions for sending emails via the API
 */

export interface SendEmailParams {
  type: 'quote' | 'sample' | 'contact';
  customerEmail: string;
  customerName: string;
  subject: string;
  message: string;
  formData?: Record<string, any>;
}

export interface SendEmailResponse {
  success: boolean;
  message?: string;
  error?: string;
  emailIds?: {
    customer?: string;
    company?: string;
  };
}

/**
 * Send an email using the API route
 * This function sends two emails:
 * 1. Confirmation email to the customer
 * 2. Notification email to the company
 *
 * @param params - Email parameters
 * @returns Promise with the response
 */
export async function sendEmail(params: SendEmailParams): Promise<SendEmailResponse> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Failed to send email',
      };
    }

    return {
      success: true,
      message: data.message,
      emailIds: data.emailIds,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Send a quote request email
 */
export async function sendQuoteEmail(
  customerName: string,
  customerEmail: string,
  message: string,
  formData?: Record<string, any>
): Promise<SendEmailResponse> {
  return sendEmail({
    type: 'quote',
    customerEmail,
    customerName,
    subject: 'Quote Request',
    message,
    formData,
  });
}

/**
 * Send a sample request email
 */
export async function sendSampleEmail(
  customerName: string,
  customerEmail: string,
  message: string,
  formData?: Record<string, any>
): Promise<SendEmailResponse> {
  return sendEmail({
    type: 'sample',
    customerEmail,
    customerName,
    subject: 'Sample Request',
    message,
    formData,
  });
}

/**
 * Send a contact form email
 */
export async function sendContactEmail(
  customerName: string,
  customerEmail: string,
  subject: string,
  message: string,
  formData?: Record<string, any>
): Promise<SendEmailResponse> {
  return sendEmail({
    type: 'contact',
    customerEmail,
    customerName,
    subject,
    message,
    formData,
  });
}
