export function getOrders() {
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  var myInit = { method: "GET", headers: myHeaders, mode: "cors" };
  let promise = fetch("/orders", myInit);
  return promise.then((response) => {
    return response.json();
  });
}
export function getOrder() {
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  var myInit = { method: "GET", headers: myHeaders, mode: "cors" };
  let promise = fetch("/orders/:id", myInit);
  return promise.then((response) => {
    return response.json();
  });
}
export function addOrder(order) {
  let url = "/orders/";
  let myHeaders = new Headers({ "Content-Type": "application/json" });
  delete order.id;
  let body = JSON.stringify(order);
  var myInit = {
    method: "POST",
    body: body,
    headers: myHeaders,
    mode: "cors",
  };
  let promise = fetch(url, myInit);
  return promise.then((response) => {
    return response.text();
  });
}
