import inventory from "./candy.json";
const Store = () => {
  const cartStyle = {
    color: "Red",
  };
  //let candy = JSON.stringify(inventory);

  let candies = [];

  for (let candy in inventory.candies) {
    candies.push("Name: " + candy.name + " Price: " + candy.Price + "\n");
    console.log("candy " + typeof candy);
  }
  return (
    <>
      <h1>DRM Store</h1>
      <div>
        <input type="text" placeholder="Search.."></input>
        <button style={cartStyle} type="button">
          Cart
        </button>
        <p></p>
        {candies}
        <>{}</>
      </div>
    </>
  );
};

export default Store;
