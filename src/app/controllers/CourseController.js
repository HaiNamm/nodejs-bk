const Course = require('../modules/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
  //GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((courses) =>
        res.render('courses/show', {
          course: mongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new CourseController();
