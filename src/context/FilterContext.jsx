import React, { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/FilterReducer";

const initialState = {
  ProductList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

export const FilterContext = createContext(initialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);

  function initialProducts(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  const value = {
    ProductList: state.ProductList,
    initialProducts,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
