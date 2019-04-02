import React from 'react';
import './results.css';

const Results = (props) => {
  const title = 'Your Results',
        firstBlackSection = 'Based on your interest in ',
        orangeSection = 'a mix of red, white, American and international wines',
        lastBlackSection = ", we think you'll love the following selection.";
  return (
    <div className="results-text container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1 col-sm-12">
          <h2>{title}</h2>
          <p>
            <span className="landing-black-apercu">
              {firstBlackSection}
            </span>
            <span className="landing-orange-caslo">
              {orangeSection}
            </span>
            <span className="landing-black-apercu">
              {lastBlackSection}
            </span>
          </p>
          <div className="separator"></div>
        </div>
      </div>
      
    </div>
  );
}

export default Results;