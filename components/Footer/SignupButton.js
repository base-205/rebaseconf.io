import React, { Component } from 'react';
import Link from 'next/link';

class SignupButton extends Component {
  render () {
    return(
      <button style={{ backgroundColor:"#FAC55B" }}>
        <Link href="/signup">
          <a style={{ backgroundColor:"#FAC55B", textDecoration: "none", color: "#fff" }}>Sign Up!</a>
        </Link>
      </button>
    );
  };
};

export default SignupButton;
