import "../styles/App.css";

import React, { Component } from 'react'
import {clickedCoords} from "../helper/coords"
import complete from "../assets/complete.png"
import puzzle from "../assets/puzzle.png"
import solved from "../assets/solved.png"

export default class App extends Component {
  state = {
    pick1 : false,
    pick2 : false,
    pick3 : false,
    point:0
  }
  handleClick = (e) => {
    e.preventDefault();
    const {pageX,pageY} = e;
    console.log({pageX,pageY});
    //For Picture 1
    if(!this.state.pick1 && clickedCoords(pageX,pageY,[150,132,208,205])){
      if(window.prompt("What Do you see?") === "picture 1"){
        this.setState({pick1: true, point:this.state.point + 1});
        window.alert("Wow You won!");
      }else{
        window.alert("Try Again!");
      }
    }
    //For Picture 2
    if(!this.state.pick2 && clickedCoords(pageX,pageY,[242,94,257,205])){
      if(window.prompt("What Do you see?") === "picture 2"){
        this.setState({pick2: true, point:this.state.point + 1});
        window.alert("Wow You won!");
      }else{
        window.alert("Try Again!");
      }
    }
    //For Picture 3
    if(!this.state.pick3 && clickedCoords(pageX,pageY,[361,87,436,225])){
      if(window.prompt("What Do you see?") === "picture 3"){
        this.setState({pick3: true, point:this.state.point + 1});
        window.alert("Wow You won!");
      }else{
        window.alert("Try Again!");
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div className="clickArea" onClick={this.handleClick}>
          <div className="solvedFinal">
            <img src={solved} alt="Solved"/>
          </div>
        <div className="puzzle">
          <img src={this.state.pick1?complete:puzzle} alt="Puzzle 1" className={this.state.pick1?"solved":"unsolved"}/>
          <img src={this.state.pick2?complete:puzzle} alt="Puzzle 2" className={this.state.pick2?"solved":"unsolved"}/>
          <img src={this.state.pick3?complete:puzzle} alt="Puzzle 3" className={this.state.pick3?"solved":"unsolved"}/>
        </div>
        </div>
      </div>
    )
  }
}

