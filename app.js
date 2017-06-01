// Import external dependencies
import express from 'express';

// Import local dependencies
import yoApi from './handlers/yoApi';

// Initialise our app
const bloksbergApp = express();

// Use yo as middleware/mount yo as a subapp
bloksbergApp.use('/yo', yoApi)

// Handle 404s
bloksbergApp.get('*', (req, res, next) => {
  return res.status(404).end('Look out, here be draguns');
})

// Normally you'd fetch the port from some config file or env var
const port = 3000;

// Listen for incoming requests
bloksbergApp.listen(port, () => {
  console.log('listening for requests on port', port);
})
