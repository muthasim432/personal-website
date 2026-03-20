// ============================================
// PERSONAL WEBSITE CONFIGURATION
// Edit this file to customize your website
// ============================================

const CONFIG = {
  // Personal Info
  name: "Hasin Jawad Ali",
  title: "AI Ethics Researcher, Consultant, Teacher, & Data Scientist",
  tagline: "Creator of CogniAlign — the first AI alignment proposal from Bangladesh",
  email: "alij85791@gmail.com",
  location: "Dhaka, Bangladesh",
  
  // Profile Image (leave empty to use initials/placeholder)
  profileImage: "profile.jpg", // e.g., "images/profile.jpg"
  
  // Social Links (leave empty string to hide)
  social: {
    github: "https://github.com/jami78",
    linkedin: "https://www.linkedin.com/in/hasin-jawad-ali-74aa92215/",
    twitter: "",
    scholar: "", // Google Scholar
    researchgate: ""
  },

  // About Section
  about: {
    heading: "About Me",
    bio: `I'm the creator of CogniAlign — the first ever AI alignment proposal from Bangladesh, based on moral naturalism through deliberation among scientist agents. This work represents a novel approach to AI safety and transparency.

As a Strategy and AI Consultant, I bridge the gap between cutting-edge AI research and practical business applications. Currently advising on adoption strategies for a Canadian private equity advisory.

My work spans agentic AI systems, data science, and strategic consulting. I hold a BBA in Technology Management from Islamic University of Technology.

When I'm not building AI systems or researching AI alignment, I enjoy teaching, creative writing, and exploring the intersection of philosophy and technology.`,
    resumeLink: "" // Path to your resume (leave empty to hide download button)
  },

  // Education
  education: [
    {
      degree: "BBA in Technology Management",
      school: "Islamic University of Technology",
      location: "Dhaka, Bangladesh",
      date: "October 2025",
      gpa: "3.68/4.0",
      coursework: ["Finance", "Information Systems", "Data Science", "Management"]
    }
  ],

  // Work Experience
  experience: [
    {
      title: "Strategy and AI Consultant (Contract)",
      company: "Anonymous Company",
      location: "Canada",
      date: "Oct 2025 – Present",
      type: "work", // work, internship, teaching
      highlights: [
        "Advised founder on AI adoption strategy for PE advisory",
        "Introduced strategic orientations including scientific diversification",
        "Designed agentic AI system architectures for PE advisory workflows"
      ]
    },
    {
      title: "Generative AI Intern",
      company: "Liberate Labs",
      location: "Chittagong",
      date: "Feb 2025 – April 2025",
      type: "internship",
      highlights: [
        "Designed and deployed agentic AI systems using LangGraph and LangChain",
        "Gained hands-on experience with MCP, RAG, and agentic system design",
        "Awarded Runners-Up at internal AI Hackathon"
      ]
    },
    {
      title: "Junior Data Scientist",
      company: "DigiTact",
      location: "Singapore",
      date: "June 2024 - Sep 2024",
      type: "work",
      highlights: [
        "Produced investor-facing explainer on CrewAI architecture",
        "Built conversion probability calculator for marketing client",
        "Conducted Tableau-based exploratory data analysis"
      ]
    },
    {
      title: "Data Science Instructor",
      company: "Independent",
      location: "",
      date: "August 2025 - December 2025",
      type: "teaching",
      highlights: [
        "Designed graduate-level data science curriculum",
        "Covered: EDA, hypothesis testing, regression, feature engineering in R",
        "Student completed multiple independent projects"
      ]
    },
    {
      title: "Independent EMBA Teaching",
      company: "Kellogg-Schulich EMBA",
      location: "",
      date: "March 2024 – September 2024",
      type: "teaching",
      highlights: [
        "Tutored company executive through EMBA coursework",
        "Covered: operations, economics, regression, decision analysis, finance",
        "Designed tailored teaching materials"
      ]
    }
  ],

  // Projects
  projects: [
    {
      title: "CogniAlign: Multi-Agent Moral Reasoning",
      category: "Research",
      description: "The first AI alignment proposal from Bangladesh — based on moral naturalism through deliberation among scientist agents. Survivability-grounded multi-agent moral reasoning for safe and transparent AI systems.",
      tags: ["AI Alignment", "AI Ethics", "Multi-Agent Systems", "Moral Naturalism"],
      link: "https://arxiv.org/abs/2509.13356",
      github: "",
      image: "" // Optional: path to project image
    },
    {
      title: "Social Media Polarization Analysis",
      category: "Research",
      description: "Ideological stance dataset on Israel-Palestine Reddit comments analyzing conflict polarization.",
      tags: ["NLP", "Social Network Analysis", "Python"],
      link: "https://arxiv.org/abs/2502.00414",
      github: "",
      image: ""
    },
    {
      title: "News Fact Checker",
      category: "Agentic AI",
      description: "System that verifies news claims using GPT-4o and reliable web search.",
      tags: ["LangChain", "FastAPI", "SQLite", "Google Drive API"],
      link: "",
      github: "https://github.com/jami78/News-Fact-Checker",
      image: ""
    },
    {
      title: "CBT-Logotherapy Mental Health System",
      category: "Agentic AI",
      description: "AI-driven mental health platform with age-specific conversational prompts.",
      tags: ["FastAPI", "Docker", "PostgreSQL", "Whisper"],
      link: "",
      github: "https://github.com/jami78/CBT-Logotherapy-System",
      image: ""
    },
    {
      title: "Bias & Sentiment Analysis",
      category: "Data Science",
      description: "Detected political bias and emotional tone in polarized Facebook posts using RoBERTa.",
      tags: ["RoBERTa", "Random Forest", "NLP"],
      link: "",
      github: "https://github.com/jami78/Israel-Palestine-War-Sentiment-Analysis",
      image: ""
    },
    {
      title: "Terrorism & Topic Modeling",
      category: "Data Science",
      description: "Topic extraction and sentiment trends for NZ mosque attack using VADER and LDA.",
      tags: ["VADER", "LDA", "Time Series"],
      link: "",
      github: "",
      image: ""
    }
  ],

  // Publications
  publications: [
    {
      title: "CogniAlign: Survivability-Grounded Multi-Agent Moral Reasoning for Safe and Transparent AI",
      authors: "Ali, H. J., Azam, I., Abrar, A., Hasan, M. K., & Mahmud, H.",
      venue: "AI and Ethics (under review)",
      year: "2025",
      link: "https://arxiv.org/abs/2509.13356",
      citations: 0,
      highlight: "First AI alignment proposal from Bangladesh — based on moral naturalism through deliberation among scientist agents"
    },
    {
      title: "Social media polarization during conflict: Insights from an ideological stance dataset on Israel-Palestine Reddit comments",
      authors: "Ali, H. J., Abrar, A., Hossain, S. M. H., & Mridha, M. F.",
      venue: "Social Network Analysis and Mining (under review)",
      year: "2025",
      link: "https://arxiv.org/abs/2502.00414"
    },
    {
      title: "Analyzing the relationship among household decision making and financial literacy: Evidence from Bangladesh",
      authors: "Ali, H. J., Hasan, R., Sultana, M., Yousufi, N. A. S., Salsabil, R., & Hanif, M. B.",
      venue: "SN Business & Economics (under review)",
      year: "2023",
      link: "https://doi.org/10.2139/ssrn.4637041",
      citations: 0
    }
  ],

  // Skills
  skills: {
    technical: [
      { name: "Python", level: 95 },
      { name: "R", level: 85 },
      { name: "SQL", level: 80 },
      { name: "LangChain/LangGraph", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Docker", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "BERT/Whisper", level: 85 }
    ],
    analytical: [
      "NLP", "Time Series Analysis", "Panel Data Analysis", 
      "Topic Modeling", "Hypothesis Testing", "Regression", "EDA"
    ],
    other: [
      "Philosophy", "Academic Writing", "Creative Writing", "Presentation"
    ],
    languages: [
      { name: "Bengali", level: "Native" },
      { name: "English", level: "Bilingual" }
    ]
  },

  // Academic Service
  service: [
    {
      role: "Peer Reviewer",
      organization: "PLOS ONE",
      date: "May 2025 - Present"
    }
  ],

  // Theme Settings
  theme: {
    primaryColor: "#2563eb", // Blue
    secondaryColor: "#1e40af",
    accentColor: "#3b82f6",
    darkMode: false, // Set to true for dark mode default
    font: "Inter", // Google Font name
    showAnimations: true
  },

  // Navigation
  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
