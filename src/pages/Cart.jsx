import Footer from "part/Footer";
import Header from "part/Header";
import React from "react";
import Breadcrumb from "components/Breadcrumb";
import Sitemap from "part/Sitemap";
import ShoppingCart from "part/Cart/ShoppingCart";
import ShippingDetail from "part/Cart/ShippingDetail";
import useScrollToTop from "helpers/hooks/useScrollToTop";

export default function Cart() {
  useScrollToTop();
  return (
    <>
      <Header theme="black" position="relative" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shoping Cart" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetail />
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </>
  );
}
