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
        </Card>
      </Col>
    );
  }
}

export default SingleMovie;
