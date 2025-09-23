export const projects : Project[] = [
  {
    title: "Mystic Vine",
    description:
      "A quiz adventure journey where you can collect experience and money, gain power-ups, and level up your skills!",
    longDescription:
      "Mystic Vine is a quiz adventure game where you collect experience points and earn in-game currency as you progress through quizzes made by your friends. Every correct answer brings you closer to unlocking new power-ups, leveling up your skills, and enhancing your gameplay. Play with your friends in a custom game and have fun creating custom questions to learn more about them!",
    images: [
      "projects/mysticvine/Banner.png",
      "projects/mysticvine/Create Quiz Page.jpg",
      "projects/mysticvine/Leaderboard Page.jpg",
      "projects/mysticvine/Landing Page.jpg",
      "projects/mysticvine/Store Page.jpg",
      "projects/mysticvine/Waiting Room Page.jpg",
    ],
    tags: ["Kotlin","Android","Firebase"],
    github: "https://github.com/StevenLie14/MysticVine",
    date: "Aug 2024 - Sep 2024",
    private: false,
    // stats: { users: "50K+" },
    // category: "Android",
  },
  {
    title: "Nekonnect",
    description:
      "A peer-to-peer lending dApp built on the Internet Computer with a React + TypeScript frontend, Motoko canisters backend and AI-powered face verification.",
    longDescription:
      "Nekonnect, a peer-to-peer lending platform designed to bridge financial opportunity and trust. By leveraging blockchain technology and real-world assets, we provide a secure, transparent, and decentralized environment where lenders and borrowers can connect seamlessly. Built on ICP technology, Nekonnect utilizes smart contracts to ensure flexibility, supporting features such as Internet Identity, ICP tokens, DFX, and Motoko. To enhance security, our platform integrates AI-powered face verification, ensuring a safe and reliable lending experience for all users.",
    images: [
      "projects/nekonnect/landing.jpeg",
      "projects/nekonnect/ig.jpeg",
      "projects/nekonnect/borrower.jpeg",
      "projects/nekonnect/chat.webp",
      "projects/nekonnect/profile.webp",
    ],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Motoko",
      "DFX",
      "Internet Computer",
      "IC - WebSocket",
      "Python",
      "Fast API"
    ],
    github: "https://github.com/StevenLie14/nekonnect",
    date: "Feb 2025 - Mar 2025",
    private: false,
    // stats: { canisters: "8+", contributors: "active" },
    // category: "Web 3"
  },
  {
    title: "DiagnoAI",
    description:
      "An AI-powered healthcare assistant that provides diagnosis, personalized treatment recommendations, and a medicine marketplace.",
    longDescription:
      "DiagnoAI bridges the gap between diagnosis, treatment, and medicine availability. Built with Fetch.ai for agentic AI and Internet Computer Protocol (ICP) for decentralized services, the platform empowers users with knowledge, guidance, and access. It features AI-driven agents for Diagnosis, Recommendations, and Medical History, alongside a seamless medicine marketplace where users can find, compare, and purchase medicines. With Internet Identity, users enjoy secure, decentralized authentication, while Motoko smart contracts ensure reliable, blockchain-backed backend logic.",
    images: [
      "projects/diagnoai/home.jpg",
      "projects/diagnoai/fetchai.jpg",
      "projects/diagnoai/diagnosis.jpg",
      "projects/diagnoai/speech.jpg",
      "projects/diagnoai/search.jpg",
      "projects/diagnoai/marketplace.jpg",
    ],
    tags: ["React", "ICP", "Motoko", "Fetch.ai", "Docker", "AI Agents", "Speech Recognition"],
    github: "https://github.com/StevenLie14/DiagnoAI",
    demo: "https://youtu.be/hjOji8diK1A",
    date: "Sep 2024",
    private: false
  },
  {
    title: "DevOps — Harbor & GitHub Actions Runner with Ansible",
    description:
      "An Ansible-based automation project to configure GitHub Actions self-hosted runners, deploy Harbor, and manage GitHub repository secrets.",
    longDescription:
      "Built an Ansible-powered DevOps automation system that provisions GitHub Actions self-hosted runners on remote servers, deploys Harbor as a secure private container registry, and manages GitHub repository-level secrets. The setup uses Docker Compose to provide cross-platform support, including Windows, ensuring that Ansible can be used in any development environment. Designed to simplify CI/CD infrastructure management with modular playbooks for runners, Harbor, and secrets.",
    images: [
      "projects/devops/ansible.png",
      "projects/devops/gitact.png",
      "projects/devops/registry.png",
      "projects/devops/vault.png"
    ],
    tags: ["Ansible", "Docker", "Harbor", "DevOps", "GitHub Actions", "CI/CD"],
    github: "https://github.com/StevenLie14/ansible-harbor-github-runner",
    demo: "",
    date: "Sep 2025",
    private: false
  },
  {
    title: "SRExam - Exam Management System",
    description:
      "A cross-platform desktop application that digitizes and automates university exam processes, built with React, TypeScript, Rust (Tauri), GraphQL, and MySQL.",
    longDescription:
      "Developed an automated exam management system for SR University to streamline the traditionally manual exam process. The system supports four key roles: students (exam participation), assistants (proctoring), subject developers (exam content coordination), and exam coordinators (allocation and scheduling). Deliverables include software artifacts such as use case diagrams, sequence diagrams, class diagrams, activity diagrams, and detailed use case descriptions. The desktop application leverages Vite + React + TypeScript for the frontend, Rust + Tauri for the desktop runtime, GraphQL for API communication, and MySQL for persistent storage — ensuring performance, scalability, and maintainability.",
    images: [
      "projects/srexam/usecase.jpg",
      "projects/srexam/class.jpg",
      "projects/srexam/activityexam.jpg",
      "projects/srexam/sequenceeditrole.jpg",
      "projects/srexam/description.jpeg",
      "projects/srexam/login.jpeg",
    ],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Rust",
      "Tauri",
      "GraphQL",
      "MySQL",
      "UML",
      "Desktop Application"
    ],
    github: "https://github.com/StevenLie14/SRExam",
    demo: "",
    date: "Sep 2025",
    private: true
  },
  {
    title: "ScanVision – Smart Document, Image & OCR Processing",
    description:
      "A web-based software that enhances document scanning, OCR text extraction, and image editing with filters, PDF conversion, and manipulation tools, built with Flask, PostgreSQL (Amazon RDS), and OpenCV.",
    longDescription:
      "ScanVision is a document scanning and image processing solution designed to simplify workflows for students, professionals, and businesses. With support for filters like brightness, contrast, and sharpness adjustments, users can quickly enhance scanned documents for readability. The platform also provides robust editing capabilities like crop, rotate, and resize images as well as seamless conversions between PDFs and images (single or multi-page). Additionally, ScanVision includes OCR (Optical Character Recognition) functionality to extract editable text from scanned documents or images, making it easier to digitize and search paper-based content. Built on Flask, SQL, and OpenCV, ScanVision combines advanced image processing, OCR, and conversion tools into a single workflow, eliminating the hassle of managing physical and digital documents.",
    images: [
      "projects/scanvision/home.jpeg",
      "projects/scanvision/ocr.jpeg",
      "projects/scanvision/crop.jpeg",
      "projects/scanvision/docs.jpeg",
      "projects/scanvision/register.jpeg"
    ],
    tags: [
      "Python",
      "Flask",
      "OpenCV",
      "OCR",
      "SQL",
      "Document Scanning",
      "PDF Tools",
      "AWS"
    ],
    github: "https://github.com/StevenLie14/ScanVision",
    demo: "",
    date: "Nov 2024",
    private: false
  },
  {
    title: "HCI — Zara Clone (E-Commerce Application)",
    description: "A full-stack Zara-inspired e-commerce platform built as part of a Human-Computer Interaction (HCI) college project, featuring product catalogs, authentication, shopping cart, and checkout.",
    longDescription: "Developed a Zara-like e-commerce system as part of a Human-Computer Interaction (HCI) course project. The platform includes a Spring Boot backend with JWT-based authentication, product and category management, shopping cart and transactions, shipping address management, file storage via MinIO, and PostgreSQL database integration with automated migrations. The React + Vite + TypeScript frontend delivers a responsive customer and admin interface. The system is fully containerized with Docker Compose for reproducible local development, exposing services for backend, frontend, PostgreSQL, and MinIO. API documentation is available via Swagger UI, while MinIO console enables object storage management. This project demonstrates full-stack development, integration of modern frameworks, and application of HCI principles to build an interactive shopping experience.",
    images: [
      "projects/zara/zara.png",
      "projects/zara/cart.png",
      "projects/zara/dark-profile.png",
      "projects/zara/dark-register.jpg",
      "projects/zara/dark-addprod.jpg"
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Maven",
      "PostgreSQL",
      "MinIO",
      "React",
      "Vite",
      "TypeScript",
      "Docker",
      "Docker Compose",
      "shadcn/ui",
    ],
    github: "https://github.com/StevenLie14/HCI-Zara-Project",
    demo: "",
    date: "Apr 2025 - May 2025",
    private: false
  },
  {
    title: "Line-Bot – Notification, Reminder & Assistant System",
    description:
      "A Python-based Line Messaging bot that automates reminders, ticket notifications, and assistant data queries for internal SLC.",
    longDescription:
      "Line-Bot is a production-ready Line Messaging assistant designed to streamline internal SLC workflows through automation and API integrations. It connects to the REQUEST SLC API to deliver periodic reminders and new ticket alerts, while the RESMAN API integration enables users to fetch schedules, shifts, and other assistant-related data directly through Line. Built with Python 3.12, FastAPI, and PostgreSQL, the system supports rapid deployment and seamless integration with Line channels, empowering teams with real-time notifications, schedule access, and smarter workflows.",
    images: [
      "projects/linebot/rndba.jpeg",
      "projects/linebot/help.png",
      "projects/linebot/reminder.png"
    ],
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Line API",
      "Pydantic",
    ],
    github: "https://github.com/StevenLie14/line-bot",
    demo: "",
    date: "Aug 2025 - Sep 2025",
    private: false
  }



]
