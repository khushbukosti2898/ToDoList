import React from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

class ToDoUI extends React.Component {
  render() {
    let { inputChange, addEntry } = this.props;
    let { currentItem, } = this.props;
    return  <Card className="mb-2">
        <Card.Body>
          <Row>
            <Col md={8}>
              <Form.Control type="text" placeholder="Add task" value={currentItem.text} onChange={inputChange} />
            </Col>
            <Col md={4}>
              <Button variant="dark" onClick={addEntry}>Submit</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
  };
};
export default ToDoUI;