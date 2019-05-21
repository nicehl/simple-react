import React from 'react';
import '../../styles/components/skill.scss';

export default class SkillComponent extends React.Component {
  render () {
    return (
      <section className="skill">
        <div className="container">
          <h3>my skills values</h3>
          <div className="technical">
            <h4>Technical skills</h4>
            <div className="technical__info">
              <label>wordpress</label>
              <div className="progressbar progresssbar--wordpress">
                <div className="active"></div>
                <div className="button">85%</div>
              </div>
            </div>
            <div className="technical__info">
              <label>photoshop</label>
              <div className="progressbar progresssbar--photoshop">
                <div className="active"></div>
                <div className="button">99%</div>
              </div>
            </div>
            <div className="technical__info">
              <label>html &amp; css</label>
              <div className="progressbar progresssbar--html">
                <div className="active"></div>
                <div className="button">75%</div>
              </div>
            </div>
            <div className="technical__info">
              <label>javascript</label>
              <div className="progressbar progresssbar--javascript">
                <div className="active"></div>
                <div className="button">67%</div>
              </div>
            </div>
          </div>
          <div className="knowledge">
            <h4>knowledge</h4>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>install and configure
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>ux and ui design
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>web usability
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>logo design
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>digital painting
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>3d animation &amp; visual effects
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>grid and layout
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>audio video editing
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>mobile app design
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>photography
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>graphical design
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>web development
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>seo optimization
            </div>
            <div className="cell">
              <i className="icon ion-md-arrow-forward"></i>digital marketing
            </div>
          </div>
          <h4>language skills</h4>
          <div className="language">
            <div className="w-33">
              <div className="wrapper p99">
                <span></span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                  <div className="inner-circle">99%</div>
                </div>
              </div>
              <label className="title">English Experience</label>
            </div>
            <div className="w-33">
              <div className="wrapper p80">
                <span></span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                  <div className="inner-circle">80%</div>
                </div>
              </div>
              <label className="title">Franch Advanced</label>
            </div>
            <div className="w-33">
              <div className="wrapper p69">
                <span></span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                  <div className="inner-circle">69%</div>
                </div>
              </div>
              <label className="title">German Basic</label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}