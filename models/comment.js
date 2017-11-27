var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  body: String,
  created: {
    type: Date,
    default: Date.now
  }
});

var Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;
