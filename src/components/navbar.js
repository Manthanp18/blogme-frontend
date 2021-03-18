import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/api/blogs" className="navbar-brand">BlogMe</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/api/blogs" className="nav-link">Bloglist</Link>
          </li>
          <li className="navbar-item">
          <Link to="/api/blog/add" className="nav-link">Create Blog</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}