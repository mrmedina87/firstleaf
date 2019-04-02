import React, { Component } from 'react';
// import _ from 'lodash';

import './wineCard.css';

class WineCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awardsExpanded: false,
      notesExpanded: false,
      trimLimit: 107
    }
  }

  //TODO: prevent the component from share the expanded state with brother components

  toMoney(number) {
    return `$${number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`
  }

  truncate(text, limit) {
    return text.substr(0, limit) + ( text.length > limit ? '...' : '');
  };

  strip(html){
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
  };

  addReadMoreButton(type) {
    let shouldShowLink;
    if (type === "awards") {
      shouldShowLink = this.props.wine.awards.length > this.state.trimLimit;
    }
    if (type === "notes") {
      shouldShowLink = this.strip(this.props.wine.sales_copy).length > this.state.trimLimit;
    }
    let readMoreButton = <span className="read-more-link" onClick={() => this.expand(type)}> Read More > </span>;
    return shouldShowLink ? readMoreButton : false;
  };

  expand(type) {
    if (type === "awards") {
      this.setState({
        ...this.state,
        awardsExpanded: true
      })
    }
    else {
      this.setState({
        ...this.state,
        notesExpanded: true
      })
    }
  };

  render() {
    if (this.props.wine) {
      let emptyChar = <span dangerouslySetInnerHTML={{__html: '&mdash;'}}></span>
      let notesTruncated = this.truncate(this.strip(this.props.wine.sales_copy), this.state.trimLimit);
      let notesSafeHtml = <span dangerouslySetInnerHTML={{__html: this.props.wine.sales_copy}}/>;
      let awardsTruncated = this.truncate(this.props.wine.awards, this.state.trimLimit);
      return (
        <div className="col-md-10 col-md-offset-1 wine-info">
          <h3>{this.props.wine.title || emptyChar}</h3>
          <div className="col-md-7 wine-detail-col wine-detail-left">
            <div className="section-bullet-wrapper">
              <span className="section-bullet">Region: </span>
              <span className="wine-data">{this.props.wine.origin || emptyChar}</span>
            </div>
            
            <span className="section-bullet">Awards: </span>
            { this.state.awardsExpanded && 
              <span>
                <span className="wine-data">{this.props.wine.awards || emptyChar}</span>
                <br/>
              </span>
            }

            { !this.state.awardsExpanded && 
              <span>
                <span className="wine-data">{awardsTruncated || emptyChar} {this.addReadMoreButton("awards")}</span>
                <br/>
              </span>
            }
            <span className="section-bullet">Wine Notes: </span>
            { this.state.notesExpanded && 
              <span>
                <span className="wine-data">{notesSafeHtml || emptyChar}</span><br/>
                <br/>
              </span>
            }
            { !this.state.notesExpanded && 
              <span>
                <span className="wine-data">{notesTruncated || emptyChar} {this.addReadMoreButton("notes")}</span>
                <br/>
              </span>
            }
          </div>
          <div className="col-md-4 col-md-offset-1 col-xs-12 wine-detail-col wine-detail-right">
            <div className="section-bullet-wrapper">
              <span className="section-bullet">Retail Price: </span>
              <span className="wine-data strike-through">{this.toMoney(this.props.wine.price)}</span>  
            </div>
            <div className="section-bullet-wrapper">
              <span className="section-bullet">Club Price: </span>
              <span className="wine-data strike-through">{this.toMoney(15)}</span>
            </div>
            <div className="section-bullet-wrapper">
              <span className="section-bullet">Intro Price: </span>
              <span className="wine-data intro-price">{this.toMoney(8)}</span>
            </div>
            <button 
              onClick={() => this.props.onSwap(this.props.wine, this.props.index)} 
              className="swap-button">
              Swap this bottle
            </button>
          </div>
          
        </div>
      );
    } else {
      return <div/>
    }
  }
};

export default WineCard;