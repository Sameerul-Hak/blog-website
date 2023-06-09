import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Regsiter } from "./pages/login/Regsiter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailsPages } from "./pages/details/DetailsPages";
import { Account } from "./pages/account/Account";
// import { Create } from "./pages/create/Create";
import About from "./pages/about/about";
import Create from "./components/create/Create";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Regsiter} />
          <Route exact path="/details/:id" component={DetailsPages} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
