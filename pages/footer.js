import React, { Component } from 'react';
import TicketButton from './ticketButton.js';
import SignupButton from './signupButton.js';

class Footer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return(
      <div style={{backgroundColor: "#FFF8B6"}}>
      <TicketButton />
      <input type="text" name="email address" />
      <SignupButton />
      </div>

    );
  };

};

export default Footer;
