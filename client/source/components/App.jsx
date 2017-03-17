import React from 'react'
import Header from './Header.jsx'
import List from './List.jsx'
import InlineEdit from './InlineEdit.jsx'
import AddItem from './AddItem.jsx'


export default class App extends React.Component {
	constructor(props){
	  super(props)

	 	this.state = {
	 		budget: 0,
	 		list: [],
	 		validInput: "disabled"
	 	}

	 	this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.updateBudget = this.updateBudget.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updatePrice = this.updatePrice.bind(this);
		this.removeListItem = this.removeListItem.bind(this);
		this.roundToTwo = this.roundToTwo.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	roundToTwo(num) {
		return Math.round(num * 100)/100;
	}

	calculateTotal() {
		return this.roundToTwo(
			this.state.list.reduce( (sum, item) => sum + Number(item.price), 0 )
		);
	}

	componentWillMount() {
		var budget = JSON.parse(localStorage.getItem('budget')) || 0;
		var list = JSON.parse(localStorage.getItem('list')) || [];

		this.setState({
			budget: budget,
			list: list
		})
	}

	handleInputChange() {
		this.setState({validInput: ""})
	}

	handleSubmit(event) {
		if(event.target.name.value){
			this.addListItem(event.target.name.value, Number(event.target.price.value));
    }
		event.target.name.value = '';
		event.target.price.value = '';
		event.target.name.focus();
  	this.setState({validInput: "disabled"});
		event.preventDefault();
	}

	handleRemove(item) {
		console.log('handleRemove', item);
		this.removeListItem(item)
		event.preventDefault();
	}

	//Helper function to find index of an item in list
	//Takes the list array and a name as a target
	nestedIndexOf(arr, itemName, itemPrice) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i].name === itemName && arr[i].price === itemPrice){
				return i;
			}
		}
	}

	updateBudget(num) {
		console.log('updateBudget');
		if(!isNaN(num)){
			this.setState({budget: num || 0})
			localStorage.setItem('budget', JSON.stringify(num))
		}
	}

	updateName(itemName, item) {
		console.log('updateName')
		var arr = this.state.list.slice();
		var index = this.nestedIndexOf(arr, item.name, item.price)
		var newItem = {
			name: itemName,
			price: item.price
		}
		arr.splice(index, 1, newItem);
		localStorage.setItem('list', JSON.stringify(arr))
		this.setState({list: arr})
	}

	updatePrice(itemPrice, item) {
		console.log('updatePrice');
		if(!isNaN(itemPrice)){
			var arr = this.state.list.slice();
			var index = this.nestedIndexOf(arr, item.name, item.price)
			var newItem = {
				name: item.name,
				price: itemPrice || 0
			}
			arr.splice(index, 1, newItem);
			localStorage.setItem('list', JSON.stringify(arr))
			this.setState({list: arr})
		}
	}

	addListItem(name, price) {
		if(name){
			price = this.roundToTwo(price)
			if(!isNaN(price) && typeof name === 'string'){
				//Make a copy of the list array in state
				var arr = this.state.list.slice();

				//Push a new item into the copied array
				arr.push({
					name: name,
					price: price
				})

				localStorage.setItem('list', JSON.stringify(arr));
				//Set list equal to the copied array containing new item
				this.setState({list: arr});
			}}
	}

	removeListItem(item) {
		//Same process as addListItem
		var arr = this.state.list.slice();
		//Find the index of the item to be removed
		var index = this.nestedIndexOf(arr, item.name, item.price)

		arr.splice(index, 1);
		console.log('post splice arr', arr)

		localStorage.setItem('list', JSON.stringify(arr))
		this.setState({list: arr})
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
					updateName={this.updateName}
					updatePrice={this.updatePrice}
					handleRemove={this.handleRemove}
					/>
				<AddItem
					handleSubmit={this.handleSubmit}
					disabled={this.state.validInput}
					handleInputChange={this.handleInputChange}
					/>
			</div>
		)
	}
}
