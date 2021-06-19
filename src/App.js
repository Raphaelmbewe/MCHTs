import React from "react";
import { Home } from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Services } from './Services';
import { AboutUs } from './AboutUs';


function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <AboutUs />
          </Route>
          <Route path='/services' exact>
            <Services />
          </Route>
        </Switch>
    </Router>
  );

}

export default App;
