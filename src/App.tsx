import React from "react";

import "./css/reset.css";
import "./css/nav.css";
import "./css/index.css";
import "./css/about.css";
import "./css/menu.css";
import "./css/bookingForm.css";

import Nav from "./components/Nav";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import Index from "./components/Index";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Nav />
      <About />
      <Index />
      <Menu />
      <BookingForm />
    </>
  );
}

export default App;
