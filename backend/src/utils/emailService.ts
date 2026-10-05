import { BrevoClient } from '@getbrevo/brevo';

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY as string,
});

interface AppointmentData {
  patientName: string;
  phone: string;
  email: string;
  address: string;
  preferredDate: string;
  service: string;
}

const serviceNames: { [key: string]: string } = {
  'neuro-opd': 'Neurology OPD Consultation',
  'psychiatry-opd': 'Psychiatry & Therapy Session',
  'tele-consult': 'Online Video Consultation',
  'follow-up': 'Routine Follow-up',
};

// ==================== EMAIL TO PATIENT ====================
export const sendPatientConfirmation = async (data: AppointmentData) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fb;padding:40px 20px;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
            <tr>
              <td style="background:linear-gradient(135deg,#0b2447 0%,#1a3a5f 100%);padding:40px 30px;text-align:center;">
                <h1 style="color:#ffffff;margin:0;font-size:28px;">National Hospital</h1>
                <p style="color:#7dd3fc;margin:8px 0 0;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:bold;">Neuro Center</p>
              </td>
            </tr>
            <tr>
              <td style="padding:40px 40px 20px;">
                <div style="text-align:center;margin-bottom:30px;">
                  <div style="display:inline-block;width:70px;height:70px;background:#dcfce7;border-radius:50%;line-height:70px;font-size:32px;">✓</div>
                  <h2 style="color:#0b2447;margin:20px 0 8px;font-size:24px;">Appointment Confirmed!</h2>
                  <p style="color:#64748b;margin:0;font-size:14px;">Dear ${data.patientName},</p>
                </div>
                <p style="color:#334155;font-size:15px;line-height:1.6;margin:0 0 25px;">
                  Thank you for booking your appointment with <strong>National Hospital & Neuro Center</strong>. 
                  Your appointment request has been received and our team will contact you shortly.
                </p>
                <div style="background:#f8fafc;border-left:4px solid #0b2447;border-radius:12px;padding:25px;margin:25px 0;">
                  <h3 style="color:#0b2447;margin:0 0 20px;font-size:14px;letter-spacing:2px;text-transform:uppercase;">Your Appointment Details</h3>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Patient Name</td><td style="padding:8px 0;color:#0b2447;font-size:13px;font-weight:bold;">${data.patientName}</td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Phone</td><td style="padding:8px 0;color:#0b2447;font-size:13px;font-weight:bold;">${data.phone}</td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Preferred Date</td><td style="padding:8px 0;color:#0b2447;font-size:13px;font-weight:bold;">${data.preferredDate}</td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Service</td><td style="padding:8px 0;color:#0b2447;font-size:13px;font-weight:bold;">${serviceNames[data.service] || data.service}</td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:13px;vertical-align:top;">Address</td><td style="padding:8px 0;color:#0b2447;font-size:13px;font-weight:bold;">${data.address}</td></tr>
                  </table>
                </div>
                <p style="color:#334155;font-size:14px;line-height:1.6;margin:20px 0 0;">
                  Warm regards,<br><strong style="color:#0b2447;">Dr. AQ Jilani</strong><br>
                  <span style="color:#64748b;font-size:12px;">Chief Specialist, National Hospital & Neuro Center</span>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#f8fafc;padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                <p style="color:#94a3b8;font-size:11px;margin:0;">© ${new Date().getFullYear()} National Hospital & Neuro Center. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `;

  await brevo.transactionalEmails.sendTransacEmail({
    subject: `✅ Appointment Confirmed - ${data.preferredDate}`,
    htmlContent: html,
    sender: {
      name: 'National Hospital',
      email: 'anaskhan995620@gmail.com',
    },
    to: [{ email: data.email, name: data.patientName }],
  });
};

// ==================== EMAIL TO DOCTOR ====================
export const sendDoctorNotification = async (data: AppointmentData) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fb;padding:40px 20px;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
            <tr><td style="background:linear-gradient(135deg,#dc2626 0%,#ef4444 100%);padding:30px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:22px;">🔔 New Appointment Request</h1>
            </td></tr>
            <tr><td style="padding:30px;">
              <p style="color:#334155;font-size:15px;margin:0 0 20px;">A new appointment has been booked on the website:</p>
              <div style="background:#fef2f2;border-left:4px solid #dc2626;border-radius:12px;padding:25px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="padding:10px 0;color:#64748b;font-size:13px;width:35%;">👤 Patient Name</td><td style="padding:10px 0;color:#0b2447;font-size:14px;font-weight:bold;">${data.patientName}</td></tr>
                  <tr><td style="padding:10px 0;color:#64748b;font-size:13px;">📞 Phone</td><td style="padding:10px 0;color:#0b2447;font-size:14px;font-weight:bold;"><a href="tel:${data.phone}" style="color:#dc2626;text-decoration:none;">${data.phone}</a></td></tr>
                  <tr><td style="padding:10px 0;color:#64748b;font-size:13px;">✉️ Email</td><td style="padding:10px 0;color:#0b2447;font-size:14px;font-weight:bold;"><a href="mailto:${data.email}" style="color:#dc2626;text-decoration:none;">${data.email}</a></td></tr>
                  <tr><td style="padding:10px 0;color:#64748b;font-size:13px;">🏠 Address</td><td style="padding:10px 0;color:#0b2447;font-size:14px;font-weight:bold;">${data.address}</td></tr>
                  <tr><td style="padding:10px 0;color:#64748b;font-size:13px;">📅 Preferred Date</td><td style="padding:10px 0;color:#0b2447;font-size:14px;font-weight:bold;">${data.preferredDate}</td></tr>
                  <tr><td style="padding:10px 0;color:#64748b;font-size:13px;">🩺 Service</td><td style="padding:10px 0;color:#0b2447;font-size:14px;font-weight:bold;">${serviceNames[data.service] || data.service}</td></tr>
                </table>
              </div>
              <div style="text-align:center;margin-top:25px;">
                <a href="https://national-hospital-portal-n67a.vercel.app/dr-jilani-panel" style="display:inline-block;background:#0b2447;color:#ffffff;padding:14px 30px;border-radius:12px;text-decoration:none;font-weight:bold;font-size:14px;">View in Dashboard →</a>
              </div>
            </td></tr>
            <tr><td style="background:#f8fafc;padding:20px;text-align:center;">
              <p style="color:#94a3b8;font-size:11px;margin:0;">Automated notification from National Hospital Website</p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `;

  await brevo.transactionalEmails.sendTransacEmail({
    subject: `🔔 New Appointment: ${data.patientName} - ${data.preferredDate}`,
    htmlContent: html,
    sender: {
      name: 'National Hospital',
      email: 'appointments@nationalhospital.com',
    },
    to: [{ email: process.env.DOCTOR_EMAIL as string }],
  });
};