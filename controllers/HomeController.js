
const projects = require('../views/Project/project.json');

exports.getHome =async (req, res) => {
    try {
      
        res.render('Home/Index', {projects});
    } catch (error) {
        res.status(500).json(error);
    }
}
