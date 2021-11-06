import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import PlayDetails from "./Components/Details/PlayDetails";
import FavoritesBar from "./Components/FavoritesBar";
import Header from "./Components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  
  componentDidMount() {
    if (localStorage.getItem("plays") === "") {
      fetch(
        "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);

            this.setState({
              isLoaded: true,
              items: result,
            });
            localStorage.setItem("plays", result);
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    } else {
      this.setState({ isLoaded: true });
      console.log("Plays are loaded in storage!");
    }
  }

  render() {
    var { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...{}</div>;
    } else {
      localStorage.setItem("plays", items);

      return (
        <div className="container">
          <Home />
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
