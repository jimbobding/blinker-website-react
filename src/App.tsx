import React from "react";

import "./css/reset.css";
import "./css/nav.css";
import "./css/index.css";
import "./css/about.css";
import "./css/menu.css";
import "./css/bookingForm.css";
import "./css/merch.css";
import "./css/footer.css";

import Nav from "./components/Nav";
import About from "./components/About";
import BookingForm from "./components/BookingForm";

import Menu from "./components/Menu";
import Index from "./components";
import Merch from "./components/Merch";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Nav />
      <About />
      <Index />
      <Menu />
      <BookingForm />
      <Merch />
      <Footer />
    </>
  );
}

export default App;
