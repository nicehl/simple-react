/* eslint-disable consistent-return */
import React from 'react';
import { connect } from 'react-redux';

import AboutComponent from '../components/about';

class AboutContainer extends React.Component {

  render () {
    const { profile } = this.props;
    return (
      <AboutComponent profile={profile} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  };
};

export default connect(mapStateToProps, null)(AboutContainer);