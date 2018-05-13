import PageContainer from 'components/PageContainer'
import { Title } from 'components/Header'

const About = () => (
  <PageContainer headerContent={<Title>About</Title>} layout="fixed">
    <p>This is the about page.</p>
  </PageContainer>
);

export default About;
