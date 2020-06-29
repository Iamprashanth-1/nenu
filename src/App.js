import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import { Project } from './components/Projects';
import {Contact} from './components/Contact';
//import Sidebar from './components/Sidebar';


class Myne extends React.Component {
  render() {
    return (
      <React.Fragment>
  <Router>
  <NavigationBar />
  <Switch>
  <Route exact path="/Home" component={Home} />
  <Route exact path="/About" component={About} />
  <Route exact path="/Projects" component={Project} />
  <Route exact path="/Contact" component={Contact} />
  <Route component={NoMatch} />
  </Switch>
    
    
  </Router>
</React.Fragment>
    );
  }
}
ReactDOM.render(<Myne />, document.getElementById('root'));
  
//ReactDOM.render(<Car />, document.querySelector('#app'));
export default Myne;