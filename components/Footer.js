import {
  Grid,
  Container,
  Header,
  Segment,
  List,
  Divider,
} from 'semantic-ui-react';
import Link from 'next/Link';

const Footer = () => (
  <Segment
    inverted
    style={{ padding: '5em 0em' }}
    vertical
    attached="bottom"
  >
    <Container textAlign="center">
      <Grid columns={3} divided stackable inverted>
        <Grid.Row>
          <Grid.Column>
            <Header inverted as="h4" content="Project 1" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4" content="Project 2" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4" content="Project 3" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider inverted section />
      <List horizontal inverted divided link size="small">
            <Header inverted as="h4" content="Contact Me!" />
            <p>
              Email: JacobTDayton@gmail.com
            </p>
            
      </List>
      <Divider inverted section />
      {/* <Image src="/logo.png" centered size="mini" /> */}
      <List horizontal inverted divided link size="small">
        {/* <List.Item as={Link} href="/">
          Terms and Conditions
        </List.Item>
        <List.Item as={Link} href="/privacy">
          Privacy Policy
        </List.Item> */}
      </List>
    </Container>
  </Segment>
);

export default Footer;
