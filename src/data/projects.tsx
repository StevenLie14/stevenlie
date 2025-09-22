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
      "Python"
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
      "projects/devops-harbor-ansible/logo.png",
      "projects/devops-harbor-ansible/architecture.png",
      "projects/devops-harbor-ansible/demo.jpg"
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
  }


]
