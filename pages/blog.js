import Navbar from 'components/Navbar';
import { Segment, Image, Container, Header } from 'semantic-ui-react';

const About = () => (
  <div>
    <Navbar />
    <Segment tertiary attached style={{ minHeight: 'calc(100vh - 415.86px)' }}>
      <Container textAlign="center" text>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          size="small"
          circular
        />
        <Header as="h1">Jacob Dayton</Header>
      </Container>
      <Container textAlign="center" text>
        Full-Stack Web Developer with a stuff stuff stuff
      </Container>
      <Container textAlign="center" text>
        Socail Links
      </Container>
    </Segment>
  </div>
);

export default About;
