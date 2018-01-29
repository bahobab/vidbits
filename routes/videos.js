const Video = require('../models/video');
const router = require('express').Router();

router.post('/videos', async (req, res) => {
    const {title, description} = req.body;
    const newVideo = await Video.create({title, description});
    res.status(201).send(newVideo);
});


module.exports = router;