const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const inputData = req.body; 

    const tfResponse = await axios.post('http://localhost:5000/predict', inputData);
    res.json(tfResponse.data);
  } catch (err) {
    res.status(500).json({ error: 'Model server error' });
  }
});

module.exports = router;