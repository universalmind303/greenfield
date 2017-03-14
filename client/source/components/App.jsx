import React from 'react'
import Header from './Header.jsx'
import List from './List.jsx'
import InlineEdit from './InlineEdit.jsx'


export default class App extends React.Component {
	constructor(props){
	  super(props)

	 	this.state = {
	 		total: 0,
	 		budget: 0,
	 		list: []
	 	}

	 	this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.updateBudget = this.updateBudget.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updatePrice = this.updatePrice.bind(this);
		this.removeListItem = this.removeListItem.bind(this);
	}

	handleSubmit(event) {
    console.log(event.target.name.value)
    if(event.target.name.value){
		this.addListItem(event.target.name.value, Number(event.target.price.value));
    }
		this.updateTotal(Number(event.target.price.value));
		event.target.name.value = '';
		event.target.price.value = '';
		event.preventDefault();
	}

	handleRemove(item) {
		console.log(item);

		this.removeListItem(item)
		event.preventDefault();
	}

	//Helper function to find index of an item in list
	//Takes the list array and a name as a target
	nestedIndexOf(arr, itemName) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i].name === itemName){

				return i;
			}
		}
	}

	updateTotal(num) {
		if(!isNaN(num)){
			var newTotal = this.state.total + num;
			this.setState({total: newTotal})
		}
	}

	updateBudget(num) {
		if(!isNaN(num)){
			this.setState({budget: num})
		}
	}

	updateName(str) {
		console.log('updateName')
  //   console.log(str)
  //   console.log(this.state)
  //   let list = this.state['list']
  //   this.setState({list: [{name: str}]})

  }

	updatePrice(num) {
		console.log('updatePrice')
		if(!isNaN(num)){
			this.setState({price: num})
		}
	}

	addListItem(name, price) {
		if(!isNaN(price) && typeof name === 'string'){
			//Make a copy of the list array in state
			var arr = this.state.list.slice();

			//Push a new item into the copied array
			arr.push({
				name: name,
				price: price
			})

			//Set list equal to the copied array containing new item
			this.setState({list: arr});
		}
	}

	removeListItem(item) {
		//Same process as addListItem
		var arr = this.state.list.slice();
		//Find the index of the item to be removed
		var index = this.nestedIndexOf(arr, item.name)

		this.updateTotal(-(item.price))

		arr.splice(index, 1);
		console.log('post splice arr', arr)

		this.setState({list: arr})
	}

  render() {
    return (

      <div className='app'>
      	<Header budget={this.state.budget} total={this.state.total} updateBudget={this.updateBudget}/>
				<div className="content">
      	<List
					list={this.state.list}
					updateName={this.updateName}
					updatePrice={this.updatePrice}
					handleRemove={this.handleRemove}
				/>

					<form onSubmit={this.handleSubmit}>
	      		<input type='text' name='name' placeholder='item' className="threeFifths" autoFocus />
	      		<input type='text' name='price' placeholder='price' className="fifth" />
	      		<input type='submit' value='Add' className="fifth" />
	      	</form>
				</div>

      </div>
    )
  }
};
