import Header from 'components/Header';
import Footer from 'components/Footer';

import css from './styles.css';

const PageContainer = ({ headerContent, layout, children }) => {


    return (
        <div className={css.pageContainer}>
            <Header layout={layout}>
              {headerContent}
            </Header>
            <section className={`${css.pageContent} ${css[layout]}`}>
              {children}
            </section>
            <Footer />
        </div>
    );
};

export default PageContainer;
