import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from 'components/Navbar';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '../../data/blogPosts';
import { projects } from '../../data/projects';
import { getStorageUrl } from '../../utils/storage';

// Helper to get project by ID
const getProjectById = (id) => {
  return projects.find((p) => p.id === id);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return null;
  }

  const post = getBlogPostBySlug(slug);
  const project = post && post.projectId ? getProjectById(post.projectId) : null;

  if (!post) {
    return (
      <Box>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4">Blog post not found</Typography>
          <Link href="/blog">
            <Button startIcon={<ArrowBackIcon />}>Back to Blog</Button>
          </Link>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Head>
        <title>{post.title} | Jacob Dayton</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Navbar />
      <Box component="main" sx={{ bgcolor: 'background.default', minHeight: 'calc(100vh - 200px)' }}>
        <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
          {/* Back Button */}
          <Link href={project ? `/projects/${project.slug}` : '/blog'}>
            <Button startIcon={<ArrowBackIcon />} sx={{ mb: 4 }}>
              {project ? `Back to ${project.title}` : 'Back to Blog'}
            </Button>
          </Link>

          {/* Blog Post Content */}
          <Paper elevation={2} sx={{ p: { xs: 3, md: 5 } }}>
            <Stack spacing={3}>
              {/* Header */}
              <Box>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  {post.title}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {formatDate(post.publishedAt)}
                  </Typography>
                  {project && (
                    <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
                      <Chip
                        label={`Project: ${project.title}`}
                        clickable
                        sx={{
                          bgcolor: 'primary.light',
                          color: 'common.white',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          '&:hover': {
                            bgcolor: 'primary.main',
                          },
                        }}
                      />
                    </Link>
                  )}
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                  {post.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: 'secondary.light',
                        color: 'common.white',
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              <Divider />

              {/* Hero Image */}
              {post.image && (
                <Box sx={{ mb: 3 }}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="400"
                      image={getStorageUrl(post.image)}
                      alt={post.title}
                      sx={{
                        objectFit: 'cover',
                        backgroundColor: 'grey.100',
                      }}
                    />
                  </Card>
                </Box>
              )}

              {/* Content */}
              <Box
                sx={{
                  '& h1': { fontSize: '2rem', fontWeight: 700, mt: 4, mb: 2 },
                  '& h2': { fontSize: '1.5rem', fontWeight: 600, mt: 3, mb: 2 },
                  '& h3': { fontSize: '1.25rem', fontWeight: 600, mt: 2, mb: 1 },
                  '& p': { mb: 2, lineHeight: 1.8 },
                  '& ul, & ol': { mb: 2, pl: 3 },
                  '& li': { mb: 1 },
                  '& code': {
                    bgcolor: 'grey.100',
                    px: 0.5,
                    py: 0.25,
                    borderRadius: 1,
                    fontFamily: 'monospace',
                    fontSize: '0.9em',
                  },
                  '& pre': {
                    bgcolor: 'grey.100',
                    p: 2,
                    borderRadius: 1,
                    overflow: 'auto',
                    mb: 2,
                  },
                  '& blockquote': {
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    pl: 2,
                    ml: 0,
                    fontStyle: 'italic',
                    color: 'text.secondary',
                  },
                }}
              >
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </Box>

              {/* Blog Post Images Gallery */}
              {post.images && post.images.length > 0 && (
                <Box sx={{ mt: 4 }}>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    Images
                  </Typography>
                  <Grid container spacing={2}>
                    {post.images.map((image, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="300"
                            image={getStorageUrl(image)}
                            alt={`${post.title} - Image ${index + 1}`}
                            sx={{
                              objectFit: 'cover',
                              backgroundColor: 'grey.100',
                            }}
                          />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Stack>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

