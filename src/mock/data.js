import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ayan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ayan',
  subtitle: 'Welcome to my portfolio page!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a Software Engineer with hands-on experience in front end language, including JavaScript frameworks, functional, integration, system, and user acceptance testing.",
  resume: 'https://drive.google.com/file/d/1osEeWXUuy1XlAdz54feR74SAcqJR_Ph4/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nflixprofile.jpg',
    title: 'Netflix-Clone',
    info:
      'Netflix clone created using Reactjs,with data fetched from TMDB API & hosted in Firebase.',
    info2: '',
    url: 'https://netflix-clone-e85d3.web.app/',
    repo: 'https://github.com/AyanBhadury/netflix-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fusionsmart.jpg',
    title: 'FusionSmart',
    info: 'Improve visibility for energy consumption and costs with our Smart Energy Dashboard.',
    info2: '',
    url: 'https://www.fusioncharts.com/demos/dashboards/smart-energy-monitoring-dashboard/',
    repo: 'https://github.com/AyanBhadury/smart-energy-monitoring-dashborad', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'instagramprofile.jpg',
    title: 'Instagram-Clone',
    info: 'Instagram clone implemented in React with Firebase as the backend.',
    info2: '',
    url: 'https://instagram-clone-efedf.web.app/',
    repo: 'https://github.com/AyanBhadury/instagram-clone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ayon.bony@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/zapdos13',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/ayon.bony',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ayan-bhadury-b662b8106',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AyanBhadury',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
