import { LogErrorRepository } from '../../../../../data/protocols/db/log-error-repository'
import knex from '../../helpers/connect'

export class LogMysqlRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    await knex('erros')
      .insert({
        stack
      })
  }
}
