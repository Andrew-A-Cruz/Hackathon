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
      {candy.name + " Price: " + candy.Price}
      <button
        onClick={(e) => {
          setCart([...cart, candy]);
        }}
        type="button"
      >
        Add to Cart
      </button>
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
    console.log("reached submitOrder");
    let data = await addOrder(cart);
    console.log("data:     " + JSON.stringify(data.insertedId));
    setCart([]);
    return redirect(`/orders/${data.insertedId}`);
  }
  return (
    <>
      <h1>DRM Candy Store</h1>
      <div>
        <div>Candies:</div>
        <p></p>
        {renderList}
      </div>
      <div>Cart</div>

      {renderCart}

      {cart.reduce((total, cart) => {
        return parseFloat(
          Math.round((parseFloat(cart.Price) + parseFloat(total)) * 100) / 100
        ).toFixed(2);
      }, 0)}
      <button type="button" onClick={submitOrder}> Checkout </button>
    </>
  );
}

export default Store;
