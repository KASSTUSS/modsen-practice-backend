const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

const fetching = async (url) => {
  const { data } = await axios.get(url, {});

  return data;
};

app.get("/", (req, res) => {
  const requestToBooksApi =
    "https://www.googleapis.com/books/v1/volumes?" +
    decodeURI(req.url).split("?")[1];
  fetching(requestToBooksApi).then((responceFromBooksApi) => {
    res.json({
      responceFromBooksApi,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is starting on PORT ${PORT}`);
});
