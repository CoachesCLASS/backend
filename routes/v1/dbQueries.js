const mysqlDb = require('../../mysql')

let dbQueries = {}

dbQueries.getPropertyBySubproperty = async (subpropertyId) => {
  return await mysqlDb.query(`
    SELECT property_id, property_name 
    FROM table_name
    WHERE subproperty_id = ?
  `, [subpropertyId])
}

module.exports = dbQueries
