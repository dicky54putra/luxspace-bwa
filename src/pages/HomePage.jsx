import Clients from "part/Clients";
import Footer from "part/Footer";
import Header from "part/Header";
import Hero from "part/HomePage/Hero";
import BrowseTheRoom from "part/HomePage/BrowseTheRoom";
import JustArrived from "part/HomePage/JustArrived";
import Sitemap from "part/Sitemap";
import React from "react";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDom from "helpers/hooks/useModalDom";

export default function HomePage() {
  useScrollAnchor();
  useModalDom();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
