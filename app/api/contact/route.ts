import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error('SMTP Verification Error:', verifyError);
      if (verifyError.code === 'EAUTH') {
        return NextResponse.json(
          { 
            error: 'Authentication failed. Please ensure you are using a Gmail App Password, not your regular password.',
            details: verifyError.message 
          },
          { status: 500 }
        );
      }
      throw verifyError;
    }

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet">
      <style>
        body { margin: 0; padding: 0; background-color: #000000; font-family: 'Fixed width', sans-serif; color: #ffffff; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #000000; padding: 40px 0; }
        .main { width: 100%; max-width: 600px; margin: 0 auto; background-color: #0b0b0b; border: 1px solid #1a1a1a; }
        .header { padding: 40px 20px; text-align: center; border-bottom: 1px solid #1a1a1a; }
        .logo { font-weight: 900; font-size: 32px; letter-spacing: 0.3em; color: #d2e6ff; text-transform: uppercase; margin: 0; }
        .content { padding: 40px 30px; }
        .field { margin-bottom: 25px; }
        .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(210, 230, 255, 0.4); margin-bottom: 8px; font-weight: 700; }
        .value { font-size: 16px; color: #ffffff; line-height: 1.5; }
        .message-box { background-color: #050505; border: 1px solid #1a1a1a; padding: 20px; border-radius: 4px; border-left: 2px solid #d2e6ff; font-style: italic; }
        .footer { padding: 30px; text-align: center; font-size: 10px; color: rgba(210, 230, 255, 0.2); letter-spacing: 0.1em; border-top: 1px solid #1a1a1a; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <table class="main" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td class="header">
              <h1 class="logo">NEUTRON NEXUS</h1>
            </td>
          </tr>
          <tr>
            <td class="content">
              <div class="field">
                <div class="label">Initiator</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Contact Endpoint</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Inquiry Brief</div>
                <div class="message-box">
                  <div class="value" style="color: rgba(255,255,255,0.8);">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="footer">
              SECURE TRANSMISSION PROTOCOL — ASSEMBLY 2026
            </td>
          </tr>
        </table>
      </div>
    </body>
    </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'startx.ru@newtonschool.co',
      subject: `[Nexus Inquiry] Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
