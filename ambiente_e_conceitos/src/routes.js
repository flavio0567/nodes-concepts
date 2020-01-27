const { Routes } = require('express');
const users = require('./users');
const routes = Routes();

function checkUsersExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'User not found!'});
  }

  return next();
}

function checkIndex(req, res, next) {
  const user = users[req.params.index]
  
  if (!user) {
      return res.status(400).json({ error: 'Index out of range!'})
  }
 
  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', checkIndex, (req, res) => {
  return res.json(req.user);
});

server.post('/users', checkUsersExists, (req, res) => {
  const { name } = req.body;

  users.push(name);
  
  return res.json(users)
});

server.put('/users/:index', checkUsersExists, checkIndex, (req,res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);

})

server.delete('/users/:index', checkIndex,(req, res) => {
  const { index } = req.params;
  users.splice(index, 1);

  return res.send();

}) 

module.exports routes;