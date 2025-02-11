const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if user is not valid or db error
  db.createUser(user).then(() => {
    res.status(201).send();
  });
});

//Other express code