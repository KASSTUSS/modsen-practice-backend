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
const startReq = "https://www.googleapis.com/books/v1/volumes";

app.get("/books", (req, res) => {
  const requestToBooksApi = startReq + decodeURI(req.url).split("/books")[1];
  fetching(requestToBooksApi).then((responceFromBooksApi) => {
    res.json({
      responceFromBooksApi,
    });
  });
});

app.get("/book", (req, res) => {
  const requestToBooksApi = startReq + "/" + decodeURI(req.url).split("/book?")[1];
  fetching(requestToBooksApi).then((responceFromBooksApi) => {
    res.json({
      responceFromBooksApi,
    });
  });
});
