const postsData = require('../data/posts');

function getPosts(req, res) {
  let result = postsData;

  if (req.query.tags) {
    if (typeof req.query.tags === 'string') req.query.tags = [req.query.tags];
    result = postsData.filter(post => req.query.tags.every(tag => post.tags.includes(tag)));

    if (!result.length) return res.sendStatus(404);
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
  const newPost = req.body;

  const validParams = ['title', 'slug', 'content', 'image', 'tags']
  console.log(isObjValid(newPost, validParams));

  postsData.push(newPost);
  
  res.status(201).json();
};


function putPost(req, res) {
  res.send('[PUT] Modificato dolce: ' + req.params.slug);
};


function patchPost (req, res) {
  res.send('[PATCH] Modificato il dolce: ' + req.params.slug);
};


function deletePost(req, res) {
  const postSlug = req.params.slug;
  const requestedItemIndex = postsData.findIndex(element => element.slug === postSlug);
  
  if (requestedItemIndex < 0) return res.status(404).json({ error: `Slag '${postSlug}' non trovato` });
  
  postsData.splice(requestedItemIndex, 1);

  console.log(postsData);

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



function isObjValid(obj, validParams) {
  return validParams.every(param => obj[param] && obj[param].length >= 3);
};