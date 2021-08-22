import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react-redux";

import { theme } from "./themes/theme";
import Routes from "./routes";

function App() {
  return (
    <MuiThemeProvider
      theme={theme}
      children={
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      }
    />
  );
}

export default App;
