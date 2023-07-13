import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "./Store.js";
import Orders from "./Orders.js";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Store}></Route>
        <Route path="/orders" Component={Orders}></Route>
      </Routes>
    </>
  );
}

export default App;
