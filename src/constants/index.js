import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  githubStreak,
  githubProfile,
  githubSCommits,
  snapdeal,
  nextGen,
  hm

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "githubStats",
    title: "Git Stat's"
  },
  {
    id: "contact",
    title: "Contact",
  },
 ];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SQL Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    image: 'https://streak-stats.demolab.com/?user=meena-gang&theme=dark',
  },
  {
    image: 'https://github-readme-stats.vercel.app/api?username=meena-gang&show_icons=true&theme=dark',
  },
  {
    image: 'https://ghchart.rshah.org/meena-gang',
  },
];

const projects = [
  {
    name: "H&M Clone",
    description:`The H&M Clone is a React-based web application designed to replicate the H&M online store's look and functionality. It features dynamic home pages, 
                detailed product listings, individual product pages, and a fully functional shopping cart with user authentication. Utilizing React Router, Redux, Axios, 
                Chakra UI, and Font Awesome, this project demonstrates my skills in frontend development, state management, and responsive design. The application ensures 
                a seamless and personalized shopping experience across all devices.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
      {
        name: "React Router",
        color: "orange-text-gradient",
      }
    ],
    image: hm,
    source_code_link: "https://github.com/meena-gang/meenaHMClone",
    live_link: "https://meenahmclone.netlify.app/",
  },
  {
    name: "Snapdeal Clone",
    description:`I have successfully deployed a full-stack web application that replicates the functionality of Snapdeal, an e-commerce platform. 
    The frontend is built using React and styled with Chakra UI, providing a modern and responsive user interface. 
    For state management and HTTP requests, I used Redux and Axios, respectively. 
    The backend is powered by Node.js and Express, with MongoDB serving as the database to manage product details, user information, and order data. The application is now live, similar to Snapdeal.`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },{
        name: "Chakra UI",
        color: "orange-text-gradient",
      },
    ],
    image: snapdeal,
    source_code_link: "https://github.com/meena-gang/SapdealClone-Meena",
    live_link: "https://sapdeal-clone-meena.vercel.app/",
  },
  {
    name: "Next Gen Dashboard",
    description:`Developed a next-generation dashboard using React, Syncfusion, and Tailwind CSS. The dashboard includes comprehensive features for e-commerce, 
                order management, employee and customer tracking, Kanban boards, calendars, and various charts. It provides an intuitive and visually appealing 
                interface for managing and analyzing business data efficiently. Enhanced performance and interactivity by leveraging Syncfusion's robust UI components and Tailwind's 
                utility-first CSS framework.`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nextGen,
    source_code_link: "https://github.com/meena-gang/nextGenDashboard/tree/main/project_syncfusion_dashboard-main",
    live_link: "https://nextgenboardbymeena.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
