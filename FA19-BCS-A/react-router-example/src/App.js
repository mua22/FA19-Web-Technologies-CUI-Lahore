import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import Calculator from "./components/Calculator/Calculator";
function App() {
  return (
    <div className="container">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Browser Router
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-item nav-link active"
                to="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                className="nav-item nav-link active"
                to="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                className="nav-item nav-link active"
                to="/calculator"
                aria-current="page"
              >
                Calculator
              </Link>
              <Link
                className="nav-item nav-link active"
                to="/users"
                aria-current="page"
              >
                Users
              </Link>
              <Link
                className="nav-item nav-link active"
                to="/"
                aria-current="page"
              >
                Home
              </Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/products/new" component={NewProduct} />
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/about">
            This is about page
            <About />
          </Route>

          <Route path="/products">
            <Products />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
