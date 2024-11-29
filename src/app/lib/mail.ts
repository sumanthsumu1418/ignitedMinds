// import nodemailer from "nodemailer";

// type EmailData = {
//   fullName: string;
//   contactNumber: string;
//   email: string;
//   course: string;
//   message: string;
// };

// function createEmailTemplate(data: EmailData): string {
//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>New Contact Form Submission</title>
//       <style>
//         body {
//           font-family: Arial, sans-serif;
//           line-height: 1.6;
//           color: #333;
//           max-width: 600px;
//           margin: 0 auto;
//           padding: 20px;
//         }
//         h1 {
//           color: #e53e3e;
//         }
//         .field {
//           margin-bottom: 20px;
//         }
//         .label {
//           font-weight: bold;
//           color: #718096;
//         }
//       </style>
//     </head>
//     <body>
//       <h1>New Contact Form Submission</h1>
//       <div class="field">
//         <p class="label">Full Name:</p>
//         <p>${data.fullName}</p>
//       </div>
//       <div class="field">
//         <p class="label">Contact Number:</p>
//         <p>${data.contactNumber}</p>
//       </div>
//       <div class="field">
//         <p class="label">Email:</p>
//         <p>${data.email}</p>
//       </div>
//       <div class="field">
//         <p class="label">Selected Course:</p>
//         <p>${data.course}</p>
//       </div>
//       <div class="field">
//         <p class="label">Message:</p>
//         <p>${data.message}</p>
//       </div>
//     </body>
//     </html>
//   `;
// }

// export async function sendMail({
//   to,
//   subject,
//   body,
// }: {
//   to: string;
//   subject: string;
//   body: string;
// }) {
//   const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

//   if (!SMTP_EMAIL || !SMTP_PASSWORD) {
//     throw new Error("SMTP credentials are not set in environment variables");
//   }

//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: SMTP_EMAIL,
//       pass: SMTP_PASSWORD,
//     },
//   });

//   try {
//     const sendResult = await transport.sendMail({
//       from: SMTP_EMAIL,
//       to,
//       subject,
//       html: body,
//     });
//     console.log("Email sent successfully:", sendResult);
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error;
//   }
// }

// export function compileContactTemplate(data: EmailData): string {
//   return createEmailTemplate(data);
// }



// import nodemailer from "nodemailer";

// type EmailData = {
//   fullName: string;
//   contactNumber: string;
//   email: string;
//   course: string;
//   message: string;
// };

// function createEmailTemplate(data: EmailData): string {
//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>New Contact Form Submission</title>
//       <style>
//         body {
//           font-family: Arial, sans-serif;
//           line-height: 1.6;
//           color: #333;
//           max-width: 600px;
//           margin: 0 auto;
//           padding: 20px;
//         }
//         h1 {
//           color: #e53e3e;
//         }
//         .field {
//           margin-bottom: 20px;
//         }
//         .label {
//           font-weight: bold;
//           color: #718096;
//         }
//       </style>
//     </head>
//     <body>
//       <h1>New Contact Form Submission</h1>
//       <div class="field">
//         <p class="label">Full Name:</p>
//         <p>${data.fullName}</p>
//       </div>
//       <div class="field">
//         <p class="label">Contact Number:</p>
//         <p>${data.contactNumber}</p>
//       </div>
//       <div class="field">
//         <p class="label">Email:</p>
//         <p>${data.email}</p>
//       </div>
//       <div class="field">
//         <p class="label">Selected Course:</p>
//         <p>${data.course}</p>
//       </div>
//       <div class="field">
//         <p class="label">Message:</p>
//         <p>${data.message}</p>
//       </div>
//     </body>
//     </html>
//   `;
// }

// export async function sendMail({
//   to,
//   subject,
//   body,
// }: {
//   to: string;
//   subject: string;
//   body: string;
// }) {
//   const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

//   if (!SMTP_EMAIL || !SMTP_PASSWORD) {
//     console.error("SMTP credentials are not set in environment variables");
//     throw new Error("Email service is not configured");
//   }

//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: SMTP_EMAIL,
//       pass: SMTP_PASSWORD,
//     },
//   });

//   try {
//     const sendResult = await transport.sendMail({
//       from: SMTP_EMAIL,
//       to,
//       subject,
//       html: body,
//     });
//     console.log("Email sent successfully:", sendResult);
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error("Failed to send email");
//   }
// }

// export function compileContactTemplate(data: EmailData): string {
//   return createEmailTemplate(data);
// }



import nodemailer from "nodemailer";

type EmailData = {
  fullName: string;
  contactNumber: string;
  email: string;
  course: string;
  message: string;
};

function createEmailTemplate(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #e53e3e;
        }
        .field {
          margin-bottom: 20px;
        }
        .label {
          font-weight: bold;
          color: #718096;
        }
      </style>
    </head>
    <body>
      <h1>New Contact Form Submission</h1>
      <div class="field">
        <p class="label">Full Name:</p>
        <p>${data.fullName}</p>
      </div>
      <div class="field">
        <p class="label">Contact Number:</p>
        <p>${data.contactNumber}</p>
      </div>
      <div class="field">
        <p class="label">Email:</p>
        <p>${data.email}</p>
      </div>
      <div class="field">
        <p class="label">Selected Course:</p>
        <p>${data.course}</p>
      </div>
      <div class="field">
        <p class="label">Message:</p>
        <p>${data.message}</p>
      </div>
    </body>
    </html>
  `;
}

export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Get environment variables
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // Debug logging
  console.log("Environment:", process.env.NODE_ENV);
  console.log("SMTP_EMAIL exists:", !!SMTP_EMAIL);
  console.log("SMTP_PASSWORD exists:", !!SMTP_PASSWORD);

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    const errorMessage = isDevelopment
      ? "Email service is not configured. Please set SMTP_EMAIL and SMTP_PASSWORD in your .env.local file"
      : "Email service is temporarily unavailable. Please try again later.";
    
    console.error("SMTP credentials missing:", {
      email: !!SMTP_EMAIL,
      password: !!SMTP_PASSWORD,
      env: process.env.NODE_ENV
    });
    
    return {
      success: false,
      message: errorMessage,
    };
  }

  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',  // Using 'gmail' instead of manual host/port configuration
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // Verify SMTP connection configuration
    await transport.verify();
    console.log("SMTP connection verified successfully");

    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });

    console.log("Email sent successfully:", sendResult.messageId);
    return { 
      success: true, 
      message: "Email sent successfully" 
    };
  } catch (error) {
    console.error("Detailed email error:", error);
    const errorMessage = isDevelopment
      ? `Email configuration error: ${error.message}`
      : "Failed to send email. Please try again later.";
    
    return { 
      success: false, 
      message: errorMessage 
    };
  }
}

export function compileContactTemplate(data: EmailData): string {
  return createEmailTemplate(data);
}



