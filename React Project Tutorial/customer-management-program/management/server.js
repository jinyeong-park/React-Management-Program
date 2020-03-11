const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "Jinyeong Park",
      birthday: "961222",
      gender: "Female",
      job: "Web Developer"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/3",
      name: "Jenny",
      birthday: "961223",
      gender: "Female",
      job: "Software Engineer"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/2",
      name: "Thomas",
      birthday: "161223",
      gender: "Male",
      job: "CFO"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
