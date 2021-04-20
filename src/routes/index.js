import express from 'express';
import sampleRoutes from './sample-routes.js';

const router = express.Router();

export default () => {
  router.use('/', sampleRoutes());
  return router;
};
