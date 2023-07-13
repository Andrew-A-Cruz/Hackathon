import { useEffect, useState } from "react";

const Orders = () => {
  async function getOrders() {
    const response = await fetch("localhost:4000/orders");
    const orders = await response.json();
    setOrders([...orders]);
  }
  useEffect(() => getOrders(), []);
  const [orders, setOrders] = useState([]);
  return (
    <>
      <h1>Cart</h1>
      <div>{orders}</div>
    </>
  );
};

export default Orders;
