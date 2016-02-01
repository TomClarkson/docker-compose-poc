exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({name: 'Tom', email: 'tom@designsight.com', password: 'pass'})
  );
};
