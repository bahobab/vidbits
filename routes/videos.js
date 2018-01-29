const router = require('express').Router();

router.post('/videos', async (req, res) => {
   
    await res.status(201).send();
});


module.exports = router;