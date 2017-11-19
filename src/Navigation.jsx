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
        <Link to="/"><div>Home</div></Link>
        <Link to="/Page1"><div>Page1</div></Link>
        <Link to="/Page2"><div>Page2</div></Link>
      </div>
    );
  };
}