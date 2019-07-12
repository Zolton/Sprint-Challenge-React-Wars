import React, { useState, useEffect } from "react";
import StarWarsMap from "./components/StarWarsMap";
import "./App.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import Loader from "./components/Loader";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWarsChar, setStarWarsChar] = useState([]);
  //const [stretchGoal, setStretchGoal] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => setStarWarsChar(res.data.results));
    //.then(console.log("starwarschar in axios", starWarsChar))
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://dog.ceo/api/breeds/list/all")
  //     //.then(res=>(console.log("new stuff", res.data.message.hound)))
  //     .then(res=>setStretchGoal(res.data.message.hounds))
  //     //.then(res => setStarWarsChar(res.data.results));
  //   //.then(console.log("starwarschar in axios", starWarsChar))
  // }, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars is owed a paycheck and some royalties for this one</h1>
      {/* {console.log("from below return", starWarsChar)} */}
      {starWarsChar ? <StarWarsMap starWarsChar={starWarsChar} /> : <Loader />}
      {/* {stretchGoal ? stretchGoal.map(name=> name) : null} */}
    </div>
  );
};

export default App;
