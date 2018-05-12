import React, { Component } from 'react';
import TicketButton from './TicketButton.js';
import SignupButton from './SignupButton.js';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands);

class Footer extends Component {

  render () {
    return(
      <div style={{ textAlign: "center", backgroundColor: "#FFF8B6", margin: "0 auto" }}>
        <div style={{paddingBottom: "30px"}}>
          <TicketButton />
        </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "baseline", paddingLeft: "20px"}}>
            <input type="text" name="email address" />
            <SignupButton />
              <div style={{ float: "right" }}>
                <FontAwesomeIcon style={{color: "#F8AA27"}} icon={["fab", "medium"]} />
                <FontAwesomeIcon style={{color: "#F8AA27"}} icon={["fab", "twitter"]} />
                <FontAwesomeIcon style={{color: "#F8AA27"}} icon={["fab", "instagram"]} />
                <FontAwesomeIcon style={{color: "#F8AA27"}} icon={["fab", "facebook"]} />
              </div>
          </div>
      </div>

    );
  };

};

export default Footer;
