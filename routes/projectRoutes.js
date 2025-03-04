const express = require('express');
const router = express.Router();
const projects = require('../views/Project/project.json'); // Ensure correct path

router.get('/', (req, res) => {
  

    res.render('Project/project', {
        projects
    });
});

module.exports = router;
