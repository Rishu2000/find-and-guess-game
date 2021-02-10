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
      if(window.prompt("What Do you see?") === "picture 1"){
        window.alert("Wow You won!");
      }else{
        alert("Try Again!");
      }
    }
    //For Picture 2
    if(clickedCoords(pageX,pageY,[242,94,257,205])){
      if(window.prompt("What Do you see?") === "picture 2"){
        window.alert("Wow You won!");
      }else{
        alert("Try Again!");
      }
    }
    //For Picture 3
    if(clickedCoords(pageX,pageY,[361,87,436,225])){
      if(window.prompt("What Do you see?") === "picture 3"){
        window.alert("Wow You won!");
      }else{
        alert("Try Again!");
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

