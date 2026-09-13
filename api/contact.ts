import type { IncomingMessage, ServerResponse } from 'http';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  timeline?: string;
  budget?: string;
  projectStage?: string;
  requestNDA?: boolean;
  details?: string;
  _gotcha?: string;
}

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse & { json?: any; status?: any }) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    // Parse body if not parsed
    let data: ContactPayload = req.body;
    if (!data) {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const raw = Buffer.concat(buffers).toString();
      data = JSON.parse(raw || '{}');
    } else if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    // Bot trap check
    if (data._gotcha) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: true, message: 'Message received' }));
      return;
    }

    const {
      name = 'Anonymous',
      email = '',
      company = 'Not specified',
      projectType = 'General Inquiry',
      timeline = 'Flexible',
      budget = 'Not specified',
      projectStage = 'Discovery',
      requestNDA = false,
      details = 'No additional notes provided.'
    } = data;

    if (!email || !email.includes('@')) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Valid email is required.' }));
      return;
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER || 'info@tekmorasolution.com';
    const smtpPass = process.env.SMTP_PASS || 'Techmora472@';
    const fromName = process.env.MAIL_FROM_NAME || 'Tekmora Solutions';
    const fromEmail = process.env.MAIL_FROM_EMAIL || 'info@tekmorasolution.com';

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // 1. Admin Notification Email
    const adminMailOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: fromEmail,
      replyTo: email,
      subject: `🔥 [New Inquiry] ${name} (${company}) — ${projectType}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0d12; color: #f3f4f6; border-radius: 12px; overflow: hidden; border: 1px solid #27272a;">
          <div style="background: #18181b; padding: 24px; border-bottom: 2px solid #f97316;">
            <h2 style="margin: 0; color: #ffffff; font-size: 20px; letter-spacing: 0.05em;">NEW PROJECT INQUIRY</h2>
            <p style="margin: 6px 0 0; color: #a1a1aa; font-size: 12px; font-family: monospace;">RECEIVED VIA TEKMORASOLUTION.COM</p>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #a1a1aa; width: 140px;">Client Name:</td>
                <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a1a1aa;">Email:</td>
                <td style="padding: 8px 0; color: #f97316;"><a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a1a1aa;">Company / Org:</td>
                <td style="padding: 8px 0; color: #ffffff;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a1a1aa;">Target Scope:</td>
                <td style="padding: 8px 0; color: #ffffff;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a1a1aa;">Project Stage:</td>
                <td style="padding: 8px 0; color: #ffffff;">${projectStage}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a1a1aa;">Timeline:</td>
                <td style="padding: 8px 0; color: #ffffff;">${timeline}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a1a1aa;">Budget Bracket:</td>
                <td style="padding: 8px 0; color: #22c55e; font-weight: 600;">${budget}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a1a1aa;">NDA Requested:</td>
                <td style="padding: 8px 0; color: ${requestNDA ? '#f97316' : '#a1a1aa'};">${requestNDA ? 'YES — Mutual NDA Required' : 'Standard Protocol'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 16px; background: #18181b; border-radius: 8px; border-left: 3px solid #f97316;">
              <h4 style="margin: 0 0 8px; font-size: 13px; color: #f3f4f6; text-transform: uppercase; font-family: monospace;">Technical Brief / Scope Notes:</h4>
              <p style="margin: 0; color: #d4d4d8; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${details}</p>
            </div>
          </div>
          <div style="padding: 16px 24px; background: #141416; border-top: 1px solid #27272a; text-align: center; font-size: 11px; color: #71717a; font-family: monospace;">
            Tekmora Solutions Enterprise Telemetry System
          </div>
        </div>
      `
    };

    // 2. Executive Branded Thank You Confirmation Email to Client
    const clientThankYouOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: email,
      replyTo: fromEmail,
      subject: `Thank you for contacting Tekmora Solutions — Project Inquiry Received`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank you for contacting Tekmora</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #090a0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 30px auto; background-color: #111218; border-radius: 12px; overflow: hidden; border: 1px solid #22232d; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            
            <!-- Header -->
            <div style="padding: 32px 36px 24px; background: linear-gradient(180deg, #181922 0%, #111218 100%); border-bottom: 1px solid #22232d;">
              <table style="width: 100%;">
                <tr>
                  <td>
                    <div style="font-family: 'Courier New', Courier, monospace; font-size: 20px; font-weight: 800; letter-spacing: 0.12em; color: #ffffff;">
                      TEKMORA<span style="color: #f97316;">.</span>
                    </div>
                    <div style="font-family: monospace; font-size: 10px; letter-spacing: 0.15em; color: #71717a; margin-top: 4px;">
                      ENTERPRISE SOFTWARE ENGINEERING
                    </div>
                  </td>
                  <td style="text-align: right;">
                    <span style="display: inline-block; padding: 4px 10px; background: rgba(249, 115, 22, 0.1); border: 1px solid rgba(249, 115, 22, 0.3); border-radius: 20px; font-size: 11px; font-family: monospace; color: #f97316; font-weight: 600;">
                      INQUIRY CONFIRMED
                    </span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Body Content -->
            <div style="padding: 36px 36px 28px;">
              <h1 style="margin: 0 0 16px; font-size: 24px; font-weight: 700; color: #ffffff; line-height: 1.3;">
                We've received your inquiry, ${name}.
              </h1>
              
              <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.65; color: #d4d4d8;">
                Thank you for considering Tekmora Solutions for your software engineering requirements. Our technical team has logged your submission and initiated the architectural review process.
              </p>

              <!-- Submission Recap Box -->
              <div style="background-color: #181922; border: 1px solid #272733; border-radius: 8px; padding: 20px 24px; margin: 24px 0;">
                <div style="font-family: monospace; font-size: 11px; letter-spacing: 0.08em; color: #f97316; text-transform: uppercase; margin-bottom: 14px; font-weight: 700;">
                  // SUBMISSION RECAP
                </div>
                <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
                  <tr>
                    <td style="padding: 6px 0; color: #a1a1aa; width: 140px;">Scope / Platform:</td>
                    <td style="padding: 6px 0; color: #ffffff; font-weight: 600;">${projectType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #a1a1aa;">Target Timeline:</td>
                    <td style="padding: 6px 0; color: #ffffff;">${timeline}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #a1a1aa;">Indicative Bracket:</td>
                    <td style="padding: 6px 0; color: #ffffff;">${budget}</td>
                  </tr>
                  ${requestNDA ? `
                  <tr>
                    <td style="padding: 6px 0; color: #a1a1aa;">Confidentiality:</td>
                    <td style="padding: 6px 0; color: #f97316;">Mutual NDA Requested Prior to Discovery</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <!-- Next Steps Protocol -->
              <div style="margin: 28px 0 24px;">
                <h3 style="margin: 0 0 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-family: monospace; color: #a1a1aa;">
                  WHAT HAPPENS NEXT:
                </h3>
                <ol style="margin: 0; padding-left: 18px; color: #d4d4d8; font-size: 14px; line-height: 1.8;">
                  <li><strong>Architectural Review</strong>: We evaluate system dependencies, scale, and integration touchpoints.</li>
                  <li><strong>Direct Follow-Up</strong>: A lead engineer will respond within <strong>24 business hours</strong> with initial recommendations.</li>
                  <li><strong>Discovery Workshop</strong>: We schedule a 30-minute technical session to finalize scope and milestones.</li>
                </ol>
              </div>

              <p style="margin: 24px 0 0; font-size: 14px; line-height: 1.6; color: #a1a1aa;">
                If you have immediate technical documentation, architectural diagrams, or an RFP to share, feel free to reply directly to this email (<a href="mailto:info@tekmorasolution.com" style="color: #f97316; text-decoration: none;">info@tekmorasolution.com</a>).
              </p>
            </div>

            <!-- Footer -->
            <div style="padding: 24px 36px; background-color: #0c0d12; border-top: 1px solid #22232d; font-size: 12px; color: #71717a; line-height: 1.6;">
              <table style="width: 100%;">
                <tr>
                  <td>
                    <div style="color: #ffffff; font-weight: 600; margin-bottom: 2px;">Tekmora Solutions</div>
                    <div>Custom Web Applications, Mobile Systems & Enterprise Platforms</div>
                    <div style="margin-top: 6px;">
                      <a href="https://tekmorasolution.com" style="color: #f97316; text-decoration: none;">tekmorasolution.com</a>
                      <span style="margin: 0 6px;">•</span>
                      <a href="mailto:info@tekmorasolution.com" style="color: #a1a1aa; text-decoration: none;">info@tekmorasolution.com</a>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

          </div>
        </body>
        </html>
      `
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientThankYouOptions)
    ]);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Inquiry received and confirmation email dispatched successfully.'
    }));
  } catch (error: any) {
    console.error('Email dispatch error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: 'Failed to process inquiry via SMTP.',
      details: error?.message || 'Internal server error'
    }));
  }
}
