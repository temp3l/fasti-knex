import { Model } from 'objection';
import knex from '../knex';
Model.knex(knex);

class Minimal extends Model {
  static get tableName() {
    return 'someTableName';
  }
}

export default Minimal;
