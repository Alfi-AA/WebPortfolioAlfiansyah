/**
 * ALFIANSYAH — CREATIVE TECHNOLOGIST PORTFOLIO
 * Application Logic, Mock Database, Modular Bento Grid & Dynamic Lightboxes
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MOCK DATABASE: projectsData
     Grouped by company/client per category, with aspect-ratio tagged deliverables
     ========================================================================== */

  const projectsData = [
    {
      id: "gramedia-visual-print",
      title: "Gramedia Pustaka Utama — Visual & Print",
      client: "PT Gramedia Pustaka Utama",
      category: "Graphic Design",
      year: "2024",
      discipline: "Editorial & Print Design",
      tools: "Photoshop, Illustrator, InDesign",
      description: "Comprehensive editorial visual identity, publication cover typography, and high-impact marketing collaterals for nationwide literary releases and seasonal campaigns.",
      thumbnail: "assets/projects/gramedia/dummy/thumb-visual-print.svg",
      items: [
        {
          id: "gpu-01",
          title: "Bestseller Book Cover & Dust Jacket",
          type: "image",
          aspectRatio: "16:9",
          src: "assets/projects/gramedia/dummy/print-dust-jacket.svg",
          caption: "Minimalist typographical dust jacket design with gold foil stamp accents."
        },
        {
          id: "gpu-02",
          title: "Literary Fiction Visual Spread",
          type: "image",
          aspectRatio: "9:16",
          src: "assets/projects/gramedia/dummy/print-poster-vertical.svg",
          caption: "Promotional vertical exhibition poster celebrating modern Indonesian authors."
        },
        {
          id: "gpu-03",
          title: "Author Monogram & Seal",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/gramedia/dummy/print-monogram.svg",
          caption: "Custom handcrafted vector monogram icon used across author publications."
        },
        {
          id: "gpu-04",
          title: "Typography & Grid Study",
          type: "image",
          aspectRatio: "9:16",
          src: "assets/projects/gramedia/dummy/print-grid-study.svg",
          caption: "Modular editorial grid exploration combining classical serifs and modern sans."
        },
        {
          id: "gpu-05",
          title: "Nationwide Book Launch Billboard",
          type: "image",
          aspectRatio: "16:9",
          src: "assets/projects/gramedia/dummy/print-billboard.svg",
          caption: "High-contrast out-of-home advertising banner for flagship store openings."
        },
        {
          id: "gpu-06",
          title: "Collectors Edition Box Slipcase",
          type: "image",
          aspectRatio: "4:5",
          src: "assets/projects/gramedia/dummy/print-boxset.svg",
          caption: "Textured hardcover box packaging with bespoke debossed line art."
        },
        {
          id: "gpu-07",
          title: "Gramedia Visual Brand Guidelines",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/gramedia/dummy/print-brand-guidelines.svg",
          caption: "Editorial guidelines manual for print consistency across publishing branches."
        },
        {
          id: "gpu-08",
          title: "Special Edition Bookmark Set",
          type: "image",
          aspectRatio: "4:5",
          src: "assets/projects/gramedia/dummy/print-bookmarks.svg",
          caption: "Limited run collectible foil bookmarks distributed at Jakarta Book Fair."
        }
      ]
    },

    {
      id: "gramedia-book-promos",
      title: "Gramedia Pustaka Utama — Book Promos",
      client: "PT Gramedia Pustaka Utama",
      category: "Video Editing",
      year: "2024",
      discipline: "Cinematic Trailers & Interviews",
      tools: "Premiere Pro, DaVinci Resolve, After Effects",
      description: "Cinematic release trailers, author spotlight interviews, and high-tension narrative teasers engineered for digital broadcasting and social media engagement.",
      thumbnail: "assets/projects/gramedia/dummy/thumb-book-promos.svg",
      items: [
        {
          id: "gpu-vid-01",
          title: "Flagship Novel Release Trailer",
          type: "video",
          aspectRatio: "16:9",
          src: "assets/projects/gramedia/dummy/video-novel-trailer.svg",
          youtubeId: "dQw4w9WgXcQ", // Replace with actual Gramedia trailer ID
          caption: "Paced trailer with custom sound design and atmospheric lighting."
        },
        {
          id: "gpu-vid-02",
          title: "Author Spotlight: Quick Fire Interview",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/gramedia/dummy/video-author-reel.svg",
          youtubeId: "ScMzIvxBSi4", // 9:16 vertical short format
          caption: "Fast-paced vertical reel spotlighting the author's writing ritual."
        },
        {
          id: "gpu-vid-03",
          title: "Behind the Scenes: Editorial Printing Press",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/gramedia/dummy/video-bts-printing.svg",
          caption: "Color-graded photographic still from the offset printing floor."
        },
        {
          id: "gpu-vid-04",
          title: "Mystery Thriller 15s Teaser",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/gramedia/dummy/video-thriller-teaser.svg",
          youtubeId: "LXb3EKWsInQ",
          caption: "Kinetic suspense reel featuring jump cuts and analog sound effects."
        },
        {
          id: "gpu-vid-05",
          title: "Jakarta Book Fair Recap Film",
          type: "video",
          aspectRatio: "16:9",
          src: "assets/projects/gramedia/dummy/video-bookfair-recap.svg",
          youtubeId: "M7lc1UVf-VE",
          caption: "3-minute cinematic festival recap highlighting thousands of attendees."
        },
        {
          id: "gpu-vid-06",
          title: "Audiobook Launch Teaser",
          type: "image",
          aspectRatio: "4:5",
          src: "assets/projects/gramedia/dummy/video-audiobook-still.svg",
          caption: "Voice artist studio recording aesthetic photography frame."
        },
        {
          id: "gpu-vid-07",
          title: "Color Grading Breakdown: Studio Shoot",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/gramedia/dummy/video-grading-node.svg",
          caption: "DaVinci Resolve node graph and split-screen LUT grading preview."
        },
        {
          id: "gpu-vid-08",
          title: "Reader Testimonials Montage",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/gramedia/dummy/video-reader-reaction.svg",
          youtubeId: "5qap5aO4i9A",
          caption: "Micro-interview reel cut for viral TikTok & Instagram Reels distribution."
        }
      ]
    },

    {
      id: "oasis-luxury-reels",
      title: "Oasis Genius Hospitality — Luxury Reels",
      client: "Oasis Genius Hospitality",
      category: "Video Editing",
      year: "2023 — 2024",
      discipline: "Luxury Travel & Pacing",
      tools: "Premiere Pro, DaVinci Resolve",
      description: "High-converting luxury hospitality reels, drone cinematography grading, resort promotional narratives, and immersive soundscapes designed for high-net-worth travelers.",
      thumbnail: "assets/projects/oasis/dummy/thumb-luxury-reels.svg",
      items: [
        {
          id: "oasis-01",
          title: "Private Villa Morning Routine",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/oasis/dummy/reel-villa-morning.svg",
          youtubeId: "ScMzIvxBSi4", // 9:16 Vertical Reel
          caption: "Smooth seamless transition reel showcasing private plunge pool and breakfast service."
        },
        {
          id: "oasis-02",
          title: "Cinematic Resort Aerial Masterpiece",
          type: "video",
          aspectRatio: "16:9",
          src: "assets/projects/oasis/dummy/video-resort-drone.svg",
          youtubeId: "LXb3EKWsInQ", // 16:9 Landscape Drone Showcase
          caption: "4K Golden hour drone cinematography sweeping over tropical cliffs."
        },
        {
          id: "oasis-03",
          title: "Michelin-Starred Culinary Preview",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/oasis/dummy/still-culinary-dish.svg",
          caption: "Color-graded macro frame of signature tasting course presentation."
        },
        {
          id: "oasis-04",
          title: "Sunset Cocktail Mixology",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/oasis/dummy/reel-mixology.svg",
          youtubeId: "kXYiU_JCYtU", // 9:16 Vertical
          caption: "Dynamic rhythm editing sync to live shaker audio and ambient lounge track."
        },
        {
          id: "oasis-05",
          title: "Wellness & Spa Sanctuary Experience",
          type: "video",
          aspectRatio: "16:9",
          src: "assets/projects/oasis/dummy/video-spa-treatment.svg",
          youtubeId: "M7lc1UVf-VE",
          caption: "Meditative pacing highlighting holistic wellness retreats."
        },
        {
          id: "oasis-06",
          title: "Oceanfront Suite Architectural Study",
          type: "image",
          aspectRatio: "4:5",
          src: "assets/projects/oasis/dummy/still-suite-interior.svg",
          caption: "Symmetrical interior shot balancing natural island sunlight and timber textures."
        },
        {
          id: "oasis-07",
          title: "Guest Arrival & Welcome Ritual",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/oasis/dummy/reel-arrival-ritual.svg",
          youtubeId: "5qap5aO4i9A", // 9:16 Vertical
          caption: "Warm hospitable greeting sequence captured with steady gimbal motion."
        },
        {
          id: "oasis-08",
          title: "Night Ambient Fire Pit Sessions",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/oasis/dummy/still-firepit-night.svg",
          caption: "Low-light cinema sensor test featuring warm ember reflections."
        }
      ]
    },

    {
      id: "aha-commerce-ai-ads",
      title: "AHA Commerce — AI Commercial Ads",
      client: "AHA Commerce",
      category: "Video Editing",
      year: "2024",
      discipline: "AI Video & Performance Marketing",
      tools: "Runway Gen-AI, Premiere Pro, Midjourney, Topaz AI",
      description: "Fast-paced AI-assisted commercial video ads engineered for e-commerce conversion, algorithmic viral loops, and high-retention performance marketing.",
      thumbnail: "assets/projects/aha-commerce/dummy/thumb-ai-ads.svg",
      items: [
        {
          id: "aha-01",
          title: "AI Product Deconstruction Hook",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/aha-commerce/dummy/ad-ai-deconstruction.svg",
          youtubeId: "ScMzIvxBSi4", // 9:16 Vertical Ad
          caption: "First 3 seconds hook generated via Runway Gen-2 with explosive visual pacing."
        },
        {
          id: "aha-02",
          title: "Brand Commercial: Synthetic Future",
          type: "video",
          aspectRatio: "16:9",
          src: "assets/projects/aha-commerce/dummy/ad-synthetic-future.svg",
          youtubeId: "dQw4w9WgXcQ",
          caption: "Futuristic brand showcase merging live product plates with AI neural backdrops."
        },
        {
          id: "aha-03",
          title: "E-Commerce ROAS Performance Test",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/aha-commerce/dummy/metric-performance.svg",
          caption: "Creative A/B testing dashboard showing 4.2x ROAS lift on AI variations."
        },
        {
          id: "aha-04",
          title: "Dynamic Fashion Morph Reel",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/aha-commerce/dummy/ad-fashion-morph.svg",
          youtubeId: "kXYiU_JCYtU",
          caption: "Seamless outfit transition powered by AI frame interpolation and kinetic audio."
        },
        {
          id: "aha-05",
          title: "Tech Gadget AI Feature Breakdown",
          type: "video",
          aspectRatio: "16:9",
          src: "assets/projects/aha-commerce/dummy/ad-gadget-breakdown.svg",
          youtubeId: "M7lc1UVf-VE",
          caption: "3D CAD model blended with AI smoke particles and bold typography."
        },
        {
          id: "aha-06",
          title: "Prompt Engineering & Asset Generation",
          type: "image",
          aspectRatio: "4:5",
          src: "assets/projects/aha-commerce/dummy/still-prompt-board.svg",
          caption: "Visual moodboard and token weights documentation for consistent lighting."
        },
        {
          id: "aha-07",
          title: "Direct Response Conversion Creative",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/aha-commerce/dummy/ad-direct-response.svg",
          youtubeId: "5qap5aO4i9A",
          caption: "High-urgency flash sale format engineered specifically for Shopee & TikTok Shop."
        },
        {
          id: "aha-08",
          title: "Neural Upscaling Comparison",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/aha-commerce/dummy/still-upscaling-split.svg",
          caption: "Side-by-side fidelity comparison before and after Topaz Video AI sharpening."
        }
      ]
    },

    {
      id: "health-edu-motion",
      title: "Health Edu Pop-Up & Animation",
      client: "Freelance Creative / Health Agency",
      category: "Motion Graphics",
      year: "2023",
      discipline: "Kinetic Motion & Vector Systems",
      tools: "After Effects, Illustrator, Lottie",
      description: "Interactive educational vector motion design, dynamic infographic pop-up elements, kinetic typography, and character animation explaining critical health literacy concepts.",
      thumbnail: "assets/projects/freelance/dummy/thumb-health-edu.svg",
      items: [
        {
          id: "health-01",
          title: "Immune Response Kinetic Flow",
          type: "video",
          aspectRatio: "16:9",
          src: "assets/projects/freelance/dummy/motion-immune-flow.svg",
          youtubeId: "M7lc1UVf-VE",
          caption: "Smooth 60fps vector animation explaining antibody neutralization."
        },
        {
          id: "health-02",
          title: "Microbiology Pop-Up Card Interaction",
          type: "image",
          aspectRatio: "9:16",
          src: "assets/projects/freelance/dummy/motion-popup-card.svg",
          caption: "Simulated paper-cut pop-up mechanism engineered with 3D layer nulls."
        },
        {
          id: "health-03",
          title: "Animated Character Health Mascot",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/freelance/dummy/motion-mascot-rig.svg",
          caption: "Rigged vector character with full emotional expression cycle."
        },
        {
          id: "health-04",
          title: "Public Health Safety Explainer Reel",
          type: "video",
          aspectRatio: "9:16",
          src: "assets/projects/freelance/dummy/motion-safety-reel.svg",
          youtubeId: "ScMzIvxBSi4",
          caption: "Bite-sized mobile animation teaching proper hygiene protocols in schools."
        },
        {
          id: "health-05",
          title: "Medical Data Infographic Loop",
          type: "video",
          aspectRatio: "16:9",
          src: "assets/projects/freelance/dummy/motion-data-loop.svg",
          youtubeId: "LXb3EKWsInQ",
          caption: "Real-time chart telemetry with liquid organic line strokes."
        },
        {
          id: "health-06",
          title: "Typography Layout: Health Terms",
          type: "image",
          aspectRatio: "4:5",
          src: "assets/projects/freelance/dummy/motion-type-poster.svg",
          caption: "Bold graphic typography poster balancing Indonesian and scientific naming."
        },
        {
          id: "health-07",
          title: "Lottie Micro-Interaction UI Icons",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/freelance/dummy/motion-lottie-icons.svg",
          caption: "Lightweight JSON vector icon animations exported for mobile web apps."
        },
        {
          id: "health-08",
          title: "Interactive Web Pop-Up Storyboard",
          type: "image",
          aspectRatio: "4:5",
          src: "assets/projects/freelance/dummy/motion-storyboard.svg",
          caption: "Pre-production sequential keyframes demonstrating transition physics."
        }
      ]
    },

    {
      id: "gymflow-ui-ux",
      title: "GymFlow App & E-Catalog Web",
      client: "Freelance Creative / Fitness Brand",
      category: "UI/UX Design",
      year: "2024",
      discipline: "Product Design & Frontend Prototyping",
      tools: "Figma, HTML5, CSS3, Vanilla JS",
      description: "High-contrast dark mode fitness tracking interface and responsive luxury e-catalog web experience featuring kinetic interactions and frictionless user onboarding.",
      thumbnail: "assets/projects/ui-ux/dummy/thumb-gymflow.svg",
      items: [
        {
          id: "gym-01",
          title: "GymFlow Dashboard & Workout Monitor",
          type: "image",
          aspectRatio: "16:9",
          src: "assets/projects/ui-ux/dummy/ui-dashboard-wide.svg",
          caption: "High-contrast dark UI dashboard with real-time biometric telemetry visualization."
        },
        {
          id: "gym-02",
          title: "Mobile Native Workout Log Screen",
          type: "image",
          aspectRatio: "9:16",
          src: "assets/projects/ui-ux/dummy/ui-mobile-screen.svg",
          caption: "iOS 18 human interface guidelines compliant vertical workout tracker interface."
        },
        {
          id: "gym-03",
          title: "Design System: Typography & Tokens",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/ui-ux/dummy/ui-design-tokens.svg",
          caption: "Scalable design token hierarchy adhering strictly to 8pt spatial rhythm."
        },
        {
          id: "gym-04",
          title: "Interactive E-Catalog Mobile Experience",
          type: "image",
          aspectRatio: "9:16",
          src: "assets/projects/ui-ux/dummy/ui-ecatalog-mobile.svg",
          caption: "Fluid luxury sportswear catalog checkout with single-thumb ergonomics."
        },
        {
          id: "gym-05",
          title: "Interactive Prototype Walkthrough",
          type: "video",
          aspectRatio: "16:9",
          src: "assets/projects/ui-ux/dummy/video-prototype-flow.svg",
          youtubeId: "dQw4w9WgXcQ",
          caption: "High-fidelity Figma screen flow demonstration with micro-interaction feedback."
        },
        {
          id: "gym-06",
          title: "User Journey & Usability Matrix",
          type: "image",
          aspectRatio: "4:5",
          src: "assets/projects/ui-ux/dummy/ui-user-journey.svg",
          caption: "Friction analysis and drop-off reduction architecture diagram."
        },
        {
          id: "gym-07",
          title: "Interactive Web Component Library",
          type: "image",
          aspectRatio: "1:1",
          src: "assets/projects/ui-ux/dummy/ui-components.svg",
          caption: "Zero-dependency Vanilla JS custom components for sliders, toggles, and modals."
        },
        {
          id: "gym-08",
          title: "Wearable Smartwatch Companion App",
          type: "image",
          aspectRatio: "4:5",
          src: "assets/projects/ui-ux/dummy/ui-smartwatch-glance.svg",
          caption: "OLED optimized glanceable wrist telemetry display with neon green micro-accents."
        }
      ]
    }
  ];

  /* ==========================================================================
     2. AESTHETIC SVG PLACEHOLDER GENERATOR
     Ensures house rule 2: "Every visual renders, never an empty ground".
     If local files are not yet uploaded into assets/, generates crisp dark-mode
     graphic cards with technical gridlines and typography!
     ========================================================================== */

  function generateAestheticPlaceholder(title, category, aspectRatio, client = "ALFIANSYAH") {
    let width = 800;
    let height = 450;

    if (aspectRatio === "9:16") {
      width = 450;
      height = 800;
    } else if (aspectRatio === "1:1") {
      width = 600;
      height = 600;
    } else if (aspectRatio === "4:5") {
      width = 480;
      height = 600;
    }

    const cleanTitle = (title || "Visual Asset").replace(/[<>&'"]/g, '');
    const cleanClient = (client || "PROJECT").toUpperCase().replace(/[<>&'"]/g, '');
    const cleanCat = (category || "PORTFOLIO").toUpperCase().replace(/[<>&'"]/g, '');

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stop-color="#18181F"/>
            <stop offset="70%" stop-color="#101014"/>
            <stop offset="100%" stop-color="#09090B"/>
          </radialGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <rect width="100%" height="100%" fill="url(#grid)"/>
        <circle cx="${width * 0.8}" cy="${height * 0.2}" r="${width * 0.25}" fill="#F42902" opacity="0.08" filter="blur(40px)"/>
        <circle cx="${width * 0.2}" cy="${height * 0.8}" r="${width * 0.2}" fill="#83FD80" opacity="0.04" filter="blur(30px)"/>
        
        <line x1="30" y1="30" x2="${width - 30}" y2="30" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <line x1="30" y1="${height - 30}" x2="${width - 30}" y2="${height - 30}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        
        <text x="35" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#83FD80" letter-spacing="2">${cleanCat}</text>
        <text x="${width - 35}" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#71717A" text-anchor="end">${cleanClient}</text>
        
        <text x="${width / 2}" y="${height / 2 - 8}" font-family="'Plus Jakarta Sans', sans-serif" font-size="${width > 500 ? 20 : 16}" font-weight="700" fill="#FDFDFF" text-anchor="middle">${cleanTitle}</text>
        <text x="${width / 2}" y="${height / 2 + 18}" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="500" fill="#A1A1AA" text-anchor="middle">ASPECT RATIO [${aspectRatio}]</text>
        
        <rect x="${width / 2 - 25}" y="${height - 45}" width="50" height="2" fill="#F42902"/>
      </svg>
    `.trim();

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  /* ==========================================================================
     3. DOM ELEMENTS SELECTION
     ========================================================================== */

  const mainContent = document.getElementById('main-content');
  const projectDetailView = document.getElementById('project-detail-view');
  const projectsGrid = document.getElementById('projects-grid');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const heroIndexItems = document.querySelectorAll('.hero__index-item');
  const btnBackPortfolio = document.getElementById('btn-back-portfolio');
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Detail View Elements
  const detailCrumbCat = document.getElementById('detail-crumb-cat');
  const detailCrumbTitle = document.getElementById('detail-crumb-title');
  const detailCategory = document.getElementById('detail-category');
  const detailTitle = document.getElementById('detail-title');
  const detailDesc = document.getElementById('detail-desc');
  const detailClient = document.getElementById('detail-client');
  const detailDiscipline = document.getElementById('detail-discipline');
  const detailYear = document.getElementById('detail-year');
  const detailTools = document.getElementById('detail-tools');
  const detailBentoGrid = document.getElementById('detail-bento-grid');

  // Lightbox Modals
  const imageLightbox = document.getElementById('image-lightbox');
  const imageLightboxBackdrop = document.getElementById('image-lightbox-backdrop');
  const imageLightboxClose = document.getElementById('image-lightbox-close');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  const videoLightbox = document.getElementById('video-lightbox');
  const videoLightboxBackdrop = document.getElementById('video-lightbox-backdrop');
  const videoLightboxClose = document.getElementById('video-lightbox-close');
  const videoModalContainer = document.getElementById('video-modal-container');
  const videoPlayerIframe = document.getElementById('video-player-iframe');
  const videoAspectBadge = document.getElementById('video-aspect-badge');
  const videoTitleLabel = document.getElementById('video-title-label');

  // Email copy button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyHint = document.getElementById('copy-hint');

  /* ==========================================================================
     4. PORTFOLIO FILTERING & RENDERING
     ========================================================================== */

  let currentCategory = 'All';

  // Update Category Counts
  function updateCategoryCounts() {
    const counts = {
      All: projectsData.length,
      "Graphic Design": 0,
      "Video Editing": 0,
      "Motion Graphics": 0,
      "UI/UX Design": 0
    };

    projectsData.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    const countAllEl = document.getElementById('count-all');
    const countGraphicEl = document.getElementById('count-graphic');
    const countVideoEl = document.getElementById('count-video');
    const countMotionEl = document.getElementById('count-motion');
    const countUiuxEl = document.getElementById('count-uiux');

    if (countAllEl) countAllEl.textContent = counts.All;
    if (countGraphicEl) countGraphicEl.textContent = counts["Graphic Design"];
    if (countVideoEl) countVideoEl.textContent = counts["Video Editing"];
    if (countMotionEl) countMotionEl.textContent = counts["Motion Graphics"];
    if (countUiuxEl) countUiuxEl.textContent = counts["UI/UX Design"];
  }

  // Render Projects Cards
  function renderProjects(filter = 'All') {
    projectsGrid.innerHTML = '';

    const filtered = filter === 'All' 
      ? projectsData 
      : projectsData.filter(item => item.category.toLowerCase() === filter.toLowerCase());

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View project ${project.title}`);

      // Generate fallback image URI if not found
      const fallbackSrc = generateAestheticPlaceholder(project.title, project.category, "16:9", project.client);

      card.innerHTML = `
        <div class="project-card__thumbnail">
          <img 
            class="project-card__img" 
            src="${project.thumbnail}" 
            alt="${project.title}"
            loading="lazy"
            onerror="this.onerror=null; this.src='${fallbackSrc}';"
          >
          <span class="project-card__overlay-tag">${project.category}</span>
          <span class="project-card__count-badge">${project.items.length} Deliverables</span>
        </div>
        <div class="project-card__body">
          <span class="project-card__client">${project.client}</span>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__footer">
            <span>Explore Case Study</span>
            <span class="project-card__arrow">→</span>
          </div>
        </div>
      `;

      // Event listener to open project detail
      card.addEventListener('click', () => openProjectDetail(project.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectDetail(project.id);
        }
      });

      projectsGrid.appendChild(card);
    });
  }

  // Filter Tab Click Handlers
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      currentCategory = tab.getAttribute('data-filter');
      renderProjects(currentCategory);
    });
  });

  // Hero Index 4-Column Click Handlers (#01 to #04)
  heroIndexItems.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.getAttribute('data-category');
      
      // Select the matching filter tab
      filterTabs.forEach(t => {
        if (t.getAttribute('data-filter') === category) {
          t.click();
        }
      });

      // Smooth scroll to portfolio section
      const portfolioSec = document.getElementById('portfolio');
      if (portfolioSec) {
        portfolioSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ==========================================================================
     5. PROJECT DETAIL VIEW & MODULAR BENTO GRID (MAX 4 ROWS)
     ========================================================================== */

  function openProjectDetail(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    // Populate Headers & Metadata
    detailCrumbCat.textContent = project.category;
    detailCrumbTitle.textContent = project.title;
    detailCategory.textContent = project.category;
    detailTitle.textContent = project.title;
    detailDesc.textContent = project.description;
    detailClient.textContent = project.client;
    detailDiscipline.textContent = project.discipline;
    detailYear.textContent = project.year;
    detailTools.textContent = project.tools;

    // Render Bento Grid Items
    detailBentoGrid.innerHTML = '';

    project.items.forEach(item => {
      const bentoItem = document.createElement('div');
      
      // Determine CSS class based on aspect ratio
      let aspectClass = 'aspect-16-9';
      if (item.aspectRatio === '9:16') {
        aspectClass = 'aspect-9-16';
      } else if (item.aspectRatio === '1:1') {
        aspectClass = 'aspect-1-1';
      } else if (item.aspectRatio === '4:5') {
        aspectClass = 'aspect-4-5';
      }

      bentoItem.className = `bento-item gallery-item ${aspectClass}`;
      bentoItem.tabIndex = 0;
      bentoItem.setAttribute('role', 'button');
      bentoItem.setAttribute('aria-label', `${item.title} (${item.type})`);

      const fallbackUri = generateAestheticPlaceholder(item.title, project.category, item.aspectRatio, project.client);

      // Icon for type
      const isVideo = item.type === 'video';
      const playButtonHtml = isVideo ? `
        <div class="bento-item__play-btn" title="Play Video in Dynamic Lightbox">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      ` : '';

      const typeIconHtml = isVideo ? `
        <span class="bento-item__type-icon" title="Video">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        </span>
      ` : `
        <span class="bento-item__type-icon" title="High-Res Image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </span>
      `;

      bentoItem.innerHTML = `
        <div class="bento-item__media-frame">
          <img 
            class="bento-item__img gallery-img" 
            src="${item.src}" 
            alt="${item.title}"
            loading="lazy"
            onerror="this.onerror=null; this.src='${fallbackUri}';"
          >
        </div>
        ${playButtonHtml}
        ${typeIconHtml}
        <div class="bento-item__pill">
          <span class="bento-item__pill-tag">${item.aspectRatio}</span>
          <span>${item.title}</span>
        </div>
      `;

      // Click handler: Open dynamic video or image lightbox
      bentoItem.addEventListener('click', () => {
        if (isVideo) {
          openVideoLightbox(item, fallbackUri);
        } else {
          openImageLightbox(item, fallbackUri);
        }
      });

      bentoItem.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          bentoItem.click();
        }
      });

      detailBentoGrid.appendChild(bentoItem);
    });

    // View Switching: Hide main, Show detail
    mainContent.style.display = 'none';
    projectDetailView.style.display = 'block';
    projectDetailView.setAttribute('aria-hidden', 'false');

    // Scroll cleanly to the top of the detail view
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Return to Portfolio Button Handler
  btnBackPortfolio.addEventListener('click', () => {
    projectDetailView.style.display = 'none';
    projectDetailView.setAttribute('aria-hidden', 'true');
    mainContent.style.display = 'block';

    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  /* ==========================================================================
     6. DYNAMIC ASPECT-RATIO VIDEO LIGHTBOX MODAL
     Handles 9:16 vertical shorts and 16:9 widescreen landscape dynamically
     ========================================================================== */

  function openVideoLightbox(item, fallbackSrc) {
    const isVertical = item.aspectRatio === '9:16';

    // Toggle dynamic sizing classes
    if (isVertical) {
      videoModalContainer.classList.remove('is-landscape');
      videoModalContainer.classList.add('is-vertical');
      videoAspectBadge.textContent = '9:16 Vertical Reel';
    } else {
      videoModalContainer.classList.remove('is-vertical');
      videoModalContainer.classList.add('is-landscape');
      videoAspectBadge.textContent = `${item.aspectRatio || '16:9'} Widescreen`;
    }

    videoTitleLabel.textContent = item.title;

    // Embed YouTube with autoplay
    const ytId = item.youtubeId || 'dQw4w9WgXcQ';
    videoPlayerIframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`;

    videoLightbox.classList.add('is-open');
    videoLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoLightbox() {
    videoLightbox.classList.remove('is-open');
    videoLightbox.setAttribute('aria-hidden', 'true');
    // Important: Clear iframe src immediately to stop audio playback
    videoPlayerIframe.src = '';
    document.body.style.overflow = '';
  }

  videoLightboxClose.addEventListener('click', closeVideoLightbox);
  videoLightboxBackdrop.addEventListener('click', closeVideoLightbox);

  /* ==========================================================================
     7. IMAGE LIGHTBOX MODAL
     ========================================================================== */

  function openImageLightbox(item, fallbackSrc) {
    lightboxImg.src = item.src;
    lightboxImg.onerror = () => {
      lightboxImg.onerror = null;
      lightboxImg.src = fallbackSrc;
    };
    lightboxCaption.textContent = item.caption || item.title;

    imageLightbox.classList.add('is-open');
    imageLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeImageLightbox() {
    imageLightbox.classList.remove('is-open');
    imageLightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  imageLightboxClose.addEventListener('click', closeImageLightbox);
  imageLightboxBackdrop.addEventListener('click', closeImageLightbox);

  // Global ESC Key Handler for Lightboxes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (videoLightbox.classList.contains('is-open')) {
        closeVideoLightbox();
      }
      if (imageLightbox.classList.contains('is-open')) {
        closeImageLightbox();
      }
    }
  });

  /* ==========================================================================
     8. NAVBAR NAVIGATION & MOBILE MENU
     ========================================================================== */

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('is-open');
  });

  // Mobile links click closes menu
  document.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      // If we are currently in detail view, return to main view
      if (projectDetailView.style.display !== 'none') {
        projectDetailView.style.display = 'none';
        mainContent.style.display = 'block';
      }
    });
  });

  // Active link scroll spy
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (projectDetailView.style.display !== 'none') return;

    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     9. EMAIL COPY / CONTACT TOAST FEEDBACK
     ========================================================================== */

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      const email = 'alfiansyah.multimedia@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          if (copyHint) {
            const originalText = copyHint.textContent;
            copyHint.textContent = '✓ Email copied to clipboard!';
            copyHint.style.color = 'var(--accent-neon)';
            setTimeout(() => {
              copyHint.textContent = originalText;
              copyHint.style.color = '';
            }, 3000);
          }
        });
      }
    });
  }

  /* ==========================================================================
     10. INITIALIZATION
     ========================================================================== */
  updateCategoryCounts();
  renderProjects('All');

});

