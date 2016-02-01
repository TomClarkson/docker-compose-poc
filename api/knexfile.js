module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_PORT_3306_TCP_ADDR || '127.0.0.1',
      user: 'docker',
      password:'docker',
      database:'api_db'
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};



// module.exports = {

//   development: {
//     client: 'mysql',
//     connection: {
//       database: 'api_db',
//       user:     'root',
//       password: ''
//     },
//     migrations: {
//       directory: './db/migrations',
//       tableName: 'migrations'
//     },
//     seeds: {
//       directory: './db/seeds'
//     }
//   },

//   production: {
//     client: 'mysql',
//     connection: process.env.DATABASE_URL,
//     migrations: {
//       directory: './db/migrations',
//       tableName: 'migrations'
//     },
//     seeds: {
//       directory: './db/seeds'
//     }
//   }

// };