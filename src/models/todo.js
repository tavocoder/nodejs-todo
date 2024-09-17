import { Schema, model } from 'mongoose';

const schema = new Schema(
    {
        completed: { type: Boolean, default: false },
        body: { type: String, require: true }
    }
)

export const TodoModel = model('todo', schema);
