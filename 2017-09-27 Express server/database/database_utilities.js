const pgp = require('pg-promise')();
const db = pgp('postgres://localhost:5432/contacts_rest');

const getAllContacts = () => {
  // returns a promise
  return db.any('SELECT * FROM contacts')
}

const closeConnection = () => {
  pgp.end()
}

module.exports = {
  getAllContacts,
}
