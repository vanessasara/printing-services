import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  type: 'quote' | 'sample' | 'contact';
  customerEmail: string;
  customerName: string;
  subject: string;
  message: string;
  formData?: Record<string, any>;
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json();

    const { type, customerEmail, customerName, subject, message, formData } = body;

    // Validate required fields
    if (!customerEmail || !customerName || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    if (!process.env.COMPANY_EMAIL || !process.env.FROM_EMAIL) {
      console.error('Email addresses not configured');
      return NextResponse.json(
        { error: 'Email addresses not configured' },
        { status: 500 }
      );
    }

    // Email 1: Send confirmation email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0066cc; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
              <p>Dear ${customerName},</p>
              <p>Thank you for reaching out to us. We have received your ${type} request and our team will get back to you shortly.</p>
              <p><strong>Your message:</strong></p>
              <p>${message}</p>
              <p>We typically respond within 24 hours during business days.</p>
              <p>If you have any urgent questions, please feel free to call us or send another message.</p>
              <p>Best regards,<br>The Printing Services Team</p>
            </div>
            <div class="footer">
              <p>This is an automated confirmation email. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email 2: Send notification email to company
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #cc0000; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .info-row { margin: 10px 0; padding: 10px; background-color: white; border-left: 3px solid #0066cc; }
            .label { font-weight: bold; color: #0066cc; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New ${type.charAt(0).toUpperCase() + type.slice(1)} Request</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Type:</span> ${type.charAt(0).toUpperCase() + type.slice(1)} Request
              </div>
              <div class="info-row">
                <span class="label">Customer Name:</span> ${customerName}
              </div>
              <div class="info-row">
                <span class="label">Customer Email:</span> ${customerEmail}
              </div>
              <div class="info-row">
                <span class="label">Subject:</span> ${subject}
              </div>
              <div class="info-row">
                <span class="label">Message:</span><br>${message}
              </div>
              ${formData ? `
                <div class="info-row">
                  <span class="label">Additional Details:</span><br>
                  <pre>${JSON.stringify(formData, null, 2)}</pre>
                </div>
              ` : ''}
            </div>
          </div>
        </body>
      </html>
    `;

    // Send both emails concurrently
    const [customerEmailResult, companyEmailResult] = await Promise.all([
      // Email to customer
      resend.emails.send({
        from: process.env.FROM_EMAIL!,
        to: customerEmail,
        subject: `Thank you for your ${type} request`,
        html: customerEmailHtml,
      }),
      // Email to company
      resend.emails.send({
        from: process.env.FROM_EMAIL!,
        to: process.env.COMPANY_EMAIL!,
        subject: `New ${type} request from ${customerName}`,
        html: companyEmailHtml,
        replyTo: customerEmail,
      }),
    ]);

    // Check for errors in either email
    if (customerEmailResult.error || companyEmailResult.error) {
      console.error('Email sending errors:', {
        customer: customerEmailResult.error,
        company: companyEmailResult.error,
      });

      return NextResponse.json(
        {
          error: 'Failed to send one or more emails',
          details: {
            customerEmail: customerEmailResult.error,
            companyEmail: companyEmailResult.error,
          }
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Emails sent successfully',
        emailIds: {
          customer: customerEmailResult.data?.id,
          company: companyEmailResult.data?.id,
        },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      {
        error: 'Failed to send emails',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
