import {
  backend,
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
  emptyboxmedia,
  clover,
  bloomtech,
  byo,
  dotcom,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Teaching Assistant",
    company_name: "Bloomtech",
    icon: bloomtech,
    iconBg: "#fff",
    date: "June 2018 - September 2018",
    points: [
      "Fostered a supportive and productive learning environment for a group of 20 students, emphasizing individual growth and collaborative teamwork.",
      "Engaged in direct, hands-on mentoring with students, providing thorough code review, clarifying complex concepts, and facilitating pair programming sessions to foster real-world experience.",
      "Facilitated daily stand-up meetings to promote open communication, foster team synergy, and provide a platform for students to share their daily progress and challenges.",
      "Developed and introduced innovative educational content to complement the core curriculum, effectively maintaining student engagement and stimulating intellectual curiosity.",
      "Strategically co-managed the development and execution of capstone projects for Lambda Labs interns, overseeing project scopes and deliverables.",
      "Successfully enhanced team productivity and project delivery timelines by integrating Agile Development methodologies into the workflow.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Empty Box Media",
    icon: emptyboxmedia,
    iconBg: "#fff",
    date: "Nov 2018 - Jan 2019",
    points: [
      "Developed both server-side and client-side web application logic.",
      "Wrote clean, efficient, and standard-compliant code in a timely and scalable manner.",
      "Designed and implemented back-end components to enhance functionality.",
      "Integrated applications with various third-party web services for increased interoperability.",
      "Created detailed specifications to guide development and integration processes.",
      "Managed troubleshooting, testing, and maintenance of core software and databases to ensure product quality.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Clover Network, Inc",
    icon: clover,
    iconBg: "#fff",
    date: "Jan 2019 - Present",
    points: [
      "Owning one or more web services; adding new features, resolving bugs, and refactoring/improving the codebase.",
      "Identifying technical requirements in product meetings and assisting the business team with realistic project planning and feature development; translating product requirements into functional, maintainable, extensible software that aligns with company objectives.",
      "Taking ownership of new products/features from development through deployment, including production monitoring.",
      "Writing automated tests for new web features and updating existing tests as needed.",
      "Collaborating with Server Application Engineers to determine the best way to maintain low response times as new features are designed.",
      "Working with QA to develop test plans/strategies.",
      "Participating in a regular on-call rotation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    name: "John Doe",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    name: "John Doe",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    name: "Jane Doe",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Build Your Own (BYO)",
    description:
      "Revolutionizing the way people purchase their devices at Clover. BYO is a web application that allows users to build their own Clover system, selecting what best suites their needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "contentful",
        color: "orange-text-gradient",
      },
    ],
    image: byo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Redesign",
    description:
      "A complete redesign of the Clover website. The new website is built with React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "contentful",
        color: "orange-text-gradient",
      },
    ],
    image: dotcom,
    source_code_link: "https://github.com/",
  },
  {
    name: "This Website",
    description:
      "An interactive portfolio website built with React, Next.js, and Tailwind CSS.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dotcom,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
