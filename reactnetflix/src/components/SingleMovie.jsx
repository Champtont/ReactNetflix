import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleMovie extends Component {
  render() {
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleMovie;
