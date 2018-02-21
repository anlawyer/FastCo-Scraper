# FastCo Article Scraper

This is an application that scrapes articles from fastcompany.com and allows users to save and comment on them. 

When the site is opened, Cheerio scrapes the Fast Company website and displays the new articles on the landing page. Another scrape can be triggered at any time by clicking the "Get news from Fast Co" in the upper left-hand corner. Users can then save the articles they like, and access them on the "saved" page. They can comment on each saved article, delete comments and unsave articles as well.

All the articles and comments are stored in a MongoDB database using the Mongoose ORM. The frontend is built with Bulma, a CSS framework based on Flexbox, and Handlebars.js, an HTML templating engine. The backend is built with Node.js/Express.js, and features Axios for in-app routing and the scraping call.

Here's a demo of the app in use:

<a href="http://g.recordit.co/7fc22zZ6X6.gif"><img src="http://g.recordit.co/7fc22zZ6X6.gif"></a>
