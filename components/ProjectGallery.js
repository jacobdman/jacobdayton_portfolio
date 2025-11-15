import { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import UpdateIcon from '@mui/icons-material/Update';
import { projects } from '../data/projects';
import { getStorageUrl } from '../utils/storage';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const ProjectCard = ({ project }) => {
  const [elevation, setElevation] = useState(2);

  return (
    <Card
      elevation={elevation}
      onMouseEnter={() => setElevation(6)}
      onMouseLeave={() => setElevation(2)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CardActionArea
          sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
        >
          <CardMedia
            component="img"
            height="200"
            image={getStorageUrl(project.image)}
            alt={project.title}
            sx={{
              objectFit: 'cover',
              backgroundColor: 'grey.100',
            }}
          />
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              {project.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                flexGrow: 1,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {project.description}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
              {project.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: 'primary.light',
                    color: 'common.white',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                  }}
                />
              ))}
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <UpdateIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="caption" color="text.secondary">
                Updated {formatDate(project.latestUpdate)}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              {project.github && project.github !== '#' && (
                <IconButton
                  size="small"
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(26, 35, 126, 0.08)',
                    },
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              )}
              {project.link && project.link !== '#' && (
                <IconButton
                  size="small"
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'secondary.main',
                      bgcolor: 'rgba(0, 172, 193, 0.08)',
                    },
                  }}
                >
                  <LaunchIcon fontSize="small" />
                </IconButton>
              )}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

const ProjectGallery = () => {
  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(135deg, #1a237e 0%, #534bae 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            My Projects
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            A collection of projects I've built.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectGallery;

