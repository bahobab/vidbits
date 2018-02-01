const Video = require('../models/video');
const router = require('express').Router();

// router.get('/', (req, res) => {
//     res.redirect('/videos');
// });

router.get('/', async (req, res) => {
    // res.redirect('/videos');
    const videos = await Video.find({});
    // console.log('from routes >>>>: ', videos)
    res.render('videos/index', {videos});
});

router.get('/videos/create', async (req, res) => {
    res.render('videos/create');
});

router.post('/videos', async (req, res) => {
    const {title, description} = req.body;
    const newVideo = await Video.create({title, description});
    // res.status(201).send(`<h1>${{title}}</h1><p>${{description}}</p>newVideo`);
    res.status(201).render('videos/show', {video: newVideo});
});


module.exports = router;