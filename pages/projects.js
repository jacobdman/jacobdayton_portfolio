import Head from 'next/head';
import Box from '@mui/material/Box';
import Navbar from 'components/Navbar';
import ProjectGallery from 'components/ProjectGallery';

export default function Projects() {
  return (
    <Box>
      <Head>
        <title>Projects | Jacob Dayton</title>
        <meta name="description" content="A collection of projects I've built." />
      </Head>
      <Navbar />
      <ProjectGallery />
    </Box>
  );
}

