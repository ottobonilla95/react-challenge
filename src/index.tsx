import "react-hot-loader/patch";
import React, { Component } from "react";
import ReactDOM from "react-dom";

// App
import App from "./App";
import { AppContainer } from "react-hot-loader";

// react-redux
import { Provider } from "react-redux";

// configureStore
import { configureStore } from "./redux";

// ThemeProvider
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

// css
import './index.css'

// typescript
declare let module: { hot: any };

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <Component />
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App.tsx", () => {
    const NextRootContainer = require("./App.tsx").default;
    render(NextRootContainer);
  });
}
