import React from 'react';
import { Modal } from 'react-bootstrap';

import Header from './common/header';
import Footer from './common/footer';
import AddEmail from './addEmail';
import Results from './results';
import WinesSelector from './winesSelector';
import WineCard from './wineCard';


import './landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmailModal: false
    };
  }

  toggleShowEmailModal = (show) => {
    this.setState({
      showEmailModal: show
    });
  }

  openEmailModal = () => {
    this.toggleShowEmailModal(true);
  }

  closeEmailModal = () => {
    this.toggleShowEmailModal(false);
  }

  render() {
    return (
      <div className="landing-wrapper">
        <Header openModal={this.openEmailModal} />
        <section className="landing-body">
          
          <Results />
          <WinesSelector />
          <WineCard />
        
        </section>
        <section className="floating-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="floating-purple-cta">
                  <h3 className="cta-title">As an introduction to Firstleaf wine club get these three wines for</h3>
                  <div className="row">
                    <div className="col-md-6 col-xs-6 price">
                      $15.00
                    </div>
                    <div className="col-sm-3 col-xs-4 tax-shipping">
                      <div>plus tax &</div>
                      <div>$4.95 shipping</div>
                    </div>
                  </div>
                  <div className="normal-price">
                    (Normal retail price: $39.50)
                  </div>
                  <div className="separator"></div>
                  <div>
                    <button className="cta-btn cta-large" onClick={this.openEmailModal}>Go to checkout</button>
                  </div>
                  
                  <div className="money-back">
                    Money Back Guarantee. Cancel Anytime.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        <Footer openModal={this.openEmailModal}></Footer>
        <Modal
          show={this.state.showEmailModal}
          onHide={this.closeEmailModal}
          className="add-email-modal">
          <Modal.Body>
            <AddEmail 
              close={this.closeEmailModal} 
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
};

export default Landing;