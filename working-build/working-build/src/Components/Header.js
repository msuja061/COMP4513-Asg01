import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "react-slide-out";
import "react-slide-out/lib/index.css";
import { render } from "react-dom";
import FavoritesBar from "./FavoritesBar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    return (
      <header>
        <div>Shakes Plays</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/default">Default View</Link>
            </li>
            <li>
              <Link to="/details">Play Details</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <button onClick={() => this.setState({ isOpen: true })}>
                My Favorites
              </button>
              <Slider
                footer={
                  <div style={{ padding: "15px" }}>
                    <button onClick={() => this.setState({ isOpen: false })}>
                      Close
                    </button>
                  </div>
                }
                isOpen={this.state.isOpen}
                onOutsideClick={() => this.setState({ isOpen: false })}
              >
                <FavoritesBar />
              </Slider>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
