import * as dotenv from 'dotenv';
import express from "express";
import mailer from "./mailer";
import compression from "compression";
import bodyParser from "body-parser";

dotenv.config();
function startAPI() {
  const app = express()
    .use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
    .use(bodyParser.json({ type: "*/*", limit: "50mb" }))
    .use(compression());
  app.post("/", async (req, res) => {
    const { fullName, email, number, message, subject } = req.body;
    const html = `
      <div>
        <p> New email from ${fullName}</p>\n
        <p> number: ${number}</p>\n
        <p> message: ${email}</p>\n
        <p> message: ${message}</p>
      </div>
    `;
    const emailData = {
      email,
      subject,
      html,
      replyTo: email
    };
    const sendEmail = await mailer(emailData);
    return res.status(200).send({
      data: sendEmail
    });
  });
  const server = app.listen(3001 || config.port, () =>
    console.log(`Listening on http://localhost:${server.address().port}`)
  );
  console.log(process.env.APP_EMAIL_PASSWORD)
  return app;
}
startAPI();
