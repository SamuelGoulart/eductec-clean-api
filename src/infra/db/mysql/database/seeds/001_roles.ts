import { Knex } from 'knex'

export async function seed (knex: Knex): Promise<void> {
  await knex('roles').del()
  await knex('roles').insert([
    { name: 'ROLE_ADMIN' },
    { name: 'ROLE_USER' },
    { name: 'ROLE_TEACHER' }
  ])
}
