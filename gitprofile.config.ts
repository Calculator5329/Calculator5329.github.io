// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Calculator5329', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Calculator5329/ai-papers', 'Calculator5329/news-bias-analyzer', 'Calculator5329/book-reccomendations-r' , 'Calculator5329/stock-site', 'Calculator5329/N2K-ComprehensiveSolver', 'Calculator5329/infinite-horizons'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      // Keep empty for now
      
      projects: [
        {
          title: 'News Bias Analyzer',
          description:
            'This project is an AI-powered web application that classifies news articles based on political bias (Left, Neutral, Right) and authenticity (Fake vs. Real News) using machine learning and OpenAIs embedding API. The deep neural net and application logic were deployed on a FastAPI backend and connected to a basic React frontend, hosted on Vercel.',
          imageUrl:
            'https://i.imgur.com/fAGOD5x.jpeg',
          link: 'https://capstone-frontend-1-calculator5329-ethans-projects-becdb732.vercel.app/',
        },
        {
          title: 'ArXiv Dashboard',
          description:
            'This project is an NLP-powered arXiv explorer built with FastAPI and React, deployed on Google Cloud. It features RAG-based Q&A using FAISS and Gemini, with GPT-generated summaries and interactive chatbots per paper.',
          imageUrl:
            'https://i.imgur.com/6MH80qX.jpeg',
          link: 'https://calculator5329.github.io/ai-papers/',
        },
        {
          title: 'Book Reccomendation Website',
          description:
            'This project uses OpenAIs embedding models and an open-source book review dataset to generate vector representations of books based on their content and themes. These embeddings are indexed using FAISS for fast similarity searches. The backend is deployed on Google Cloud, allowing users to input a book or reading preferences and receive personalized, content-driven recommendations in real time. ',
          imageUrl:
            'https://i.imgur.com/TuwX6q3.jpeg',
          link: 'https://calculator5329.github.io/book-reccomendations-r/',
        },
        {
          title: 'Stock Portfolio Analyzer',
          description:
            'This project is a full-stack web app for interactive portfolio backtesting using historical stock data. Built with FastAPI and Next.js, the backend is deployed on Azure and the frontend is hosted on Netlify. Optimized with Pickle for faster data loading, powered by Pandas and NumPy.',
          imageUrl:
            'https://i.imgur.com/b455H8s.png',
          link: 'https://cheery-tiramisu-028ceb.netlify.app/',
        },
      ],
    },
  },
  seo: {
    title: '',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ethan-gates5329',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://calculator5329.github.io/profile/',
    phone: '',
    email: 'ethangates5329@gmail.com',
  },
  resume: {
    fileUrl:
      'https://archive.org/download/eg-resume-3-24/EG_Resume_3_24.docx', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'JavaScript',
    'Java',
    'C#',
    'React.js',
    'Flask',
    'FastAPI',
    "Power Bi",
    "Pandas",
    "Tensorflow",
    'Git',
  ],
  experiences: [
    {
      company: 'Accra',
      position: 'Caregiver',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'https://www.accrahomecare.org/',
    },
    {
      company: 'Chick-Fil-A',
      position: 'Team Trainer',
      from: 'June 2021',
      to: 'Present',
      companyLink: 'https://www.chick-fil-a.com/locations/mn/ear-of-corn',
    },
  ],
  certifications: [
    {
      name: 'Linux Essentials',
      body: '',
      year: 'January 2025',
      link: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000614495/p9tu55hjfa',
    },
    {
      name: 'ITIL 4 Foundations',
      body: '',
      year: 'November 2023',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Western Governors University',
      degree: 'Bachelors Degree in Computer Science',
      from: '2023',
      to: '2025',
    },
  ],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
