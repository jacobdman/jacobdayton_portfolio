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
              src="/profile-picture.png"
              alt="Jacob Dayton"
              sx={{ width: 120, height: 120 }}
            />
            <Typography variant="h4" component="h1">
              Jacob Dayton
            </Typography>
            <Typography variant="body1">
              Jacob Dayton is a full stack developer who hates writing in third person. After graduating from high-school early with a GED and several college credits, Jacob attended a coding bootcamp at DevMountain. After graduating from DevMountain he quickly got a job at Solo as a junior developer.
            </Typography>
            <Typography variant="body1">
              Outside of development, Jacob is a skilled musician currently playing the drums with several bands around Utah Valley. He also enjoys reading books about finance and business, ancient history, and Middle Earth.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  </Box>
);

export default About;
