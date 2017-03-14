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
		this.updateBudget = this.updateBudget.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updatePrice = this.updatePrice.bind(this);
		this.removeListItem = this.removeListItem.bind(this);
	}

	handleSubmit(event) {
		this.addListItem(event.target.name.value, Number(event.target.price.value));
		this.updateTotal(Number(event.target.price.value));
		event.target.name.value = '';
		event.target.price.value = '';
		event.preventDefault();
	}

	handleRemove(x) {
		console.log(x);

		removeListItem(x)
		event.preventDefault();
	}

	//Helper function to find index of an item in list
	//Takes the list array and a name as a target
	nestedIndexOf(arr, itemName) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i][0] === itemName){
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
		// console.log('updateName')
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

	removeListItem(name) {
		//Find the index of the item to be removed
		var index = nestedIndexOf(name)
		//Same process as addListItem
		var arr = this.state.list.slice();

		updateTotal(-(arr[index][1]))

		arr.splice(index, 1);

		this.setState({list: arr})
	}

  render() {
    return (

      <div className='app'>
      	<Header budget={this.state.budget} total={this.state.total} updateBudget={this.updateBudget}/>
<<<<<<< bea71f708a186bf77501f5cf83c1e10726c67d11
				<div className="content">
	      	<List
						list={this.state.list}
						updateTotal={this.updateTotal}
						updateName={this.updateName}
						updatePrice={this.updatePrice}
					/>


					<form onSubmit={this.handleSubmit}>
	      		<input type='text' name='name' placeholder='item' className="threeFifths" autoFocus />
	      		<input type='number' name='price' step=".01" placeholder='price' className="fifth" />
	      		<input type='submit' value='Add' className="fifth" />
	      	</form>
				</div>

=======
      	<List
					list={this.state.list}
					updateName={this.updateName}
					updatePrice={this.updatePrice}
					handleRemove={this.handleRemove}
				/>

				<form onSubmit={this.handleSubmit}>
      		<input type='text' name='name' placeholder='item' />
      		<input type='text' name='price' placeholder='price' />
      		<input type='submit' value='submit' />
      	</form>
>>>>>>> Refactored files to have 'List' and 'ListItem' functions
      </div>
    )
  }
};
