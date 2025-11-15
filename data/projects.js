// Project data - easily editable without a database
// Add your projects here with images, descriptions, and links
//
// IMAGE PATHS:
// - Use Firebase Storage paths (e.g., "projects/project-one-hero.jpg")
// - Or use full URLs if hosted elsewhere
// - The getStorageUrl() helper will convert Storage paths to public URLs
// - Upload images to Firebase Storage in the "projects" folder

export const projects = [
  {
    id: 1,
    title: 'CBC',
    slug: 'cbc',
    description: 'A book club that\'s about more than books. Personal goal tracking, meeting calendars, reporting metrics, a chat feed, and much more!',
    fullDescription: `CBC (Community Book Club) is a comprehensive platform designed to transform traditional book clubs into thriving communities focused on personal growth and accountability.

The platform goes beyond simple book discussions by integrating personal goal tracking, meeting calendars, reporting metrics, and a real-time chat feed. Members can set quarterly goals, track habits, and celebrate progress together.

The rotation of three themes—personal development/business, fiction/creative works, and philosophy/religion—keeps members with different interests engaged month after month. The focus on discussion brings diverse voices into conversations they might have otherwise missed, creating a unique space for learning and growth.`,
    image: 'https://firebasestorage.googleapis.com/v0/b/jacobdayton-e716a.firebasestorage.app/o/projects%2Fcbc.png?alt=media&token=c8c20a6a-b1de-4b0a-87f6-e9c84a46e441',
    images: [],
    tags: ['Web App', 'Community', 'Goal Tracking'],
    link: '#',
    github: '#',
    latestUpdate: '2024-01-20T10:00:00Z',
  },
  {
    id: 2,
    title: 'Mentis',
    slug: 'mentis',
    description: 'Mentis creates natural nootropic capsules using organic mushroom extracts to help people with ailments from ADHD, Anxiety, Stress, and lethargy.',
    fullDescription: `Mentis is a health and wellness platform focused on natural alternatives to traditional medications. The product line features carefully formulated nootropic capsules made from organic mushroom extracts.

Designed to help people manage ADHD, anxiety, stress, and lethargy, Mentis offers a natural approach to cognitive enhancement and mental wellness. The platform combines e-commerce functionality with educational content about the benefits of natural nootropics and mushroom-based supplements.`,
    image: 'https://firebasestorage.googleapis.com/v0/b/jacobdayton-e716a.firebasestorage.app/o/projects%2Fmentis_hero.jpeg?alt=media&token=cc6d9504-e13b-4424-822e-99cc2536b560',
    images: [],
    tags: ['E-commerce', 'Health', 'Wellness'],
    link: '#',
    github: '#',
    latestUpdate: '2024-01-18T14:00:00Z',
  },
  {
    id: 3,
    title: 'Showboat',
    slug: 'showboat',
    description: 'AirBnB for local bands and venues! Fill the bill for your next show easily, and know upfront what to expect when booking a venue.',
    fullDescription: `Showboat connects local bands with venues, making it easier than ever to book shows and fill bills. Think AirBnB, but for the music scene.

The platform allows bands to browse available venues, see detailed information about each space, and book shows directly. Venues can list their spaces, set availability, and manage bookings. Bands can see upfront what to expect—equipment available, capacity, sound system details, and more—before committing to a show.

Showboat aims to democratize the local music scene by removing barriers between artists and venues, making it easier for emerging bands to find performance opportunities.`,
    image: 'https://firebasestorage.googleapis.com/v0/b/jacobdayton-e716a.firebasestorage.app/o/projects%2Fshowboat_hero.png?alt=media&token=a98b69d9-a09d-4de1-884e-63fe246ab44a',
    images: [],
    tags: ['Music', 'Marketplace', 'Booking Platform'],
    link: '#',
    github: '#',
    latestUpdate: '2024-01-15T16:00:00Z',
  },
  {
    id: 4,
    title: 'HTMElephant',
    slug: 'htmelephant',
    description: 'A Web-Development Bootcamp that focuses on the individual instead. Become a full-stack web developer in 6 months!',
    fullDescription: `HTMElephant is a web development bootcamp designed with a different philosophy—focusing on the individual learner rather than a one-size-fits-all curriculum.

The program takes students from beginner to full-stack web developer in 6 months, but with personalized learning paths, one-on-one mentorship, and a curriculum that adapts to each student's learning style and career goals.

Unlike traditional bootcamps that rush through material, HTMElephant emphasizes deep understanding, practical projects, and real-world experience. The program includes portfolio development, interview preparation, and job placement support, all tailored to the individual student's needs.`,
    image: 'https://firebasestorage.googleapis.com/v0/b/jacobdayton-e716a.firebasestorage.app/o/projects%2FHTMElephant.png?alt=media&token=40cda81a-6b96-4d44-a8a6-82b894fc9bd1',
    images: [],
    tags: ['Education', 'Bootcamp', 'Web Development'],
    link: '#',
    github: '#',
    latestUpdate: '2024-01-12T11:00:00Z',
  },
  {
    id: 5,
    title: 'Contract Work',
    slug: 'contract-work',
    description: 'Various posts about contracting work I\'ve done, and lessons I\'ve learned from it.',
    fullDescription: `A collection of projects and experiences from my contract work. This includes various client projects, API integrations, custom solutions, and the lessons learned along the way.

From building APIs for startups like Emerge/Veille to working on enterprise solutions, these projects showcase the diverse range of challenges and solutions I've encountered as a contractor. Each project has taught me something new about development, client relations, and problem-solving.`,
    image: null,
    images: [],
    tags: ['Contracting', 'API Development', 'Freelance'],
    link: '#',
    github: '#',
    latestUpdate: '2024-01-10T09:00:00Z',
  },
  {
    id: 6,
    title: 'Music',
    slug: 'music',
    description: 'I\'ve been in many bands! Here are my current and former projects.',
    fullDescription: `Music has been a significant part of my life, and I've had the privilege of playing in various bands over the years. This project documents my musical journey, including current and former bands, recordings, performances, and the stories behind the music.

From local gigs to recording sessions, each band has been a unique experience that has shaped both my musical and personal growth.`,
    image: 'https://firebasestorage.googleapis.com/v0/b/jacobdayton-e716a.firebasestorage.app/o/projects%2Fmusic_hero.JPEG?alt=media&token=13d6ca0f-2caf-4794-a7e4-9ad59da2d965',
    images: [],
    tags: ['Music', 'Bands', 'Creative'],
    link: '#',
    github: '#',
    latestUpdate: '2024-01-08T15:00:00Z',
  },
  {
    id: 7,
    title: 'Billiards Dungeon Crawler',
    slug: 'billiards-dungeon-crawler',
    description: 'A rogue-like dungeon crawler game where battles are played with billiards physics!',
    fullDescription: `Billiards Dungeon Crawler is a unique fusion of two classic game genres—rogue-like dungeon crawlers and billiards. Instead of traditional turn-based or action combat, battles are resolved using billiards physics.

Players navigate through procedurally generated dungeons, encountering enemies that must be defeated through skillful billiards shots. The game combines strategic dungeon exploration with the precision and skill of billiards, creating a completely unique gaming experience.

Each battle becomes a puzzle where players must use angles, spin, and strategy to defeat enemies, collect loot, and progress through increasingly challenging dungeons.`,
    image: 'https://firebasestorage.googleapis.com/v0/b/jacobdayton-e716a.firebasestorage.app/o/projects%2Fbilliards_hero.png?alt=media&token=fa2412ad-166c-47ca-89c9-5f1ff6770e0c',
    images: ['https://firebasestorage.googleapis.com/v0/b/jacobdayton-e716a.firebasestorage.app/o/projects%2Fbilliards_gif.gif?alt=media&token=1db6a6ff-863d-4ad7-8501-52b6b676cc45'],
    tags: ['Game Development', 'Roguelike', 'Billiards'],
    link: '#',
    github: '#',
    latestUpdate: '2024-01-05T13:00:00Z',
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};

// Helper function to get all project slugs (for static generation)
export const getAllProjectSlugs = () => {
  return projects.map((project) => project.slug);
};

