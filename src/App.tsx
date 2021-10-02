import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import GlobalStyles from "./globalStyles";
import Homepage from "./pages/Homepage/Homepage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search/query/:id" component={SearchPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
