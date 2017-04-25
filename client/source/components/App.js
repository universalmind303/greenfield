import React from 'react';
import Header from './Header.js';
import {indexOfItem} from './utils.js';
import List from './List.js';
import InlineEdit from './InlineEdit.js';
import AddItem from './AddItem.js';
import Dragula from 'react-dragula';


export default class App extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			budget: 0,
			list: [],
			focused: false
		};
		this.updateItem = this.updateItem.bind(this);
		this.addListItem = this.addListItem.bind(this);
		this.updateBudget = this.updateBudget.bind(this);
		this.removeListItem = this.removeListItem.bind(this);
		this.dragulaDecorator = this.dragulaDecorator.bind(this);

	}

	/*
	 * Lifecycle Events
	 */

	componentWillMount() {
		let budget = JSON.parse(localStorage.getItem('budget')) || 0;
		let list = JSON.parse(localStorage.getItem('list')) || [];
		this.setState({
			budget: budget,
			list: list
		});
	}

	componentDidUpdate() {
		localStorage.setItem('budget', JSON.stringify(this.state.budget));
		localStorage.setItem('list', JSON.stringify(this.state.list));
	}



	/*
	 * Mutating State
	 */

	updateBudget(num) {
		if(!isNaN(num)){
			this.setState({budget: num || 0});
			localStorage.setItem('budget', JSON.stringify(num));
		}
	}

	updateItem(key, property, value) {
		// copy the list
		let list = this.state.list.slice();
		// find the index
		let index = indexOfItem(list, key);
		if(index !== -1) {
			list[index][property] = value;
			this.setState({list: list});
		}
	}

	addListItem() {
		let list = this.state.list.slice();
		list.push({
			key: Math.random(),
			name: null,
			price: null
		});
		this.setState({
			list: list, 
			focused: true
		});
	}

	removeListItem(key) {
		// copy the list
		let list = this.state.list.slice();
		// find the index
		let index = indexOfItem(list, key);
		list.splice(index, 1);
		this.setState({list: list});
	}

	// function for drag and drop
	dragulaDecorator (component) {
    	var context = this
      Dragula([component])
	    	.on('drag', () => context.setState({focused: false}))

	    	//this needs to be a function instead of => to retain proper this context.
	    	.on('drop', function() {
	        let list = [];
	        Array.prototype.forEach.call(this.containers[0].children, htmlListItem => {
	          let [name, price] = htmlListItem.innerText.split(/\$/)
	            .map(value => value.replace(/[^a-zA-Z0-9.]/g, ""));

	          list.push({
	            key: null,
	            name: name,
	            price: price
	          });
	        });
	        context.setState({list: list});
      	});
  }


	/*
	 * Rendering the Component
	 */

	calculateTotal() {
		return this.state.list.reduce( (sum, {price}) => sum + Number(price), 0 ).toFixed(2);
	}

	render() {
		return (
			<View>
				<Header
					budget={this.state.budget}
					total={this.calculateTotal()}
					updateBudget={this.updateBudget}
					/>
		
			
			</View>
		)
	}
}
