import React from "react";
import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";
const OrderPage = () => {
  const { state } = useLocation();
  const orderData = state.data;
  return (
    <main>
      {state.status ? <OrderSuccess data={orderData} /> : <OrderFail />}
    </main>
  );
};

export default OrderPage;
