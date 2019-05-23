/* eslint-disable max-len */
import React from 'react';

import '../../styles/components/about.scss';

export default class AboutComponent extends React.Component {
  render () {
    const { profile } = this.props;

    return (
      <div className="section-aboutme">
        <div className="container">
          <h3>About Me</h3>
          <div className="col-md-3">
            <img src="/assets/image/man2.png" className="section-aboutme__image" alt="man" />
          </div>
          <div className="col-md-9 info-section">
            <h4 className="info-section__name">{profile.name}</h4>
            <h5>{profile.title}</h5>
            <p>{profile.description}</p>
            <div className="signature"><img src="/assets/image/signature.png" alt="signature" className="img-responsive" /></div>
            <ul className="list-unstyled text-uppercase">
              <li><b>Date Of Birth:</b> {profile.dob}</li>
              <li><b>Phone:</b> {profile.phone}</li>
              <li><b>Email:</b> {profile.email}</li>
              <li><b>Address:</b> {profile.address}</li>
              <li><b>Website:</b> {profile.website}</li>
            </ul>
            <h3 className="todoHeader">What I'm Doing</h3>
            <div className="row">
              <div className="col-sm-4">
                <div className="service">
                  <div className="icon"><i className="ion-monitor"></i></div>
                  <h5>Web &amp; UX Design</h5>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="service">
                  <div className="icon"><i className="ion-iphone"></i></div>
                  <h5>App Development</h5>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="service">
                  <div className="icon"><i className="ion-trophy"></i></div>
                  <h5>Marketing</h5>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}