const Store = () => {
  const cartStyle = {
    color: "Red",
  };
  return (
    <>
      <h1>DRM Store</h1>
      <div>
        <input type="text" placeholder="Search.."></input>
        <button style={cartStyle} type="button">
          Cart
        </button>
      </div>
    </>
  );
};

export default Store;
