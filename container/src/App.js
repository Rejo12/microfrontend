import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import MarkettingApp from "./components/MarkettingApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarkettingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
