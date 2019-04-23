import nodemailer from "nodemailer";

export default async function mailer(emailData) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    const mailOptions = {
      from: emailData.email,
      to: "mohsen000069@gmail.com",
      subject: emailData.subject,
      html: emailData.html,
      replyTo: emailData.replyTo
    };
    const sendEmail = await transporter.sendMail(mailOptions);
    return sendEmail;
  } catch (err) {
    return err;
  }
}
