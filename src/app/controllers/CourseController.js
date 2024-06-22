const Course = require('../modules/Course');
const { mutipleMongooseToOject } = require('../../util/mongoose');

class CourseController {
  //GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        res.json(course);
      })
      .catch(next);
  }
}

module.exports = new CourseController();
