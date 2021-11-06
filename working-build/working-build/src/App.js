import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import PlayDetails from "./Components/Details/PlayDetails";
import DefaultView from "./Components/Default/DefaultView";
import FavoritesBar from "./Components/FavoritesBar";
import Header from "./Components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      title: "",
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
    }
    
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home onUpdate={this.onUpdate.bind(this)} />}
            exact
          ></Route>
          <Route
            path="/default"
            element={
              <DefaultView plays={this.state.items} title={this.state.title} />
            }
          ></Route>
          <Route path="/details" element={<PlayDetails />}></Route>
          <Route path="/favorites" element={<FavoritesBar />}></Route>
        </Routes>
      </div>
    );
  }
  
  onUpdate(userTitle) {
    this.setState({ title: userTitle });
  }
}

export default App;