import PageContainer from 'components/PageContainer';
import Hero from 'components/Hero';

const Home = props => {
    return (
      <PageContainer headerContent={<Hero/>} layout="home">
        <p>This is the home page.</p>
      </PageContainer>
  );
};

export default Home;
