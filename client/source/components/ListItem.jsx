import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'

export default class ListItem extends React.Component {
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