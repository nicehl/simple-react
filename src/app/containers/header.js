import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import HeaderComponent from '../components/header';
import { togglePlugBtn } from '../store/actions';

class HeaderContainer extends React.Component {
  render () {
    const { location, togglePlugBtn } = this.props;
    return (
      <HeaderComponent location={location} togglePlugBtn={togglePlugBtn} />
    );
  }
}

const mapDispatchToProps = {
  togglePlugBtn
};

export default withRouter(connect(null, mapDispatchToProps)(HeaderContainer));