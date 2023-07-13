import inventory from "./candy.json";
import { useState, useEffect } from "react";
import { getOrder, getOrders, addOrder } from "./rest";
import { redirect } from "react-router-dom";

// for (let i = 0; i < inventory.candies.length; i++) {
//   candies.push(
//     "Name: " +
//       inventory.candies[i].name +
//       " Price: " +
//       inventory.candies[i].Price
//   );
// }
function Store() {
  const [cart, setCart] = useState([]);
  //const [remove, removeFromCart] = useState([])
  const [candies, setCandies] = useState([]);
  useEffect(() => {
    setCandies([...inventory]);
  }, []);
  const renderList = candies.map((candy) => (
    <div>
      <button
        onClick={(e) => {
          setCart([...cart, candy]);
        }}
        type="button"
      >
        Add to Cart
      </button>
      { " ---> " + candy.name + " --- " + "Price: $" + candy.Price}
      <p></p>
    </div>
  ));
  const renderCart = cart.map((candy) => (
    <div>
      {candy.name + " Price: " + candy.Price}
      {/* <button
        onClick={(e) => {
          setCart([...cart, candy]);
        
        }}
        type="button"
      >
        Remove from cart
      </button> */}
    </div>
  ));
  
  async function submitOrder() {
    let data = await addOrder(cart);
    setCart([]);
    window.location.assign(`/orders/${data.insertedId}`);
  }
  return (
    <>
      <h1>DRM Candy Store</h1>
      <div>
        <h1>Candies:</h1>
        <p></p>
        {renderList}
      </div>
      <br></br>
      <hr></hr>
      <h1>Cart</h1>

      {renderCart}

      <h2>{"Total: " + cart.reduce((total, cart) => {
        return parseFloat(
          Math.round((parseFloat(cart.Price) + parseFloat(total)) * 100) / 100
        ).toFixed(2);
      }, 0)}</h2>
      <br></br>
      <button type="button" onClick={submitOrder}> Checkout </button>
    </>
  );
}

export default Store;
