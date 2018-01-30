const Video = require('../models/video');
const router = require('express').Router();

router.get('/', async (req, res) => {
    await res.render('index');
});

router.get('/videos/create', async (req, res) => {
    res.render('videos/create');
});

router.post('/videos', async (req, res) => {
    const {title, description} = req.body;
    const newVideo = await Video.create({title, description});
    res.status(201).send(`<h1>${{title}}</h1><p>${{description}}</p>newVideo`);
});


module.exports = router;