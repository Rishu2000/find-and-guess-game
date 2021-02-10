import "../styles/App.css";

import React, { Component } from 'react'
import {clickedCoords} from "../helper/coords"

export default class App extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const {pageX,pageY} = e;
    console.log({pageX,pageY});
    //For Picture 1
    console.log("Pic 1 ="+clickedCoords(pageX,pageY,[150,132,208,205]));
    //For Picture 2
    console.log("Pic 2 ="+clickedCoords(pageX,pageY,[242,94,257,205]));
    //For Picture 3
    console.log("Pic 3 ="+clickedCoords(pageX,pageY,[361,87,436,225]));
  }
  render() {
    return (
      <div className="App">
        <div className="clickArea" onClick={this.handleClick}>

        </div>
      </div>
    )
  }
}

