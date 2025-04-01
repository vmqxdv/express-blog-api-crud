const express = require('express');
const app = express();
const PORT = 1229;
const router = require('./routes/posts');

const notFound = require('./middlewares/notFound');


app.use(express.static('public'));
app.use(express.json());


app.use('/posts', router);

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});