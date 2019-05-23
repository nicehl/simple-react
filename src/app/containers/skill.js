import React from 'react';
import { connect } from 'react-redux';

import SkillComponent from '../components/skill';

class SkillContainer extends React.Component {
  render () {
    const { percents } = this.props;
    return (
      <SkillComponent percents={percents}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    percents: state.skill.percent
  };
};

export default connect(mapStateToProps, null)(SkillContainer);