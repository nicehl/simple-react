import React from 'react';
import '../styles/components/header.scss';

export default class Header extends React.Component {

  render () {
    return (
      <header className="header">
        <div className="header__title"><a href="./index.html">Sility</a></div>
        <a href="" className="header__btn-action">+</a>
        <a href="" className="header__btn-menu">Menu <i className="fa fa-bars"></i></a>
        <nav className="nav-main">
          <ul className="list-unstyled">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Skill</a></li>
            <li><a>Experience</a></li>
            <li><a>Education</a></li> 
            <li><a>Work</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}