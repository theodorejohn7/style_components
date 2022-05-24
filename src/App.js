import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <Routes>
        <Route path="/"  exact  element={<Home />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/pricing" exact element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
