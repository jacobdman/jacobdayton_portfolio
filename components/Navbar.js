import { useRouter } from 'next/router';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
  const router = useRouter();
  return (
    <AppBar position="sticky" color="primary" enableColorOnDark>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 72 }}>
          <Stack direction="row" spacing={1}>
            {routes.map((route) => {
              const isActive = router.pathname === route.route;
              return (
                <Link key={route.route} href={route.route} style={{ textDecoration: 'none' }}>
                  <Button
                    color={isActive ? 'secondary' : 'inherit'}
                    variant={isActive ? 'contained' : 'text'}
                    sx={{
                      color: isActive ? 'common.white' : 'rgba(255, 255, 255, 0.9)',
                      textTransform: 'none',
                      fontWeight: isActive ? 600 : 500,
                      '&:hover': {
                        color: 'common.white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {route.name}
                  </Button>
                </Link>
              );
            })}
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button
              component="a"
              href="#"
              color="inherit"
              variant="outlined"
              startIcon={<GitHubIcon />}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.5)',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Github
            </Button>
            <Button
              component="a"
              href="#"
              color="inherit"
              variant="outlined"
              startIcon={<TerminalIcon />}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.5)',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Gitlab
            </Button>
            <Button
              component="a"
              href="#"
              color="secondary"
              variant="contained"
              startIcon={<LinkedInIcon />}
              sx={{
                '&:hover': {
                  bgcolor: 'secondary.dark',
                },
              }}
            >
              LinkedIn
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
