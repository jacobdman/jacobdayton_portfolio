import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FullscreenImageViewer = ({ images, currentIndex, onClose, onNavigate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (!images || images.length === 0 || currentIndex < 0 || currentIndex >= images.length) {
    return null;
  }

  const currentImage = images[currentIndex];
  const hasBlogInfo = currentImage.post;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, md: 4 },
      }}
      onClick={onClose}
    >
      {/* Close Button */}
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        sx={{
          position: 'absolute',
          top: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          color: 'common.white',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.2)',
          },
          zIndex: 10000,
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          sx={{
            position: 'absolute',
            left: { xs: 16, md: 32 },
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'common.white',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.2)',
            },
            zIndex: 10000,
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}

      {currentIndex < images.length - 1 && (
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          sx={{
            position: 'absolute',
            right: { xs: 16, md: 32 },
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'common.white',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.2)',
            },
            zIndex: 10000,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}

      {/* Image Container */}
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '90vw',
          maxHeight: hasBlogInfo ? '85vh' : '90vh',
        }}
      >
        <Box
          component="img"
          src={currentImage.imageUrl}
          alt={hasBlogInfo ? currentImage.post.title : `Image ${currentIndex + 1}`}
          onLoad={() => setImageLoaded(true)}
          sx={{
            maxWidth: '100%',
            maxHeight: hasBlogInfo ? 'calc(85vh - 200px)' : '90vh',
            objectFit: 'contain',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />

        {/* Blog Info Panel */}
        {hasBlogInfo && (
          <Paper
            elevation={0}
            sx={{
              mt: 3,
              p: 3,
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: 2,
              maxWidth: '800px',
              width: '100%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              {currentImage.post.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {currentImage.post.excerpt}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Published {new Date(currentImage.post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>
          </Paper>
        )}

        {/* Image Counter */}
        <Typography
          variant="caption"
          sx={{
            mt: 2,
            color: 'common.white',
            opacity: 0.7,
          }}
        >
          {currentIndex + 1} / {images.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default FullscreenImageViewer;

