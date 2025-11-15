/**
 * Firebase Storage utility functions
 * 
 * This file provides helper functions for working with Firebase Storage.
 * Since we're using static export, we construct public URLs directly.
 */

// Get bucket name from env, stripping gs:// prefix if present (gs:// is only for gsutil commands, not HTTP URLs)
const getBucketName = () => {
  const bucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'jacobdayton-e716a.firebasestorage.app';
  // Remove gs:// prefix if present (defensive coding)
  return bucket.replace(/^gs:\/\//, '');
};
const STORAGE_BUCKET = getBucketName();

/**
 * Get a public URL for a Firebase Storage file
 * @param {string} path - The storage path (e.g., "projects/project-one-hero.jpg")
 * @returns {string} Public URL for the file
 */
export const getStorageUrl = (path) => {
  if (!path) return null;
  
  // If it's already a full URL, return it
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Encode the path for URL (handle spaces and special chars)
  const encodedPath = cleanPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
  
  // Construct Firebase Storage public URL
  return `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/${encodedPath}?alt=media`;
};

/**
 * Get multiple storage URLs from an array of paths
 * @param {string[]} paths - Array of storage paths
 * @returns {string[]} Array of public URLs
 */
export const getStorageUrls = (paths) => {
  if (!paths || !Array.isArray(paths)) return [];
  return paths.map(path => getStorageUrl(path));
};

/**
 * Storage path constants for organization
 */
export const STORAGE_PATHS = {
  PROJECTS: 'projects',
  BLOG: 'blog',
  PROFILE: 'profile',
};

