import nodemailer from 'nodemailer';

export default async function mailer(emailData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'centermillennium415@gmail.com',
      pass: 'M20002000',
    },
  });

const html=``

  const mailOptions = {
    from: emailData.email,
    to: 'centermillennium415@gmail.com',
    subject: emailData.subject,
    html,
    replyTo: emailData.email,
  };
  try {
    const sendEmail = await transporter.sendMail(mailOptions);
    return sendEmail;
  } catch (err) {
    return err;
  }
}
