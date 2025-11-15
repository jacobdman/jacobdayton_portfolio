import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navbar from 'components/Navbar';
import { getAllBlogPosts } from '../data/blogPosts';
import { projects } from '../data/projects';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const getProjectById = (id) => {
  return projects.find((p) => p.id === id);
};

const Blog = () => {
  const blogPosts = getAllBlogPosts();

  return (
    <Box>
      <Navbar />
      <Box
        component="section"
        sx={{
          bgcolor: 'background.default',
          minHeight: 'calc(100vh - 200px)',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h3"
              component="h1"
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
              Blog
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Insights, tutorials, and updates from ongoing projects.
            </Typography>
          </Box>

          {blogPosts.length > 0 ? (
            <Grid container spacing={4}>
              {blogPosts.map((post) => {
                const project = post.projectId ? getProjectById(post.projectId) : null;
                return (
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
                          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
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
                            {project && (
                              <Chip
                                label={project.title}
                                size="small"
                                sx={{
                                  bgcolor: 'primary.light',
                                  color: 'common.white',
                                  fontSize: '0.7rem',
                                }}
                              />
                            )}
                          </Stack>
                          <Typography variant="caption" color="text.secondary">
                            {formatDate(post.publishedAt)}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No blog posts yet. Check back soon!
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Blog;
