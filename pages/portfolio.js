import Navbar from 'components/Navbar';
import { Segment, Search, Container, Header, Divider } from 'semantic-ui-react';
import Projects from 'components/Projects';

const About = () => (
  <div>
    <Navbar />
    <Segment textAlign="center" vertical secondary>
      <Container style={{ padding: 50 }}>
        <Header as="h1">Projects</Header>
        All of the projects I have worked on or am currently working on. Click
        on a project to see all related blog posts and updates to the project.
        <Divider />
        <Projects />
      </Container>
    </Segment>
  </div>
);

export default About;
