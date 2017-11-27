var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String
  },
  saved: {
    type: Boolean,
    required: true,
    default: false
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }],
  articleDate: {
    type: Date,
    default: Date.Now
  }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
