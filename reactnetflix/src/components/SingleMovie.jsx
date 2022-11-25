import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleMovie extends Component {
  render() {
    return (
      <Col xs={12} md={3}>
        <Card>
          <Card.Img
            variant="top"
            src={this.props.src}
            style={{ height: "450px" }}
          />
          <Card.Body>
            <Card.Title className="text-truncate" text={this.props.text}>
              {this.props.text}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleMovie;
