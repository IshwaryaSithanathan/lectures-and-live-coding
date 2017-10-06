const pg_options = {}
const pgp = require('pg-promise')(pg_options);
const monitor = require('pg-monitor')

// pg-monitor adds db query logging to the console
monitor.attach(pg_options)

const connection_options = {
  host: 'localhost',
  port: 5432,
  database: 'contactsrestapi'
}
const db = pgp(connection_options)


const getAllContacts = () => {
  // returns a promise
  return db.any('SELECT * FROM contacts')
}

// get individual contact
const getContact = (id) => {
  return db.one(`
    SELECT *
    FROM contacts
    WHERE contact_id=$1
    LIMIT 1
  `,
  [id])
}

// create contact
const createContact = (first_name, last_name, phone_num) => {
  return db.one(`
    INSERT INTO
      contacts (first_name, last_name, phone_num)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
  `,
  [first_name, last_name, phone_num])
}

// delete contact
const deleteContact = (id) => {
  return db.one(`
    DELETE FROM
      contacts
    WHERE
      contact_id=$1
    RETURNING
      *
  `,
  [id])
}

// update contact
const updateContact = (id, first_name, last_name, phone_num) => {
  // optional: do some logic here to figure out WHICH fields to update
  return db.one(`
    UPDATE
      contacts
    SET
      (first_name, last_name, phone_num)=($2, $3, $4)
    WHERE
      contact_id=$1
    RETURNING
      *
  `,
  [id, first_name, last_name, phone_num])
}

const closeConnection = () => {
  pgp.end()
}

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
  closeConnection
}
