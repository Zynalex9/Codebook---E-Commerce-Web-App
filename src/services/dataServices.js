const token = JSON.parse(sessionStorage.getItem("token"));
const cbid = JSON.parse(sessionStorage.getItem("cbid"));
export async function getUsers() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${import.meta.env.VITE_API_KEY}/600/users/${cbid}`,requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}

export async function createOrder(cartList, total, user) {
  const order = {
    cartList: cartList,
    amount_Paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: cbid,
    },
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  };
  const response = await fetch(
    `${import.meta.env.VITE_API_KEY}/660/orders`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}
export async function getUserOrders() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_KEY}/660/orders?user.id=${cbid}`,requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}
