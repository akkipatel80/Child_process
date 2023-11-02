var express = require('express');
var router = express.Router();
const { fork } = require('child_process');

/* GET users listing. */
router.get('/encodePass', function(req, res, next) {
  const child = fork('index11.js');
  child.send({ password: 'Abcd@1234' });
  child.on('message', (data) => {
    console.log('Message from child:', data);
    if (data.error) {
      console.log(data.error);
      return res.status(400).json({ message: 'respond with a resource', data: data.error});
    }
    res.status(200).json({ message: 'respond with a resource', data: data});
  });
});

module.exports = router;
