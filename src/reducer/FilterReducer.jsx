export const FilterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LIST":
      return { ...state, ProductList: payload.products };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "RATINGS":
      return { ...state, ratings: payload.ratings };
    case "IN_STOCK_ONLY":
      return { ...state, onlyInStock: payload.inStockOnly };
    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("No case found");
  }
};
