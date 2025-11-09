import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navbar from 'components/Navbar';

const About = () => (
  <Box>
    <Navbar />
    <Box
      component="section"
      sx={{
        bgcolor: 'background.default',
        minHeight: 'calc(100vh - 415.86px)',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: { xs: 4, md: 6 } }}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Avatar
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              alt="Jacob Dayton"
              sx={{ width: 120, height: 120 }}
            />
            <Typography variant="h4" component="h1">
              Jacob Dayton
            </Typography>
            <Typography variant="body1">
              Full-Stack Web Developer with a stuff stuff stuff
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Social Links
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  </Box>
);

export default About;
