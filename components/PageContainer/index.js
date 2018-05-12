import NavBar from '../NavBar';
import Footer from '../Footer';

import css from './styles.css';

const PageContainer = ({ children }) => {
    return (
        <div className={css.pageContainer}>
            <NavBar />
            <div className={css.pageContent}>
              {children}
            </div>
            <Footer />
        </div>
    );
};

export default PageContainer;
