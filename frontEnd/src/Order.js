import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Order = (props) => {
    const {id} = useParams();
  async function getOrder() {
    const response = await fetch(`/orders/${id}`);
    const order = await response.json();
    setOrder([order]);
  }
  
  useEffect(() => getOrder(), []);
  const [order, setOrder] = useState([]);
  const renderOrder = order.map((o) => (
    <>
    <div>
      {"Order ID: " + o._id}
    </div>
    <br></br>
    <div>
        { " Items: " + o.items.map((i) => " " + i.name + " $" + i.Price) }
    </div>
    <h2>{"Total: $" + o.items.reduce((total, cart) => {
        return parseFloat(
          Math.round((parseFloat(cart.Price) + parseFloat(total)) * 100) / 100
        ).toFixed(2);
      }, 0)}</h2>
      <hr></hr>
      <h3>Payment</h3>
      <input
        type="text"
        placeholder="Name"
      />
      <input
        type="text"
        placeholder="Card Number"
      />
      <input
        type="text"
        placeholder="CVV"
      />
      <input
        type="text"
        placeholder="Date (MM/YYYY)"
      />
      <h3>Shipping</h3>
      <input
        type="text"
        placeholder="Street Address"
      />
      <input
        type="text"
        placeholder="City/Town"
      />
      <input
        type="text"
        placeholder="Country"
      />
      <input
        type="text"
        placeholder="Zip Code"
      />
      <p> </p>
      <div className="square-div"> <img src={require('./square-decal.jpg')}></img> </div>
      
      <p> </p>
      <button type="button" onClick = {() => window.location.assign('/')}> Submit </button>
    </>
    
    
    ));
    async function backHome() {
        window.location.assign(`/`);
      }
  return (
    <>
      <h1 className="store-name">DRM Candy Store</h1>
      <div className="drm">Democratic Republic of Mongo: Victor Chen, Calvin Chadima, Andrew Cruz</div>
      <div className="candy-div"> <img src={require('./candy.png')} className="candy-pic"></img></div>
      <h1 className="store-h1">Thank You For Shopping with Us!</h1>
      <h2>Here is your order: </h2>
      <div>{renderOrder}</div>
      <br></br>
      <p> Still Hungry? </p>
      <button type="button" onClick={backHome}> Back to Store </button>
    </>
  );
};

export default Order;
