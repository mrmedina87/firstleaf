import React from 'react';
import { withRouter } from 'react-router-dom';
import './modal.css';
import _ from 'lodash';

class AddEmail extends React.Component {
  constructor(props) {
    super(props);
    const unparsedUserData = localStorage.getItem('user-data');
    if(unparsedUserData) {
      this.state = {
        userData: JSON.parse(unparsedUserData)
      }; 
    }
    else {
      this.state = {
        userData: {
          name: '',
          email: '',
        },
        emailError: '',
        nameError: ''
      };
      localStorage.setItem('user-data', JSON.stringify(this.state.userData));
    }
  }

  isValidEmail = (email) => {
    const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !!email.match(regexEmail);
  }

  validateChange = (event) => {
    const val = event.target.value;
    const fieldName = event.target.name;
    let newState = {};
    let errorString = '';
    if(!val) {
      errorString = `${_.upperFirst(fieldName)} Required`;
    }
    else {
      if(fieldName === 'email' && !this.isValidEmail(val)) {
        errorString = 'Please fill with a valid email address';
      }
    }
    newState[`${fieldName}Error`] = errorString;

    let newUserData = {};
    newUserData = Object.assign({}, this.state.userData, {
      [fieldName]: val
    });
    newState.userData = newUserData;
    this.setState(newState);
  }

  saveUser = () => {
    const {name, email} = this.state.userData;
    let newState = {};
    let valid = true;

    if(!name || !email || !this.isValidEmail(email)) {
      valid = false;
    }

    if(valid) {
      this.setState(newState);
      localStorage.setItem('user-data', JSON.stringify(this.state.userData));
      this.props.history.push('/checkout');
    } else {
      return false;
    }
  };

  render() {
    const {
      emailError,
      nameError
    } = this.state;

    return (
      <div className="new-email-wrapper">
        <h2 className="text-center">Enter Personal Info</h2>
        <div className="form-group">
          <div className="form-field-wrapper">
            <input 
              type="text" 
              className="form-control" 
              name="name"
              placeholder="Name"
              onChange={this.validateChange}
              value={this.state.userData.name}></input>
            <div className="error-message">
              <span>{nameError}</span>
            </div>
          </div>

          <div className="form-field-wrapper">
            <input 
              type="email" 
              className="form-control" 
              name="email"
              placeholder="Email"
              onChange={this.validateChange}
              value={this.state.userData.email}></input>
            <div className="error-message">
              <span>{emailError}</span>
            </div>
          </div>
          <div className="button-wrapper">
            <button onClick={this.saveUser}>Continue</button>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(AddEmail);