interface QuoteData {
  name: string
  email: string
  company: string
  message: string
}

export function generateQuoteEmailHTML(data: QuoteData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request - MEFRUP</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #DC1E28 0%, #b01820 100%); padding: 40px; text-align: center;">
              <img src="https://raw.githubusercontent.com/PRAZIS-TECHNOLOGIES/mefrup-website/main/public/logomefrup.png" alt="MEFRUP" style="max-width: 200px; height: auto;">
              <h1 style="color: #ffffff; margin: 20px 0 0 0; font-size: 24px; font-weight: bold;">New Quote Request</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                You have received a new quote request from your website:
              </p>

              <!-- Client Information Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                <tr>
                  <td style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #DC1E28; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #DC1E28; padding-bottom: 10px;">
                      Client Information
                    </h2>

                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 10px 0; color: #666666; font-weight: bold; width: 30%;">Name:</td>
                        <td style="padding: 10px 0; color: #333333;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #666666; font-weight: bold;">Email:</td>
                        <td style="padding: 10px 0; color: #333333;">
                          <a href="mailto:${data.email}" style="color: #DC1E28; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #666666; font-weight: bold;">Company:</td>
                        <td style="padding: 10px 0; color: #333333;">${data.company || 'Not provided'}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                <tr>
                  <td style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #DC1E28; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #DC1E28; padding-bottom: 10px;">
                      Project Details
                    </h2>
                    <p style="color: #333333; font-size: 14px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${data.message}</p>
                  </td>
                </tr>
              </table>

              <!-- Call to Action -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}?subject=Re:%20Quote%20Request%20from%20${encodeURIComponent(data.name)}"
                       style="display: inline-block; background-color: #DC1E28; color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                      Reply to ${data.name}
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0; text-align: center;">
                Please respond within 24 hours to maintain our quality service standards.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px; text-align: center;">
              <p style="color: #ffffff; font-size: 14px; margin: 0 0 10px 0;">
                <strong>MEFRUP Group LLC</strong>
              </p>
              <p style="color: #999999; font-size: 12px; margin: 0 0 5px 0;">
                Precision Manufacturer of Automotive Components
              </p>
              <p style="color: #999999; font-size: 12px; margin: 0 0 15px 0;">
                IATF 16949:2016 Certified | DQS Germany Audited
              </p>
              <p style="color: #666666; font-size: 11px; margin: 0;">
                This email was sent from your website contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export function generateQuoteEmailText(data: QuoteData): string {
  return `
New Quote Request - MEFRUP

CLIENT INFORMATION
------------------
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}

PROJECT DETAILS
---------------
${data.message}

--
MEFRUP Group LLC
Precision Manufacturer of Automotive Components
IATF 16949:2016 Certified | DQS Germany Audited

Reply to: ${data.email}
  `.trim()
}
