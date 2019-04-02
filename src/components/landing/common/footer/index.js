import React from 'react';
import { Link } from 'react-router-dom';

// import logo from './../../../../assets/img/firstleaf-icon-300x300.png';

import './footer.css';

class Footer extends React.Component {

  render() {
    const links = [
      {
        text: 'How it works',
        to: '/'
      },
      {
        text: 'Our Wines',
        to: '/'
      },
      {
        text: 'About Us',
        to: '/'
      },
      {
        text: 'Careers',
        to: '/'
      },
      {
        text: 'Press',
        to: '/'
      },
      {
        text: 'FAQ',
        to: '/'
      },
      {
        text: 'Contact Us',
        to: '/'
      },
      {
        text: 'Blog',
        to: '/'
      }
    ];

    const legalLinks = [
      {
        text: 'Term and Conditions',
        to: '/'
      },
      {
        text: 'Privacy Policy',
        to: '/'
      },
      {
        text: '© 2015 Firstleaf, Inc',
        to: '/'
      }
    ];

    const buttonLabel = 'Go to checkout';
    const phone = '1-800-347-0948';

    return (
      <footer>
        <div className="container-fluid">
          <div className="row pre-footer">
            <div className="col-md-offset-4 col-md-4">
              <button
                onClick={this.props.openModal}
                className="cta-btn cta-medium">
                {buttonLabel}
              </button>
              <div className="contact-faq">
                <p className="contact-text">
                  Questions?
                  <Link
                    className='footer-orange-link'
                    to='/'>
                    View our FAQ
                  </Link>
                  or
                  <Link
                    className='footer-orange-link'
                    to='/'>
                    Chat with us
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="row bottom-footer">
            <div className="col-md-6">
              <div className="logo-footer-wrapper">
                {/* <img
                  className="logo-img footer-logo"
                  src={logo}
                  alt="Firstleaf Logo"/> */}
              </div>

              <ul className="footer-links-list hide-on-sm">
                {
                  links.map((link, idx) => {
                    return (
                      <li key={idx}>
                        <Link
                          className='footer-link'
                          to={`${link.to}`}>
                          {`${link.text}`}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
              <ul className="footer-links-list hide-on-sm legal-links">
                {
                  legalLinks.map((link, idx) => {
                    return (
                      <li key={idx}>
                        <Link
                          className='footer-link'
                          to={`${link.to}`}>
                          {`${link.text}`}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
            <div className="col-md-6 phone-number-col">
              <div className="phone-message">
                <span className="orange-phone">Need Help?</span>
                <span className="phone-number">{phone}</span>
              </div>
            </div>
            <div className="col-xs-6">
              <ul className="footer-links-list hide-on-md">
                {
                  links.map((link, idx) => {
                    return (
                      <li key={idx}>
                        <Link
                          className='footer-link'
                          to={`${link.to}`}>
                          {`${link.text}`}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
            <div className="col-xs-6">
              <ul className="footer-links-list hide-on-md legal-links">
                {
                  legalLinks.map((link, idx) => {
                    return (
                      <li key={idx}>
                        <Link
                          className='footer-link'
                          to={`${link.to}`}>
                          {`${link.text}`}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>

          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;