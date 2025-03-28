const express = require('express');
const router = express.Router();
const postsData = require('../utils/posts');


router.get('/', (_, res) => {
  res.json(postsData);
});

router.get('/:slug', (req, res) => {
  const postSlug = req.params.slug;
  const requestedItem = postsData.find(element => element.slug === postSlug);

  if (!requestedItem) return res.status(404).json({ error: `Slag '${postSlug}' non trovato` });

  res.json(requestedItem);
});


router.post('/', function (req, res) {
  res.send('Aggiunto nuovo dolce: ' + req.params.slug);
});

router.put('/:slug', function (req, res) {
  res.send('[PUT] Modificato dolce: ' + req.params.slug);
});

router.patch('/:slug', function (req, res) {
  res.send('[PATCH] Modificato il dolce: ' + req.params.slug);
});

router.delete('/:slug', function (req, res) {
  res.send('Eliminato il dolce: ' + req.params.slug);
});


module.exports = router;