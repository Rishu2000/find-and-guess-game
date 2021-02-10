import "../styles/App.css";

import React, { Component } from 'react'
import {clickedCoords} from "../helper/coords"

export default class App extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const {pageX,pageY} = e;
    console.log({pageX,pageY});
    //For Picture 1
    if(clickedCoords(pageX,pageY,[150,132,208,205])){
      if(prompt("What Do you see?") === "picture 1"){
        alert("Wow You won!");
      }else{
        alert("You fail!");
      }
    }
    //For Picture 2
    if(clickedCoords(pageX,pageY,[242,94,257,205])){
      if(prompt("What Do you see?") === "picture 2"){
        alert("Wow You won!");
      }else{
        alert("You fail!");
      }
    }
    //For Picture 3
    if(clickedCoords(pageX,pageY,[361,87,436,225])){
      if(prompt("What Do you see?") === "picture 3"){
        alert("Wow You won!");
      }else{
        alert("You fail!");
      }
    }
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

