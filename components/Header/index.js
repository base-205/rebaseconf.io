import NavBar from 'components/NavBar';
import css from './styles.css';

export const Title = ({ children }) => <h1 className={css.title}>{children}</h1>

const Header = ({ children }) => (
  <header className={css.header}>
    <NavBar />
    <div className={css.headerContent}>
      {children}
    </div>
  </header>
)

export default Header;
