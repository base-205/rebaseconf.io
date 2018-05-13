import { Component } from "react";
import Link from "next/link";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import classnames from "classnames";
import css from "./styles.css";

fontawesome.library.add(brands);

const socialLinks = [
  {
    icon: "medium",
    href: "https://medium.com/rebase"
  },
  {
    icon: "twitter",
    href: "https://twitter.com/rebasebham"
  },
  {
    icon: "instagram",
    href: "https://instagram.com/rebasebham"
  },
  {
    icon: "facebook",
    href: "https://facebook.com/events/658710801145791"
  }
];

class Footer extends Component {
  state = {
    email: ""
  };

  setEmail = e => {
    e.preventDefault();
    const email = e.target.value;
    this.setState({ email });
  };

  registerEmail = e => {
    e.preventDefault();
    console.log(`email address: ${this.state.email}`);
  };

  render() {
    return (
      <footer className={css.footer}>
        <div className={css.row}>
          <a
            href="https://www.eventbrite.com/e/rebase-web-technology-conference-tickets-45706094158"
            className={css.snagTicket}
            target="_blank"
          >
            snag a ticket now!
          </a>
        </div>
        <div className={classnames(css.row, css.emailAndSocial)}>
          <form className={css.emailSignup} onSubmit={this.registerEmail}>
            <input
              className={css.emailInput}
              type="text"
              name="email address"
              onChange={this.setEmail}
            />
            <button type="submit" className={css.emailSubmit}>
              Sign Up
            </button>
          </form>
          <div className={css.socialLinks}>
            {socialLinks.map(link => (
              <a href={link.href} key={link.icon} target="_blank">
                <FontAwesomeIcon
                  style={{ color: "#F8AA27" }}
                  icon={["fab", link.icon]}
                  size="3x"
                />
              </a>
            ))}
          </div>
        </div>
        <div className={classnames(css.row, css.copyright)}>
          ©2018 re:BASE Conference, All Rights Reserved
        </div>
      </footer>
    );
  }
}

export default Footer;
