import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/header.scss';

export default class NavLink extends React.Component {
  
  render () {
    const { title, selected, location } = this.props;

    return (
      <Link to={location} className={ selected ? 'nav_link--active' : 'nav_link' }>{title}</Link>
    );
  }

}