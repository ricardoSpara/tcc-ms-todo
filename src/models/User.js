const mongoose, {  Schema } = require('mongoose');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', UserSchema);
