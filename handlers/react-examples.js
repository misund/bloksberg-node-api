// Import dependencies
import express from 'express'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';

// Instantiate an express app
const reactApp = express()

const Heading = () => <h1>OMG it's React</h1>;
const Text = () => <p>Kinda looks like HTML, right?</p>;

const Document = (
  <section>
    <Heading />
    <Text />
  </section>
);

// Define some routes and handlers
reactApp.get('/', (req, res, next) => {
  return res.send(ReactDOMServer.renderToString(Document));
})



// Now let's go for some styles!
const StyledSection = styled.section`
  background-color: papayawhip;
  color: hotpink;

  p {
    color: #333;
  }
`;

const DocumentWithStyledComponents = (
  <StyledSection>
    <Heading />
    <Text />
    <p>And guess what, we can compose documents like this as well.</p>
  </StyledSection>
);


reactApp.get('/styled-component', (req, res, next) => {
  return res.send(ReactDOMServer.renderToString(DocumentWithStyledComponents));
})

export default reactApp;
