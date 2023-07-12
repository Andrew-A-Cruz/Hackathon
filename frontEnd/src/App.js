import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./Store.js";
function App() {
  return (
    <>
      <Store />
      <Router>
        <Routes>
          <Route exact path="/"></Route>
          <Route path="/cart"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
