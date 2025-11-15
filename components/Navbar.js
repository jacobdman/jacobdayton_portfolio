import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SvgIcon from '@mui/material/SvgIcon';

// GitLab Icon Component (Material-UI doesn't have a built-in GitLab icon)
const GitLabIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M23.955 13.587l-1.159-3.564l-2.24-6.9c-.09-.273-.321-.456-.61-.456s-.52.183-.61.456l-2.24 6.9H7.314l-2.24-6.9c-.09-.273-.321-.456-.61-.456s-.52.183-.61.456l-2.24 6.9L.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.453-.647.331-1.024" fill="currentColor"/>
  </SvgIcon>
);

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
    name: 'Projects',
    route: '/projects',
  },
  {
    name: 'Blog',
    route: '/blog',
  },
];

const Navbar = () => {
  const router = useRouter();
  // Initialize with pathname for SSR consistency, then use asPath after hydration
  const [currentPath, setCurrentPath] = useState(router.pathname || '');
  
  // Update with asPath after hydration to handle dynamic routes correctly
  useEffect(() => {
    if (router.isReady && router.asPath) {
      setCurrentPath(router.asPath.split('?')[0]);
    }
  }, [router.isReady, router.asPath]);
  
  return (
    <AppBar position="sticky" color="primary" enableColorOnDark>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 56, sm: 72 } }}>
          <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }} sx={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
            {routes.map((route) => {
              const isActive = currentPath === route.route;
              return (
                <Link key={route.route} href={route.route} style={{ textDecoration: 'none' }}>
                  <Button
                    color={isActive ? 'secondary' : 'inherit'}
                    variant={isActive ? 'contained' : 'text'}
                    size="small"
                    sx={{
                      color: isActive ? 'common.white' : 'rgba(255, 255, 255, 0.9)',
                      textTransform: 'none',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      px: { xs: 1, sm: 2 },
                      minWidth: { xs: 'auto', sm: 64 },
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
          <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }}>
            {/* GitHub - Icon only on mobile, button with text on larger screens */}
            <IconButton
              component="a"
              href="https://github.com/jacobdman"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                display: { xs: 'flex', sm: 'none' },
                bgcolor: '#24292e',
                color: 'white',
                '&:hover': {
                  bgcolor: '#1a1e22',
                },
              }}
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <Button
              component="a"
              href="https://github.com/jacobdman"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<GitHubIcon />}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                bgcolor: '#24292e',
                color: 'white',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#1a1e22',
                },
              }}
            >
              Github
            </Button>
            
            {/* GitLab - Icon only on mobile, button with text on larger screens */}
            <IconButton
              component="a"
              href="https://gitlab.com/jacobdman"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                display: { xs: 'flex', sm: 'none' },
                bgcolor: '#FC6D26',
                color: 'white',
                '&:hover': {
                  bgcolor: '#E24329',
                },
              }}
              aria-label="GitLab"
            >
              <GitLabIcon fontSize="small" />
            </IconButton>
            <Button
              component="a"
              href="https://gitlab.com/jacobdman"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<GitLabIcon />}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                bgcolor: '#FC6D26',
                color: 'white',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#E24329',
                },
              }}
            >
              Gitlab
            </Button>
            
            {/* LinkedIn - Icon only on mobile, button with text on larger screens */}
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/jacobdayton/"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                display: { xs: 'flex', sm: 'none' },
                bgcolor: '#0077b5',
                color: 'white',
                '&:hover': {
                  bgcolor: '#005885',
                },
              }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <Button
              component="a"
              href="https://www.linkedin.com/in/jacobdayton/"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<LinkedInIcon />}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                bgcolor: '#0077b5',
                color: 'white',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#005885',
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
