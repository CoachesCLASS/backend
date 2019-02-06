const dbQueries = require('./dbQueries')

let example = {}

example.getAllForSubproperty = async (req, res, next) => {
  const subpropertyId = req.params['subpropertyId']

  if (!subpropertyId) {
    res.status(400).json({ "Error": "Invalid input, 'subpropertyId' is required" })
    return
  }

  try {
    var result = await dbQueries.getPropertyBySubproperty(subpropertyId)
  } catch (err) {
    res.status(400).json(err)
  }
  res.json({ array: result })
}

example.getAll = async (req, res, next) => {
  try {
    var result = await dbQueries.getProperty()
  } catch (err) {
    res.status(400).json(err)
  }
  res.json({ array: result })
}

module.exports = example
