import React from 'react';
import { Card, Button,Form } from 'react-bootstrap'
class ToDoUI extends React.Component {
    render() {
        let { input, add } = this.props;
        let { currentItem, items } = this.props.data;
        return <div className="card">
            <Card>
                <Card.Body>
                <Form.Control size="lg" type="text" placeholder="Task" value={currentItem.text} onChange={input} />
                <br/><Button variant="dark"  value={"Add " + (items.length + 1)} onClick={add}>Add Task</Button>
                </Card.Body>
            </Card>
        </div>
    }
}
export default ToDoUI;