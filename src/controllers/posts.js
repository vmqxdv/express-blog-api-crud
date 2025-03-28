const postsData = require('../data/posts');

function getPosts(req, res) {
  let result = postsData;

  if (req.query.tags) {
    if (typeof req.query.tags === 'string') req.query.tags = [req.query.tags];
    result = postsData.filter(post => req.query.tags.every(tag => post.tags.includes(tag)));
  };

  res.json(result);
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
  const postSlug = req.params.slug;
  const requestedItem = postsData.find(element => element.slug === postSlug);
  
  if (!requestedItem) return res.status(404).json({ error: `Slag '${postSlug}' non trovato` });
  
  const result = postsData.filter(element => element.slug != postSlug);

  console.log(result);

  res.status(204).json();
};




module.exports = {
  getPosts,
  getPost,
  addPost,
  putPost,
  patchPost,
  deletePost,
};