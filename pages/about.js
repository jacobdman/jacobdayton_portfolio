import Navbar from 'components/Navbar';
import { Segment, Image, Container, Header } from 'semantic-ui-react';
// import profilePic from 'public/profile-picture.png'

const About = () => (
  <div>
    <Navbar />
    <Segment tertiary attached style={{ minHeight: 'calc(100vh - 415.86px)' }}>
      <Container textAlign="center" text>
        <Image
          src={require('public/profile-picture.png')}
          size="medium"
          circular
          centered
        />
        <Header as="h1">Jacob Dayton</Header>
      </Container>
      <br />
      <Container textAlign="center" text>
        Jacob Dayton is a full stack developer who hates writing in third person. After graduating from high-school early with a GED and several college credits, Jacob attended a coding bootcamp at DevMountain. After graduating from DevMountain he quickly got a job at Solo as a junior developer. 
        <br /><br />
        Outside of development, Jacob is a skilled musician currently playing the drums with several bands around Utah Valley. He also enjoys reading books about finance and business, ancient history, and Middle Earth. 
      </Container>
      {/* <Container textAlign="center" text>
        Socail Links
      </Container> */}
    </Segment>
  </div>
);

export default About;
