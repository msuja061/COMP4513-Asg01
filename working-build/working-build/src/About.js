import React from "react";
import Home from "./Components/Home/Home";
const About = () => {
  const [hideModal, sethideModal] = React.useState(false);

  function toggleModalHandler() {
    sethideModal(true);
  }
  if (hideModal === false) {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">About Us</p>
            <button
              className="delete"
              aria-label="close"
              onClick={toggleModalHandler}
            ></button>
          </header>
          <section className="modal-card-body">
            <p className="is-4">Hi There!</p>
            <br />
            <p>
              It's nice to meet you! This is our WEB 3 Assignment 1. It was
              focused on React. We learned how to use create-react-app to build
              a simple <strong>Web App.</strong> Some of the feautures include:
              API fetch request, context provider, useState, CSS framework
              (Bulma), and much more!
            </p>
            <br></br>
            <p>
              By:
              <strong> Micheal Sujanto, Ahmed Thraya, Justin Przybylski</strong>
            </p>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-danger" onClick={toggleModalHandler}>
              Close
            </button>
          </footer>
        </div>
      </div>
    );
  } else {
    return <Home />;
  }
};
export default About;
