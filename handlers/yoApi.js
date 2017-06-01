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

export default yoApi;
