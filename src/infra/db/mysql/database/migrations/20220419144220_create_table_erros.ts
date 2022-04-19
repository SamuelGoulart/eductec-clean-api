import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable('erros', (table) => {
    table.increments('id').unique().unsigned()
    table.specificType('stack', 'varchar(255)').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable('erros')
}
