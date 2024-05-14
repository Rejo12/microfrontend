import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (ele) => {
  ReactDOM.render(<App />, ele);
};

// If we are in dev and in isolation,
// call mount inmediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
