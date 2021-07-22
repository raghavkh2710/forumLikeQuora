const mongoose = require('mongoose');

const answerSchema = mongoose.Schema(
  {
    details: {
      type: String,
      required: true,
      trim: true,
    },
    likes: [mongoose.Schema.Types.ObjectId],
    dislikes: [mongoose.Schema.Types.ObjectId],
    comments: [
      {
        commentUser: mongoose.Schema.Types.ObjectId,
        commentDetails: {
          type: String,
          trim: true,
          maxLength: 512,
        },
      },
    ],
    parentQuestion: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Question',
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
