const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pageUrl: {
      type: String,
      required: true,
    },
    codeUrl: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model('Posts', postsSchema);

module.exports = PostModel;
