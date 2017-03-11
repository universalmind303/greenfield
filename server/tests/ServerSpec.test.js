const assert = require('assert');
const app = require("../server.js")
const expect = require('chai').expect;
const request = require('request');
const express = require('express');
const fs = require('fs');
const Promise = require('bluebird')
Promise.promisifyAll(fs)
baseUrl = 'http://127.0.0.1:8080'
describe('Static File Server', () => {




  it( 'should listen on port 8080 by default', (done) => {
   request(baseUrl, function(err, resp, body) {
      assert(resp.statusCode === 200);
      done();
    });
  });
  it( 'should listen on `process.env.PORT` if specified', (done) => {
    app.listen(4444, ()=> {
      request('http://127.0.0.1:' + 4444, function(err, resp, body) {
        assert(resp.statusCode === 200);
      });
      request('http://127.0.0.1:' + 4004, function(err, resp, body) {
        assert(err)
        done();
      });
    })
  });
  it( 'should serve files from the `public` directory by default', (done) => {
    request('http://127.0.0.1:' + 8080, function(err, resp, body) {
      fs.readFileAsync('./client/public/index.html', 'utf8').then(file=>{
        expect(body).to.deep.equal(file)        
      })
      done();
    });
  });
  xit( 'should serve files from the `process.env.PUBLIC` if specified', (done) => {
   // request(`${baseUrl}/server/tests/fakePublic/index.html`, function(err, resp, body) {
   //    fs.readFileAsync('/fakePublic/index.html', 'utf8').then(file=>{
   //    expect(body).to.deep.equal(file) 
   //    });
   //    done();
   //  });
  });
  xit( 'should respond with 404 for non-existant files', (done) => { /* no-op */ });
});
