// Import dependencies
import express from 'express'

// Instantiate an express app
const yoApi = express()

// Define some routes and handlers
yoApi.get('/', (req, res, next) => {
  return res.send('feel the flow')
})

yoApi.get('/yo', (req, res, next) => {
  return res.send('i herd u like apis')
})

yoApi.get('*', (req, res, next) => {
  return res.status(404).end('Look out, here be draguns');
})

// Normally you'd fetch the port from some config file or env var
const port = 3000;

// Listen for incoming requests
yoApi.listen(port, () => {
  console.log('listening for requests on port', port);
})
