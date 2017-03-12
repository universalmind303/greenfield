import React, {Component} from 'react';
import { expect, should } from 'chai';
import { mount, shallow, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import sinon from 'sinon'


import App  from '../source/components/App.jsx';
import Header from '../source/components/Header.jsx';
import ListItem from '../source/components/ListItem.jsx';
import InlineEdit from '../source/components/InlineEdit.jsx';




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
  const renderer = TestUtils.createRenderer();

  beforeEach(function() {
    renderer.render(<App />);
    app= render(<App />);  
  })


  it('should be a stateful class component', ()=> {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });
  it('App should render a div',()=> {
  let result = renderer.getRenderOutput();
  expect(result.type).to.equal('div');
  })

  it('should set budget and total', ()=> {
    app = mount(<App />)
    expect(app.find('.app').text()).to.equal(' Budget $0 Total $0')
    app.node.setState({budget: 100, total: 80})
    expect(app.find('.app').text()).to.equal(' Budget $100 Total $80')
    app.unmount()
  });
  it('Components should have a div class',()=>{
    app = render(<App />)  
    expect(app.find(".app").attr()).to.deep.equal({class: 'app'})
    expect(app.find(".header").attr()).to.deep.equal({class: 'header'})
    expect(app.find(".listItem").attr()).to.deep.equal({class: 'listItem'})
  });


  it('should submit form on click', ()=> {
    //stll need to figure out how to implement this one. 
    app = mount(<App />)

    let spy = sinon.spy(app.node.handleSubmit())
    // console.log(app.find('input').node)
    // console.log(app.find('.submit').html())
    app.find('.submit').simulate('submit')
    sinon.assert.calledOnce(spy);
    app.unmount();
  });
});


describe('List', ()=>{
  var app;
  var list;
  xit('should handle invalid price inputs', () => {
    app = mount(<App />)
    var num = 11
    app.node.updateBudget(num)
    app.node.updateBudget('an invalid input')
    expect(app.node.state['total']).to.equal(num)

  })

  it("should handle 2 of the same inputs", ()=> {
    // not 100% on how you should handle this one, but it definitly needs to handle 2 of the same items.
  app = mount(<App />)
  app.node.addListItem('apple', 2.00)
  app.node.addListItem('apple', 2.00)

  //either add another list item
  expect(app.node.state['list'].length).to.equal(2)  
  //or increase the total for the item. 
  expect(app.node.state['list'].price).to.equal(4)
  app.unmount()
  });


  it('should render list items', ()=> {
    list = shallow(<ListItem list={[{name: 'apple', price: 2},{name: 'orange', price: 3}]}/>)
    expect(list.find('.listItem').html()).to.equal(
     '<div class="listItem"><h2>apple: $2</h2><h2>orange: $3</h2></div>'
    )
    list.unmount()
  });

})


