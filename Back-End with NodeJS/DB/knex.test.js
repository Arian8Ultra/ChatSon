// check if table exists
const knex = require('./knex')
test('check if user table exists', () => {
    expect(knex.schema.hasTable('users')).toBeDefined();
});

test('check if tweet table exists', () => {
    expect(knex.schema.hasTable('tweets')).toBeDefined();
});