import React from 'react';
import '../../styles/components/education.scss';

export default class EducationComponent extends React.Component {
  render () {
    return (
      <section className="section">
        <div className="container">
          <h3 >Educational value</h3>
          <div className="education">
            <div className="info-degree">
              <div className="marker"></div>
              <div className="card">
                <span>University Of Design</span>
                <h4>Master Degree of Design</h4>
              </div>
              <div className="year">
                        2005 - 2006
              </div>
            </div>
            <div className="info-degree">
              <div className="marker"></div>
              <div className="card">
                <span>University Of Design</span>
                <h4>Master Degree of Design</h4>
              </div>
              <div className="year">
                        2006 - 2007
              </div>
            </div>
            <div className="info-degree">
              <div className="marker"></div>
              <div className="card">
                <span>University Of Design</span>
                <h4>Master Degree of Design</h4>
              </div>
              <div className="year">
                        2007 - 2008
              </div>
            </div>
            <div className="info-degree">
              <div className="marker"></div>
              <div className="card">
                <span>University Of Design</span>
                <h4>Master Degree of Design</h4>
              </div>
              <div className="year">
                        2008 - 2009
              </div>
            </div>
            <div className="time-line"></div>
          </div>
          <h3 >Hobbies &amp; Interest</h3>
          <div className="hobbies">
            <div className="icon-box">
              <div className="iconcard">
                <div className="icon">
                  <i className="ion-md-easel"></i>
                </div>
                <h5>web research</h5>
              </div>
            </div>
            <div className="icon-box">
              <div className="iconcard">
                <div className="icon">
                  <i className="ion-ios-camera"></i>
                </div>
                <h5>photography</h5>
              </div>
            </div>
            <div className="icon-box">
              <div className="iconcard">
                <div className="icon">
                  <i className="ion-md-airplane"></i>
                </div>
                <h5>travelling</h5>
              </div>
            </div>
            <div className="icon-box">
              <div className="iconcard">
                <div className="icon">
                  <i className="ion-ios-bookmarks"></i>
                </div>
                <h5>book reading</h5>
              </div>
            </div>
            <div className="icon-box">
              <div className="iconcard">
                <div className="icon">
                  <i className="ion-ios-musical-notes"></i>
                </div>
                <h5>music</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}