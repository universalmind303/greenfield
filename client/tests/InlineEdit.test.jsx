import React, {Component} from 'react';
import { expect, should, assert } from 'chai';
import { mount, shallow, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import sinon from 'sinon'


import App  from '../source/components/App.jsx';
import Header from '../source/components/Header.jsx';
import ListItem from '../source/components/ListItem.jsx';

import InlineEdit from '../source/components/InlineEdit.jsx';




describe('Inline Edit', () =>{
  var wrapper;

  it('should allow to escape out of edit', () =>{
    wrapper = mount(<InlineEdit />)
    var spy = sinon.spy(wrapper.node, 'keyAction')
    wrapper.update()
    wrapper.node.setState({editing: true})
    wrapper.find(".inlineEdit").simulate("keyDown", {
      keyCode: 27,
    });
    expect(InlineEdit.prototype.keyAction.calledOnce).to.equal(true); 
  });
})