import { useEffect, useState } from "react";

const Orders = () => {
  async function getOrders() {
    const response = await fetch("/orders");
    const orders = await response.json();
    setOrders([...orders]);
  }
  
  useEffect(() => getOrders(), []);
  const [orders, setOrders] = useState([]);
  // let ordersArr = [];
  // for (let o in orders) {
  //   ordersArr.push([o, orders[o]]);
  // }
  // let strOrders = ordersArr;
  // for (let i = 0; i < strOrders.length; i++) {
  //   let curr = strOrders[i];
  //   for (let j = 0; j < curr.items.length; j++) {
  //     curr.items[j] = JSON.stringify(curr.items[j]);
  //   }
  // }
  const renderOrders = orders.map((o) => (
    <div>
      {"Order ID: " + o._id + " Items: " + o.items.map((i) => " " + i.name + " " + i.Price)}
    </div>
    
    ));
  return (
    <>
      <h1>Orders</h1>
      <div>{renderOrders}</div>
    </>
  );
};

export default Orders;
