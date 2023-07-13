const Orders = () => {
  async function getOrders() {
    const response = await fetch("localhost:4000/orders/1");
    const orders = await response.json();
  }
  return (
    <>
      <h1>Cart</h1>
      <div>{orders}</div>
    </>
  );
};

export default Cart;
