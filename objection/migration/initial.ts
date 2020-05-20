export const up = (knex: any) => {
  return knex.schema.createTable('persons', (table: any) => {
    table.increments('id').primary();
    table.string('firstName');
    table.string('lastName');
  });
};

export const down = (knex: any) => {
  return knex.schema.dropTableIfExists('persons');
};
