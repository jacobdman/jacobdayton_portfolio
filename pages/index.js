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
          bgcolor: 'primary.main',
          backgroundImage: 'linear-gradient(135deg, #1a237e 0%, #534bae 100%)',
          textAlign: 'center',
          px: 2,
          color: 'common.white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(0, 172, 193, 0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
            zIndex: 0,
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'common.white',
            }}
          >
            Jacob Dayton
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 400,
              letterSpacing: '0.05em',
            }}
          >
            FullStack Developer
          </Typography>
        </Box>
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
