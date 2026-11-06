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
      { id: "gpu-01", title: "Bestseller Book Cover & Dust Jacket", type: "image", aspectRatio: "16:9", src: "assets/projects/gramedia/dummy/print-dust-jacket.svg", caption: "Minimalist typographical dust jacket design." },
      { id: "gpu-02", title: "Literary Fiction Visual Spread", type: "image", aspectRatio: "9:16", src: "assets/projects/gramedia/dummy/print-poster-vertical.svg", caption: "Promotional vertical exhibition poster." },
      { id: "gpu-03", title: "Author Monogram & Seal", type: "image", aspectRatio: "1:1", src: "assets/projects/gramedia/dummy/print-monogram.svg", caption: "Custom handcrafted vector monogram icon." },
      { id: "gpu-04", title: "Typography & Grid Study", type: "image", aspectRatio: "9:16", src: "assets/projects/gramedia/dummy/print-grid-study.svg", caption: "Modular editorial grid exploration." },
      { id: "gpu-05", title: "Nationwide Book Launch Billboard", type: "image", aspectRatio: "16:9", src: "assets/projects/gramedia/dummy/print-billboard.svg", caption: "High-contrast out-of-home advertising banner." },
      { id: "gpu-06", title: "Collectors Edition Box Slipcase", type: "image", aspectRatio: "4:5", src: "assets/projects/gramedia/dummy/print-boxset.svg", caption: "Textured hardcover box packaging." },
      { id: "gpu-07", title: "Gramedia Visual Brand Guidelines", type: "image", aspectRatio: "1:1", src: "assets/projects/gramedia/dummy/print-brand-guidelines.svg", caption: "Editorial guidelines manual for print consistency." },
      { id: "gpu-08", title: "Special Edition Bookmark Set", type: "image", aspectRatio: "4:5", src: "assets/projects/gramedia/dummy/print-bookmarks.svg", caption: "Limited run collectible foil bookmarks." }
    ]
  },
  {
    id: "aha-commerce-ai-ads",
    title: "AHA Commerce – AI Video Editor",
    client: "AHA Commerce",
    category: "Video Editing",
    year: "2024",
    discipline: "AI Commercial Video Synthesis & Performance Ads",
    tools: "Generative AI, Premiere Pro, CapCut, After Effects",
    description: "Rangkaian video iklan komersial e-commerce berbasis generative AI visual synthesis dan dynamic vertical storytelling untuk memaksimalkan retensi serta konversi penjualan.",
    thumbnail: "https://img.youtube.com/vi/whxofEELUFA/hqdefault.jpg",
    items: [
      {
        id: "aha-01",
        title: "Vibe AI Video Tetangga Suuzon",
        type: "video",
        aspectRatio: "9:16",
        platform: "instagram",
        instagramId: "Dc5FaA7zNL2",
        src: "assets/projects/aha-commerce/dummy/ad-ai-tetangga-9-16.svg",
        caption: "Vibe AI Video Tetangga Suuzon — Instagram Reel."
      },
      {
        id: "aha-02",
        title: "Vibe AI Video Product AXAM",
        type: "video",
        aspectRatio: "9:16",
        platform: "youtube",
        youtubeId: "whxofEELUFA",
        src: "https://img.youtube.com/vi/whxofEELUFA/hqdefault.jpg",
        caption: "Vibe AI Video Product AXAM — YouTube Shorts."
      },
      {
        id: "aha-03",
        title: "Vibe AI Video Product ALJA",
        type: "video",
        aspectRatio: "9:16",
        platform: "youtube",
        youtubeId: "5f7PdTITq3o",
        src: "https://img.youtube.com/vi/5f7PdTITq3o/hqdefault.jpg",
        caption: "Vibe AI Video Product ALJA — YouTube Shorts."
      },
      {
        id: "aha-04",
        title: "Vibe AI Video Product ESNC",
        type: "video",
        aspectRatio: "9:16",
        platform: "youtube",
        youtubeId: "zviGlqBlSCY",
        src: "https://img.youtube.com/vi/zviGlqBlSCY/hqdefault.jpg",
        caption: "Vibe AI Video Product ESNC — YouTube Shorts."
      },
      {
        id: "aha-05",
        title: "Vibe AI Video Product MoonDae",
        type: "video",
        aspectRatio: "9:16",
        platform: "youtube",
        youtubeId: "OW6c64QV3c0",
        src: "https://img.youtube.com/vi/OW6c64QV3c0/hqdefault.jpg",
        caption: "Vibe AI Video Product MoonDae — YouTube Shorts."
      },
      {
        id: "aha-06",
        title: "Vibe AI Video Product 3M",
        type: "video",
        aspectRatio: "9:16",
        platform: "youtube",
        youtubeId: "AHR-XV4CBjM",
        src: "https://img.youtube.com/vi/AHR-XV4CBjM/hqdefault.jpg",
        caption: "Vibe AI Video Product 3M — YouTube Shorts."
      }
    ]
  },
  {
    id: "oasis-luxury-reels",
    title: "Oasis Genius Hospitality – Video Editor",
    client: "PT. Oasis Genius Hospitality",
    category: "Video Editing",
    year: "2024",
    discipline: "Luxury Resort Short-Form Showcase & Color Grading",
    tools: "Premiere Pro, DaVinci Resolve, CapCut",
    description: "Koleksi video estetis dan reels sinematik untuk jaringan resort dan hotel mewah, menonjolkan keindahan arsitektur, ambience elegan, serta detail pengalaman hospitality premium.",
    thumbnail: "https://img.youtube.com/vi/cab8uNCkm68/hqdefault.jpg",
    items: [
      { id: "oasis-01", title: "Video Rudian Hotel Aesthetic", type: "video", aspectRatio: "9:16", platform: "youtube", youtubeId: "cab8uNCkm68", src: "https://img.youtube.com/vi/cab8uNCkm68/hqdefault.jpg", caption: "Video Rudian Hotel Aesthetic — YouTube Shorts." },
      { id: "oasis-02", title: "Video Voyara Hotel Aesthetic", type: "video", aspectRatio: "9:16", platform: "youtube", youtubeId: "jk2jozS6UGc", src: "https://img.youtube.com/vi/jk2jozS6UGc/hqdefault.jpg", caption: "Video Voyara Hotel Aesthetic — YouTube Shorts." },
      { id: "oasis-03", title: "Video Suba Hotel Aesthetic", type: "video", aspectRatio: "9:16", platform: "youtube", youtubeId: "crPyFFNUOa8", src: "https://img.youtube.com/vi/crPyFFNUOa8/hqdefault.jpg", caption: "Video Suba Hotel Aesthetic — YouTube Shorts." },
      { id: "oasis-04", title: "Video Rudian Hotel Aesthetic (Part 2)", type: "video", aspectRatio: "9:16", platform: "youtube", youtubeId: "qliLu-h-nmA", src: "https://img.youtube.com/vi/qliLu-h-nmA/hqdefault.jpg", caption: "Video Rudian Hotel Aesthetic — YouTube Shorts." },
      { id: "oasis-05", title: "Video VTAM Aesthetic", type: "video", aspectRatio: "9:16", platform: "youtube", youtubeId: "mrOHKbqwT8Q", src: "https://img.youtube.com/vi/mrOHKbqwT8Q/hqdefault.jpg", caption: "Video VTAM Aesthetic — YouTube Shorts." },
      { id: "oasis-06", title: "Video Rudian Hotel Aesthetic (Part 3)", type: "video", aspectRatio: "9:16", platform: "youtube", youtubeId: "kIhYZcSFeCU", src: "https://img.youtube.com/vi/kIhYZcSFeCU/hqdefault.jpg", caption: "Video Rudian Hotel Aesthetic — YouTube Shorts." },
      { id: "oasis-07", title: "Video VTAM Aesthetic (Part 2)", type: "video", aspectRatio: "9:16", platform: "youtube", youtubeId: "U2EVrC94Fs0", src: "https://img.youtube.com/vi/U2EVrC94Fs0/hqdefault.jpg", caption: "Video VTAM Aesthetic — YouTube Shorts." },
      { id: "oasis-08", title: "Video Mutiara Hotel Aesthetic", type: "video", aspectRatio: "9:16", platform: "youtube", youtubeId: "z5DsZ77hUcw", src: "https://img.youtube.com/vi/z5DsZ77hUcw/hqdefault.jpg", caption: "Video Mutiara Hotel Aesthetic — YouTube Shorts." }
    ]
  },
  {
    id: "gramedia-book-promos",
    title: "Gramedia – Book Promotion",
    client: "PT Gramedia Asri Media",
    category: "Video Editing",
    year: "2024",
    discipline: "Social Media Reels & Literary Teasers",
    tools: "Premiere Pro, After Effects, CapCut",
    description: "Rangkaian video promosi buku dan literatur nasional format Instagram Reels, memadukan hook visual yang kuat, pacing dinamis, dan narasi personal untuk meningkatkan interaksi pembaca.",
    thumbnail: "assets/projects/gramedia/dummy/thumb-book-promos.svg",
    items: [
      { id: "gbp-01", title: "Cerita ke temen", type: "video", aspectRatio: "9:16", platform: "instagram", instagramId: "DK_lelePdFd", src: "assets/projects/gramedia/dummy/video-novel-trailer.svg", caption: "Cerita ke temen — Instagram Reels." },
      { id: "gbp-02", title: "Go Perpetuate", type: "video", aspectRatio: "9:16", platform: "instagram", instagramId: "DK8bs2zvPC2", src: "assets/projects/gramedia/dummy/video-author-reel.svg", caption: "Go Perpetuate — Instagram Reels." },
      { id: "gbp-03", title: "Waktu untuk Sendiri", type: "video", aspectRatio: "9:16", platform: "instagram", instagramId: "DLPeuPIPeY2", src: "assets/projects/gramedia/dummy/video-bts-printing.svg", caption: "Waktu untuk Sendiri — Instagram Reels." },
      { id: "gbp-04", title: "Surat untuk Putriku", type: "video", aspectRatio: "9:16", platform: "instagram", instagramId: "DKqhaRJvspN", src: "assets/projects/gramedia/dummy/video-thriller-teaser.svg", caption: "Surat untuk Putriku — Instagram Reels." },
      { id: "gbp-05", title: "Rich Dad Poor Dad", type: "video", aspectRatio: "9:16", platform: "instagram", instagramId: "DKdc1gxTUmC", src: "assets/projects/gramedia/dummy/video-bookfair-recap.svg", caption: "Rich Dad Poor Dad — Instagram Reels." },
      { id: "gbp-06", title: "Focus on What Matters", type: "video", aspectRatio: "9:16", platform: "instagram", instagramId: "DKY5l3Ev-Gl", src: "assets/projects/gramedia/dummy/video-audiobook-still.svg", caption: "Focus on What Matters — Instagram Reels." },
      { id: "gbp-07", title: "We Need to Save Money", type: "video", aspectRatio: "9:16", platform: "instagram", instagramId: "DMcQLDGPZLp", src: "assets/projects/gramedia/dummy/video-grading-node.svg", caption: "We Need to Save Money — Instagram Reels." },
      { id: "gbp-08", title: "Future Financial Freedom", type: "video", aspectRatio: "9:16", platform: "instagram", instagramId: "DMp2otgv_pF", src: "assets/projects/gramedia/dummy/video-reader-reaction.svg", caption: "Future Financial Freedom — Instagram Reels." }
    ]
  },
  {
    id: "puspo-budoyo-documentary",
    title: "Rumah Budaya Nusantara Puspo Budoyo",
    client: "Tugas Kuliah / Dokumenter Budaya",
    category: "Video Editing",
    year: "2024",
    discipline: "Documentary Production, Camera & Editing",
    tools: "Premiere Pro, Camera Rig, DaVinci Resolve",
    description: "Projek peliputan video dokumenter mengenai Rumah Budaya Nusantara Puspo Budoyo. Berperan langsung sebagai tim produksi lintas divisi, memegang peran sebagai kameramen sekaligus video editor utama dalam menyusun cerita visual kebudayaan nusantara.",
    thumbnail: "https://img.youtube.com/vi/pkqmVXY1aB0/maxresdefault.jpg",
    items: [
      {
        id: "pbd-01",
        title: "Dokumenter Rumah Budaya Nusantara Puspo Budoyo",
        type: "video",
        aspectRatio: "16:9",
        platform: "youtube",
        youtubeId: "pkqmVXY1aB0",
        src: "https://img.youtube.com/vi/pkqmVXY1aB0/maxresdefault.jpg",
        caption: "Official Documentary Video: Rumah Budaya Nusantara Puspo Budoyo."
      }
    ]
  },
  {
    id: "ssk-grand-opening",
    title: "SSK Grand Opening - Official Documentation",
    client: "PT SSK (Freelance Project)",
    category: "Video Editing",
    year: "2024",
    discipline: "Event Documentation & Commercial Editing",
    tools: "Premiere Pro, DaVinci Resolve, After Effects",
    description: "Pekerjaan freelance sebagai video editor untuk perayaan Grand Opening perusahaan. Bertanggung jawab memilah seluruh footage acara yang tersedia, merancang pacing dramatis, serta merangkai video utuh yang menarik dan berkesan.",
    thumbnail: "https://img.youtube.com/vi/IqD7u1PMGFI/maxresdefault.jpg",
    items: [
      {
        id: "ssk-01",
        title: "SSK Grand Opening — Official Documentation",
        type: "video",
        aspectRatio: "16:9",
        platform: "youtube",
        youtubeId: "IqD7u1PMGFI",
        src: "https://img.youtube.com/vi/IqD7u1PMGFI/maxresdefault.jpg",
        caption: "Official Commercial Documentation Video: SSK Grand Opening."
      }
    ]
  },
  {
    id: "dodomatter-brand-ad",
    title: "DODOMATTER",
    client: "Program Hibah Wirausaha Kampus & Brand Pribadi",
    category: "Video Editing",
    year: "2024",
    discipline: "Product Advertising & Commercial Video",
    tools: "Premiere Pro, After Effects",
    description: "Projek usaha produk pakaian hasil seleksi pendanaan hibah program kewirausahaan kampus. Bertindak sebagai video editor khusus untuk pembuatan video iklan komersial peluncuran produk.",
    thumbnail: "https://img.youtube.com/vi/pLyjfleVld4/maxresdefault.jpg",
    items: [
      {
        id: "dodo-01",
        title: "DODOMATTER Commercial Product Ad",
        type: "video",
        aspectRatio: "16:9",
        platform: "youtube",
        youtubeId: "pLyjfleVld4",
        src: "https://img.youtube.com/vi/pLyjfleVld4/maxresdefault.jpg",
        caption: "Official Commercial Ad Video: DODOMATTER."
      }
    ]
  },
  {
    id: "health-edu-motion",
    title: "Health Edu Pop-Up & Animation",
    client: "Independent / Healthcare Initiative",
    category: "Motion Graphics",
    year: "2024",
    discipline: "Kinetic Vector Motion & Infographics",
    tools: "After Effects, Illustrator, Lottie",
    description: "Interactive educational vector motion design, dynamic infographic pop-up elements, kinetic typography, and character animation explaining critical health literacy concepts.",
    thumbnail: "assets/projects/freelance/dummy/thumb-health-edu.svg",
    items: [
      { id: "health-01", title: "Immune Response Kinetic Flow", type: "video", aspectRatio: "16:9", src: "assets/projects/freelance/dummy/motion-immune-flow.svg", caption: "Kinetic infographic animation." },
      { id: "health-02", title: "Microbiology Pop-Up Card Interaction", type: "image", aspectRatio: "9:16", src: "assets/projects/freelance/dummy/motion-popup-card.svg", caption: "Digital pop-up book simulation." },
      { id: "health-03", title: "Animated Character Health Mascot", type: "image", aspectRatio: "1:1", src: "assets/projects/freelance/dummy/motion-mascot-rig.svg", caption: "Vector character rig." },
      { id: "health-04", title: "Public Health Safety Explainer Reel", type: "video", aspectRatio: "9:16", src: "assets/projects/freelance/dummy/motion-safety-reel.svg", caption: "Short-form public service reel." },
      { id: "health-05", title: "Medical Data Infographic Loop", type: "video", aspectRatio: "16:9", src: "assets/projects/freelance/dummy/motion-data-loop.svg", caption: "Seamless analytical motion loop." },
      { id: "health-06", title: "Typography Layout: Health Terms", type: "image", aspectRatio: "4:5", src: "assets/projects/freelance/dummy/motion-type-poster.svg", caption: "Educational typography poster." },
      { id: "health-07", title: "Lottie Micro-Interaction UI Icons", type: "image", aspectRatio: "1:1", src: "assets/projects/freelance/dummy/motion-lottie-icons.svg", caption: "Lightweight JSON vector animations." },
      { id: "health-08", title: "Interactive Web Pop-Up Storyboard", type: "image", aspectRatio: "4:5", src: "assets/projects/freelance/dummy/motion-storyboard.svg", caption: "Storyboard workflow." }
    ]
  },
  {
    id: "gymflow-ui-ux",
    title: "GymFlow App & E-Catalog Web",
    client: "GymFlow Fitness Co.",
    category: "UI/UX Design",
    year: "2024",
    discipline: "Mobile App & Responsive Web Design",
    tools: "Figma, FigJam, Protopie",
    description: "High-contrast dark mode fitness tracking interface and responsive luxury e-catalog web experience featuring kinetic interactions and frictionless user onboarding.",
    thumbnail: "assets/projects/ui-ux/dummy/thumb-gymflow.svg",
    items: [
      { id: "gym-01", title: "GymFlow Desktop Analytics Dashboard", type: "image", aspectRatio: "16:9", src: "assets/projects/ui-ux/dummy/ui-dashboard-wide.svg", caption: "Desktop trainer monitoring suite." },
      { id: "gym-02", title: "Mobile Workout Tracking Screen", type: "image", aspectRatio: "9:16", src: "assets/projects/ui-ux/dummy/ui-mobile-screen.svg", caption: "High-contrast dark mode training tracker." },
      { id: "gym-03", title: "GymFlow Design Token System", type: "image", aspectRatio: "1:1", src: "assets/projects/ui-ux/dummy/ui-design-tokens.svg", caption: "Scalable typography, color palette, and spacing tokens." },
      { id: "gym-04", title: "Interactive E-Catalog Mobile Experience", type: "image", aspectRatio: "9:16", src: "assets/projects/ui-ux/dummy/ui-ecatalog-mobile.svg", caption: "Direct-to-consumer apparel store." },
      { id: "gym-05", title: "Interactive Prototype Animation Flow", type: "video", aspectRatio: "16:9", src: "assets/projects/ui-ux/dummy/video-prototype-flow.svg", caption: "Micro-interaction walkthrough." },
      { id: "gym-06", title: "Onboarding Flow & User Journey", type: "image", aspectRatio: "4:5", src: "assets/projects/ui-ux/dummy/ui-user-journey.svg", caption: "User onboarding funnel." },
      { id: "gym-07", title: "Modular UI Component Library", type: "image", aspectRatio: "1:1", src: "assets/projects/ui-ux/dummy/ui-components.svg", caption: "Atomic Figma components." },
      { id: "gym-08", title: "Smartwatch Glance Interface", type: "image", aspectRatio: "4:5", src: "assets/projects/ui-ux/dummy/ui-smartwatch-glance.svg", caption: "WatchOS companion UI." }
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
        
        <text x="${width / 2}" y="${height / 2 + 6}" font-family="'Plus Jakarta Sans', sans-serif" font-size="${width > 500 ? 22 : 18}" font-weight="700" fill="#FDFDFF" text-anchor="middle">${cleanTitle}</text>
        
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
    detailBentoGrid.classList.remove('is-single-player');

    // Check if project should use flex grid for centered trailing items (e.g. AHA Commerce: 4 on row 1, 2 centered on row 2)
    const isUniform = project.items.every(i => i.aspectRatio === project.items[0].aspectRatio);
    const useFlexGrid = isUniform && project.items.length > 3;

    if (useFlexGrid) {
      detailBentoGrid.classList.add('is-flex-grid');
      detailBentoGrid.style.columnCount = '';
      detailBentoGrid.style.maxWidth = '1600px';
      detailBentoGrid.style.margin = '0 auto';
    } else if (project.items.length === 1) {
      detailBentoGrid.classList.remove('is-flex-grid');
      detailBentoGrid.style.columnCount = '1';
      detailBentoGrid.style.maxWidth = '1060px';
      detailBentoGrid.style.margin = '0 auto';
    } else if (project.items.length === 2) {
      detailBentoGrid.classList.remove('is-flex-grid');
      detailBentoGrid.style.columnCount = '2';
      detailBentoGrid.style.maxWidth = '1200px';
      detailBentoGrid.style.margin = '0 auto';
    } else if (project.items.length === 3) {
      detailBentoGrid.classList.remove('is-flex-grid');
      detailBentoGrid.style.columnCount = '3';
      detailBentoGrid.style.maxWidth = '1400px';
      detailBentoGrid.style.margin = '0 auto';
    } else {
      detailBentoGrid.classList.remove('is-flex-grid');
      detailBentoGrid.style.columnCount = '';
      detailBentoGrid.style.maxWidth = '100%';
      detailBentoGrid.style.margin = '0';
    }

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
        <div class="bento-item__play-btn" title="Play Video">
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
    detailBentoGrid.innerHTML = '';
    detailBentoGrid.classList.remove('is-flex-grid');
    detailBentoGrid.style.columnCount = '';
    detailBentoGrid.style.maxWidth = '';
    detailBentoGrid.style.margin = '';
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

    // Platform embed handling (Instagram Reel vs YouTube)
    if (item.platform === 'instagram' || item.instagramId) {
      const igId = item.instagramId || (item.src && item.src.match(/reel\/([^/?]+)/) ? item.src.match(/reel\/([^/?]+)/)[1] : '');
      videoPlayerIframe.src = `https://www.instagram.com/reel/${igId}/embed`;
    } else {
      const ytId = item.youtubeId || 'dQw4w9WgXcQ';
      videoPlayerIframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`;
    }

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
        detailBentoGrid.innerHTML = '';
        detailBentoGrid.classList.remove('is-flex-grid');
        detailBentoGrid.style.columnCount = '';
        detailBentoGrid.style.maxWidth = '';
        detailBentoGrid.style.margin = '';
        detailBentoGrid.classList.remove('is-single-player');
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

