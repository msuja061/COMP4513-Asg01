import React from "react";
import { Link } from "react-router-dom";

/**
* The main starting page - home - for the application
*/
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
      <div>
        <img
          className="hero"
          src="https://i.pinimg.com/originals/26/b6/14/26b61432fcd570e451e21fc46c17242b.jpg"
          alt="hero"
          style={{ height: "auto", zIndex: "-1" }}
        />
        <div
          className="block"
          style={{
            marginTop: "-25%",
            marginLeft: "25%",
            width: "50%",
            border: "3px solid green",
            padding: "10px",
            borderRadius: "1em",
            zIndex: "0",
          }}
        >
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
      </div>
    );
  }
}

export default Home;
