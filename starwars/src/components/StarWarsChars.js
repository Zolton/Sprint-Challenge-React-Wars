// import React from "react";

// function StarWarsChars(props) {
//   return (
//     <div>
//       {/* {console.log("char props", props)} */}
//       <h3>{props.indivSWChar.name}</h3>
//       <ul>
//         <li>Gender: {props.indivSWChar.gender}</li>
//         <li>Height: {props.indivSWChar.height}</li>
//         <li>Mass: {props.indivSWChar.height}</li>
//         <li>Skin color: {props.indivSWChar.skin_color}</li>
//         <li>Hair Color: {props.indivSWChar.hair_color}</li>
//       </ul>
//     </div>
//   );
// }

import React from 'react'
import { List } from 'semantic-ui-react'

const StarWarsChars = (props) => (
  <List class="ui bulleted list">>
    <List.Item><h3>{props.indivSWChar.name}</h3></List.Item>
    <List.Item>Gender: {props.indivSWChar.gender}</List.Item>
    <List.Item>Height: {props.indivSWChar.height}</List.Item>
    <List.Item>Mass: {props.indivSWChar.height}</List.Item>
  </List>
)

//export default ListExampleBasic
export default StarWarsChars;