const express = require('express');
const sampleRoutes = require('./sample-routes');

const router = express.Router();

module.exports = () => {
  router.use('/', sampleRoutes());
  return router;
};
