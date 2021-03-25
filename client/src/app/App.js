import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import Navibar from "../components/Navber";
import "bootstrap/dist/css/bootstrap.css";
import MovieList from "../pages/MovieList";
import MovieInsert from "../pages/MovieInsert";
import MovieUpdate from "../pages/MovieUpdate";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navibar />
        <Switch>
          <Route exact path="/movie/list">
            <MovieList />
          </Route>
          <Route exact path="/movie/create">
            <MovieInsert />
          </Route>
          <Route exact path="/movie/update/:id">
            <MovieUpdate />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
