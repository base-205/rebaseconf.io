import Header from 'components/Header';
import Footer from 'components/Footer';

import css from './styles.css';

const PageContainer = ({ headerContent, layout, children }) => {

    const contentClasses = (layout === "fixed") ? `${css.pageContent} ${css.fixed}` : `${css.pageContent}`;

    return (
        <div className={css.pageContainer}>
            <Header>
              {headerContent}
            </Header>
            <section className={contentClasses}>
              {children}
            </section>
            <Footer />
        </div>
    );
};

export default PageContainer;
