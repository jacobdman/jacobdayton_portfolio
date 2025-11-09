import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const footerSections = [
  {
    title: 'Group 1',
    links: ['Link One', 'Link Two', 'Link Three', 'Link Four'],
  },
  {
    title: 'Group 2',
    links: ['Link One', 'Link Two', 'Link Three', 'Link Four'],
  },
  {
    title: 'Group 3',
    links: ['Link One', 'Link Two', 'Link Three', 'Link Four'],
  },
  {
    title: 'Footer Header',
    description:
      'Extra space for a call to action inside the footer that could help re-engage users.',
  },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'grey.900',
      color: 'grey.100',
      py: { xs: 6, md: 8 },
      mt: 'auto',
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        {footerSections.map(({ title, links, description }) => (
          <Grid item xs={12} sm={6} md={3} key={title}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            {links ? (
              <Stack component="nav" spacing={1}>
                {links.map((label) => (
                  <Link
                    key={label}
                    href="#"
                    underline="hover"
                    color="inherit"
                    variant="body2"
                  >
                    {label}
                  </Link>
                ))}
              </Stack>
            ) : (
              <Typography variant="body2" color="grey.300">
                {description}
              </Typography>
            )}
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
        <Link href="#" underline="hover" color="inherit" variant="body2">
          Site Map
        </Link>
        <Link href="#" underline="hover" color="inherit" variant="body2">
          Contact Us
        </Link>
        <Link href="#" underline="hover" color="inherit" variant="body2">
          Terms and Conditions
        </Link>
        <Link href="#" underline="hover" color="inherit" variant="body2">
          Privacy Policy
        </Link>
      </Stack>
    </Container>
  </Box>
);

export default Footer;