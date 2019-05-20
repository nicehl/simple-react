import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutContainer from './containers/aboutContainer';
import BlogContainer from './containers/blogContainer';
import ContactContainer from './containers/contactContainer';
import EducationContainer from './containers/educationContainer';
import ExperienceContainer from './containers/experienceContainer';
import HomeContainer from './containers/homeContainer';
import SkillContainer from './containers/skillContainer';
import WorkContainer from './containers/workContainer';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/about" component={AboutContainer} />
      <Route path="/blog" component={BlogContainer} />
      <Route path="/contact" component={ContactContainer} />
      <Route path="/education" component={EducationContainer} />
      <Route path="/experience" component={ExperienceContainer} />
      <Route path="/skill" component={SkillContainer} />
      <Route path="/work" component={WorkContainer} />
      {/* <Route component={NotFound} /> */}
    </Router>
  );
};


export default Routes;
