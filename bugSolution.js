const express = require('express');
const app = express();
const users = [{
  id: 1,
  name: 'John Doe'
}, {
  id: 2,
  name: 'Jane Smith'
}];
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId) || userId < 1 || userId > users.length) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === userId);
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));