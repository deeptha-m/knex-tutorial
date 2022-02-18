module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: [username],
            password: [yourpassword],
            database: [yourdatabase],
            charset: 'utf8',
        },
        migrations: {
            tableName: 'knex_migrations' 
        },
        seeds: {
            directory: './seeds' 
        }
    }

};

// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host : 'localhost',
//     port : 3306,
//     user : 'sqluser',
//     password : '',
//     database : 'knex-tutorial'
//   },
//   pool: { min: 0, max: 7 }
// });
//  //check that connection works
//  knex.raw("SELECT VERSION()").then(()=>{
//    console.log('Connection to db successful');
//  });

// module.exports =knex;
