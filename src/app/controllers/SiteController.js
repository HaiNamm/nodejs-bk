const Course = require('../Modules/Course');

class SiteController {
  //GET /
  index(req, res) {
    Course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: 'ERROR!!!' });
      }
    });
  }

  //GET /search
  search(req, res) {
    res.send('Search');
  }
}

module.exports = new SiteController();
