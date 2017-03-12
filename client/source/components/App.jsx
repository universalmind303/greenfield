import React from 'react'
import Header from './Header.jsx'
import ListItem from './ListItem.jsx'
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
	}

	handleSubmit(event) {
		this.addListItem(event.target.name.value, event.target.price.value);
		this.updateTotal(eval(event.target.price.value));
		event.target.name.value = '';
		event.target.price.value = '';
		event.preventDefault();
	}

	updateTotal(numb) {
		var newTotal = this.state.total + numb;
		this.setState({total: newTotal})
	}

	updateBudget(numb) {
		this.setState({budget: numb})
	}

	addListItem(name, price) {
		var arr = this.state.list.slice();
		arr.push({
			name: name,
			price: price
		})
		this.setState({list: arr});
	}

  render() {
    return (

      <div className='app'>
      	<Header budget={this.state.budget} total={this.state.total} updateBudget={this.updateBudget}/>
      	<ListItem list={this.state.list} updateTotal={this.updateTotal}/>

				<form onSubmit={this.handleSubmit}>
      		<input type='text' name='name' placeholder='item' />
      		<input type='text' name='price' placeholder='price' />
      		<input type='submit' value='submit' />
      	</form>
      </div>
    )
  }
};






