import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarkettingApp from "./components/MarkettingApp";
import Header from "./components/Header";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarkettingApp />
      </div>
    </BrowserRouter>
  );
};
