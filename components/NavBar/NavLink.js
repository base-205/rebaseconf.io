import Link from "next/link";
import { withRouter } from "next/router";
import classnames from "classnames";
import css from "./styles.css";

const NavLink = ({ children, router, href, className, target }) => (
  <Link href={href}>
    <a
      className={classnames(css[className], css.link, {
        [css.active]: router.pathname === href
      })}
      target={target}
    >
      {children}
    </a>
  </Link>
);

export default withRouter(NavLink);
