import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import CreateProduct from "./components/CreateProduct";
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
                to="/about"
                aria-current="page"
              >
                About
              </Link>
              <Link
                className="nav-item nav-link active"
                to="/"
                aria-current="page"
              >
                Products
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
                to="/home"
                aria-current="page"
              >
                Home
              </Link>
            </div>
          </div>
        </nav>
        <hr />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/products/create" component={CreateProduct} />
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" component={Products} />

          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <hr />
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
