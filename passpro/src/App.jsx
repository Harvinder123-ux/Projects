import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Manger from "./components/Manger";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="min-h-[85vh]"> */}
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Manger />
      </div>
        <Footer />

      {/* </div> */}
      {/* <div>This is My Ui for passpro</div> */}
    </>
  );
}

export default App;
