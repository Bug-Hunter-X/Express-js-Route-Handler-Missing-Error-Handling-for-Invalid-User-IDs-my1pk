const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or is out of bounds
  const user = users[userId];
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});