import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mailer from "./mailer";
import compression from "compression";
import bodyParser from "body-parser";

dotenv.config();
function startAPI() {
  const app = express()
    .use(cors())
    .use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
    .use(bodyParser.json({ type: "*/*", limit: "50mb" }))
    .use(compression());
  app.post("/email", async (req, res) => {
    const { fullName, email, number, message, subject } = req.body;
    const html = `
      <div>
        <p> New email from ${fullName}</p>\n
        <p> number: ${number}</p>\n
        <p> email: ${email}</p>\n
        <p> message: ${message}</p>
      </div>
    `;
    const emailData = {
      email,
      subject,
      html,
      replyTo: email
    };
    try {
      const sendEmail = await mailer(emailData);
      return res.status(200).send({
        data: sendEmail,
      });
    } catch (err) {
      return res.status(400).send({
        err,
        error: err.message,
        data: process.env.APP_EMAIL_PASSWORD
      });
    }
  });
  const server = app.listen(3001 || config.port, () =>
    console.log(`Listening on http://localhost:${server.address().port}`)
  );
  return app;
}
startAPI();
