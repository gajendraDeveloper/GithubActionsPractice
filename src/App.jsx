import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/common/PrivateRoute";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";
import Journal from "./pages/Journal";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"
import OrderSuccessfull from "./pages/OrderSuccessfull";
import ScrollToTop from "./utils/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
      <ScrollToTop />
      {/* <div>Hi This side gajendra</div> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orderSuccessfull" element={<OrderSuccessfull />} />
              <Route path={"/productdetail/:id"} element={<ProductDetail/>}/>
            </Route>
          </Route>
        </Routes>
      </Suspense>
      
    </>
  );
}

export default App;
