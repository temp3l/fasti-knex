import { Model } from 'objection';
import knex from '../knex';
Model.knex(knex);

export default class CustomerModel extends Model {
  static get tableName() {
    return 'customers';
  }
}
