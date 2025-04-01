function notFound(req, res, next) {
  return res.status(404).json({ error: 'Endpoint non trovato' });
};



module.exports = notFound;