import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/Link';
import {
  Button,
  Container,
  Menu,
  Segment,
  Icon,
  Visibility,
  Header,
} from 'semantic-ui-react';

const routes = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Portfolio',
    route: '/portfolio',
  },
  {
    name: 'Blog',
    route: '/blog',
  },
];

const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const router = useRouter();
  return (
    <Visibility
      onTopPassed={() => setFixed(true)}
      onTopVisible={() => setFixed(false)}
      once={false}
    >
      <Segment
        inverted
        textAlign="center"
        vertical
        style={{
          position: fixed ? 'fixed' : 'relative',
          top: 0,
          width: '100%',
          zIndex: 9999,
        }}
      >
        <Menu inverted secondary>
          <Container>
            {/* {fixed && (
              <Menu.Item position="left">
                <Header inverted as="h1">Jacob Dayton</Header>
              </Menu.Item>
            )} */}
            {routes.map((route) => (
              <Link href={route.route}>
                <Menu.Item active={router.pathname === route.route}>
                  {route.name}
                </Menu.Item>
              </Link>
            ))}
            <Menu.Item position="right">
              <Button>
                <Icon name="github" />
                Github
              </Button>
              <Button color="primary" style={{ marginLeft: '0.5em', background: '#fc6d26' }}>
                <Icon name="gitlab" />
                Gitlab
              </Button>
              <Button primary style={{ marginLeft: '0.5em' }}>
                <Icon name="linkedin" />
                LinkedIn
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  );
};

export default Navbar;
