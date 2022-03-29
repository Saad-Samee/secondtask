import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Base from "./components/Layout/Base";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import About from "./components/Pages/About";
import PageNotFound from "./components/Pages/PageNotFound";

function App() {
  return (
    <Router>
      <Base>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Route component={PageNotFound} />
        </Switch>
      </Base>
    </Router>
  );
}

export default App;
