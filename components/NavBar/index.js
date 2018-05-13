import { Component } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import css from "./styles.css";

const links = [
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Speakers",
    link: "/speakers"
  },
  {
    title: "Sponsors",
    link: "/sponsors"
  },
  {
    title: "Travel",
    link: "/travel"
  },
  {
    title: "Blog",
    link: "/blog"
  },
  {
    title: "Tickets",
    link:
      "https://www.eventbrite.com/e/rebase-web-technology-conference-tickets-45706094158",
    className: "tickets",
    target: "_blank"
  }
];

class NavBar extends Component {
  state = {
    dropDownOpen: false,
    isTable: false,
    isMobile: false
  };

  renderLinks() {
    return links.map(link => {
      return (
        <NavLink
          href={link.link}
          key={link.title}
          className={link.className}
          target={link.target}
        >
          {link.title}
        </NavLink>
      );
    });
  }

  render() {
    return (
      <div className={css.navBarContainer}>
        <Link href="/">
          <a className={css.homeLink}>
            <img
              className={css.rebaseLogo}
              alt="rebase logo"
              src="/static/logo.svg"
            />
          </a>
        </Link>
        <nav className={css.links}>{this.renderLinks()}</nav>
      </div>
    );
  }
}

export default NavBar;
