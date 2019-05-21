/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../../styles/components/footer.scss';

class FooterComponent extends React.Component {

  render () {
    return (
      <footer className="footer">
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h4>Address</h4>
                <p>123 Sility, South Corner Street,<br />Melbornem Australia. </p>
              </div>
              <div className="col-sm-4">
                <h4>Connect</h4>
                <div className="social-icons">
                  <a href="" className="social-icons__icon"><i className="fa fa-facebook"></i></a>
                  <a href="" className="social-icons__icon"><i className="fa fa-twitter"></i></a>
                  <a href="" className="social-icons__icon"><i className="fa fa-google-plus"></i></a>
                  <a href="" className="social-icons__icon"><i className="fa fa-behance"></i></a>
                  <a href="" className="social-icons__icon"><i className="fa fa-dribbble"></i></a>
                </div>
              </div>
              <div className="col-sm-4">
                <h4>Contact</h4>
                <p>Tel: +61 123-456-7890<br />Mail: websky112.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">Copyright © Pak Chongsong. All Rights Reserved.</div>
      </footer>
    );
  }
}

export default FooterComponent;