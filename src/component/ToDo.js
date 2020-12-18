import React from 'react';
import ToDoUI from './ToDoUI';
import ToDoAction from './ToDoAction';

class ToDo extends React.Component {
  state = {
    items: [],
    currentItem: {
      text: '',
      key: '',
      checked: false,
    },
  }

  inputChange = e => {
    const { value } = e.target;
    const currentItem = { text: value, key: Date.now(), checked: false };
    this.setState({
      currentItem,
    });
  }

  addEntry = () => {
    const { currentItem } = this.state;
    if (currentItem.text !== '') {
      this.setState({
        items: [...this.state.items, currentItem],
        currentItem: { text: '', key: '', checked: false },
      });
    }
  }

  editEntry = (text, key) => {
    const items = this.state.items;
    this.setState({
      items: items.filter(item => item.key !== key),
      currentItem: {
        text
      }
    });
  }

  deleteEntry = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  }

  handleCheck = (key) => {
    const filteredItems = this.state.items.map(item => {
      if (key === item.key)
        item.checked = !item.checked;
      return item;
    });
    this.setState({
      items: filteredItems
    });
  }

  render() {
    let { items, currentItem } = this.state;
    return (
      <div className="todo mt-5">
        <h4 className="text-center text-primary">My Todo</h4>
        <ToDoUI inputChange={this.inputChange} currentItem={currentItem} addEntry={this.addEntry} />
        <ToDoAction
          items={items}
          deleteEntry={this.deleteEntry}
          editEntry={this.editEntry}
          handleCheck={this.handleCheck}
        />
      </div>
    )
  }
}
export default ToDo; 