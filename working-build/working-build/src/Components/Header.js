import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "react-slide-out";
import "react-slide-out/lib/index.css";
import { render } from "react-dom";
import FavoritesBar from "./FavoritesBar";

/**
* Header bar
*/
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    return (
      <nav
        className="navbar is-link is-fixed-top mx-* "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link className="has-text-white ml-6" to="/">
              Home
            </Link>
          </div>
          <button
            role="button"
            className="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link className="has-text-white" to="/default">
                Default View
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="has-text-white" to="/about">
                About Us
              </Link>
            </div>

            <div className="navbar-item">
              <button
                className="button is-light"
                onClick={() => this.setState({ isOpen: true })}
              >
                My Favorites
              </button>
            </div>

            <div className="navbar-item mr-6">
              <Slider
                footer={
                  <div className="buttons" style={{ padding: "15px" }}>
                    <button
                      className="button is-dark"
                      onClick={() => this.setState({ isOpen: false })}
                    >
                      Close
                    </button>
                  </div>
                }
                isOpen={this.state.isOpen}
                onOutsideClick={() => this.setState({ isOpen: false })}
              >
                <FavoritesBar />
              </Slider>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
