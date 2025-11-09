import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Navbar from 'components/Navbar';
import Projects from 'components/Projects';

const Portfolio = () => (
  <Box>
    <Navbar />
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Paper elevation={4} sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h4" component="h1">
              Projects
            </Typography>
            <Typography variant="body1" color="text.secondary">
              All of the projects I have worked on or am currently working on. Click on a
              project to see all related blog posts and updates to the project.
            </Typography>
            <TextField
              fullWidth
              placeholder="Search projects"
              variant="outlined"
              size="small"
            />
            <Divider flexItem />
            <Projects />
          </Stack>
        </Paper>
      </Container>
    </Box>
  </Box>
);

export default Portfolio;
