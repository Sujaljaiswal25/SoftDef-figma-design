import React, { useState, Suspense } from "react";
import TopNav from "./components/navbars/TopNav";
import BigPoster from "./components/poster/BigPoster";
import Footer from "./components/footer/Footer";

const Products = React.lazy(() => import("./components/products/Products"));
const MobileNav = React.lazy(() => import("./components/navbars/MobileNav"));

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <TopNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="w-full mt-3  flex h-fit">
        <Suspense fallback={<div className="h-screen w-64 bg-gray-100"></div>}>
          <MobileNav
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </Suspense>
        <div className="w-full flex flex-col gap-4 px-2 md:px-4">
          <BigPoster />
          <Suspense
            fallback={
              <div className="w-full h-96 flex items-center justify-center">
                Loading products...
              </div>
            }
          >
            <Products />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
