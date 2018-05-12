import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

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
