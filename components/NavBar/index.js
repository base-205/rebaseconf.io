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
    link: "/tickets",
    className: "tickets"
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
        <NavLink href={link.link} key={link.title} className={link.className}>
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
