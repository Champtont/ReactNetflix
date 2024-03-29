import { Component } from "react";
import { Carousel, Row, Alert, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class ActionGallery extends Component {
  state = {
    library: [],
    isLoading: true,
    isError: false,
  };

  fetchMovies = async () => {
    const APIKey = "eeb1760a";
    try {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=${APIKey}&s=alien`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        let movies = data.Search;
        console.log(movies);
        this.setState({
          library: movies,
          isLoading: false,
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
      <div className="m-2">
        <h5 className="text-left text-light mt-2 mb-2">Alien</h5>
        {this.state.isLoading && (
          <Spinner animation="border" variant="danger" />
        )}
        <Carousel>
          <Carousel.Item>
            <Row>
              {this.state.library.slice(0, 6).map((movie) => {
                return (
                  <SingleMovie
                    key={movie.imdbID}
                    src={movie.Poster}
                    text={movie.Title}
                  ></SingleMovie>
                );
              })}
              {this.state.isError && (
                <Alert variant="danger">Uh oh, mistakes were made! =(</Alert>
              )}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.state.library.slice(4, 10).map((movie) => {
                return (
                  <SingleMovie
                    key={movie.imdbID}
                    src={movie.Poster}
                    text={movie.Title}
                  ></SingleMovie>
                );
              })}
              {this.state.isError && (
                <Alert variant="danger">Uh oh, mistakes were made! =(</Alert>
              )}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ActionGallery;
