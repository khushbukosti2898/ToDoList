import React from 'react';
import ToDoUI from './toDoUI';
import { Button, Badge } from 'react-bootstrap'

class ToDo extends React.Component {
    state = {
        items: [],
        currentItem: {
            text: '',
            key: '',
        },
    }
    input = e => {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
            currentItem,
        })
    }
    add = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
            const items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItem: { text: '', key: '' },
            })
        }
    }
    delete = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({
            items: filteredItems,
        })
    }

    render() {
        let { items } = this.state;
        return (
            <div>
                {items.map((item, i) => (
                    <div>
                        <li key={i}>
                            <h5>
                                {item.text}<Badge variant="secondary" onClick={() => { this.delete(item.key) }}>Completed</Badge>
                            </h5>
                        </li>
                    </div> 
                ))}

                <ToDoUI input={this.input} add={this.add} data={this.state} />
            </div>
        )
    }
}
export default ToDo; 