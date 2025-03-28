const postsData = require('../data/posts');

function getPosts(req, res) {
  res.json(postsData);
};


function getPost(req, res) {
  const postSlug = req.params.slug;
  const requestedItem = postsData.find(element => element.slug === postSlug);

  if (!requestedItem) return res.status(404).json({ error: `Slag '${postSlug}' non trovato` });

  res.json(requestedItem);
};


function addPost(req, res) {
  res.send('Aggiunto nuovo dolce: ' + req.params.slug);
};


function putPost(req, res) {
  res.send('[PUT] Modificato dolce: ' + req.params.slug);
};


function patchPost (req, res) {
  res.send('[PATCH] Modificato il dolce: ' + req.params.slug);
};


function deletePost(req, res) {
  res.send('Eliminato il dolce: ' + req.params.slug);
};



module.exports = {
  getPosts,
  getPost,
  addPost,
  putPost,
  patchPost,
  deletePost,
};