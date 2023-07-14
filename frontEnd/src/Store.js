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
  // let audio = new Audio("./kaching.mp3");
  useEffect(() => {
    setCandies([...inventory]);
  }, []);

  const searchBar = () => {}
  const [searchInput, setSearchInput] = useState("");
  const search = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      candies.filter((c) => {
      return c.name.match(searchInput);
  });
  }

  const renderList = candies.map((candy) => (
    <div>
      <button
        onClick={(e) => {
          setCart([...cart, candy]);
          // audio.play();
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
      <div clasName="hero-image">
        <div className='hero-text'>
      <h1 className="store-name">DRM Candy Store</h1>
      <div>
      <h1 className="store-h1">Candies:</h1>
      <input
      type="text"
      placeholder="Search here"
      onChange={search}
      value={searchInput} />
        <p></p>
        {renderList}
      </div>
      <br></br>
      <hr></hr>
      <h1 className="store-h1">Cart</h1>

      {renderCart}

      <h2>{"Total: $" + cart.reduce((total, cart) => {
        return parseFloat(
          Math.round((parseFloat(cart.Price) + parseFloat(total)) * 100) / 100
        ).toFixed(2);
      }, 0)}</h2>
      <br></br>
      <button type="button" onClick={submitOrder}> Checkout </button>
      </div>
      </div>
    </>
  );
}

export default Store;
