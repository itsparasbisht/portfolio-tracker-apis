const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const dbConnect = require("./db/dbConnect");
const Guest = require("./model/guest");

dbConnect();
app.use(express.json());

// app routes ---------------
app.get("/", (_, res) => {
  res.json({
    message: "base route of portfolio tracker",
  });
});

app.get("/hello", async (req, res) => {
  try {
    const guest = new Guest({ address: req.ip });
    const guestInfo = await guest.save();
    return res.status(200).json(guestInfo);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.get("/guests", async (req, res) => {
  try {
    const guests = await Guest.find();
    return res.status(200).json(guests);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.listen(5000, () => {
  console.log(`Listening on port ${PORT}...`);
});
