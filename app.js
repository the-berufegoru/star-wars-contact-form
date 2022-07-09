/**
 * @author: Moobi Kabelo <@elregalo>
 */
import bodyParser from "body-parser";
import { contactRouter } from "./routes/routes.js";
import dotenv from "dotenv";
import express from "express";
import ip from "ip";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(express.static("views/public/assets"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(contactRouter);

app.listen(PORT, () => {
  console.log(`Web Server Started: http://${ip.address()}:${PORT}`);
});
