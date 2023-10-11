const express = require("express");
const phones = require("./phones.json");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world this is phone server is coming soon");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("I need data for id :", id);
  //   const phon = phones.find((phone) => phone.id === id) || {};
  const phone = phones.find((phone) => phone.id === id) || {};

  res.send(phone);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
