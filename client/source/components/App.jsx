import React from 'react'

class App extends React.Component {
	constructor(props){
	  super(props)

	 	this.state = {
	 		total: 0,
	 		budget: 0,
	 		list: []
	 	}
	 	this.handleSubmit = this.handleSubmit.bind(this);
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

	addListItem(name, price) {
		var arr = this.state.list.slice();
		arr.push({
			name: name,
			price: price
		})
		this.setState({list: arr});
	}

	deleteListItem() {

	}

	renderList() {

	}

  render() {
    return (

      <div>
      	<Header budget={this.state.budget} total={this.state.total}/>
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

class InlineEdit extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			editing: false
		}

		this.focus = this.focus.bind(this);
	}

	focus() {
		this.textInput.focus();
	}

	editElement() {
		this.setState({editing: true}, function() {
			focus()
		})
	}

	renderElement() {
		if(this.state.editing) {
			return(
				//html stuff
			)
		} else {
			return(
				//html onClick stuff
			)
		}
	}

	render() {
		return (
			ref={input => this.textInput = input}
		)
	}
}

class Header extends React.Component {
	constructor(props){
	  super(props)
	}

	render() {
		return (
			<div className="header">
				<h1> Budget </h1>
				<p>{"$" + this.props.budget}</p>

				<h1> Total </h1>
				<p>{"$" + this.props.total}</p>
			</div>
		)
	}
}

class ListItem extends React.Component {
	constructor(props){
	  super(props)
	}

	// this.state.updateTotal()


	render() {
		return (
			<div>
				{this.props.list.map(function(item) {
					return <h2 key={item.name}>{item.name + ": $" + item.price}</h2>
				})}
			</div>
		)
	}
}

export default App
