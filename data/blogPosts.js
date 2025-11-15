// Blog posts data - easily editable without a database
// Link posts to projects using projectId (optional)
//
// IMAGE PATHS:
// - Use Firebase Storage paths (e.g., "blog/2024-01-15T10-00-00-hero.jpg")
// - Or use full URLs if hosted elsewhere
// - The getStorageUrl() helper will convert Storage paths to public URLs
// - Upload images to Firebase Storage in the "blog" folder
//
// SLUG FORMAT:
// - Slugs are generated from publishedAt timestamp: YYYY-MM-DDTHH-mm-ss
// - Example: publishedAt: '2024-01-15T10:00:00Z' -> slug: '2024-01-15T10-00-00'

/**
 * Convert ISO timestamp to URL-safe slug format
 * @param {string} isoTimestamp - ISO timestamp string (e.g., '2024-01-15T10:00:00Z')
 * @returns {string} URL-safe slug (e.g., '2024-01-15T10-00-00')
 */
const timestampToSlug = (isoTimestamp) => {
  // Remove 'Z' and milliseconds if present, replace colons with hyphens
  return isoTimestamp.replace('Z', '').replace(/:\d{2}\.\d{3}/, '').replace(/:/g, '-');
};

export const blogPosts = [
  {
    id: 1,
    title: 'Starting CBC: A Book Club About More Than Books',
    slug: timestampToSlug('2024-01-20T10:00:00Z'), // '2024-01-20T10-00-00'
    excerpt: 'Two years ago some friends and I wanted to start a book club, but we wanted it to be about more than just the books.',
    content: `# Starting CBC: A Book Club About More Than Books

Two years ago some friends and I wanted to start a book club, but we wanted it to be about more than just the books.

We decided on a rotation of 3 themes, one for personal development/business, fiction/creative works, and philosophy/religion. This rotation has kept members with different interests engaged month after month, and the focus on discussion brings those members voices into conversations they might have otherwise missed.

Keeping on the theme of this being a personal development club, we've been tracking quarterly goals and habits and (as I'm sure you'd expect from any accountability group) seeing some huge progress towards huge goals.`,
    publishedAt: '2024-01-20T10:00:00Z',
    projectId: 1, // CBC
    tags: ['Community', 'Personal Development', 'Books'],
    image: null,
    images: [],
  },
  {
    id: 2,
    title: 'Mentis: My Journey Away from Adderall',
    slug: timestampToSlug('2024-01-18T14:00:00Z'), // '2024-01-18T14-00-00'
    excerpt: 'I used to take 25mg of adderall everyday… more to come.',
    content: `# Mentis: My Journey Away from Adderall

I used to take 25mg of adderall everyday… more to come.`,
    publishedAt: '2024-01-18T14:00:00Z',
    projectId: 2, // Mentis
    tags: ['Health', 'Wellness', 'Personal Story'],
    image: null,
    images: [],
  },
  {
    id: 3,
    title: 'Showboat: Connecting Bands and Venues',
    slug: timestampToSlug('2024-01-15T16:00:00Z'), // '2024-01-15T16-00-00'
    excerpt: 'I\'ve played in many bands! More to come…',
    content: `# Showboat: Connecting Bands and Venues

I've played in many bands! More to come…`,
    publishedAt: '2024-01-15T16:00:00Z',
    projectId: 3, // Showboat
    tags: ['Music', 'Platform', 'Startup'],
    image: null,
    images: [],
  },
  {
    id: 4,
    title: 'HTMElephant: A Different Kind of Bootcamp',
    slug: timestampToSlug('2024-01-12T11:00:00Z'), // '2024-01-12T11-00-00'
    excerpt: 'I personally did a web dev bootcamp but it\'s gone to crap - more to come.',
    content: `# HTMElephant: A Different Kind of Bootcamp

I personally did a web dev bootcamp but it's gone to crap - more to come.`,
    publishedAt: '2024-01-12T11:00:00Z',
    projectId: 4, // HTMElephant
    tags: ['Education', 'Bootcamp', 'Web Development'],
    image: null,
    images: [],
  },
  {
    id: 5,
    title: 'Emerge/Veille API Story',
    slug: timestampToSlug('2024-01-10T09:00:00Z'), // '2024-01-10T09-00-00'
    excerpt: 'The story of building the API for Emerge/Veille and the lessons learned.',
    content: `# Emerge/Veille API Story

Emerge/Veille api story`,
    publishedAt: '2024-01-10T09:00:00Z',
    projectId: 5, // Contract Work
    tags: ['API Development', 'Contracting', 'Case Study'],
    image: null,
    images: [],
  },
  {
    id: 6,
    title: 'A History of Bands I\'ve Played With',
    slug: timestampToSlug('2024-01-08T15:00:00Z'), // '2024-01-08T15-00-00'
    excerpt: 'A history of bands I\'ve played with.',
    content: `# A History of Bands I've Played With

A history of bands I've played with.`,
    publishedAt: '2024-01-08T15:00:00Z',
    projectId: 6, // Music
    tags: ['Music', 'Personal', 'History'],
    image: null,
    images: [],
  },
  {
    id: 7,
    title: 'Billiards Dungeon Crawler: The Idea',
    slug: timestampToSlug('2024-01-05T13:00:00Z'), // '2024-01-05T13-00-00'
    excerpt: 'I was thinking of a good idea for a game and I thought it would be cool to have a dungeon crawler game where battles are played with billiards physics!',
    content: `# Billiards Dungeon Crawler: The Idea

I was thinking of a good idea for a game and I thought it would be cool to have a dungeon crawler game where battles are played with billiards physics!`,
    publishedAt: '2024-01-05T13:00:00Z',
    projectId: 7, // Billiards Dungeon Crawler
    tags: ['Game Development', 'Roguelike', 'Billiards'],
    image: null,
    images: [],
  },
];

// Helper function to get blog post by slug (handles timestamp-based slugs)
export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

// Helper function to get all blog post slugs
export const getAllBlogPostSlugs = () => {
  return blogPosts.map((post) => post.slug);
};

// Helper function to get blog posts by project ID
export const getBlogPostsByProjectId = (projectId) => {
  return blogPosts
    .filter((post) => post.projectId === projectId)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

// Helper function to get all blog posts (sorted by date, newest first)
export const getAllBlogPosts = () => {
  return blogPosts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

// Helper function to get blog images for a project (sorted chronologically, newest first)
// Returns array of objects with: { image, post, type: 'hero' | 'gallery' }
export const getBlogImagesForProject = (projectId) => {
  const posts = getBlogPostsByProjectId(projectId);
  const images = [];
  
  posts.forEach((post) => {
    // Add hero image if available
    if (post.image) {
      images.push({
        image: post.image,
        post,
        type: 'hero',
      });
    }
    // Add gallery images if available
    if (post.images && post.images.length > 0) {
      post.images.forEach((image) => {
        images.push({
          image,
          post,
          type: 'gallery',
        });
      });
    }
  });
  
  // Sort by publishedAt (newest first)
  return images.sort((a, b) => new Date(b.post.publishedAt) - new Date(a.post.publishedAt));
};


