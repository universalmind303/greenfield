const assert = require('assert');
const server = require('./server');

describe('Static File Server', () => {
  it( 'should listen on port 8080 by default', () => { /* no-op */ });
  it( 'should listen on `process.env.PORT` if specified', () => { /* no-op */ });
  it( 'should serve files from the public directory', () => { /* no-op */ });
  it( 'should respond with 404 for non-existant files', () => { /* no-op */ });
});
