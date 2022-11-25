import { Component } from "react";
import { Carousel, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class HorrorGallery extends Component {
  state = {
    library: [],
    isError: false,
  };

  fetchMovies = async () => {
    const APIKey = "eeb1760a";
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKey}&s=nightmare%20on%20elm%20street`
      );
      if (response.ok) {
        let movies = await response.json();
        console.log(movies);
        console.log(this.state.library);
        this.setState({
          library: movies,
        });
        console.log(this.state.library);
      } else {
        console.log("error fetching the movies :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="movie-gallery m-2">
        <h5 className="text-left text-light mt-2 mb-2">Horror</h5>
        <Carousel>
          <Carousel.Item>
            <Row>
              {this.state.library.map((movie) => {
                return (
                  <SingleMovie
                    src={movie.Poster}
                    text={movie.Title}
                  ></SingleMovie>
                );
              })}
              {this.state.isError}
            </Row>
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
