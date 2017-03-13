import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'


export default class ListItem extends React.Component {
  constructor(props){
    super(props)
  }

  // updateItemInfo(val, ref) {
  //   console.log(ref);
  //   return val;
  // }

  render() {
    return (
      <div className="listItems">
        {this.props.list.map(function(item) {
          // return <h2 key={item.name}>{item.name + ": $" + item.price}</h2>
          return (
            <div className="listItem">
              <InlineEdit
                text={item.name}
                updateName={this.props.updateName}
              />
            <InlineEdit
                text={'$ ' + item.price}
                updatePrice={this.props.updatePrice}
              />
            </div>
          )
        }, this)}
      </div>
    )
  }
}
