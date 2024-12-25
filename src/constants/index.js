import {
  frontend,
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
  aws,
  lambda,
  mysql,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "AWS Lambda",
    icon: lambda,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Misemind Technologies Pvt Ltd",
    icon: web,
    iconBg: "#383E56",
    date: "August 2020 - Present",
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
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const companyProjects = [
  {
    title: "Ecommerece | Backend Developer",
    company_name: "Misemind Technologies Pvt Ltd",
    icon: backend,
    iconBg: "#383E56",
    date: "August 2020 - June 2021",
    points: [
      "Developed and maintained the backend of an e-commerce platform using Node.js, MySQL, and MongoDB.",
      "Implemented AWS Lambda with Serverless framework to build efficient APIs for user analytics, including total orders and earnings.",
      "Integrated FFmpeg to optimize and reduce the size of images and videos uploaded by users, improving storage efficiency.",
      "Designed API Gateway endpoints for seamless user analytics and homepage data retrieval..",
    ],
  },
  {
    title: "EdTech | Full Stack Developer",
    company_name: "Misemind Technologies Pvt Ltd",
    icon: backend,
    iconBg: "#383E56",
    date: "June 2021 - May 2023",
    points: [
      "Developed and maintained full-stack features for an EdTech platform, including user registration, payments, and question submission workflows.",
      "Integrated IPQS to detect and prevent fraudulent registrations and payments, ensuring platform security.",
      "Designed and managed subscription plans, financial aid systems (SFA), and scholarship application workflows.",
      "Optimized slow database queries using CloudWatch insights, enhancing platform performance.",
      "Utilized AWS Lambda for asynchronous processing and worked with ECS/ECR for efficient deployment pipelines.",
    ],
  },
  {
    title: "Banking (Analytics Dashboard) | Full Stack Developer",
    company_name: "Misemind Technologies Pvt Ltd",
    icon: backend,
    iconBg: "#383E56",
    date: "May 2023 - October 2024",
    points: [
      "Developed a comprehensive analytics system for a banking client to compare loans, mortgages, and credit card data across time periods.",
      "Implemented advanced search functionality using AWS OpenSearch, including server-side pagination and optimized queries for high performance.",
      "Built APIs to support efficient search and data retrieval for millions of users.",
      "Designed and developed interactive frontend components with React.js, including bar graphs and line charts for detailed comparisons and insights.",
    ],
  },
  {
    title: "Matching Engine | Full Stack Developer",
    company_name: "Misemind Technologies Pvt Ltd",
    icon: backend,
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "Developing a matching engine to process incoming records, applying defined rules to identify unique or duplicate entries using AWS OpenSearch and synonym matching.",
      "Building and managing APIs for record processing and matching functionality, ensuring seamless integration with backend systems.",
      "Utilizing Terraform to create and manage AWS infrastructure, including Glue, Lambda, and DynamoDB.",
      "Designing and implementing reusable React components for the UI, showcasing potential matches and improving user experience.",
    ],
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  companyProjects,
};
