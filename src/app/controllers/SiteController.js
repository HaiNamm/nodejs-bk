const { mutipleMongooseToOject } = require('../../util/mongoose');
const Course = require('../modules/Course');

class SiteController {
  //GET /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: mutipleMongooseToOject(courses),
        });
      })
      .catch(next);
  }

  //GET /search
  search(req, res) {
    res.send('Search');
  }
}

module.exports = new SiteController();
