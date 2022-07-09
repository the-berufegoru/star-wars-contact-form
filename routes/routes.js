/**
 * @author - Moobi Kabelo
 */
import { contact } from "../controllers/contact.js";
import express from "express";

const router = express.Router();

/* This is a route that renders the index page. */
router.get("/", (req, res) => {
  res.render("index", {
    title: "Contact Form | ExpressJs | NodeJs",
    message: "Contact Us",
    status: 200,
  });
});

/* This is a route that handles the contact form submission. */
router.post("/contact", contact);

export { router as contactRouter };
