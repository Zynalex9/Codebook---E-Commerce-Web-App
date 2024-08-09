const token = JSON.parse(sessionStorage.getItem("token"));
const cbid = JSON.parse(sessionStorage.getItem("cbid"));
export async function getUsers() {
  
    try {
        const response = await fetch(
          `http://localhost:3000/600/users/${cbid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
}

export async function createOrder(cartList,total,user) {
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
  const response = await fetch("http://localhost:3000/660/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });
  const data = await response.json()
  return data
}