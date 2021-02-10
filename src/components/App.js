import "../styles/App.css";

import React, { Component } from 'react'

export default class App extends Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log("object");
    //console.log(Object.keys(e));
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

