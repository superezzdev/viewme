import React from "react";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden pr-6">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
