import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  events: Schema.Types.ObjectId[];
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});

export default mongoose.model<IUser>('User', UserSchema);
