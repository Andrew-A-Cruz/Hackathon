import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "./Store.js";
import Cart from "./Cart.js";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Store}></Route>
        <Route path="/cart" Component={Cart}></Route>
      </Routes>
    </>
  );
}

export default App;
