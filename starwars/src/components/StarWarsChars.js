import React from "react";

function StarWarsChars(props) {
  return (
    <>
      {console.log("char props", props)}
      <h1>{props.name}</h1>
      <h4>{props.age}</h4>
    </>
  );
}

export default StarWarsChars;
