import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FavoritesContextProvider } from "./store/favorites-context";
import Home from "./Components/Home/Home";
import PlayDetailsMain from "./Components/Details/PlayDetailsMain";
import DefaultView from "./Components/Default/DefaultView";
import FavoritesBar from "./Components/FavoritesBar";
import About from "./About";
import Header from "./Components/Header";
import SinglePlay from "./Components/Default/SinglePlay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      title: "",
      singlePlay: [],
      playClicked: [],
      hideModal: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem.length <= 1) {
      fetch(
        "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            result.sort((a, b) => a.title.localeCompare(b.title));

            console.log(result);

            this.setState({
              isLoaded: true,
              items: result,
            });
            let testResult = JSON.stringify(result);
            localStorage.setItem("plays", testResult);
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

    const showDetail = (play) => {
      this.setState({ playClicked: play });
    };
    const hideModal = () => {
      this.setState({ hideModal: true });
    };

    return (
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home onUpdateTitle={this.onUpdateTitle.bind(this)} />}
            exact
          ></Route>
          <Route
            path="/default"
            element={
              <DefaultView plays={this.state.items} showDetail={showDetail} />
            }
          ></Route>

          <Route
            path="/singlePlay"
            element={<SinglePlay single={this.state.singlePlay} />}
          ></Route>

          <Route
            path="/details"
            element={<PlayDetailsMain playClicked={this.state.playClicked} />}
          ></Route>
          <Route path="/favorites" element={<FavoritesBar />}></Route>
          <Route
            path="/about"
            element={<About hideModal={hideModal} />}
          ></Route>
        </Routes>
      </div>
    );
  }

  onUpdateTitle(userTitle) {
    this.setState({ title: userTitle });
    const singlePlayIndex = this.state.items.findIndex(
      (p) => p.title.toLowerCase() === userTitle
    );
    this.setState({ singlePlay: this.state.items[singlePlayIndex] });
    return singlePlayIndex;
  }
}

export default App;
