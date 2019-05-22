import React from 'react';
import { withRouter } from 'react-router';

import HeaderComponent from '../components/header';

class HeaderContainer extends React.Component {
  render () {
    const { location } = this.props;
    return (
      <HeaderComponent location={location} />
    );
  }
}

export default withRouter(HeaderContainer);