import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Navbar from 'components/Navbar';
import FullscreenImageViewer from 'components/FullscreenImageViewer';
import { getProjectBySlug } from '../../data/projects';
import { getBlogPostsByProjectId, getBlogImagesForProject } from '../../data/blogPosts';
import { getStorageUrl } from '../../utils/storage';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// Gallery Image Component - clickable image for gallery
const GalleryImage = ({ imageUrl, alt, onClick, isBlogImage, blogPost }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: 1,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 6,
          '& .image-overlay': {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={alt}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {isBlogImage && blogPost && (
        <Box
          className="image-overlay"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
            color: 'common.white',
            p: 2,
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
            {blogPost.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {blogPost.excerpt}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [fullscreenIndex, setFullscreenIndex] = useState(-1);

  if (!slug) {
    return null;
  }

  const project = getProjectBySlug(slug);
  const blogPosts = project ? getBlogPostsByProjectId(project.id) : [];
  const blogImages = project ? getBlogImagesForProject(project.id) : [];

  // Prepare gallery images array combining project images and blog images
  const galleryImages = [];
  
  // Add project images
  if (project?.images) {
    project.images.forEach((image) => {
      galleryImages.push({
        imageUrl: getStorageUrl(image),
        type: 'project',
        project: project,
      });
    });
  }

  // Add blog images
  blogImages.forEach((blogImage) => {
    galleryImages.push({
      imageUrl: getStorageUrl(blogImage.image),
      type: 'blog',
      post: blogImage.post,
    });
  });

  if (!project) {
    return (
      <Box>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4">Project not found</Typography>
          <Link href="/">
            <Button startIcon={<ArrowBackIcon />}>Back to Home</Button>
          </Link>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Head>
        <title>{project.title} | Jacob Dayton</title>
        <meta name="description" content={project.description} />
      </Head>
      <Navbar />
      <Box component="main" sx={{ bgcolor: 'background.default', minHeight: 'calc(100vh - 200px)' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          {/* Back Button */}
          <Link href="/projects">
            <Button startIcon={<ArrowBackIcon />} sx={{ mb: 4 }}>
              Back to Projects
            </Button>
          </Link>

          {/* Project Header */}
          <Paper elevation={2} sx={{ p: { xs: 3, md: 4 }, mb: 4 }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  {project.title}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'common.white',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                  {project.github && project.github !== '#' && (
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </Button>
                  )}
                  {project.link && project.link !== '#' && (
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<LaunchIcon />}
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Project
                    </Button>
                  )}
                </Stack>
              </Box>
              <Divider />
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
                {project.fullDescription}
              </Typography>
            </Stack>
          </Paper>

          {/* Project Gallery - Combined Project and Blog Images */}
          {galleryImages.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Project Gallery
              </Typography>
              <Grid container spacing={2}>
                {galleryImages.map((galleryImage, index) => {
                  const isBlogImage = galleryImage.type === 'blog';
                  
                  return (
                    <Grid item xs={12} sm={6} md={4} key={`gallery-${index}`}>
                      <Box
                        sx={{
                          aspectRatio: '4/3',
                          width: '100%',
                        }}
                      >
                        <GalleryImage
                          imageUrl={galleryImage.imageUrl}
                          alt={
                            isBlogImage
                              ? galleryImage.post.title
                              : `${project.title} - Image ${index + 1}`
                          }
                          onClick={() => setFullscreenIndex(index)}
                          isBlogImage={isBlogImage}
                          blogPost={isBlogImage ? galleryImage.post : null}
                        />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}

          {/* Fullscreen Image Viewer */}
          {fullscreenIndex >= 0 && (
            <FullscreenImageViewer
              images={galleryImages}
              currentIndex={fullscreenIndex}
              onClose={() => setFullscreenIndex(-1)}
              onNavigate={(newIndex) => setFullscreenIndex(newIndex)}
            />
          )}

          {/* Blog Posts / Updates */}
          <Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Project Updates
            </Typography>
            {blogPosts.length > 0 ? (
              <Grid container spacing={3}>
                {blogPosts.map((post) => (
                  <Grid item xs={12} md={6} key={post.id}>
                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                      <Card
                        sx={{
                          height: '100%',
                          textDecoration: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'all 0.3s ease-in-out',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: 4,
                          },
                        }}
                      >
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                            {post.title}
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
                            {post.excerpt}
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 1 }}>
                            {post.tags.map((tag) => (
                              <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                sx={{
                                  bgcolor: 'secondary.light',
                                  color: 'common.white',
                                  fontSize: '0.7rem',
                                }}
                              />
                            ))}
                          </Stack>
                          <Typography variant="caption" color="text.secondary">
                            {formatDate(post.publishedAt)}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                  No updates yet. Check back soon for project updates and blog posts!
                </Typography>
              </Paper>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

