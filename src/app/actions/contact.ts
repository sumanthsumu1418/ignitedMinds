// 'use server'

// import { compileContactTemplate, sendMail } from "../lib/mail";

// export async function submitContactForm(formData: FormData) {
//   try {
//     const fullName = formData.get("fullName") as string;
//     const contactNumber = formData.get("contactNumber") as string;
//     const email = formData.get("email") as string;
//     const course = formData.get("course") as string;
//     const message = formData.get("message") as string;

//     if (!fullName || !contactNumber || !email || !course || !message) {
//       throw new Error("All fields are required");
//     }

//     const body = compileContactTemplate({
//       fullName,
//       contactNumber,
//       email,
//       course,
//       message,
//     });

//     await sendMail({
//       to: "your-email@gmail.com",
//       subject: `New Contact Form Submission from ${fullName}`,
//       body,
//     });

//     return { success: true, message: "Thank you! Your message has been sent successfully." };
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     return { success: false, message: "An error occurred. Please try again." };
//   }
// }

// "use server";

// import { compileContactTemplate, sendMail } from "../lib/mail";

// export async function submitContactForm(formData: FormData) {
//   try {
//     const fullName = formData.get("fullName") as string;
//     const contactNumber = formData.get("contactNumber") as string;
//     const email = formData.get("email") as string;
//     const course = formData.get("course") as string;
//     const message = formData.get("message") as string;

//     if (!fullName || !contactNumber || !email || !course || !message) {
//       throw new Error("All fields are required");
//     }

//     const body = compileContactTemplate({
//       fullName,
//       contactNumber,
//       email,
//       course,
//       message,
//     });

//     await sendMail({
//       to: process.env.CONTACT_EMAIL || "your-email@gmail.com",
//       subject: `New Contact Form Submission from ${fullName}`,
//       body,
//     });

//     return {
//       success: true,
//       message: "Thank you! Your message has been sent successfully.",
//     };
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     if (
//       error instanceof Error &&
//       error.message === "Email service is not configured"
//     ) {
//       return {
//         success: false,
//         message:
//           "Our email service is currently unavailable. Please try again later or contact us directly.",
//       };
//     }
//     return {
//       success: false,
//       message: "An error occurred while submitting the form. Please try again.",
//     };
//   }
// }



"use server";

import { compileContactTemplate, sendMail } from "../lib/mail";

export async function submitContactForm(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const contactNumber = formData.get("contactNumber") as string;
    const email = formData.get("email") as string;
    const course = formData.get("course") as string;
    const message = formData.get("message") as string;

    if (!fullName || !contactNumber || !email || !course || !message) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    const body = compileContactTemplate({
      fullName,
      contactNumber,
      email,
      course,
      message,
    });

    const mailResult = await sendMail({
      to: process.env.SMTP_EMAIL || "spmanju257@gmail.com",
      subject: `New Contact Form Submission from ${fullName}`,
      body,
    });

    if (!mailResult.success) {
      console.error("Failed to send email:", mailResult.message);
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

