export const FilterReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "PRODUCT_LIST":
        return { ...state, ProductList: payload.products };
      case "SORT_BY":
        return 
      case "RATINGS":
        return 
      case "IN_STOCK_ONLY":
        return 
      case "BEST_SELLER_ONLY":
        return 
      case "CLEAR":
        return initialState;
      default:
        throw new Error("No case found");
    }
  };
  