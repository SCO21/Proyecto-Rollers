const knex = require('knex');
const knexfile = require('../knexfile');

const env =  process.env.NODE_ENV || 'development';
const options = knexfile[env];

module.exports = knex(options);