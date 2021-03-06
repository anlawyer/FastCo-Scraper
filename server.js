var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('public'));

mongoose.Promise = Promise;
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/WebScraper';
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/api-routes.js')(app);

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
