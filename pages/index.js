import { useState, useEffect } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Navbar from 'components/Navbar';
import ProjectGallery from 'components/ProjectGallery';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position relative to viewport height
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Calculate rotation based on scroll (max rotation of ~25 degrees)
      const maxRotation = 25;
      const rotationAmount = (scrollY / viewportHeight) * maxRotation;
      setRotation(rotationAmount);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box>
      <Head>
        <title>Jacob Dayton</title>
        <meta name="description" content="Jacob Dayton - FullStack Developer. Portfolio showcasing projects and blog." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a237e" />
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
          py: { xs: 8, md: 12 },
          color: 'common.white',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(0, 172, 193, 0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
            zIndex: 1,
          },
        }}
      >
        {/* Rotating background circle image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/jacobdayton-e716a.firebasestorage.app/o/TBCMRVPWHS.png?alt=media&token=79b80c6b-ac69-4dfe-ad7e-3b9ec4a65cc3)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.01,
            pointerEvents: 'none',
            zIndex: 0,
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2 }}>
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
            Creator of many, deployer of few
          </Typography>
        </Box>
      </Paper>
      <Navbar />
      <ProjectGallery />
    </Box>
  );
}
