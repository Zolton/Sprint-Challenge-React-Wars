import React from "react";

function StarWarsChars(props) {
  return (
    <div>
      {console.log("char props", props)}
      <h3>{props.indivSWChar.name}</h3>
      <ul>
        <li>Gender: {props.indivSWChar.gender}</li>
        <li>Height: {props.indivSWChar.height}</li>
        <li>Mass: {props.indivSWChar.height}</li>
        <li>Hair Color: {props.indivSWChar.hair_color}</li>
      </ul>
    </div>
  );
}

export default StarWarsChars;
