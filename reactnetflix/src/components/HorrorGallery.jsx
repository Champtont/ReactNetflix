import { Component } from "react";
import { Carousel, Row } from "react-bootstrap";

class HorrorGallery extends Component {
  render() {
    return (
      <div className="movie-gallery m-2">
        <h5 className="text-left text-light mt-2 mb-2">Horror</h5>
        <Carousel>
          <Carousel.Item>
            <Row></Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row></Row>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default HorrorGallery;
