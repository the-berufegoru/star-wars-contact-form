/**
 * @author: Moobi Kabelo <@elregalo>
 */
import dotenv from "dotenv";
import Mailgen from "mailgen";
import nodemailer from "nodemailer";

dotenv.config();

/* Creating a nodemailer transport and returning the transport */
export const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  secure: true,
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD,
  },
});

/* Creating a new mailgen object with the theme and product details */
export const mailGenerator = new Mailgen({
  theme: "default", //salted
  product: {
    name: "Star Wars",
    link: "https://github.com/elregalo/star-wars-contact-form",
    logo: "https://avatars.githubusercontent.com/u/80452137?s=48&v=4",
    copyright: "© 2022 Star Wars. All Rights Reserved.",
  },
});
