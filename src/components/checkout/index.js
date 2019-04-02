import React from 'react';
import { Redirect } from 'react-router-dom';

import './checkout.css';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    
    const unparsedRetrievedWines = localStorage.getItem('selected-wines');
    const unparsedRetrievedUserData = localStorage.getItem('user-data');
    if(unparsedRetrievedWines && unparsedRetrievedUserData) {
      this.state = {
        winesData: JSON.parse(unparsedRetrievedWines),
        userData: JSON.parse(unparsedRetrievedUserData),
      };
    }
  }

  toMoney = (number) => {
    return `$${number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`
  }

  render() {
    
    if(!this.state) {
      return <Redirect push to="/" />;
    }
    
    const {
      selectedWines,
    } = this.state.winesData;
    const {
      email, name 
    } = this.state.userData;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="checkout-wrapper">
              <h1 className='checkout-title'>Proceed to checkout</h1>
              <div className="separator-container">
                <div className="separator"></div>
              </div>
              
              <section className="checkout-section">
                <div className="first-name">
                  <span className="user-data-label">Name: </span>
                  <span className="user-data-item">{name}</span>
                </div>
                <div className="email">
                  <span className="user-data-label">Email: </span>
                  <span className="user-data-item">{email}</span>
                </div>
              </section>

              <div className="separator-container">
                <div className="separator"></div>
              </div>
              
              <section className="checkout-section products-data">
                <h2>Products List</h2>
                <div className="products-view">
                  <ul className="checkout-product-list">
                    {selectedWines.map((wine, index) => {
                      return (
                        <li key={index} className="checkout-product">
                          <div className="product-data-field">
                            <div className="product-label">
                              Title:
                            </div>
                            <div className="product-value">
                              {wine.title}
                            </div>
                          </div>
                          
                          <div className="product-data-field">
                            <div className="product-label">
                              Price: 
                            </div>
                            <div className="product-value">
                              {this.toMoney(wine.price)}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
              </section>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
};

export default Checkout;