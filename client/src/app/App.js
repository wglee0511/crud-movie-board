import React from "react";
import { HashRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import Navibar from "../components/Navber";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navibar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
