import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';

import App  from '../source/components/App.jsx';
import Header from '../source/components/App.jsx';
describe('App', function() {
  var app;

  beforeEach(function() {
    app = render(<App />)
  
  })

  it('should be a stateful class component', function() {
    // console.log(App)
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });

  it('should have a Header component', ()=> {
      expect(app.find('.header').length).to.equal(1)
  })
  it('should have a ListItem component', ()=> {
    expect(app.find('.listItem').length).to.be.above(0)
  })
})


