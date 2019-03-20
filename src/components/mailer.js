import { Mailer } from 'nodemailer-react'
import Password from './Password'

export default function sendEmail() {
  const mailerConfig = {
    defaults: {
      from: {
        name: 'mathieutu',
        address: 'dev@mathieutu.ovh',
      },
    },
    transport: {
      host: 'smtp.example.com',
      secure: true,
      auth: {
        user: 'username',
        pass: 'password',
      },
    },
  }

  const emailsList = {
    pass: Password,
  }

  const mailer = Mailer(mailerConfig, emailsList)

  mailer.send('pass', {
    firstName: 'Mathieu',
    lastName: 'Tudisco',
    brand: 'Linkvalue',
    newAccount: true,
    password: Math.random().toString(36).substring(7),
  }, {
    to: 'foo@bar.fr',
    attachments: [{ content: 'bar', filename: 'foo.txt' }],
  })
}


// import nodemailer from 'nodemailer';

// export default async function mailer(emailData) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'centermillennium415@gmail.com',
//       pass: 'M20002000',
//     },
//   });

// const html=``

//   const mailOptions = {
//     from: emailData.email,
//     to: 'centermillennium415@gmail.com',
//     subject: emailData.subject,
//     html,
//     replyTo: emailData.email,
//   };
//   try {
//     const sendEmail = await transporter.sendMail(mailOptions);
//     return sendEmail;
//   } catch (err) {
//     return err;
//   }
// }
