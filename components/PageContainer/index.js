import Header from 'components/Header';
import Footer from 'components/Footer';

import css from './styles.css';

const PageContainer = ({ headerContent, children }) => {
    return (
        <div className={css.pageContainer}>
            <Header>
              {headerContent}
            </Header>
            <div className={css.pageContent}>
              {children}
            </div>
            <Footer />
        </div>
    );
};

export default PageContainer;
