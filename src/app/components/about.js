/* eslint-disable max-len */
import React from 'react';

import '../../styles/components/about.scss';

export default class AboutComponent extends React.Component {
  render () {
    return (
      <div className="section-aboutme">
        <div className="container">
          <h3>About Me</h3>
          <div className="col-md-3">
            <img src="/assets/image/man2.png" className="section-aboutme__image" alt="man" />
          </div>
          <div className="col-md-9 info-section">
            <h4 className="info-section__name">Benjamin Thomson</h4>
            <h5>Web &amp; UX Designer</h5>
            <p>Ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque latu dantium, totam rem aperiam, eaque ipsa quae ab illo tempor dignissim at. </p>
            <div className="signature"><img src="/assets/image/signature.png" alt="signature" className="img-responsive" /></div>
            <ul className="list-unstyled text-uppercase">
              <li><b>Date Of Birth:</b> 24 Jan 1989</li>
              <li><b>Phone:</b> 012-345-6789</li>
              <li><b>Email:</b> Sility@example.com</li>
              <li><b>Address:</b> 123 Sility, South Corner Street, Melborne, Australia.</li>
              <li><b>Website:</b> http://www.example.com</li>
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