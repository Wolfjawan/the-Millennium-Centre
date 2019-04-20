import nodemailer from "nodemailer";

export default async function mailer(emailData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASSWORD
    }
  });
  const mailOptions = {
    from: emailData.email,
    to: "mohsen000069@gmail.com",
    subject: emailData.subject,
    html: emailData.html,
    replyTo: emailData.replyTo
  };
  try {
    const sendEmail = await transporter.sendMail(mailOptions);
    return sendEmail;
  } catch (err) {
    return err;
  }
}
