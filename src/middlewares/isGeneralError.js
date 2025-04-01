function isGeneralError(err, req, res) {
  res.status(500).json(err.message);
};




module.exports = isGeneralError;