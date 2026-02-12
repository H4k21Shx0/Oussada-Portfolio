import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface SkillDetail {
  name: string;
  title: string;
  desc: string;
  popularSkills: string[];
  status: string;
}

interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  home: {
    badge: string;
    title_span: string;
    subtitle: string;
    desc: string;
  };
  about: {
    title: string;
    subtitle: string;
    desc: string;
    role: string;
    download: string;
    channels_title: string;
    identity_card: {
      email: string;
      phone: string;
      location: string;
    };
    stats: {
        projects: string;
        experience: string;
        awards: string;
        contribs: string;
        role: string;
        status: string;
        sub_projects: string;
        sub_experience: string;
        sub_awards: string;
        sub_contribs: string;
        sub_role: string;
        sub_status: string;
        projects_val: string;
        experience_val: string;
        awards_val: string;
        contribs_val: string;
        role_val: string;
        status_val: string;
    };
    chart_title: string;
    chart_sub: string;
    diagnostic_mode: string;
    evolution_analysis: string;
    mastery_points: string;
    tech_stack: string;
    growth_matrix_title: string;
    growth_matrix_desc: string;
    analyzing_potential: string;
    mastered_tools: string;
    evolution_status: string;
    skill_levels: string[];
    skills: {
        networks: SkillDetail;
        security: SkillDetail;
        infra: SkillDetail;
        systems: SkillDetail;
        embedded: SkillDetail;
        soft_skills: SkillDetail;
        software: SkillDetail;
        ai: SkillDetail;
        cloud: SkillDetail;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    desc: string;
    exp_title: string;
    edu_title: string;
  };
  projects: {
    title: string;
    subtitle: string;
    desc: string;
    view_details: string;
    modal_about: string;
    modal_tech: string;
    demo: string;
    code: string;
  };
  skills: {
    title: string;
    subtitle: string;
    desc: string;
    domains: {
        systems: { title: string; desc: string; };
        networks: { title: string; desc: string; };
        embedded: { title: string; desc: string; };
        cyber: { title: string; desc: string; };
        programming: { title: string; desc: string; };
        frameworks: { title: string; desc: string; };
        tools: { title: string; desc: string; };
        soft: { title: string; desc: string; };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    badge: string;
    title_prefix: string;
    title_span: string;
    desc: string;
    quote: string;
    footer_built: string;
    footer_rights: string;
    cards: {
        core: { title: string; desc: string; type: string; specs: string[]; };
        relay: { title: string; desc: string; type: string; specs: string[]; };
        edge: { title: string; desc: string; type: string; specs: string[]; };
    }
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: { home: 'Home', about: 'Profile', experience: 'Journey', projects: 'Projects', skills: 'Stack', contact: 'Vision' },
    home: {
      badge: 'Systems, Networks, IoT & Software Engineer',
      title_span: 'Oussada',
      subtitle: 'Passionate Explorer of Secure Infrastructures & Code',
      desc: 'Armed with solid foundations in IT engineering and a versatile junior profile, I am constantly exploring new horizons. My thirst for knowledge is the compass guiding me toward the technological future I am building, merging technical mastery with continuous innovation.',
    },
    about: {
      title: 'Technical',
      subtitle: 'Profile',
      desc: 'Curiosity and rigor define my approach. As a versatile junior engineer, I consolidate my solid foundations while exploring the latest technological advances to forge unique and evolving expertise tailored for tomorrow\'s challenges.',
      role: 'Versatile Systems & Dev Engineer',
      download: 'Download My Resume',
      channels_title: 'Professional Channels',
      identity_card: { email: 'Reach me at', phone: 'Let\'s talk', location: 'Based in' },
      stats: {
          projects: "Lab & Freelance", sub_projects: "Active Builds",
          experience: "Post-Grad", sub_experience: "Active Learning",
          awards: "Competitions", sub_awards: "National CTF Wins",
          contribs: "R&D Focus", sub_contribs: "Applied Research",
          role: "Current Focus", sub_role: "Systems, IoT & Software",
          status: "Open for", sub_status: "New Adventures",
          projects_val: "08 Builds", experience_val: "M2 Grad", awards_val: "02", contribs_val: "IoT & AI", role_val: "Freelance Eng.", status_val: "Open"
      },
      chart_title: "Skillset Evolution",
      chart_sub: "Current Growth Areas",
      diagnostic_mode: "Diagnostic Mode",
      evolution_analysis: "Evolution Analysis",
      mastery_points: "Expertise Score",
      tech_stack: "Technology Stack",
      growth_matrix_title: "Growth Intelligence Matrix",
      growth_matrix_desc: "Visualizing the progress of my core competencies in a balanced nonagon. Select any node to view my current technical maturity and stacks.",
      analyzing_potential: "Analyzing Potential...",
      mastered_tools: "Mastered Tools",
      evolution_status: "Knowledge & Evolution",
      skill_levels: ["Beginner", "Apprentice", "Intermediate", "Advanced", "Experienced"],
      skills: {
          networks: { 
              name: "Networks", title: "Networking", desc: "Solid Foundations", 
              popularSkills: ["Cisco iOS", "TCP/IP", "VLAN", "VoIP", "VPN"],
              status: "I have a solid mastery of local network architectures, static/dynamic routing, and securing flows via VPN. I now want to deepen my knowledge in SD-WAN and network automation (NetDevOps) to manage more complex and scalable infrastructures."
          },
          security: { 
              name: "Security", title: "Cybersecurity", desc: "CTF Competitor", 
              popularSkills: ["Nmap", "Metasploit", "Burp Suite", "Wireshark"],
              status: "Currently focused on offensive security (Pentest, CTF), I understand common attack vectors and vulnerability exploitation. My objective is to evolve towards defensive security (Blue Teaming) and the implementation of SIEM solutions for proactive infrastructure protection."
          },
          infra: { 
              name: "Infra", title: "Modern Infrastructure", desc: "Infrastructure as Code", 
              popularSkills: ["Docker", "Ansible", "Nginx", "CI/CD basics"],
              status: "I have mastered manual setups and basics of containerization with Docker. To increase my efficiency, I am training on Kubernetes for orchestration and Terraform to fully automate the deployment of my lab and future professional projects."
          },
          systems: { 
              name: "Systems", title: "Systems Admin", desc: "Linux Passionate", 
              popularSkills: ["Debian/Ubuntu", "Rocky Linux", "Bash", "Active Directory"],
              status: "Autonomous in managing Linux and Windows servers, I handle the automation of recurring tasks via Bash. My growth path is now turning towards advanced kernel hardening and optimizing the performance of critical services."
          },
          embedded: { 
              name: "Embedded", title: "Embedded Systems", desc: "Hardware Logic", 
              popularSkills: ["Arduino", "Raspberry Pi", "C++", "Sensors Integration"],
              status: "Specialized during my Master's degree, I know how to design systems that bridge hardware and software. I want to explore Real-Time Operating Systems (RTOS) further to tackle high-constraint industrial IoT projects."
          },
          soft_skills: { 
              name: "Soft Skills", title: "Soft Skills", desc: "Collaborative & Agile", 
              popularSkills: ["Adaptability", "Autonomy", "Agile", "Remote Workflow"],
              status: "Naturally curious and autonomous, I quickly adapt to new environments. I aim to develop my technical leadership skills to facilitate the transmission of knowledge within agile and innovative teams."
          },
          software: { 
              name: "Software", title: "Software Engineering", desc: "Modern Application Logic", 
              popularSkills: ["Python", "PyQt", "C/C++", "Git"],
              status: "I build robust desktop and terminal tools, particularly for automation. To improve the performance and safety of my developments, I am actively learning Rust, which I consider the future of systems programming."
          },
          ai: { 
              name: "AI", title: "AI & Innovation", desc: "Intelligent Automation", 
              popularSkills: ["Prompt Eng.", "OpenAI API", "HuggingFace", "Python AI"],
              status: "I integrate AI into my daily workflows to gain productivity. My next challenge is to master the local deployment and fine-tuning of specialized LLMs to guarantee data confidentiality in the projects I build."
          },
          cloud: { 
              name: "Cloud", title: "Cloud Solutions", desc: "Scalable Virtualization", 
              popularSkills: ["Proxmox", "ESXi", "AWS basics", "Reverse Proxy"],
              status: "Managing my own home-lab, I understand virtualization and high availability concepts. I am now looking to move towards cloud-native architectures and microservices management on AWS or Azure."
          }
      }
    },
    experience: { title: 'Professional', subtitle: 'Journey', desc: 'A journey marked by the thirst to understand and the will to act. Each step of my junior evolution strengthens my foundations and opens the way to ever more efficient and secure architectures.', exp_title: 'Freelance & Internships', edu_title: 'Academic Foundations' },
    projects: { title: 'Featured', subtitle: 'Projects', desc: 'The concrete application of my versatility in the service of innovation. These projects illustrate my desire to explore new fields and my ability to transform complex concepts into viable solutions for the future.', view_details: 'Discover More', modal_about: 'Goal & Learning Outcome', modal_tech: 'The Tech Stack', demo: 'Live Preview', code: 'GitHub Access' },
    skills: {
      title: 'Technical', subtitle: 'Stack',
      desc: 'Technical mastery rooted in solid foundations, complemented by a constant technological watch. My versatility is the base upon which I develop the skills necessary for the infrastructures of tomorrow.',
      domains: {
          systems: { title: "OS & Systems", desc: "Linux/Windows foundations, automation, and hardening." },
          networks: { title: "Networks & Protocols", desc: "Enterprise architecture, TCP/IP, and connectivity." },
          embedded: { title: "Embedded Systems", desc: "Hardware logic, RTOS, and MCU architectures." },
          cyber: { title: "Security & Audit", desc: "Pentesting, standards awareness, and defensive measures." },
          programming: { title: "Programming Languages", desc: "Building core logic with Python and C/C++." },
          frameworks: { title: "Frameworks & APIs", desc: "Creating interfaces and high-level application logic." },
          tools: { title: "Tools & DevOps", desc: "Infrastructure management, CI/CD, and specialized software." },
          soft: { title: "Personal Qualities", desc: "Behavioral skills and professional adaptability." },
      }
    },
    contact: {
      title: 'Future', subtitle: 'Vision',
      badge: 'Learning Roadmap', title_prefix: 'Let\'s Build the', title_span: 'Future Together',
      desc: 'Inspired by the future, guided by learning. My thirst for knowledge and my versatile junior profile are at your service to collaborate on large-scale projects. Let\'s build the foundations of tomorrow together.',
      quote: "Just as technology bridged the gap from the past to today, constant learning is the key to a better future.",
      footer_built: 'Passionately built by', footer_rights: 'All Rights Reserved',
      cards: {
          core: { title: "AI Exploration", desc: "Integrating smart models into everyday automation tasks.", type: "CORE NODE", specs: ["Rust Backend", "LLM Integration", "Latency < 50ms"] },
          relay: { title: "Cyber Defense", desc: "Deepening my knowledge in infrastructure protection.", type: "RELAY NODE", specs: ["Edge Compute", "Green Tech", "Global Mesh"] },
          edge: { title: "Community First", desc: "Believer in Open Source and collaborative development.", type: "EDGE NODE", specs: ["Open Source", "DAO Governance", "Ethical AI"] }
      }
    }
  },
  fr: {
    nav: { home: 'Accueil', about: 'Profil', experience: 'Parcours', projects: 'Projets', skills: 'Stack', contact: 'Vision' },
    home: {
      badge: 'Ingénieur Systèmes, Réseaux, IoT & Logiciel',
      title_span: 'Oussada',
      subtitle: 'Explorateur Passionné d\'Infrastructures Sécurisées & de Code',
      desc: 'Fort de bases solides en ingénierie IT et d\'un profil junior polyvalent, j\'explore sans cesse de nouveaux horizons. Ma soif de savoir est la boussole qui guide mes pas vers le futur technologique que je bâtis, entre maîtrise technique et innovation continue.',
    },
    about: {
      title: 'Profil',
      subtitle: 'Technique',
      desc: 'Curiosité et rigueur définissent mon approche. En tant qu\'ingénieur junior polyvalent, je consolide mes acquis solides tout en explorant les dernières avancées technologiques pour forger une expertise unique, évolutive et adaptée aux défis de demain.',
      role: 'Ingénieur Systèmes & Dev Polyvalent',
      download: 'Consulter mon CV',
      channels_title: 'Canaux Professionnels',
      identity_card: { email: 'Me contacter', phone: 'Discutons', location: 'Basé à' },
      stats: {
          projects: "Lab & Freelance", sub_projects: "Solutions Livrées",
          experience: "Post-Diplôme", sub_experience: "Apprentissage Actif",
          awards: "Compétitions", sub_awards: "Victoires CTF",
          contribs: "Focus R&D", sub_contribs: "Recherche Appliquée",
          role: "Focus Actuel", sub_role: "Systèmes, IoT & Logiciel",
          status: "Disponibilité", sub_status: "Prêt pour de nouveaux défis",
          projects_val: "08 Projets", experience_val: "Master 2", awards_val: "02", contribs_val: "IoT & IA", role_val: "Ingénieur Freelance", status_val: "Ouvert"
      },
      chart_title: "Évolution des Skills",
      chart_sub: "Axe de Progression Actuel",
      diagnostic_mode: "Mode Diagnostic",
      evolution_analysis: "Analyse d'Évolution",
      mastery_points: "Score d'Expertise",
      tech_stack: "Stack Technologique",
      growth_matrix_title: "Matrice d'Intelligence",
      growth_matrix_desc: "Visualisation de la progression de mes compétences clés. Sélectionnez un nœud pour voir ma maturité technique actuelle.",
      analyzing_potential: "Analyse du Potentiel...",
      mastered_tools: "Outils & Technologies",
      evolution_status: "Connaissances & Évolution",
      skill_levels: ["Débutant", "Apprenti", "Intermédiaire", "Avancé", "Expérimenté"],
      skills: {
          networks: { 
              name: "Réseaux", title: "Ingénierie Réseaux", desc: "Bases Solides", 
              popularSkills: ["Cisco iOS", "TCP/IP", "VLAN", "VoIP", "VPN"],
              status: "Je maîtrise l'architecture des réseaux locaux, le routage statique/dynamique et la sécurisation des flux via VPN. Je souhaite désormais approfondir mes connaissances en SD-WAN et en automatisation des réseaux (NetDevOps) pour gérer des infrastructures plus complexes et scalables."
          },
          security: { 
              name: "Sécurité", title: "Cybersécurité", desc: "Compétiteur CTF", 
              popularSkills: ["Nmap", "Metasploit", "Burp Suite", "Wireshark"],
              status: "Actuellement focalisé sur la sécurité offensive (Pentest, CTF), je comprends les vecteurs d'attaque courants et l'exploitation de vulnérabilités. Mon objectif est d'évoluer vers la sécurité défensive (Blue Teaming) et l'implémentation de solutions SIEM pour une protection proactive des infrastructures."
          },
          infra: { 
              name: "Infra", title: "Infrastructure Moderne", desc: "Infrastructure as Code", 
              popularSkills: ["Docker", "Ansible", "Nginx", "Bases CI/CD"],
              status: "Je maîtrise les configurations manuelles et les bases de la conteneurisation avec Docker. Pour gagner en efficacité, je me forme sur Kubernetes pour l'orchestration et Terraform pour automatiser entièrement le déploiement de mon lab et de futurs projets professionnels."
          },
          systems: { 
              name: "Systèmes", title: "Admin Systèmes", desc: "Passionné Linux", 
              popularSkills: ["Debian/Ubuntu", "Rocky Linux", "Bash", "Active Directory"],
              status: "Autonome dans la gestion de serveurs Linux et Windows, je maîtrise l'automatisation des tâches récurrentes via Bash. Mon axe de progression se tourne désormais vers le durcissement noyau (Hardening) avancé et l'optimisation des performances des services critiques."
          },
          embedded: { 
              name: "Embarqué", title: "Systèmes Embarqués", desc: "Logique Matérielle", 
              popularSkills: ["Arduino", "Raspberry Pi", "C++", "Intégration Capteurs"],
              status: "Spécialisé lors de mon Master, je sais concevoir des systèmes faisant le pont entre matériel et logiciel. Je souhaite explorer davantage les OS Temps Réel (RTOS) pour aborder des projets IoT industriels à fortes contraintes."
          },
          soft_skills: { 
              name: "Soft Skills", title: "Compétences Humaines", desc: "Collaboratif & Agile", 
              popularSkills: ["Adaptabilité", "Autonomie", "Agile", "Remote Workflow"],
              status: "Curieux de nature et autonome, je m'adapte rapidement aux nouveaux environnements. Je vise à développer mes compétences en leadership technique pour faciliter la transmission de savoir au sein d'équipes agiles et innovantes."
          },
          software: { 
              name: "Logiciel", title: "Génie Logiciel", desc: "Logique Applicative Moderne", 
              popularSkills: ["Python", "PyQt", "C/C++", "Git"],
              status: "Je construis des outils desktop et terminal robustes, notamment pour l'automatisation. Pour améliorer la performance et la sécurité de mes développements, j'apprends activement Rust, que je considère comme le futur de la programmation système."
          },
          ai: { 
              name: "AI", title: "IA & Innovation", desc: "Intelligent Automation", 
              popularSkills: ["Prompt Eng.", "OpenAI API", "HuggingFace", "Python IA"],
              status: "J'intègre l'IA dans mes flux de travail quotidiens pour gagner en productivité. Mon prochain défi est de maîtriser le déploiement local et le fine-tuning de LLM spécialisés pour garantir la confidentialité des données dans les projets que je bâtis."
          },
          cloud: { 
              name: "Cloud", title: "Solutions Cloud", desc: "Virtualisation Scalable", 
              popularSkills: ["Proxmox", "ESXi", "Bases AWS", "Reverse Proxy"],
              status: "Gérant mon propre home-lab, je comprends les concepts de virtualisation et de haute disponibilité. Je cherche désormais à m'orienter vers les architectures cloud-native et la gestion de microservices sur AWS ou Azure."
          }
      }
    },
    experience: { title: 'Parcours', subtitle: 'Professionnel', desc: 'Un parcours marqué par la soif de comprendre et la volonté d\'agir. Chaque étape de mon évolution junior renforce mes fondations et ouvre la voie vers des architectures toujours plus performantes et sécurisées.', exp_title: 'Freelance & Stages', edu_title: 'Formation Académique' },
    projects: { title: 'Projets', subtitle: 'Réalisés', desc: 'L\'application concrète de ma polyvalence au service de l\'innovation. Ces projets illustrent mon désir d\'explorer de nouveaux domaines et ma capacité à transformer des concepts complexes en solutions viables pour le futur.', view_details: 'Découvrir', modal_about: 'Objectif & Apprentissages', modal_tech: 'Le Stack Technique', demo: 'Aperçu', code: 'Code Source' },
    skills: {
      title: 'Stack', subtitle: 'Technique',
      desc: 'Une maîtrise technique ancrée dans des bases solides, complétée par une veille technologique constante. Ma polyvalence est le socle sur lequel je développe les compétences nécessaires aux infrastructures de demain.',
      domains: {
          systems: { title: "Systèmes d'Exploitation", desc: "Bases solides Linux/Windows, automatisation et durcissement OS." },
          networks: { title: "Réseaux & Protocoles", desc: "Maîtrise des architectures, TCP/IP et connectivité." },
          embedded: { title: "Systèmes Embarqués", desc: "Logique matérielle, RTOS et architectures microcontrôleurs." },
          cyber: { title: "Cybersécurité & Audit", desc: "Pentesting, normes et mesures de protection défensives." },
          programming: { title: "Langages de Programmation", desc: "Conception de la logique métier avec Python et C/C++." },
          frameworks: { title: "Frameworks & APIs", desc: "Création d'interfaces et logique applicative de haut niveau." },
          tools: { title: "Outils & DevOps", desc: "Gestion infra, CI/CD et logiciels spécialisés." },
          soft: { title: "Qualités Personnelles", desc: "Compétences comportementales et adaptabilité professionnelle." },
      }
    },
    contact: {
      title: 'Vision', subtitle: 'd\'Avenir',
      badge: 'Feuille de Route', title_prefix: 'Bâtissons le', title_span: 'Futur Ensemble',
      desc: 'Enthousiaste à l\'idée de rejoindre une équipe innovante pour apporter mon énergie et continuer à grandir.',
      quote: "Tout comme la technologie a comblé le fossé du passé à aujourd'hui, l'apprentissage constant est la clé d'un meilleur futur.",
      footer_built: 'Développé avec passion par', footer_rights: 'Tous droits réservés',
      cards: {
          core: { title: "Exploration IA", desc: "Intégration de modèles intelligents dans l'automatisation quotidienne.", type: "NŒUD CENTRAL", specs: ["Backend Rust", "Intégration LLM", "Latence < 50ms"] },
          relay: { title: "Défense Cyber", desc: "Approfondissement de la protection des infrastructures.", type: "NŒUD RELAIS", specs: ["Edge Compute", "Green Tech", "Mesh Global"] },
          edge: { title: "Culture Open Source", desc: "Convaincu par le partage et le développement collaboratif.", type: "NŒUD PÉRIPHÉRIQUE", specs: ["Open Source", "Gouvernance DAO", "IA Éthique"] }
      }
    }
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};