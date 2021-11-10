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
      <div className="homePage">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="hero"
        />

        <label>
          Title
          <input
            type="text"
            name="title"
            onChange={this.handleChange.bind(this)}
          />
          <Link to="/singlePlay">
            <input type="button" value="Find this Play" />
          </Link>
        </label>
        <Link to="/default">
          <input type="submit" value="Show me all plays" />
        </Link>
      </div>
    );
  }
}

export default Home;
