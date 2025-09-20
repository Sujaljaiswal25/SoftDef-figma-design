import React from "react";
import TopNav from "./components/navbars/TopNav";
import LeftNav from "./components/navbars/LeftNav";
import BigPoster from "./components/poster/BigPoster";
// import FilterBar from "./components/utils/FilterBar";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
      <div className="w-[100%] min-h-screen">
        <TopNav />
        <div className="w-[100%] flex h-fit pl-0 p-3">
          <LeftNav />
          <div className="w-[100%] pt-0 flex flex-col gap-4 h-fit pl-0 p-3">
            <BigPoster />
            <Products />
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default App;
