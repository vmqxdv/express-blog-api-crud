const express = require('express');
const app = express();
const PORT = 1229;
const router = require('./routes/posts');
const noEndPoint = require('./middlewares/noEndPoint');


app.use(express.static('public'));

app.use(noEndPoint);
app.use(express.json());
app.use('/posts', router);

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});