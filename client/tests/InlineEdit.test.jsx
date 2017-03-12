import React, {Component} from 'react';
import { expect, should } from 'chai';
import { mount, shallow, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import sinon from 'sinon'


import App  from '../source/components/App.jsx';
import Header from '../source/components/Header.jsx';
import ListItem from '../source/components/ListItem.jsx';




describe('Inline Edit', () =>{

    beforeEach(function() {
    app= mount(<App />);  
  })
    afterEach(()=> {
      app.unmount()
    })

  it('should alert users if input is invalid', () =>{
    
    
  })
})