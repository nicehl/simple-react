import React from 'react';
import { Route } from 'react-router-dom';

import AboutContainer from './containers/about';
import BlogContainer from './containers/blog';
import ContactContainer from './containers/contact';
import EducationContainer from './containers/education';
import ExperienceContainer from './containers/experience';
import HomeContainer from './containers/home';
import SkillContainer from './containers/skill';
import WorkContainer from './containers/work';

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route path="/blog" component={BlogContainer} />
        <Route path="/contact" component={ContactContainer} />
        <Route path="/education" component={EducationContainer} />
        <Route path="/experience" component={ExperienceContainer} />
        <Route path="/skill" component={SkillContainer} />
        <Route path="/work" component={WorkContainer} />
      </div>
    );
  }
}

export default Routes;
