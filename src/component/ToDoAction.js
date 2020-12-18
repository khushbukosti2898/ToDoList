import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

class ToDoAction extends React.Component {
  render() {
    let { items, deleteEntry, editEntry, handleCheck } = this.props;
    return <>
      {items.map((item, i) => (
        <Row key={i} className="mb-2">
          <Col md={7} className={`${item.checked && 'lineThrough'}`}>
            <input
              type="checkbox"
              className="mr-2"
              checked={item.checked}
              onChange={() => handleCheck(item.key)} />
            {item.text}
          </Col>
          <Col md={5}>
            <Button variant="success" disabled={item.checked} onClick={() => editEntry(item.text, item.key)} className="mr-2">Edit</Button>
            <Button variant="danger" disabled={item.checked} onClick={() => deleteEntry(item.key)}>Delete</Button>
          </Col>
        </Row>
      ))}
    </>
  };
};
export default ToDoAction;