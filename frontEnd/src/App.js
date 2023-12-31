//import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "./Store.js";
import Orders from "./Orders.js";
import Order from "./Order.js";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Store}></Route>
        <Route path="/orders" Component={Orders}></Route>
        <Route path="/orders/:id" Component={Order}></Route>
      </Routes>
    </>
  );
}

export default App;
