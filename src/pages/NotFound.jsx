import Documents from "part/Documents";
import Footer from "part/Footer";
import Header from "part/Header";
import PageErrorMessage from "part/PageErrorMessage";
import Sitemap from "part/Sitemap";
import React from "react";

export default function NotFound() {
  return (
    <Documents>
      <Header theme="black" position="relative" />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </Documents>
  );
}
