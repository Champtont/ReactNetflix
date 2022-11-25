import "./App.css";
import "./oldnetflix.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { Container } from "react-bootstrap";
import GenreDetails from "./components/GenreDetails";
import HorrorGallery from "./components/HorrorGallery";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <GenreDetails></GenreDetails>
      <HorrorGallery></HorrorGallery>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
