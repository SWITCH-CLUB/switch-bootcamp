import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header dark={true} className="justify-content-center">
          GitHub Badge Generator
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">Left Form</div>
            <div className="col-12 col-md-8">Right Badge</div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
