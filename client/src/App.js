import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages/Routes";

function App() {
  return (
      <Router>
        <Pages />
      </Router>
  );
}

export default App;
