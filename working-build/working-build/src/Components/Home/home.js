import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.userTitle = React.createRef();
  }
  handleChange(event) {
    if (event.target.value !== "") {
      this.props.onUpdate(event.target.value.toLowerCase());
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
          src="https://unsplash.com/photos/3ZUsNJhi_Ik?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          alt="hero"
        />

        <label>
          Title
          <input
            type="text"
            name="title"
            onChange={this.handleChange.bind(this)}
          />
          <Link to="/default">
            <input type="button" value="Find this Play" />
          </Link>
        </label>
        <input type="submit" value="Show me all plays" />
      </div>
    );
  }
}

export default Home;
