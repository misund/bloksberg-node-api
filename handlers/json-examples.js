// Import dependencies
import express from 'express'

// Instantiate an express app
const yoApi = express()

// Define some routes and handlers
yoApi.get('/', (req, res, next) => {
  const simpleObject = {
    foo: 'bar',
    baz: 'bam',
    foobar: {
      isCool: true,
    },
  }

  return res.json(simpleObject);
})

yoApi.get('/:urlParam', (req, res, next) => {
  const fancyPantsObject = {
    foo: 'bar',
    id: req.params.urlParam,
  }

  return res.json(fancyPantsObject);
})

export default yoApi;
