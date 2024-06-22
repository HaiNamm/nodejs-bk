const Course = require('../modules/Course');

class SiteController {
  //GET /
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  //GET /search
  search(req, res) {
    res.send('Search');
  }
}

module.exports = new SiteController();
