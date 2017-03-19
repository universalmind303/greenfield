import React from 'react'
import Header from './Header.jsx'
import {roundToTwo, nestedIndexOf, save, retrieveListName} from './utils.jsx'
import List from './List.jsx'
import InlineEdit from './InlineEdit.jsx'
import AddItem from './AddItem.jsx'
import Footer from './Footer.jsx'

export default class App extends React.Component {
	constructor(props){
	  super(props)
	 	this.state = {
	 		budget: 0,
	 		list: [],
	 		listName: ''
	 	}
	 	this.handleClear = this.handleClear.bind(this);
		this.handleListChange = this.handleListChange.bind(this);
		this.updateBudget = this.updateBudget.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updatePrice = this.updatePrice.bind(this);
		this.addListItem = this.addListItem.bind(this);
		this.removeListItem = this.removeListItem.bind(this);

	}

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

	//
	// event handlers
	//

	handleListChange({value}) {
    let {budget, list, listName} = retrieveListName(value)
    this.setState({
    	listName: listName,
    	budget: budget,
    	list:list
    })
  }

	handleClear() {
	  if(confirm("ARE YOU SURE YOU WANT TO DELETE YOUR LIST?")){
	    this.setState({budget: 0,list: []})
	    localStorage.removeItem('list')
	    localStorage.removeItem('budget')
  		return true
  	} else {
  		return false
  	}
	}

  //
  // functions to update the state.
  //

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
		var index = nestedIndexOf(arr, item.name, item.price)
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
			var index = nestedIndexOf(arr, item.name, item.price)
			var newItem = {
				name: item.name,
				price: itemPrice || 0
			}
			arr.splice(index, 1, newItem);
			localStorage.setItem('list', JSON.stringify(arr))
			this.setState({list: arr})
		}
	}
  calculateTotal() {
		return this.state.list.reduce( (sum, item) => sum + Number(item.price), 0 ).toFixed(2);
  }

	addListItem(name, price) {
		let list = this.state.list.slice();
		list.push({name: null, price: null})
		this.setState({list: list});
	}

	removeListItem(item) {
		//Same process as addListItem
		var arr = this.state.list.slice();
		//Find the index of the item to be removed
		var index = nestedIndexOf(arr, item.name, item.price)
		arr.splice(index, 1);
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
					handleRemove={this.removeListItem}
					/>
				<AddItem action={this.addListItem} />
				<Footer
					handleListChange= {this.handleListChange}
					budget={this.state.budget}
					list={this.state.list}
					listName={this.state.listName}
					clear={this.handleClear}
				/>
			</div>
		)
	}
}
