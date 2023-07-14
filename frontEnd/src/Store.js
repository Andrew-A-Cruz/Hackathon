import inventory from "./candy.json";
import { useState, useEffect } from "react";
import { getOrder, getOrders, addOrder } from "./rest";
//import { redirect } from "react-router-dom";

function Store() {
  const [cart, setCart] = useState([]);
  const [candies, setCandies] = useState([]);
  const [filteredCandies, setFilteredCandies] = useState([]);
  const [categoryCandies, setCategoryCandies] = useState([]);

  // let audio = new Audio("./kaching.mp3");
  useEffect(() => {
    setCandies([...inventory]);
  }, []);
  useEffect(() => {
    let newFilterCandies = candies.filter((candy) =>
      candy.name.toLowerCase().includes(searchInput)
    );
    setFilteredCandies(newFilterCandies);
  });

  const [searchInput, setSearchInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [currCandy, setCurrCandy] = useState("");
  const search = (e) => {
    e.preventDefault();
    let newE = e.target.value;
    if (newE.includes("\\")) {
      newE = newE.replace("\\", "/");
      console.log("newE " + newE);
    }
    setSearchInput(newE);
  };
  const category = (c) => {
    setCategoryInput(c);
  };

  useEffect(() => {
    let newCategoryCandies = candies.filter((candy) =>
      candy.Flavor.includes(categoryInput)
    );
    setFilteredCandies(newCategoryCandies);
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  if (searchInput.length > 0) {
    candies.filter((c) => {
      return c.name.match(searchInput);
    });
  }
  function showDetails(cID) {
    setCurrCandy(cID);
  }

  const renderList = filteredCandies.map((candy) => (
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
      <div onClick={() => showDetails(candy["Candy ID"])}>
        {" ---> " + candy.name + " --- " + "Price: $" + candy.Price}
      </div>
      {currCandy === candy["Candy ID"] ? (
        <ul>
          <li>{candy.Flavor}</li>
          <li>{candy.Size + " oz"}</li>
        </ul>
      ) : (
        ""
      )}
      <p></p>
    </div>
  ));

  const renderCart = cart.map((candy) => (
    <div>{candy.name + " Price: " + candy.Price}</div>
  ));

  async function submitOrder() {
    let data = await addOrder(cart);
    setCart([]);
    window.location.assign(`/orders/${data.insertedId}`);
  }
  return (
    <>
      <div clasName="hero-image">
        <div className="hero-text">
          <h1 className="store-name">DRM Candy Store</h1>
          <div>
            <h1 className="store-h1">Candies:</h1>
            <input
              type="text"
              placeholder="Search here"
              onChange={search}
              value={searchInput}
            />
            <p></p>
            <div>
              <button onClick={handleOpen}>See Categories</button>
              {open ? (
                <ul className="menu">
                  <li className="menu-item">
                    <button onClick={() => category("Fruity")}>Fruity</button>
                  </li>
                  <p></p>
                  <li className="menu-item">
                    <button onClick={() => category("Sour")}>Sour</button>
                  </li>
                  <p></p>
                  <li className="menu-item">
                    <button onClick={() => category("Chocolate")}>
                      Chocolate
                    </button>
                  </li>
                  <p></p>
                  <li className="menu-item">
                    <button onClick={() => category("Mint")}>Mint</button>
                  </li>
                </ul>
              ) : null}
            </div>
            <p></p>
            <p></p>
            {renderList}
          </div>
          <br></br>
          <hr></hr>
          <h1 className="store-h1">Cart</h1>

          {renderCart}

          <h2>
            {"Total: $" +
              cart.reduce((total, cart) => {
                return parseFloat(
                  Math.round(
                    (parseFloat(cart.Price) + parseFloat(total)) * 100
                  ) / 100
                ).toFixed(2);
              }, 0)}
          </h2>
          <br></br>
          <button type="button" onClick={submitOrder}>
            {" "}
            Checkout{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Store;
