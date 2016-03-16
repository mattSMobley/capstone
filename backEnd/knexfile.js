module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tripStart'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
