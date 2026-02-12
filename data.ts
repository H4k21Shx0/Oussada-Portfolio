import { Project, Experience, Education, Skill } from './types';

// --- DATA: ENGLISH ---

const EXPERIENCES_EN: Experience[] = [
  {
    id: '1',
    position: 'Systems, Networks & Software Developer',
    company: 'Independent / Freelance',
    period: 'Oct 2023 - Present',
    description: 'Applied engineering through custom solutions for SMEs and individual clients.',
    location: 'Remote, Algeria',
    achievements: [
      "Solution Design: Developed desktop tools (Qt/Python) and web interfaces to solve specific client management needs.",
      "Learning through Action: Mastered system automation via Bash/Python for faster server setups (60% time saved).",
      "Network Support: Handled L1/L2 troubleshooting for local clients, consolidating my diagnosis skills.",
      "Autonomy: Successfully managed end-to-end projects, from requirement gathering to final deployment."
    ]
  },
  {
    id: '2',
    position: 'IT Engineering Intern - Network & Security',
    company: 'EURL NEHAL TIC',
    period: 'Jan 2024 - July 2024',
    description: 'Post-graduate internship focused on professional deployment of network infrastructures.',
    location: 'Tizi Ouzou, Algeria',
    achievements: [
      "Field Deployment: Participated in the installation of 20+ network nodes, following enterprise standards.",
      "Systems Integration: Helped deploy VoIP and IP surveillance services, learning real-world hardware constraints.",
      "Security Focus: Assisted in basic network hardening and VDI setups, improving my practical security knowledge."
    ]
  },
  {
    id: '3',
    position: 'IT Technical Trainer',
    company: 'Private Schools',
    period: 'Dec 2023 - May 2024',
    description: 'Sharing my passion for tech with students and professionals.',
    location: 'Tizi Ouzou, Algeria',
    achievements: [
      "Pedagogy: Delivered 200+ hours of lessons on programming (Python) and cybersecurity basics.",
      "Curriculum: Created simplified technical guides to make complex concepts accessible to beginners."
    ]
  },
];

const EXPERIENCES_FR: Experience[] = [
  {
    id: '1',
    position: 'Ingénieur Systèmes, Réseaux & Développement Logiciel',
    company: 'Indépendant / Freelance',
    period: 'Oct 2023 - Présent',
    description: 'Application pratique de l\'ingénierie via des solutions sur mesure pour PME et particuliers.',
    location: 'À distance, Algérie',
    achievements: [
      "Conception : Développement d'outils desktop (Qt/Python) et interfaces web répondant à des besoins de gestion précis.",
      "Automatisation : Apprentissage et mise en œuvre de scripts Bash/Python pour accélérer les configurations serveurs (gain de temps de 60%).",
      "Support Réseau : Résolution de pannes N1/N2 pour des clients locaux, consolidant mes capacités de diagnostic.",
      "Gestion de Projet : Maîtrise du cycle complet, de la prise de besoin au déploiement final en autonomie."
    ]
  },
  {
    id: '2',
    position: 'Stagiaire Ingénieur IT - Réseaux & Sécurité',
    company: 'EURL NEHAL TIC',
    period: 'Jan 2024 - Juill 2024',
    description: 'Stage de fin d\'études/post-diplôme axé sur le déploiement professionnel d\'infrastructures.',
    location: 'Tizi Ouzou, Algérie',
    achievements: [
      "Déploiement Terrain : Participation à l'installation de 20+ équipements réseau selon les standards d'entreprise.",
      "Intégration : Aide au déploiement de services VoIP et vidéosurveillance IP, appréhendant les contraintes matérielles réelles.",
      "Sécurité : Assistance à la mise en place de VDI et au durcissement réseau basique."
    ]
  },
  {
    id: '3',
    position: 'Formateur Technique en Informatique',
    company: 'Plusieurs écoles privées',
    period: 'Déc 2023 - Mai 2024',
    description: 'Partage de ma passion technique avec des étudiants et professionnels.',
    location: 'Tizi Ouzou, Algérie',
    achievements: [
      "Pédagogie : Plus de 200h de cours sur la programmation Python et les bases de la cybersécurité.",
      "Supports : Création de guides techniques simplifiés pour rendre accessibles des concepts complexes."
    ]
  },
];

const EDUCATION_EN: Education[] = [
  {
    id: '1',
    degree: 'Master\'s in Networks, Mobility & Embedded Systems',
    school: 'University Mouloud Mammeri of Tizi Ouzou',
    year: '2021 - 2023',
    location: 'Tizi Ouzou, Algeria'
  },
  {
    id: '3',
    degree: 'Fullstack Web Development Training',
    school: 'Jura School',
    year: '2023',
    location: 'Tizi Ouzou, Algeria'
  },
  {
    id: '4',
    degree: 'Certificate: Fundamentals of Deep Learning',
    school: 'NVIDIA.com',
    year: '2022',
    location: 'Online'
  },
  {
    id: '2',
    degree: 'Bachelor\'s in Computer Science (Computer Systems)',
    school: 'University Mouloud Mammeri of Tizi Ouzou',
    year: '2018 - 2021',
    location: 'Tizi Ouzou, Algeria'
  }
];

const EDUCATION_FR: Education[] = [
  {
    id: '1',
    degree: 'Master Réseaux, Mobilités & Systèmes Embarqués',
    school: 'Université Mouloud Mammeri de Tizi Ouzou',
    year: '2021 - 2023',
    location: 'Tizi Ouzou, Algérie'
  },
  {
    id: '3',
    degree: 'Formation Développeur Web Fullstack',
    school: 'Jura School',
    year: '2023',
    location: 'Tizi Ouzou, Algérie'
  },
  {
    id: '4',
    degree: 'Certificat : Fondamentaux du Deep Learning',
    school: 'NVIDIA.com',
    year: '2022',
    location: 'En Ligne'
  },
  {
    id: '2',
    degree: 'Licence Informatique, Systèmes Informatiques',
    school: 'Université Mouloud Mammeri de Tizi Ouzou',
    year: '2018 - 2021',
    location: 'Tizi Ouzou, Algérie'
  }
];

const PROJECTS_EN: Project[] = [
  {
    id: '3',
    title: 'Local Desktop Password Vault',
    description: 'Secure, offline desktop application for encrypted credential management.',
    fullDescription: 'Created a desktop application using Python and PyQt to manage passwords locally. Focused on offline security, implementing AES-256 encryption to ensure sensitive data remains on the local machine.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    technologies: ['Python', 'PyQt', 'Cryptography', 'SQLite'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2026',
    date: 'Ongoing 2026'
  },
  {
    id: '8',
    title: 'Modern Aesthetic Portfolio',
    description: 'High-performance portfolio showcasing high-end UI/UX and motion design.',
    fullDescription: 'Designed and built this very portfolio to demonstrate my ability to merge complex systems engineering with modern, aesthetic web design. Focused on performance, responsiveness, and interactivity.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Lucide'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2026',
    date: 'Feb 2026'
  },
  {
    id: '7',
    title: 'National Cybersecurity (Top 10)',
    description: 'Achieved Top 10 national ranking in the 1st National Cybersecurity Challenge.',
    fullDescription: 'Participated in the first National Cybersecurity Competition, ranking within the top 10 nationwide. Competed against elite talent in complex Capture The Flag (CTF) scenarios across multiple domains.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    technologies: ['CTF', 'National Ranking', 'Network Security', 'Pentesting'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2025',
    date: 'May 2025'
  },
  {
    id: '6',
    title: 'Cybersecurity Comp Winner (2nd)',
    description: 'Successive victory in the 2nd UMMTO Cybersecurity Competition.',
    fullDescription: 'Proved consistency by winning the 2nd cybersecurity competition at Mouloud Mammeri University. This edition focused on web vulnerability exploitation and advanced OSINT techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    technologies: ['Web Security', 'OSINT', 'Linux Security', 'UMMTO Winner'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2024',
    date: 'March 2024'
  },
  {
    id: '5',
    title: 'Home Health Monitoring System',
    description: 'IoT-based remote patient health monitoring system for home use.',
    fullDescription: 'Master\'s graduation project. Realized a comprehensive system for remote patient monitoring at home. Integrated IoT sensors to collect vital signs and a real-time monitoring interface for healthcare providers.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    technologies: ['IoT', 'Python', 'Real-time Data', 'Master Thesis'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2023',
    date: 'Sept 2023'
  },
  {
    id: '4',
    title: 'Cybersecurity Comp Winner (1st)',
    description: 'Ranked 1st Place in the inaugural UMMTO Cybersecurity Challenge.',
    fullDescription: 'Winner of the first place in the very first cybersecurity competition held at Mouloud Mammeri University. Challenges included network forensics, reverse engineering, and cryptographic puzzles.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    technologies: ['Pentesting', 'Forensics', 'CTF', 'UMMTO Winner'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2022',
    date: 'Dec 2022'
  },
  {
    id: '2',
    title: 'Equipment Management ERP',
    description: 'Custom ERP system for tracking equipment in a professional training center.',
    fullDescription: 'Designed and developed a custom ERP software solution for a professional training center. The system manages inventory, tracks equipment lifecycle, and optimizes maintenance schedules, improving operational efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    technologies: ['Python', 'PyQt', 'SQLite', 'Business Logic'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2021',
    date: 'Dec 2021'
  },
  {
    id: '1',
    title: 'Blood Donation Web System',
    description: 'Comprehensive platform for blood donation workflows and donor tracking.',
    fullDescription: 'Bachelor\'s final project. Involved complete design and realization of a web application to streamline blood donation workflows, donor records, and real-time stock management to help hospitals coordinate effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Node.js', 'MySQL', 'UI/UX Design'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2021',
    date: 'June 2021'
  }
];

const PROJECTS_FR: Project[] = [
  {
    id: '3',
    title: 'Coffre-fort de Mots de Passe Local',
    description: 'Application desktop sécurisée et hors-ligne pour la gestion de credentials.',
    fullDescription: 'Développement d\'une application de bureau avec Python et PyQt pour la gestion locale des mots de passe. Focus sur la sécurité "offline" avec implémentation de chiffrement AES-256.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    technologies: ['Python', 'PyQt', 'Cryptographie', 'SQLite'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2026',
    date: 'En cours 2026'
  },
  {
    id: '8',
    title: 'Portfolio Moderne & Esthétique',
    description: 'Portfolio haute performance alliant UI/UX premium et motion design.',
    fullDescription: 'Conception et réalisation de ce portfolio pour démontrer ma capacité à fusionner l\'ingénierie système avec un design web moderne et esthétique. Focus sur la performance et l\'interactivité.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Lucide'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2026',
    date: 'Fév 2026'
  },
  {
    id: '7',
    title: 'National Cyber (Top 10)',
    description: 'Classement Top 10 à la 1ère compétition nationale de cybersécurité.',
    fullDescription: 'Participation à la première compétition nationale de cybersécurité, aboutissant à un classement dans le top 10 national parmi l\'élite du domaine. Défis CTF de haut niveau.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    technologies: ['CTF National', 'Top 10 Algérie', 'Sécurité Réseau'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2025',
    date: 'Mai 2025'
  },
  {
    id: '6',
    title: 'Gagnant CTF (2ème Édition)',
    description: 'Confirmation de titre lors de la 2ème compétition de cybersécurité.',
    fullDescription: 'Succès renouvelé lors de la 2ème édition de la compétition de cybersécurité à l\'UMMTO. Focus sur l\'exploitation de vulnérabilités web et techniques d\'OSINT.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    technologies: ['Web Security', 'OSINT', 'Linux Security', 'Lauréat UMMTO'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2024',
    date: 'Mars 2024'
  },
  {
    id: '5',
    title: 'Monitoring de Santé à Domicile',
    description: 'Système IoT pour le suivi à distance de l\'état de santé des patients.',
    fullDescription: 'Projet de fin d\'étude Master. Réalisation d\'un système complet de monitoring de l\'état de santé à domicile, intégrant des capteurs IoT et une interface de surveillance en temps réel.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    technologies: ['IoT', 'Python', 'Données Temps Réel', 'Projet Master'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2023',
    date: 'Sept 2023'
  },
  {
    id: '4',
    title: 'Gagnant CTF (1ère Place)',
    description: 'Lauréat de la 1ère compétition de cybersécurité à l\'UMMTO.',
    fullDescription: 'Vainqueur de la première place lors de la toute première compétition de cybersécurité organisée à l\'Université Mouloud Mammeri. Défis : Forensics réseau et puzzles cryptographiques.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    technologies: ['Pentesting', 'Forensics', 'CTF', 'Lauréat UMMTO'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2022',
    date: 'Déc 2022'
  },
  {
    id: '2',
    title: 'ERP de Gestion d\'Équipements',
    description: 'Logiciel ERP pour le suivi du matériel d\'un centre de formation professionnelle.',
    fullDescription: 'Création d\'un logiciel ERP sur mesure pour la gestion et le suivi des équipements d\'un centre de formation professionnelle, optimisant l\'inventaire et la maintenance.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    technologies: ['Python', 'PyQt', 'SQLite', 'Logiciel Métier'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2021',
    date: 'Déc 2021'
  },
  {
    id: '1',
    title: 'Gestion des Dons de Sang',
    description: 'Plateforme web complète pour la gestion des dons et le suivi des donneurs.',
    fullDescription: 'Projet de fin de cycle Licence. Conception et réalisation d\'une application web visant à optimiser les flux de don de sang, le suivi des donneurs et la gestion des stocks en temps réel pour les hôpitaux.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Node.js', 'MySQL', 'Design UI/UX'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2021',
    date: 'Juin 2021'
  }
];

export const SKILLS: Skill[] = [
  // --- Systèmes d'Exploitation ---
  { name: 'Linux (Ubuntu/Debian)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'systems' },
  { name: 'Windows Server / AD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', category: 'systems' },
  { name: 'Partitionnement OS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'systems' },
  { name: 'Shell / Bash Scripting', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'systems' },

  // --- Réseaux & Protocoles ---
  { name: 'TCP/IP Stack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'networks' },
  { name: 'Modèle OSI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'networks' },
  { name: 'DHCP & DNS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: 'networks' },
  { name: 'NAT & Routing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'networks' },
  { name: 'VLAN Segmentation', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'networks' },
  { name: 'VPN Services', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'networks' },
  { name: 'Wireshark Analysis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wireshark/wireshark-original.svg', category: 'networks' },
  { name: 'Architecture Réseau', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'networks' },

  // --- Systèmes Embarqués ---
  { name: 'FreeRTOS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg', category: 'embedded' },
  { name: 'Écosystème STM32', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/st/st-original.svg', category: 'embedded' },
  { name: 'Raspberry Pi', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg', category: 'embedded' },
  { name: 'ESP32 / Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', category: 'embedded' },
  { name: 'VHDL Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'embedded' },
  { name: 'Protocole MQTT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'embedded' },

  // --- Langages de Programmation ---
  { name: 'Python (Solide)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'programming' },
  { name: 'C / C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'programming' },
  { name: 'JSON / YAML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg', category: 'programming' },
  { name: 'Logique de Scripting', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'programming' },

  // --- Frameworks & APIs ---
  { name: 'Qt / PyQt Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg', category: 'frameworks' },
  { name: 'API RESTful', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frameworks' },

  // --- Cybersécurité & Audit ---
  { name: 'Nmap Scanning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'cybersecurity' },
  { name: 'Audit Nessus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'cybersecurity' },
  { name: 'Metasploit Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'cybersecurity' },
  { name: 'Sensibilité SIEM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'cybersecurity' },
  { name: 'Normes ISO 27001', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'cybersecurity' },
  { name: 'Gestion des Accès', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', category: 'cybersecurity' },
  { name: 'Pare-feu (Firewalls)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'cybersecurity' },

  // --- Outils, Logiciels & DevOps ---
  { name: 'Docker Containers', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'tools' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'tools' },
  { name: 'Jenkins CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'tools' },
  { name: 'Jira (Agile)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', category: 'tools' },
  { name: 'Git Version Control', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
  { name: 'OracleDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'tools' },
  { name: 'Bases NoSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'tools' },
  { name: 'Arduino IDE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', category: 'tools' },
  { name: 'Keil µVision', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'tools' },
  { name: 'PlatformIO', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },

  // --- Qualités & Soft Skills ---
  { name: 'Communication Orale/Écrite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', category: 'soft-skills' },
  { name: 'Résolution de problèmes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg', category: 'soft-skills' },
  { name: 'Sens de l’analyse', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'soft-skills' },
  { name: 'Attention aux détails', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'soft-skills' },
  { name: 'Collaboration d’équipe', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-plain.svg', category: 'soft-skills' },
  { name: 'Autonomie', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'soft-skills' },
  { name: 'Gestion des priorités', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-plain.svg', category: 'soft-skills' },
  { name: 'Adaptabilité', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'soft-skills' },
  { name: 'Résistance au stress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'soft-skills' },
  { name: 'Veille technologique', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg', category: 'soft-skills' },
];

export const DATA = {
    en: {
        experience: EXPERIENCES_EN,
        education: EDUCATION_EN,
        projects: PROJECTS_EN
    },
    fr: {
        experience: EXPERIENCES_FR,
        education: EDUCATION_FR,
        projects: PROJECTS_FR
    }
};