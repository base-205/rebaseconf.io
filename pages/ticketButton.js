import React, { Component } from 'react';
import Link from 'next/link';


class TicketButton extends Component {



  render () {
    return(
      <button style={{ color: "#0c504A", borderColor: "#0C504A", borderRadius: "22px", backgroundColor: "Transparent" }}>
        <Link href="/tickets">
          <a style={{textDecoration: "none", color: "#0c504A"}}>snag a ticket</a>
        </Link>
      </button>
    );
  };

};

export default TicketButton;
