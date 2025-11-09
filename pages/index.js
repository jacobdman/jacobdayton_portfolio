import Head from 'next/head';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Navbar from 'components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Jacob Dayton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Paper
        square
        elevation={0}
        className={styles.landingTitle}
        sx={{
          bgcolor: 'background.paper',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
          Jacob Dayton
        </Typography>
        <Typography variant="h5" component="h2">
          FullStack Developer
        </Typography>
      </Paper>
      <Navbar />
      <Box component="section" sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h3" gutterBottom>
            Recent Articles
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Content coming soon.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
