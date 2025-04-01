const express = require('express');
const app = express();
const PORT = 1229;
const router = require('./routes/posts');

const notFound = require('./middlewares/notFound');
const isGeneralError = require('./middlewares/isGeneralError');


app.use(express.static('public'));
app.use(express.json());


app.use('/posts', router);

app.get('/error', (req, res, next) => {
  const err = new Error("OPS!");
  next(err); 
});


app.use(notFound);
app.use(isGeneralError);



app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});