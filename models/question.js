const mongoose = require('mongoose');

const questionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: 512,
    },
    likes: [mongoose.Schema.Types.ObjectId],
    dislikes: [mongoose.Schema.Types.ObjectId],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

questionSchema.virtual('answers', {
  ref: 'Answer',
  localField: '_id',
  foreignField: 'parentQuestion',
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
