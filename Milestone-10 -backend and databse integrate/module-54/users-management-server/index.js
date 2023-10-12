// import express from 'express'
// import cors from 'cors'

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(express.json());
// app.use(cors());

// const port = process.env.PORT || 5000;

// const users = [
//   {
//     id: 1,
//     name: "Sabana",
//     email: "sabana@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Sabnur",
//     email: "sabnur@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Sabina",
//     email: "sabina@gmail.com",
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/users", (req, res) => {
//   res.send(users);
// });

// app.post("/users", (req, res) => {
//   console.log("post api hitting");
//   console.log(req.body);
//   const newUser = req.body;

//   newUser.id = users.length + 1; /*  */
//   users.push(newUser)
//   res.send(newUser)
// });

// app.listen(port, () => {
//   console.log(`Server is running on ${port}`);
// });

const express = require("express");
const app = express();

const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
  {
    id: 1,
    name: "Sabana",
    email: "sabana@gmail.com",
  },
  {
    id: 2,
    name: "Sabnur",
    email: "sabnur@gmail.com",
  },
  {
    id: 3,
    name: "Sabina",
    email: "sabina@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting 2");
  console.log(req.body);

  const newUsers = req.body;
  newUsers.id = users.length + 1;

  users.push(newUsers);
  res.send(newUsers);
});

app.listen(port, () => {
  console.log(`server is running ${5000}`);
});
