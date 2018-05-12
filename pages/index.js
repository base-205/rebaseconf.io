import NavBar from '../components/NavBar/NavBar';

import css from './main.css';

const App = props => {
    return (
        <div className={css.appContainer}>
            <NavBar />
        </div>
    );
};

export default App;
