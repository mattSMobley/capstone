
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      email: 'jamesbond@007.com',
      password: '$2a$10$azCXYe736l8q9FsZapfL8OWQQ58jB93Fmx5AaOsi/aFQyFOJe8HDG'
    }),
    knex('users').insert({
      email: 'pantsguy@pants.com',
      password: '$2a$10$k8By/.YTE46ObRtZp.yepupYR0Nnqk2fTEmO16KDjq5W0HcvK5zVa'
    })
  );
};
