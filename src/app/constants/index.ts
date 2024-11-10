// src/app/constants/index.ts
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { StaticImageData } from "next/image";

// Define types for the constants
export const HERO_CONTENT: string = `I am a passionate Full Stack Developer with expertise in building dynamic and responsive web applications from front to back. With proficiency in both frontend and backend technologies, I specialize in frameworks like React and Next.js, and backend solutions using Node.js and Express. Over the past 5 years, I've honed my skills in crafting scalable, user-friendly applications, and have experience working with databases like MongoDB and PostgreSQL. My goal is to develop high-quality, maintainable code and deliver seamless user experiences while continuously learning and adapting to new technologies.`;

export const ABOUT_TEXT: string = `I am a versatile and driven DevOps engineer with a strong focus on creating efficient, automated infrastructure solutions. With 5 years of hands-on experience, I have worked with a range of DevOps tools and cloud platforms, including AWS, Azure, Docker, and Kubernetes. My journey in DevOps began with a desire to optimize software delivery, and it has grown into a career where I continuously refine my skills in infrastructure automation, configuration management, and continuous integration/deployment. I thrive in collaborative environments, working closely with development teams to achieve smooth and reliable deployments. Outside of work, I enjoy learning about emerging DevOps tools, contributing to open-source projects, and staying active.`;


// Define types for experiences and projects
interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];


interface Project {
  title: string;
  image: string | StaticImageData; // Allow image to be either string or StaticImageData
  description: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];


interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export const CONTACT: Contact = {
  address: "Sindh, Karachi",
  phoneNo: "+92 3131289017",
  email: "rabihasanshaikh3@gmail.com",
};
