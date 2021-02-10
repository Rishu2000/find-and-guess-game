import "../styles/App.css";

import React, { Component } from 'react'

export default class App extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const {screenX,screenY,clientX,clientY,pageX,pageY,movementX,movementY} = e;
    console.log(screenX,screenY,clientX,clientY,pageX,pageY,movementX,movementY);
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

