import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  date: Date;
  description: string;
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true }
});

export default mongoose.model<IEvent>('Event', EventSchema);
