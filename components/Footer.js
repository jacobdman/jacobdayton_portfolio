import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const footerSections = [
  {
    title: 'Navigation',
    links: ['Home', 'About', 'Portfolio', 'Blog'],
  },
  {
    title: 'Connect',
    links: ['GitHub', 'LinkedIn', 'Email', 'Resume'],
  },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'primary.dark',
      color: 'common.white',
      py: { xs: 6, md: 8 },
      mt: 'auto',
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        {footerSections.map(({ title, links }) => (
          <Grid item xs={12} sm={6} md={3} key={title}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
            <Stack component="nav" spacing={1}>
              {links.map((label) => (
                <Link
                  key={label}
                  href="#"
                  underline="hover"
                  color="inherit"
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Divider
        sx={{
          my: { xs: 4, md: 6 },
          borderColor: 'rgba(255,255,255,0.12)',
        }}
      />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Jacob Dayton. All rights reserved.
        </Typography>
      </Stack>
    </Container>
  </Box>
);

export default Footer;