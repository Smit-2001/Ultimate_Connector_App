const express = require('express');
const { queryAI } = require('../utils/apiService');

const router = express.Router();

// Route to handle AI conversation requests
router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await queryAI(message);
    res.status(200).json({ response });
  } catch (error) {
    console.error('Backend Error:', error.message);
    res.status(500).json({ error: 'AI service failed. Please try again.' });
  }
});

module.exports = router;
