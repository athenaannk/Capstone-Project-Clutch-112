import React from 'react';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const item = this.refs.item.value;
    this.refs.item.value = '';
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  }

  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        <form onSubmit={this.addItem}>
          <input type="text" ref="item" />
          <button type="submit">Add Item</button>
        </form>
        <ul>
          {this.state.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;