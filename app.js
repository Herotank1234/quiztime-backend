const express = require('express');
const { default: axios } = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/moreQuestions', async (req, res) => {
  const { number } = req.query;
  axios.get(`https://opentdb.com/api.php?amount=${number}&type=multiple`)
    .then((resp) => {
      const results = resp.data.results
      res.status(200).send(results)
    });
})

app.listen(process.env.PORT || port, () => {
  console.log(`Listening at port: ${port}`);
})