import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleMovie extends Component {
  render() {
    return (
      <Col xs={12} md={4}>
        <Card>
          <Card.Img variant="top" src={this.props.movie.Poster} />
          <Card.Body>
            <Card.Title text={this.props.movie.Title}>
              {this.props.movie.Title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleMovie;
