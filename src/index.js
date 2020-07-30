import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#64B5F6",
      main: "#42A5F5",
      dark: "#2196F3",
    },
    secondary: {
      light: "#FF8A65",
      main: "#BBDEFB",
      dark: "#FF5722",
    },
  },
  background: {
    paper: "#000000",
  },
  direction: "ltr",
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
