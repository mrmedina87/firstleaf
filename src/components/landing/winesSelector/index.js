import React from 'react';
import _ from 'lodash';
import Media from "react-media";

import './selector.css';

import WineCard from './../wineCard';

import wineData from './../../../data/wineData.json';

import wine1Desktop from '../../../assets/img/wine1_desktop.png';
import wine1Mobile from '../../../assets/img/wine1_mobile.png';
import wine2Desktop from '../../../assets/img/wine2_desktop.png';
import wine2Mobile from '../../../assets/img/wine2_mobile.png';

class WinesSelector extends React.Component {
  constructor(props) {
    super(props);
    const { wine1 } = wineData;

    const unparsedRetrievedWines = localStorage.getItem('selected-wines');
    if(unparsedRetrievedWines) {
      this.state = JSON.parse(unparsedRetrievedWines);
    }
    else {
      this.state = {
        wines: wineData,
        selectedWines: [wine1, wine1, wine1]
      }
      localStorage.setItem('selected-wines', JSON.stringify(this.state));
    }
  }

  getWineImg(id, res) {
    let desktopMapping = {
      1: wine1Desktop,
      2: wine2Desktop
    };
    let mobileMapping = {
      1: wine1Mobile,
      2: wine2Mobile
    };
    return res === 'desktop' ? desktopMapping[id] : mobileMapping[id];
  }

  toggleWine(wine, index) {
    const wineSwapId = this.state.selectedWines[index].id === 1 ? 2 : 1;
    const newValue = _.find(this.state.wines, (value, key) => {
      return value.id === wineSwapId;
    })
    const newWines = _.map(this.state.selectedWines, (wine, jdx) => {
      return jdx === index ? newValue : wine;
    })

    const newState = {
      ...this.state,
      selectedWines: newWines
    }

    this.setState(newState);

    localStorage.setItem('selected-wines', JSON.stringify(newState));
  }

  render() {
    return (
      <div className="container">
        <div className="wines-selector wines-view">
          
          <div className="wines-images row">
            {this.state.selectedWines.map((wine, index) => {
              return (
                <div key={index} className="wine-image-wrapper col-md-4 col-xs-4">
                  <div className="box-space-holder">
                    <Media query="(max-width: 610px)">
                      {matches =>
                        matches ? (
                          <img 
                          src={this.getWineImg(1, 'mobile')} className="holder"
                          alt={wine.name} />
                        ) : (
                          <img 
                          src={this.getWineImg(1, 'desktop')} className="holder"
                          alt={wine.name} />
                        )
                      }
                    </Media>
                    <Media query="(max-width: 610px)">
                      {matches =>
                        matches ? (
                          <img
                            className={`wine-img ${wine.id === 1 ? 'in-the-left' : ''}`}
                            src={this.getWineImg(1, 'mobile')} 
                            alt={wine.name} />
                        ) : (
                          <img
                            className={`wine-img ${wine.id === 1 ? 'in-the-left' : ''}`}
                            src={this.getWineImg(1, 'desktop')} 
                            alt={wine.name} />
                        )
                      }
                    </Media>
                    <Media query="(max-width: 610px)">
                      {matches =>
                        matches ? (
                          <img
                            className={`wine-img ${wine.id === 2 ? 'in-the-left' : ''}`}
                            src={this.getWineImg(2, 'mobile')} 
                            alt={wine.name} />
                        ) : (
                          <img
                            className={`wine-img ${wine.id === 2 ? 'in-the-left' : ''}`}
                            src={this.getWineImg(2, 'desktop')} 
                            alt={wine.name} />
                        )
                      }
                    </Media>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="results-text">
            <p>
              <span className="landing-black-apercu">
                Your Introductory wine pack includes
              </span>
            </p>
            
            <div className="separator"></div>
          </div>
          
          <div className="wines-swappers">
            {this.state.selectedWines.map((wine, index) => {
              return (
                <div key={index} className="wine-description-wrapper row">
                  <WineCard wine={wine} onSwap={this.toggleWine.bind(this)} index={index}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    );
  }
};

export default WinesSelector;