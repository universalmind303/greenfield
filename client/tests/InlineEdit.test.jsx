import React, {Component} from 'react';
import { expect, should, assert } from 'chai';
import { mount, shallow, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import App  from '../source/components/App.jsx';
import Header from '../source/components/Header.jsx';
import ListItem from '../source/components/ListItem.jsx';
import InlineEdit from '../source/components/InlineEdit.jsx';



describe('Inline Edit', () =>{
  var wrapper;

  it('should render a span', () => {
    wrapper = shallow(<InlineEdit />); 

    expect(wrapper.node.type).to.equal('span');
  });

  it('should generate an input form when editing is true', () => {
    wrapper = mount(<InlineEdit />);
    wrapper.node.setState({editing: true});
    wrapper.update();
    expect(wrapper.find('.inlineEdit').html()).to
      .equal('<span class="inlineEdit"><span class="placeholder"></span></span>');
  });

  it('should allow user to escape out of edit', () =>{
    wrapper = mount(<InlineEdit />);
    var mock = {
      keyCode: 27,
      target: {value: 0}
    };
    wrapper.node.setState({focus: true});
    wrapper.node.keyAction(mock);
    expect(wrapper.node.state['focus']).to.equal(false);
    wrapper.unmount();
  });
})