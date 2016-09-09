
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTableIfNotExists('channels', table => {
    table.increments('id');
    table.string('name');
    table.string('background');
  }),
  knex.schema.createTableIfNotExists('users', table => {
    table.string('name');
    table.string('id');
  }),
  knex.schema.createTableIfNotExists('videos', table => {
    table.increments('id');
    table.string('url');
    table.integer('channel_id');
  }),
  knex.schema.createTableIfNotExists('likes', table => {
    table.increments('id');
    table.integer('start_time');
    table.integer('stop_time');
    table.integer('video_id');
    table.integer('channel_id');
  }),
  knex.schema.createTableIfNotExists('likes_by_user', table => {
    table.string('user_id');
    table.integer('likes_id');
  }),
  knex.schema.createTableIfNotExists('likes_by_video', table => {
    table.string('user_id');
    table.integer('video_id');
    table.integer('likes_id');
  }),
  knex.schema.createTableIfNotExists('ignores', table => {
    table.string('user_id');
    table.integer('video_id');
  }),
  knex.schema.createTableIfNotExists('following', table => {
    table.string('user_id_follower');
    table.string('user_id_followee');
  }),
  knex.schema.createTableIfNotExists('comments', table => {
    table.increments('id');
    table.string('user_id');
    table.integer('likes_id');
    table.string('text');
  })
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTableIfExists('ignores'),
  knex.schema.dropTableIfExists('likes_by_user'),
  knex.schema.dropTableIfExists('likes'),
  knex.schema.dropTableIfExists('videos'),
  knex.schema.dropTableIfExists('users'),
  knex.schema.dropTableIfExists('channels'),
  knex.schema.dropTableIfExists('following'),
  knex.schema.dropTableIfExists('comments')
]);
