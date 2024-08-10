import React, { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { createOrder, getUsers } from "../../../services";
import { toast } from "react-toastify";

export const Checkout = ({ setCheckOut }) => {
  useTitle("Checkout");
  const { total, cartList, clearCart } = useCart();
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      setUser(data);
    }
    fetchData();
  }, []);

  async function handleOrderSubmit(event) {
    event.preventDefault();
    try {
      const data = await createOrder(cartList, total, user);
      clearCart();
      navigate("/order-summary", { state: { data: data, status: true } });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/order-summary", { state: { data: data, status: false } });
    }
  }

  return (
    <section className="z-50">
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-40">
        <div
          id="authentication-modal"
          tabIndex="-1"
          className="relative w-full max-w-lg h-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
        >
          <button
            onClick={() => setCheckOut(false)}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
            </h3>
            <form onClick={handleOrderSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  value={
                    user.name
                      ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
                      : ""
                  }
                  disabled
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  value={user.email || ""}
                  disabled
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="card"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Card Number:
                </label>
                <input
                  type="number"
                  name="card"
                  id="card"
                  className="w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  value="4215625462597845"
                  disabled
                  required
                />
              </div>
              <div className="flex space-x-3">
                <div>
                  <label
                    htmlFor="month"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Expiry Month:
                  </label>
                  <input
                    type="number"
                    name="month"
                    id="month"
                    className="w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    value="03"
                    disabled
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="year"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Expiry Year:
                  </label>
                  <input
                    type="number"
                    name="year"
                    id="year"
                    className="w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    value="27"
                    disabled
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Security Code:
                </label>
                <input
                  type="number"
                  name="code"
                  id="code"
                  className="w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  value="523"
                  disabled
                  required
                />
              </div>
              <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">
                ${total}
              </p>
              <button
                type="submit"
                className="w-full py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
