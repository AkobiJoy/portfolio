// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   // Log the environment variables to check if they are correctly loaded
//   console.log("EMAIL:", process.env.SMTP_EMAIL);
//   console.log("PASS:", process.env.SMTP_PASS ? "✅ present" : "❌ missing");

//   const { name, email, message } = await req.json();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.SMTP_EMAIL,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   const mailOptions = {
//     from: `"Portfolio Contact" <${process.env.SMTP_EMAIL}>`,
//     to: process.env.SMTP_EMAIL,
//     subject: `New Message from ${name}`,
//     html: `
//       <h2>You've received a new message</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong></p>
//       <p>${message}</p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("EMAIL ERROR:", error);  // Log the actual error
//     return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_EMAIL}>`,
    to: process.env.SMTP_EMAIL,
    subject: `New message from ${name}`,
    html: `
      <h3>You’ve got a new message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
