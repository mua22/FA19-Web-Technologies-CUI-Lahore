import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/LogOut";
import jwtDecode from "jwt-decode";
function App() {
  return (
    <div className="container">
      {/* <Products /> */}
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
              {getLoggedInUser() ? (
                <Link
                  className="nav-item nav-link active"
                  to="/logout"
                  aria-current="page"
                >
                  Logout {getLoggedInUser().name}
                </Link>
              ) : (
                <Link
                  className="nav-item nav-link active"
                  to="/login"
                  aria-current="page"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/products/new" component={NewProduct} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />

          <Route path="/about">
            <About />
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
function getLoggedInUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export default App;
