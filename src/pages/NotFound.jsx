import useScrollToTop from "helpers/hooks/useScrollToTop";
import Footer from "part/Footer";
import Header from "part/Header";
import PageErrorMessage from "part/PageErrorMessage";
import Sitemap from "part/Sitemap";
import React from "react";

export default function NotFound() {
  useScrollToTop();
  return (
    <>
      <Header theme="black" position="relative" />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
