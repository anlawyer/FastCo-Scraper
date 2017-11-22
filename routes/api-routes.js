
var axios = require('axios');
var cheerio = require('cheerio');
var db = require('../models');

module.exports = function (app) {
  app.get('/', function (req, res) {
    console.log('app connects');
    db.Article
    .find({})
    .then(function (dbArticle) {
      console.log(dbArticle);
      res.render('index', dbArticle);
    })
    .catch(function (error) {
      console.log(error);
    });
  });

  app.get('/scrape', function (req, res) {
    console.log('entered scrape route');

    axios.get('https://www.fastcompany.com/').then(function (response) {
      var $ = cheerio.load(response.data);

      $('.all-feed a').each(function (i, element) {
        var result = {};

        result.title = $(this).attr('title');
        result.link = $(this).attr('href');
        // result.subhead = $(this).children('h3').text();
        var first = result.link.slice(0, 6);
        if (first !== 'https:') {
          result.link = 'https://www.fastcompany.com' + result.link;
        }
        console.log(result);
        console.log(result.title);
        if (result.title !== undefined) {
          console.log(db.collection.find({title: result.title}).limit(1));
        }

        if (result.title !== undefined && result.title !== 'See More all on page 1') {
          console.log('in the loop.');
          // db.Article
          // .create(result)
          // .then(function (dbArticle) {
          //   // If we were able to successfully scrape and save an Article, send a message to the client
          //   console.log('inserted into db.');
          //   // res.json('Scrape Complete');
          // })
          // .catch(function (err) {
          //   res.json(err);
          // });
        }
      });
    });
  });
};
