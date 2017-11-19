import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation/Navigation.jsx';
import Home from './Home.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Page1 = function(props) {
  return (
    <div>I am on Page 1</div>
  )
}

const Page2 = function(props) {
  return (
    <div>I am on Page 2</div>
  )
}

const App = function(props) {
  return (
    <Router>
      <div>
        <Navigation/>
        <Route exact path="/" component={Home}/>
        <Route path="/Page1" component={Page1}/>
        <Route path="/Page2" component={Page2}/>
      </div>
    </Router>
  );
}
 
ReactDOM.render(<App/>, document.getElementById('root'));