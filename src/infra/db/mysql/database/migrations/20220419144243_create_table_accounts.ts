import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable('accounts', (table) => {
    table.increments('id').unique().unsigned()
    table.specificType('name', 'varchar(80)').notNullable()
    table.specificType('email', 'varchar(80)').notNullable()
    table.specificType('password', 'varchar(100)').notNullable()
    table.specificType('role_id', 'integer(3)').notNullable().unsigned()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table
      .foreign('role_id')
      .references('id')
      .inTable('roles')
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable('accounts')
}
