import React from "react";
import StarWarsChars from "./StarWarsChars";

function StarWarsMap(props) {
  return (
    <>
      {/* {console.log("starwarsmap comp props", props)} */}
      {props.starWarsChar.map(indivSWChar => (
        <StarWarsChars indivSWChar={indivSWChar} />
      ))}
    </>
  );
}

export default StarWarsMap;
