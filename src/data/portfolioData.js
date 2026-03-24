// Portfolio Data - Update this file to change your portfolio content

export const personalInfo = {
  name: "Samarth Kulkarni",
  title: "UI/UX Designer",
  tagline: "UI/UX Designer",
  description: "I’m Samarth, a UI/UX Designer. I craft intuitive digital experiences and improve user journeys for individuals and growing businesses",
  email: "samarthrkulkarni08@gmail.com",
  phone: "+91 9916289983",
  location: "Bengaluru, Karnataka, India",
  resumeUrl: "/Samarth_Kulkarni_Resume.pdf", // Add your resume PDF link here
  social: {
    linkedin: "https://www.linkedin.com/in/samarth-kulkarni08",
    behance: "https://www.behance.net/samarthkulkarni2",
    github: "https://github.com/samarthkulkarni08",
    x: "https://x.com/_Samarth_08_",
  }
};

export const about = {
  heading: "Designer. Problem Solver. Creator.",
  description: "With a passion for creating meaningful digital experiences, I focus on understanding user needs and translating them into intuitive, visually appealing designs.",
  paragraphs: [
    "I'm a UI/UX Designer with a strong foundation in user-centered design principles. My background in Computer Science & Engineering gives me a unique perspective on the intersection of design and technology, allowing me to create interfaces that are both beautiful and technically feasible.",
    "From wireframing and prototyping to conducting workshops and creating educational content, I bring a holistic approach to design. Whether I'm designing an educational automation kit or a mobile app interface, my goal is to enhance usability and create engaging experiences that users love."
  ]
};

// Skills: iconSlug = brand logo (Simple Icons), lucideIcon = minimal icon
export const skills = {
  design: [
    { name: 'User Experience Design', lucideIcon: 'Sparkles', color: 'text-violet-600' },
    { name: 'UI Design', lucideIcon: 'Palette', color: 'text-indigo-600' },
    { name: 'User Research', lucideIcon: 'Search', color: 'text-sky-600' },
    { name: 'Prototyping', lucideIcon: 'Box', color: 'text-indigo-600' },
    { name: 'Wireframing', lucideIcon: 'Layout', color: 'text-orange-600' },
    { name: 'Micro UI Animations', lucideIcon: 'Play', color: 'text-pink-600' },
    { name: 'User Flows', lucideIcon: 'GitBranch', color: 'text-blue-600' },
    { name: 'Design Thinking', lucideIcon: 'Lightbulb', color: 'text-amber-600' },
  ],
  frontend: [
    { name: 'Web Dev', lucideIcon: 'Globe', color: 'text-slate-600' },
    { name: 'React', iconSlug: 'react', color: 'text-cyan-600' },
    { name: 'Tailwind CSS', iconSlug: 'tailwindcss', color: 'text-sky-500' },
    { name: 'CSS', iconSlug: 'css', iconColor: '1572B6', color: 'text-blue-500' },
    { name: 'HTML', iconSlug: 'html5', color: 'text-orange-500' },
    { name: 'JavaScript', iconSlug: 'javascript', color: 'text-yellow-500' },
  ],
  database: [
    { name: 'Firebase', iconSlug: 'firebase', color: 'text-amber-500' },
  ],
  tools: [
    { name: 'Figma', iconSlug: 'figma', iconColor: 'F24E1E', lucideIcon: 'Layers', color: 'text-purple-600' },
    { name: 'Framer', iconSlug: 'framer', color: 'text-slate-700' },
    { name: 'Adobe XD', lucideIcon: 'PenTool', color: 'text-pink-600' },
    { name: 'Photoshop', iconSlug: 'adobephotoshop', lucideIcon: 'Image', color: 'text-blue-600' },
    { name: 'Cursor AI', iconSlug: 'cursor', color: 'text-slate-800' },
    { name: 'GitHub', iconSlug: 'github', color: 'text-slate-800' },
    { name: 'Claude AI', iconSlug: 'anthropic', color: 'text-amber-700' },
    { name: 'ChatGPT', iconSlug: 'openai', lucideIcon: 'MessageCircle', color: 'text-emerald-600' },
    { name: 'Vite', iconSlug: 'vite', color: 'text-violet-500' },
    { name: 'Canva', iconSlug: 'canva', lucideIcon: 'Palette', color: 'text-blue-500' },
  ],
};

export const services = [
  { title: 'UI/UX Design Freelancing', description: 'User research, wireframes, prototypes, and high-fidelity UI design for web and mobile.' },
  { title: 'UI Development Freelancing', description: 'Building responsive, accessible interfaces with React, HTML, CSS, and modern tooling.' },
];

export const experience = [
  {
    period: 'July 2025 - Present',
    role: 'Research & Development Team Lead',
    company: 'ScienceUtsav Educational Services Pvt. Ltd.',
    description: 'Spearheading a cross-functional team to improve the design, delivery, and user experience of educational kits and STEM-based training programs. Leading initiatives to enhance product usability and educational impact.'
  },
  {
    period: 'July 2023 - June 2025',
    role: 'Research & Development Associate',
    company: 'ScienceUtsav Educational Services Pvt. Ltd.',
    description: 'Designed "Roboscientist", an intuitive educational automation kit using Arduino with emphasis on user-friendly interaction. Developed clear, engaging curriculum materials and conducted interactive workshops enabling students to build real-world physical models. Created digital content for social media and promotional platforms.'
  },
  {
    period: 'February 2023 - June 2023',
    role: 'Design Freelancer',
    company: 'Freelance',
    description: 'Worked as a freelancer, designing intuitive UI/UX for web portals and mobile applications. Created visually appealing and user-friendly interfaces, enhancing user experience and engagement. Focused on responsive design, accessibility, and seamless navigation.'
  }
];

export const designProjects = [
    {
    title: 'Backthere | A Curated Visual Archive & Cloud-Based Memory Suite',
    type: 'Web Application UI/UX',
    image: '/assets/design/Album.png',
    description: 'Backthere is a cloud-based web application designed to solve the chaos of digital photo storage. The goal was to move beyond the standard folder view and create a Pinterest-inspired, masonry grid that prioritizes aesthetic curation. I focused on building a seamless interface where users can easily organize, sync, and revisit their most cherished moments as a curated digital legacy.',
    tags: ['Figma', 'Web Design', 'User Flows','Problem Solving'],
    link: 'https://www.behance.net/gallery/246327521/Backthere-A-Curated-Visual-Archive' // Add Behance project link
  },              
  {
    title: 'Auction App for Art Gallery',
    type: 'Mobile UI/UX',
    image: '/assets/design/auction-app.png',
    description: 'Designed an intuitive mobile interface allowing users to browse and bid on artwork effortlessly. Focused on enhancing user engagement through seamless navigation and real-time bidding history.',
    tags: ['Figma', 'Mobile Design', 'User Flows'],
    link: 'https://www.behance.net/gallery/159591051/Art-Gallerys-Auction-App-Design' // Add Behance project link
  },
  {
    title: 'OTT Sharing Platform',
    type: 'Web Design',
    image: '/assets/design/Frame 18.png',
    description: 'A home page design of a ott and streaming platforms subscription sharing platform',
    tags: ['Figma', 'Mobile Design', 'User Flows'],
    link: 'https://www.behance.net/gallery/224907367/Home-page-design'
  },
  {
    title: 'Beach and Resort Website',
    type: 'Web Design',
    image: '/assets/design/Frame 22.png',
    description: 'Designed a visually immersive website for a resort, integrating interactive elements like virtual tours and photo galleries. Optimized UX for booking and information accessibility.',
    tags: ['Web Design', 'Adobe XD', 'Interactive Elements'],
    link: 'https://www.behance.net/gallery/159650547/Design-of-Beach-Resort-Restaurant-website'
  },
  {
    title: 'Restaurent menu digitalization Application',
    type: 'Mobile App Design',
    image: '/assets/design/Frame 17.png',
    description: 'Design based on digitizing and inproving accessibility of a food menu at restaurent, improvized way of ordering food at restaurents',
    tags: ['Figma', 'Mobile Design', 'User Flows'],
    link: 'https://www.behance.net/gallery/243568211/Digitalizing-Restaurant-Menu'
  },
  {
    title: 'Social media platform',
    type: 'Mobile App Design',
    image: '/assets/design/Frame 14.png',
    description: 'A conceptual social media application design made of an assignment',
    tags: ['Figma', 'Mobile Design', 'User Flows'],
    link: 'https://www.behance.net/gallery/243568211/Digitalizing-Restaurant-Menu'
  },
  {
    title: 'Roboscientist Educational Kit',
    type: 'Product Design & UX',
    image: '/assets/design/Frame 15.png',
    description: 'Designed an intuitive educational automation kit using Arduino, with emphasis on user-friendly interaction and hands-on learning for students of diverse age groups.',
    tags: ['Product Design', 'Educational UX'],
    link: 'https://scienceutsav.com/ai-robotics'
  },
  {
    title: 'Educational Platform content and user flow',
    type: 'Learning Content design and development',
    image: '/assets/design/Frame 20.png',
    description: 'Created visually appealing and user-friendly interface for an educational web portal. Enhanced user experience and engagement through responsive design and seamless navigation.',
    tags: ['User Flow', 'Content Development','Canva','Wordpress', 'Accessibility'],
  },
  {
    title: 'Smart Fitness Dashboard',
    type: 'Web Application UI/UX',
    image: '/assets/design/smart-fitness-dashboard.png',
    description: 'Designed a dashboard experience that tracks workouts, nutrition, and progress goals with motivational micro-interactions and analytics cards that help users stay on track.',
    tags: ['Figma', 'Web Design', 'Data Visualization', 'User Flows'],
    link: 'https://www.behance.net/gallery/XXXX/Smart-Fitness-Dashboard'
  }
];

export const devProjects = [
  {
    title: 'LedgerArc a finance tracking tool for Small Businesses',
    description: 'A web application built to track and maintain finance specially for small business and firms.A Digital Ledger',
    tech: ['Cursor Ai','React JS','CSS','Firebase','Github'],
    link: 'https://ledgerarc.vercel.app/',
    image: '/assets/dev/ledgerarc.png',
  },
  {
    title: 'The64Garage HotWheel Portfolio & Online Store',
    description: 'A web app to showcase the hotwheels collection and a Hotwheels online store for collectors.',
    tech: ['Cursor Ai','React JS','CSS', 'typescript','Firebase','Cloudinary','Github'],
    link: 'https://the64garage.vercel.app/',
    image: '/assets/dev/The64Garage.png',
  },
  {
    title: 'The64Garage - Admin Panel',
    description: ' A Web app built to handle and manage The64Garage portfolio and Store management.',
    tech: ['Cursor Ai','React JS','CSS', 'typescript','Firebase','Cloudinary','Github'],
    link: 'https://the64garage-adminpanel.vercel.app/login',
    image: '/assets/dev/AdminPanel.png',
  },
    {
    title: 'Calendar Wallpaper App for Windows',
    description: 'Built a Windows desktop app that replaces the wallpaper with a live interactive calendar for managing events, to-dos, and app shortcuts — all from the home screen. Engineered native Windows integration using Electron.js, PowerShell APIs, and OS-level window management for a seamless one-click productivity experience.',
    tech: ['Cursor Ai','React JS','CSS', 'typescript','Electron.js','PowerShell APIs','Github'],
    link: 'https://www.behance.net/gallery/246326909/Interactive-Calendar-Wallpaper',
    image: '/assets/dev/wallpaperapp.png',
  },
  {
    title: 'Coin Trend Application',
    description: ' A Web application to track and check the crypto currencies .',
    tech: ['React JS','Tailwind CSS','React Routing','Firebase','Github'],
    link: 'https://samarthkulkarni08.github.io/CoinTrend-App/',
    image: '/assets/dev/Cointrend.png',
  },
  {
    title: 'Todo Application',
    description: 'Application for productiviuty - A TODO application',
    tech: ['React JS','CSS','Firebase','Github', 'Crud Functionality'],
    link: 'https://samarthkulkarni08.github.io/Todo-App/',
    image: '/assets/dev/TodoApp.png',
  },
  {
    title: 'Weather App',
    description: ' Web Application to check weather of different places using open weather api .',
    tech: ['Cursor Ai','React JS','CSS', 'typescript','Firebase','Cloudinary','Github'],
    link: 'https://samarthkulkarni08.github.io/React-Weather-App/',
    image: '/assets/dev/Weatherapp.png',
  },
  {
    title: 'EcoShop eCommerce Demo',
    description: 'A React-powered eCommerce storefront demo with product filtering, shopping cart, and Stripe checkout integration for a frictionless buying experience.',
    tech: ['React JS','Tailwind CSS','Firebase','Stripe','Github'],
    link: 'https://ecoshop-demo.vercel.app/',
    image: '/assets/dev/ecoshop.png',
  }
];

export const blogs = [
  {
    type: 'Case Study',
    title: 'ThrottleSync - Group Riding Reinvented',
    excerpt: 'A self-initiated UX concept that integrates real-time group navigation, hands-free communication, and smart safety alerts into a single companion app for motorcycle tourers.',
    readTime: '12 min read',
    date: 'February 2026',
    link: '/ThrottleSync_CaseStudy_v2.pdf',
    isPdf: true,
  },
  {
    type: 'Case Study',
    title: ' Redesigning Bengaluru Metro QR Ticket Experience',
    excerpt: 'This project focuses on improving the post-ticket purchase experience for Bengaluru Metro QR tickets by adding essential journey guidance without altering the existing ticketing system.',
    readTime: '10 min read',
    date: 'January 2026',
    link: '/Case-Study-01.pdf',
    isPdf: true,
    linkedInUrl: 'https://www.linkedin.com/posts/samarth-kulkarni08_uxdesign-productdesign-publictransportux-activity-7417549402145361920-JKFV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4pNoIBjzGEW0z4RATWwxXJ0srucEr0eAQ'
  },
  {
    type: 'Blog Post',
    title: 'This UX is missing clothing stores',
    excerpt: 'A thought on improvizing user experience of clothing stores, this change will help customers style better.',
    readTime: '8 min read',
    date: 'August 2025',
    link: '/Blog-01.pdf',
    isPdf: true,
    linkedInUrl: 'https://www.linkedin.com/posts/samarth-kulkarni08_a-design-thought-activity-7359315644124729344-hj6G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4pNoIBjzGEW0z4RATWwxXJ0srucEr0eAQ'
  }
];
