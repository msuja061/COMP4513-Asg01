import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayDetails from "./Components/Details/PlayDetails";

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail" element={<PlayDetails />} />
    </Routes>
  </BrowserRouter>,
    document.getElementById("root")
);
