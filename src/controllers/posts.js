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
  const requestedItem = postsData.find(post => post.slug === postSlug);

  if (!requestedItem) return res.status(404).json({ error: `Slag '${postSlug}' non trovato` });

  res.json(requestedItem);
};


function addPost(req, res) {
  const newPost = req.body;

  const validParams = ['title', 'slug', 'content', 'image', 'tags']
  
  if (!isObjValid(newPost, validParams)) return res.status(422).json({ error: 'Controlla che tutti i campi siano validi', example: postExample });

  postsData.push(newPost);
  
  res.sendStatus(201);
};


function putPost(req, res) {
  const newPutPost = req.body;
  const newPutPostSlug = req.params.slug;
  

  const requestedItem = postsData.find(post => post.slug === newPutPostSlug);

  if (!requestedItem) return res.status(404).json({ error: `Slag '${postSlug}' non trovato` });


  const validParams = ['title', 'slug', 'content', 'image', 'tags']

  if (!isSomeObjValid(newPost, validParams)) return res.status(422).json({ error: 'Controlla che tutti i campi siano validi' });


  console.log(requestedItem);
  requestedItem = updateNewKeys(requestedItem, newPutPost);
  console.log(requestedItem);


  res.json('test');
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

function isSomeObjValid(obj, validParams) {
  return validParams.some(param => obj[param] && obj[param].length >= 3);
};

const postExample = {
  title: 'Torta Demo',
  slug: 'torta-demo',
  content: 'demo demo demo demo demo demo demo demo demo demo',
  image: 'torta_demo.jpeg',
  tags: [
    'Dolci',
    'Demo',
    'Torte'
  ]
};

function updateNewKeys(oldObj, newObj) {
  for (const [key, value] of Object.entries(newObj)) {
    if (oldObj.hasOwnProperty(key) && oldObj[key] !== value) oldObj[key] = value;
  };

  return oldObj;
};