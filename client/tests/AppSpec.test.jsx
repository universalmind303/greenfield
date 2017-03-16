import React, {Component} from 'react';
import { expect, should, assert } from 'chai';
import { mount, shallow, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import sinon from 'sinon'

import App  from '../source/components/App.jsx';
import List from '../source/components/List.jsx';

import Header from '../source/components/Header.jsx';
import ListItem from '../source/components/ListItem.jsx';
import InlineEdit from '../source/components/InlineEdit.jsx';

const localStorageMock = function() {
  var store = {};
  return {
      getItem: key => store[key] || null, 
      setItem: (key, value)=> store[key] = value.toString(),
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

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });
  
  it('App should render a div',()=> {
    app =shallow(<App />);  
    expect(app.node.type).to.equal('div');
    app.unmount()
  })

  it('Components should have a div class',function(){
    app = render(<App />)  
    expect(app.find(".app").attr()).to.deep.equal({class: 'app'})
    expect(app.find(".header").attr()).to.deep.equal({class: 'header'})
    expect(app.find(".listItems").attr()).to.deep.equal({class: 'listItems'})
  });

  it('should increase total, and reset budget', function(){
    app = mount(<App />)
    expect(app.find('.app').text()).to.equal('Budget$ 0Total$ 0')
    app.node.setState({budget: 10, total: 10})
    app.node.updateBudget(10)
    app.node.updateTotal(10)
    expect(app.find('.app').text()).to.equal('Budget$ 10Total$ 20')
    app.unmount()
  });
  it('should only accept numbers as price inputs', function(){
      //it should handle truthy/falsy inputs, i fixed it to ignore all except truthy/falsy
    var inputs = [
      1,
      'an invalid input',
      {},
      {fake: 'data'},
      [1,2,3,4,5,6],
      // true,
      // false,
      // undefined
    ]
    app = mount(<App />)

    inputs.forEach(input => app.node.updateBudget(input))
    inputs.forEach(input => app.node.updateTotal(input))
    expect(app.node.state['budget']).to.equal(1)
    expect(app.node.state['total']).to.equal(1)
    app.unmount()
  });
  it('should be able to add list items', function(){
    app = mount(<App/>)
    app.node.addListItem('strawberry',10)
    expect(app.node.state['list'].length).to.equal(1)
    app.unmount()
  })
  it('should handle invalid inputs', function(){
    app = mount(<App/>)
    app.node.addListItem('strawberry',10)
    app.node.addListItem({}, {})
    app.node.addListItem(1, 'strawberry')
    app.node.addListItem(null, null)
    expect(app.node.state['list'].length).to.equal(1)
    app.unmount()
  })

  xit('should submit form on click', function() {
  });
});


describe('List', ()=>{
  var app;
  var list;
  beforeEach(() => localStorage.clear())

  it('should render list items', ()=>  {
    list = shallow(<List ListItem item={[{name: 'apple', price: 2},{name: 'orange', price: 3}]} />)
    expect(list.node.type).to.equal('ul')
    expect(list.find('.listItems').children().length).to.equal(2)
    expect(list.find('.listItems').html()).to.exist
    list.unmount()
  });



  it("should handle 2 of the same inputs", ()=> {
  list = mount(<List list={[{name: 'apple', price: 2}, {name: 'apple', price: 2}]}/>)
  expect(list.find('.listItems').children().length).to.equal(2)
  expect(list.find('.listItem').first().text()).to.equal('apple$ 2')
  expect(list.find('.listItem').first().text()).to.equal('apple$ 2')
  list.unmount()
  });


})

xdescribe("Budget", ()=> {
  var header;
  var app;

  beforeEach(() =>{
    header = mount(<Header />)
    app = mount(<App />)
  })
  afterEach(() => {
    header.unmount()
    app.unmount()
  })

  it('should only accept numbers as input', () =>{
  })
})


