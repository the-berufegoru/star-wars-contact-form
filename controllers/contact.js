/**
 * @author - Moobi Kabelo
 */
import dotenv from "dotenv";
import { mailGenerator, transporter } from "../lib/mail.js";

dotenv.config();

/**
 * It checks if the email, fullNames, message and mobile fields are empty. If they are empty, it
 * returns a 400 status code with a message. If they are not empty, it creates the email body and sends
 * the email
 * @param req - The request object.
 * @param res - The response object.
 * @returns The contact function is being returned.
 */
export const contact = (req, res) => {
  const { email, fullNames, message, mobile } = req.body;

  /* Checking if the email, fullNames, message and mobile fields are empty. If they are empty, it
    returns a 400 status code with a message. */
  if (!email || !fullNames || !message || !mobile) {
    res.render("index", {
      title: "Contact Form | ExpressJs | NodeJs",
      message: "Something went wrong, please try again.",
      status: 500,
    });
  }

  /* Creating the email body. */
  const emailBody = mailGenerator.generate({
    body: {
      title: "Star Wars Contact Form",
      intro: "You have a new message from Star Wars",
      table: {
        data: [
          {
            item: "Full Names",
            description: fullNames,
          },
          {
            item: "Email",
            description: email,
          },
          {
            item: "Mobile",
            description: mobile,
          },
          {
            item: "Message",
            description: message,
          },
        ],
        columns: {
          customWidth: {
            item: "20%",
            description: "60%",
          },
        },
      },
      action: {
        instructions: "View Message",
        button: {
          color: "#1abc9c",
          text: "View Message",
          link: "https://github.com/elregalo/star-wars-contact-form",
        },
      },
      outro: "Thank you for using Star Wars",
      signature: false,
    },
  });

  /* Sending the email. */
  transporter.sendMail(
    {
      from: process.env.MAILER_USERNAME,
      to: email,
      subject: "New Message from Star Wars",
      html: emailBody,
    },
    (err, info) => {
      if (err) {
        console.log(err);
        res.render("index", {
          title: "Contact Form | ExpressJs | NodeJs",
          message: "Something went wrong, please try again.",
          status: 500,
        });
      }
      console.log(info);
      res.render("index", {
        title: "Contact Form | ExpressJs | NodeJs",
        message: "Email sent successfully.",
        status: 200,
      });
    }
  );
};

