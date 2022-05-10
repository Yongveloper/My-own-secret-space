import { Schema, connect } from 'mongoose';
import { config } from '../config';

export async function connectDB() {
  return connect(config.db.host);
}

export function useVirtualId(schema: Schema) {
  // _id -> id
  schema.virtual('id').get(function () {
    return this._id.toString();
  });
  schema.set('toJSON', { virtuals: true });
  schema.set('toObject', { virtuals: true });
}
