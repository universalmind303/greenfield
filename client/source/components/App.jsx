import React from 'react'
import Header from './Header.jsx'
import {retrieveListName, indexOfItem} from './utils.jsx'
import List from './List.jsx'
import InlineEdit from './InlineEdit.jsx'
import AddItem from './AddItem.jsx'

export default class App extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			budget: 0,
			list: [],
		}
		this.updateBudget = this.updateBudget.bind(this);
		this.updateItem = this.updateItem.bind(this);
		this.addListItem = this.addListItem.bind(this);
		this.removeListItem = this.removeListItem.bind(this);

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
		})
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
			this.setState({budget: num || 0})
			localStorage.setItem('budget', JSON.stringify(num))
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
		this.setState({list: list});
	}

	removeListItem(key) {
		// copy the list
		let list = this.state.list.slice();
		// find the index
		let index = indexOfItem(list, key);
		list.splice(index, 1);
		this.setState({list: list});
	}

	/*
	 * Rendering the Component
	 */

	calculateTotal() {
		return this.state.list.reduce( (sum, item) => sum + Number(item.price), 0 ).toFixed(2);
	}

	render() {
		return (
			<div className='app'>
				<Header
					budget={this.state.budget}
					total={this.calculateTotal()}
					updateBudget={this.updateBudget}
					/>
				<List
					list={this.state.list}
					updateItem={this.updateItem}
					removeItem={this.removeListItem}
					/>
				<AddItem action={this.addListItem} />
			
			</div>
		)
	}
}
