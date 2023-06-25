const express = require("express");
const axios = require("axios");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is starting on PORT ${PORT}`);
});

const fetching = async (url) => {
  const { data } = await axios.get(url, {});

  return data;
};

app.get("/volumes", (req, res) => {
  const requestToBooksApi =
    "https://www.googleapis.com/books/v1/volumes?" +
    decodeURI(req.url).split("?")[1];
  fetching(requestToBooksApi).then((responceFromBooksApi) => {
    res.json({
      responceFromBooksApi,
    });
  });
});
