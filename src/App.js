import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/contacts/Contacts";
import Header from "./Components/layout/Header";
import About from "./Components/pages/About";
import AddContact from "./Components/contacts/AddContact";
import NotFound from "./Components/pages/NotFound";
import Test from './Components/test/Test';
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EditContact from "./Components/contacts/EditContact";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header></Header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route exact path="/contact/edit/:id" component={EditContact}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/test" component={Test}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
