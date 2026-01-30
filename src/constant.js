// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import BootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import javaLogo from "./assets/tech_logo/java.png";
import renderLogo from "./assets/tech_logo/render.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";

// Education Section Logo's
import upBoard from "./assets/education_logo/upBoard.png";
import foet from "./assets/education_logo/foet.png";
// Project Section Logo's
import EduPlayRural from "./assets/work_logo/EduPlayRural.png";
import Airbnb from "./assets/work_logo/Airbnb.png";
import Zerodha from "./assets/work_logo/Zerodha.png";
import AiVoice from "./assets/work_logo/AiVoice.png";

// certificates&extraCurriculuarActivities images

import cyber from "./assets/certificate_activity_img/cyber.png";
import cdac from "./assets/certificate_activity_img/cdac.png";
import Ai from "./assets/certificate_activity_img/Ai.png";
import Ailogo from "./assets/certificate_activity_img/Ailogo.jpeg";
import GenAi from "./assets/certificate_activity_img/GenAi.jpeg";
import GenAiLogo from "./assets/certificate_activity_img/GenAilogo.png";
import fullStack from "./assets/certificate_activity_img/fullStack.png";
import fullStackLogo from "./assets/certificate_activity_img/fullStackLogo.png";

import KaggleCommunityMember from "./assets/certificate_activity_img/KaggleCommunityMember.png";
import prism from "./assets/certificate_activity_img/prism.png";
import Vampire from "./assets/certificate_activity_img/Vampire.png";

export const SkillsInfo = [
  {
    id: 1,
    name: "HTML",
    logo: htmlLogo,
  },
  {
    id: 2,
    name: "CSS",
    logo: cssLogo,
  },
  {
    id: 3,
    name: "JavaScript",
    logo: javascriptLogo,
  },
  {
    id: 4,
    name: "React JS",
    logo: reactjsLogo,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    logo: tailwindcssLogo,
  },
  {
    id: 6,
    name: "BootStrap",
    logo: BootstrapLogo,
  },

  {
    id: 7,
    name: "Node JS",
    logo: nodejsLogo,
  },
  {
    id: 8,
    name: "Express JS",
    logo: expressjsLogo,
  },
  {
    id: 9,
    name: "MongoDB",
    logo: mongodbLogo,
  },
  {
    id: 10,
    name: "MySql",
    logo: mysqlLogo,
  },
  {
    id: 11,
    name: "Java",
    logo: javaLogo,
  },
  {
    id: 12,
    name: "Python",
    logo: pythonLogo,
  },
  {
    id: 13,
    name: "Git",
    logo: gitLogo,
  },
  {
    id: 14,
    name: "GitHub",
    logo: githubLogo,
  },
  {
    id: 15,
    name: "VS Code",
    logo: vscodeLogo,
  },

  {
    id: 16,
    name: "Netlify",
    logo: netlifyLogo,
  },
  {
    id: 17,
    name: "Render",
    logo: renderLogo,
  },
];

export const education = [
  {
    id: 0,
    img: foet,
    school: "University of Lucknow, Lucknow",
    date: "2023 - 2027",
    grade: "7.1 CGPA",
    degree: "Bachelor of Technology",
    Domain: "CSE",
  },
  {
    id: 1,
    img: upBoard,
    school: "Ram Sahay IC Bairi Shivrajpur Kanpur Nagar",
    date: "2020 - 2022",
    grade: "68%",
    degree: "UP-BOARD(XII) - PCM",
  },
  {
    id: 2,
    img: upBoard,
    school: "GOVT High School Beeramau Kanpur Nagar",
    date: "2018 - 2020",
    grade: "81%",
    degree: "UP-BOARD(X)",
  },
];

export const projects = [
  {
    id: 1,
    title: "Airbnb",
    description:
      "A full-stack travel accommodation platform built with Node.js, Express.js, and MongoDB. It features property listing, secure user authentication (JWT-based login/signup), and an optimized responsive UI for both desktop and mobile. Enhanced booking experience with advanced search and filtering options for smooth property discovery.",
    image: Airbnb,
    tags: [
      "JavaScripts",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    github: "https://github.com/ShivamKamal07/Airbnb",
    webapp: "https://wanderlust-vtdo.onrender.com/listings",
  },
  {
    id: 2,
    title: "Zerodha",
    description:
      "A real-time stock trading simulation platform developed using React.js, Node.js, Express.js, and MongoDB. Includes portfolio management, live market API integration, and interactive data visualization using Chart.js/Recharts. Implements a role-based authentication system for realistic trading workflows and secure user sessions.",
    image: Zerodha,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Bootstrap",
    ],
    github: "https://github.com/ShivamKamal07/Zerodha",
    webapp: "",
  },

  {
    id: 3,
    title: "AI-Voice-Interview-Platform",
    description:
      "An AI-powered voice interview system built with React.js, Node.js, Express.js, Firebase, and Google Gemini API. It enables real-time voice communication, automated question generation, and response evaluation. Designed with a secure backend, scalable data handling, and an intuitive dashboard for both users and administrators..",
    image: AiVoice,
    tags: [
      "React.js",
      "Node.js",
      "FireBase",
      "Tailwind CSS",
      "Gemini API",
      "Vapi Workflows",
      "typeScript",
    ],
    github: "https://github.com/ShivamKamal07/AI-Voice-Interview-Platform",
    webapp: "https://voiceagent-px87.onrender.com",
  },
  {
    id: 4,
    title: "EduPlayRural",
    description:
      "EduPlayRural is a web-based learning platform designed to make education more accessible for rural students. It offers interactive lessons, quizzes, smart notebooks, progress tracking, leaderboards, and an AI-powered chatbot — all within a bilingual (Hindi and English) dashboard.Built with Python (Django), HTML, CSS, and JavaScript, the platform provides personalized learning experiences where students can view progress across subjects like Hindi, English, Math, and Science, engage in self-assessment quizzes, and compete with peers through a leaderboard system.",
    image: EduPlayRural,
    tags: ["JavaScript", "Python(Django)", "Bootstrap", "SQLite"],
    github: "https://github.com/ShivamKamal07/EduPlayRural",
    webapp: "https://eduplayrural.onrender.com/",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Ethical Hacking and Penetration Testing",
    issuer: " C-DAC, NOIDA",
    date: "11th Nov 2024 to 26th Dec 2024",
    description:
      "Completed the Ethical Hacking & Penetration Testing training and virtual internship by C-DAC Noida, gaining hands-on experience with security assessment, vulnerability scanning, and ethical hacking techniques.",
    certificateImage: cyber,
    logo: cdac,
  },
  {
    id: 2,
    title:
      "Artificial Intelligence Summer Internship – Codevirus Security Pvt. Ltd.",
    issuer: "Codevirus Security",
    date: "16th june 2025 To 30th July 2025",
    description:
      "Successfully completed a 45-day offline Summer Internship with Codevirus Security Pvt. Ltd. in the field of Artificial Intelligence (16 June–30 July 2025). During the program, I worked on AI concepts, models, and real-world applications while strengthening analytical and problem-solving skills through industry-focused training.",
    certificateImage: Ai,
    logo: Ailogo,
  },
  {
    id: 3,
    title: "Generative AI Mastery Workshop & Buildathon – NxtWave",
    issuer: "NXTWave",
    date: "31th August 2025",
    description:
      "Participated in India’s biggest GenAI Buildathon organized by NxtWave as part of the OpenAI Academy Learning Community. Completed the Generative AI Mastery Workshop, learning about modern GenAI tools, prompt engineering, and practical AI application development.",
    certificateImage: GenAi,
    logo: GenAiLogo,
  },
  {
    id: 4,
    title: "Full Stack Web Development Certification – Apna College",
    issuer: "Apna College",
    date: "December 2023",
    description:
      "Completed the Delta Full Stack Web Development Course by Apna College, covering the complete MERN stack including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. This course helped me strengthen my fundamentals in frontend and backend development while building multiple real-world projects.",
    certificateImage: fullStack,
    logo: fullStackLogo,
  },
];

export const extraCurricularActivities = [
  {
    id: 1,
    title: "Kaggle Community Member Badge",
    date: "2025",
    description:
      "Earned the Kaggle Community Member badge by actively participating in the Kaggle platform, engaging with datasets, notebooks, and discussions. This badge reflects my initiative to contribute to the global data science community and stay updated with practical data analysis and machine learning trends through collaboration and knowledge sharing.",
    certificateImage: KaggleCommunityMember,
  },
  {
    id: 2,
    title: "PRISM 2024 TechFest – Certificate of Participation",
    date: "2024",
    description:
      "Presented by the Faculty of Engineering and Technology, University of Lucknow, for active participation in TechFest – PRISM 2024. Recognized for contributing to the success of the two-day innovation and technology event with dedication and enthusiasm.",
    certificateImage: prism,
  },
  {
    id: 3,
    title: "Kaggle Vampire Badge",
    date: "2025",
    description:
      "Achieved the Kaggle Vampire badge for consistent and active participation on the platform during late hours, demonstrating dedication and discipline towards learning and working on real-world problems. This badge represents commitment, curiosity, and continuous learning in the field of data science and machine learning.",
    certificateImage: Vampire,
  },
];
