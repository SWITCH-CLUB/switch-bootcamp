import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Badge from "./Badge";
import Form from "./Form";
import { GetGitHubUserData } from "../services/GitHubService";

class App extends Component {
  state = {
    GitHubData: null
  };
  handleFetchGitHubData = username => {
    GetGitHubUserData(username).then(GitHubData =>
      this.setState({ GitHubData })
    );
  };
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header justify-content-center">
          GitHub Badge Generator
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <Form handleFetchGitHubData={this.handleFetchGitHubData} />
            </div>
            <div className="col-12 col-md-8">
              {this.state.GitHubData ? (
                this.state.GitHubData.name &&
                this.state.GitHubData.bio &&
                this.state.GitHubData.location ? (
                  <Badge
                    Avatar={this.state.GitHubData.avatar_url}
                    FullName={this.state.GitHubData.name}
                    Username={this.state.GitHubData.login}
                    Description={
                      <>
                        <p>
                          Hey, my name is {this.state.GitHubData.name} and I am
                          from {this.state.GitHubData.location}. My bio reads{" "}
                          {this.state.GitHubData.bio}
                        </p>
                      </>
                    }
                  />
                ) : (
                  "Some info not present, Badge cannot be created."
                )
              ) : (
                "Please get GitHub Data."
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
