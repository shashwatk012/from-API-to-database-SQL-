const express = require("express");
const router = new express.Router();
const connection = require("./connection");
const axios = require("axios");

router.get("/", (req, res) => {
  const options = {
    method: "GET",
    url: "https://catfact.ninja/fact",
    headers: {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const data = [{ Fact: response.data.fact, Length: response.data.length }];
      connection.query(
        "INSERT INTO `abcd` SET?",
        data,
        function (err, results) {
          console.log(results);
        }
      );
      res.render("index");
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/find", (req, res) => {
  connection.query("SELECT * FROM `abcd`", function (err, results) {
    res.send(results);
  });
});

module.exports = router;
