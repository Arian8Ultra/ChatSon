const knex = require('knex')
    ({
        client: 'sqlite3', // or 'better-sqlite3'
        connection: {
            filename: "database.sqlite3"
        }
    });

// create user table with id as primary key and username and password as required and array of tweets and followers
// create tweet table with id as primary key and username as required and content as required and array of likes and number of likes and date
// check if table exists
knex.schema.hasTable('users').then((exists) => {
    if (!exists) {
        return (
            knex.schema.createTable('users', function (table) {
                table.increments('id').notNullable();
                table.string('username').notNullable();
                table.string('email').notNullable();
                table.string('password').notNullable();
                table.string('token');
                table.string('followers');
                table.string('following');
                table.string('tweets');
            }).then(() => {
                console.log('Table created');
            }),
            knex.schema.createTable('tweets', function (table) {
                table.increments('id').notNullable();
                table.string('username').notNullable();
                table.string('content').notNullable();
                table.string('likes') ;
                table.integer('likesCount');
                table.string('date');

            }).then(() => {
                console.log('Table created');
            })

        )
    }
});





module.exports = knex;