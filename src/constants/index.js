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
    nss,
    django,
    sql,
    aws,
    carrent,
    jobit,
    tripguide,
    threejs,
    ytube,
    air,
    st,
    hirademy,
    paywithring
    
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
      title: "Golang Developer",
      icon: mobile,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Cloud Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name:"Django",
      icon:django,
    },
    {
      name:"AWS",
      icon: aws,
    },
    {
      name:"MySQL",
      icon:sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },


    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Tech-Team and Creatives Co-Commitee Member",
      company_name: "DJSNSS",
      icon: "nss",
      iconBg: "#383E56",
      date: "November 2022 - Present",
      points: [
        "Developing and maintaining web applications during events and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Working with Daily Social Media Posts, Reels with use of Photoshop, Canva, Premiere Pro.",
        "Organizing various events majorly Blood Donation Drive, Annual Charity Drive and working in a group.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Hirademy Technologies",
      icon: "hirademy",
      iconBg: "#383E56",
      date: "February 2024 - June 2024",
      points: [
        "Engineered the frontend of Fitplano using React.js, Bootstrap, Material-UI, and implemented authentication with Okta and Auth0.",
        "Developed and integrated Flask-based backend APIs, utilizing SQLAlchemy for database operations and containerized PostgreSQL with Docker.",
        "Deployed the application on Google Cloud Platform, utilizing Cloud Functions, App Engine, GKE, and integrated OpenAI for AI-driven fitness plans.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "PayWithRing",
      icon: "paywithring",
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
        "Developing private APIs using GraphQL and AWS AppSync for scalable and secure backend operations. Leveraging AWS Lambda for serverless functions and DynamoDB for efficient data management.",
        "Migrating the codebase to Golang using the Gin framework, with MongoDB, MySQL, and Redis for robust and efficient database management. Implementing gRPC for high-performance communication.",
        "Working on cutting-edge technologies, including microservices architecture, containerization with Docker, Kubernetes orchestration, and CI/CD pipelines, creating, testing, and presenting new applications for future integration.",
      ],
    }
  ];
  

  
  
  
  const projects = [
    {
      name: "Asha Blood Bank",
      description:
        "Java Web-based platform that allows users to search, book, and manage blood donors, automatic triggers to alert shortage of blood units with data recovery and log system",
      tags: [
        {
          name: "Java/SwingsFX",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "NetBeans",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ImArnav19/Ashabloodbank",
    },

    {
      name: "NextJS Airbnb Place Renting site",
      description:
        "NextJs Fullstack Clone of Airbnb website with Prisma, Oauth,React,Typescript,tailwind",
      tags: [
        {
          name: "NextJS,ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "red-text-gradient",
        },
        {
          name: "Prisma",
          color: "green-text-gradient",
        },
      ],
      image:air,
      source_code_link: "https://rent-arnav.vercel.app/",
    },

    {
      name: "End to End AWS Youtube Analysis",
      description:
        "Youtube Api analysis for the demanding videos with live data streaming on Aws with crawler and Athene for querying",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "red-text-gradient",
        },
        {
          name: "AWS Athena,Quicksight,Glue",
          color: "green-text-gradient",
        },
      ],
      image: ytube,
      source_code_link: "https://github.com/ImArnav19/YTube-Aws-analysis",
    },

  ];
  
  export { services, technologies, experiences, projects };