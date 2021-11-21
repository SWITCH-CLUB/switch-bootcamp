import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Badge from "./Badge";
import Form from "./Form";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header justify-content-center">
          GitHub Badge Generator
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <Form />
            </div>
            <div className="col-12 col-md-8">
              <Badge
                Avatar="https://i.imgur.com/wbUfjzdl.png"
                FullName="Priyanshu Das"
                Username="priyanshu"
                Description="I am Priyanshu!"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
