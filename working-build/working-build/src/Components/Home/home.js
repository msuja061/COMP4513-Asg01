import React from "react";
//import FetchData from "./fetchData";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playTitle: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.value !== "") {
      this.setState({ playTitle: event.target.value });
    } else {
      this.setState({ playTitle: "" });
    }
  }
  handleSubmit() {
    alert("A title was submitted: " + this.state.playTitle);
    if (localStorage === null) console.log("its empty");
    else console.log("its loaded");
    <Default 
  }
  render() {
    return (
      <div className="homePage">
        <img
          src="https://unsplash.com/photos/3ZUsNJhi_Ik?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          alt="hero"
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              type="text"
              value={this.state.playTitle}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Find this play" />
          <input type="submit" value="Show me all plays" />
        </form>
      </div>
    );
  }
}

export default Home;
