import React, { useState, useEffect } from "react";
import StarWarsMap from "./components/StarWarsMap";
import "./App.css";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import LoaderFile from "./components/LoaderFile"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWarsChar, setStarWarsChar] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => setStarWarsChar(res.data.results));
    //.then(console.log("starwarschar in axios", starWarsChar))
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* {console.log("from below return", starWarsChar)} */}
      {starWarsChar ? (
        <StarWarsMap starWarsChar={starWarsChar} />
      ) : (
        <div> <LoaderFile /> </div>
      )
      }
    </div>
  );
};

export default App;
