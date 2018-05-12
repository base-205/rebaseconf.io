import Link from "next/link";
import { withRouter } from "next/router";
import classnames from "classnames";
import css from "./styles.css";

const NavLink = ({ children, router, href, className }) => (
  <Link href={href}>
    <a
      className={classnames(css[className], css.link, {
        [css.active]: router.pathname === href
      })}
    >
      {children}
    </a>
  </Link>
);

export default withRouter(NavLink);
