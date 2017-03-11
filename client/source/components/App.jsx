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

      <div>
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
			this.focus()
		})
	}

  keyAction(e) {
		if(e.keyCode === 13) {
			if(this.props.updateBudget) {
				this.props.updateBudget(eval(e.target.value))
			}
			if(this.props.updateItemInfo) {
				this.props.updateItemInfo(e.target.value, e.target.ref)
			}
			this.setState({editing: false})
		}
	}

	renderElement() {
		if(this.state.editing) {
			return(
				<div>
				  <input type="text" onKeyDown={this.keyAction.bind(this)} ref={input => this.textInput = input} />
				</div>

			)
		} else {
			return(
				<div onClick={this.editElement.bind(this)}>
				  {this.props.text}
				</div>
			)
		}
	}

	render() {
		return this.renderElement();
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
				<InlineEdit text={'$ ' + this.props.budget} updateBudget={this.props.updateBudget}/>

				<h1> Total </h1>
				<p>{'$ ' + this.props.total}</p>
			</div>
		)
	}
}

class ListItem extends React.Component {
	constructor(props){
	  super(props)

		this.state = {
			name: '',
			price: 0
		}

		this.updateItemInfo = this.updateItemInfo.bind(this);
	}

  updateItemInfo(val, ref) {
		console.log(ref);
	}

	render() {
		return (
			<div>
				{this.props.list.map(function(item) {
					// return <h2 key={item.name}>{item.name + ": $" + item.price}</h2>
					return (
						<div>
							<InlineEdit text={item.name} updateItemInfo={this.updateItemInfo}/>
							<InlineEdit text={'$ ' + item.price} updateItemInfo={this.updateItemInfo}/>
						</div>
					)
				})}
			</div>
		)
	}
}

export default App
