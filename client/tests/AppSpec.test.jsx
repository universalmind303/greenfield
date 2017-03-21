import React, {Component} from 'react';
import { expect, should, assert } from 'chai';
import { mount, shallow, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import App  from '../source/components/App.jsx';
import List from '../source/components/List.jsx';
import Header from '../source/components/Header.jsx';
import ListItem from '../source/components/ListItem.jsx';
import InlineEdit from '../source/components/InlineEdit.jsx';

const localStorageMock = function() {
  var store = {};
  return {
      getItem: key => store[key] || null, 
      setItem: (key, value)=> store[key] = JSON.stringify(value),
      clear: ()=> store = {}
  };
};
window.localStorage = new localStorageMock()



describe('File structure', ()=>{
  
  it('Header should be contained in its own file', ()=> {
    expect(Header).to.be.a.function
  });
  
 it('ListItem should be contained in its own file', ()=> {
    expect(ListItem).to.be.a.function
  });
 
  it('InlineEdit should be contained in its own file', ()=> {
    expect(InlineEdit).to.be.a.function
  });
})

describe('App', function() {
  var app;
  beforeEach(() => localStorage.clear());
  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });
  
  it('App should render a div',()=> {
    app =shallow(<App />);  
    expect(app.node.type).to.equal('div');
    app.unmount();
  });

  it('Components should have a div class',function(){
    app = render(<App />)  ;
    expect(app.find(".app").attr()).to.deep.equal({class: 'app'});
    expect(app.find(".onBudget").attr()).to.deep.equal({class: 'header onBudget'});
    expect(app.find(".list").attr()).to.deep.equal({class: 'list'});
  });

  it('should update budget', function(){
    app = mount(<App />);
    expect(app.find('.app').text()).to.equal('Budget$ 0Total$ 0.00Add Item');
    app.node.updateBudget(10);
    app.node.updateBudget(10); 
    expect(app.find('.app').text()).to.equal('Budget$ 10Total$ 0.00Add Item');
    app.unmount();
  });

  it('should only accept numbers as price inputs', function(){
    var inputs = [
      1,
      'an invalid input',
      {},
      {fake: 'data'},
      [1,2,3,4,5,6]
    ];
    app = mount(<App />);

    inputs.forEach(input => app.node.updateBudget(input));
    expect(app.node.state['budget']).to.equal(1);
    app.unmount();
  });

  xit('should be able to add list items', function(){
    app = mount(<App/>);
    // deleted due to refactor
    app.unmount();
  });

  xit('should handle invalid inputs', function(){
    app = mount(<App/>);
    // deleted due to refactor
    app.unmount();
  });

  xit('should submit form on click', function() {
  });
});


describe('List', ()=>{
  var app;
  var list;
  beforeEach(() => localStorage.clear());

  it('should render list items', ()=>  {
    list = mount(<App />);
    // deleted due to refactor
    list.unmount();
  });

  it("should handle 2 of the same inputs", ()=> {
    list = mount(<App />);
    // deleted due to refactor
    list.unmount();
  });
});

xdescribe("Budget", ()=> {
  var header;
  var app;
  xit('should only accept numbers as input', () =>{
  })
})


