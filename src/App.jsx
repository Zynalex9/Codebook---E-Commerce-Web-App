import React from "react";
import { Header, Footer, ScrollToTop } from "./components";
import { useFilter, FilterProvider } from "./context/FilterContext";
import AllRoutes from "./routes/AllRoutes";

function App() {
  const { ProductList } = useFilter();
  console.log(ProductList);

  return (
    <div className="dark:bg-darkBg">
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
