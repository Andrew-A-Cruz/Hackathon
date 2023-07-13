import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Order = (props) => {
    const {id} = useParams();
  async function getOrder() {
    const response = await fetch(`/orders/${id}`);
    const order = await response.json();
    console.log(order);
    setOrder([order]);
  }
  
  useEffect(() => getOrder(), []);
  const [order, setOrder] = useState([]);
  //console.log(order);
  const renderOrder = order.map((o) => (
    <>
    <div>
      {"Order ID: " + o._id}
    </div>
    <br></br>
    <div>
        { " Items: " + o.items.map((i) => " " + i.name + " $" + i.Price) }
    </div>
    </>
    
    
    ));
    async function backHome() {
        window.location.assign(`/`);
      }
  return (
    <>
      <h1>Thank You For Shopping with Us!</h1>
      <h2>Here is your order: </h2>
      <div>{renderOrder}</div>
      <br></br>
      <p> Still Hungry? </p>
      <button type="button" onClick={backHome}> Buy more Candy </button>
    </>
  );
};

export default Order;
