import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component{
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" to="/">My Site</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to="/Page1">Features</Link>
              <Link className="nav-item nav-link" to="/Page2">Pricing</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  };
}