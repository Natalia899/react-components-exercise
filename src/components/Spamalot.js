import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
 render(
 ){
let result = []
for (let i=0; i<500; i++){
result.push(<Spam/>)
}

     return (
         <div id='ex-2'>{result}</div>
     )
 }

}

export default Spamalot

