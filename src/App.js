import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Signup from "./components/loginCom/Signup";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/destination">
          {/* <Destination></Destination> */}
        </Route>
        <Route exact path="/blog">
          <Blog></Blog>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
