import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.userTitle = React.createRef();
  }
  handleChange(event) {
    if (event.target.value !== "") {
      this.props.onUpdateTitle(event.target.value.toLowerCase());
    }
  }

  handleSubmit() {
    if (localStorage === null) console.log("its empty");
    else console.log("its loaded");
  }

  render() {
    return (
      <div
        className="block"
        style={{
          marginTop: "25%",
          marginLeft: "25%",
          width: "50%",
          border: "3px solid green",
          padding: "10px",
          borderRadius: "1em",
        }}
      >
        <img
          className="hero"
          src="https://unsplash.com/photos/3ZUsNJhi_Ik?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          alt="hero"
        />

        <label>
          Title
          <input
            className="input is-primary"
            type="text"
            name="title"
            onChange={this.handleChange.bind(this)}
          />
          <Link to="/singlePlay">
            <input
              className="input is-primary"
              type="button"
              value="Find this Play"
            />
          </Link>
        </label>
        <Link to="/default">
          <input
            className="input is-primary"
            type="submit"
            value="Show me all plays"
          />
        </Link>
      </div>
    );
  }
}

export default Home;
