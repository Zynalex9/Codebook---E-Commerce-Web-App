import { Header, Footer, ScrollToTop } from "./components";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <div className="dark:bg-darkBg">
    <Header/>
    <ScrollToTop/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
