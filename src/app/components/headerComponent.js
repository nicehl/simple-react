/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../../styles/components/header.scss';

export default class HeaderComponent extends React.Component {

  goHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  goAbout = () => {
    const { history } = this.props;
    history.push('/about');
  }

  goSkill = () => {
    const { history } = this.props;
    history.push('/skill');
  }

  goExperience = () => {
    const { history } = this.props;
    history.push('/experience');
  }
  
  goEducation = () => {
    const { history } = this.props;
    history.push('/education');
  }
  
  goWork = () => {
    const { history } = this.props;
    history.push('/work');
  }
  
  goBlog = () => {
    const { history } = this.props;
    history.push('/blog');
  }
  
  goContact = () => {
    const { history } = this.props;
    history.push('/contact');
  }

  render () {
    const { goHome, goAbout, goSkill, goExperience, goEducation, goWork, goBlog, goContact } = this;
    return (
      <header className="header">
        <div className="header__title"><a href="./index.html">Sility</a></div>
        <a href="" className="header__btn-action">+</a>
        <a href="" className="header__btn-menu">Menu <i className="fa fa-bars"></i></a>
        <nav className="nav-main">
          <ul className="list-unstyled">
            <li><a onClick={ goHome }>Home</a></li>
            <li><a onClick={ goAbout }>About</a></li>
            <li><a onClick={ goSkill }>Skill</a></li>
            <li><a onClick={ goExperience }>Experience</a></li>
            <li><a onClick={ goEducation }>Education</a></li> 
            <li><a onClick={ goWork }>Work</a></li>
            <li><a onClick={ goBlog }>Blog</a></li>
            <li><a onClick={ goContact }>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}