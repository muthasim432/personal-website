// ============================================
// PERSONAL WEBSITE JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Load configuration and render content
  renderContent();
  
  // Initialize all interactive features
  initNavigation();
  initThemeToggle();
  initScrollAnimations();
  initExperienceTabs();
  initProjectFilters();
  initContactForm();
  initSmoothScroll();
});

// ============================================
// RENDER CONTENT FROM CONFIG
// ============================================
function renderContent() {
  // Page title
  document.title = `${CONFIG.name} - ${CONFIG.title}`;
  document.getElementById('page-title').textContent = `${CONFIG.name} - ${CONFIG.title}`;
  
  // Navigation
  document.getElementById('nav-name').textContent = getInitials(CONFIG.name);
  renderNavItems();
  
  // Hero section
  document.getElementById('hero-name').textContent = CONFIG.name;
  document.getElementById('hero-title').textContent = CONFIG.title;
  document.getElementById('hero-tagline').textContent = CONFIG.tagline;
  renderHeroSocial();
  renderProfileImage();
  
  // About section
  document.getElementById('about-heading').textContent = CONFIG.about.heading;
  renderAboutBio();
  const resumeBtn = document.getElementById('resume-btn');
  if (CONFIG.about.resumeLink) {
    resumeBtn.href = CONFIG.about.resumeLink;
  } else {
    resumeBtn.style.display = 'none';
  }
  
  // Experience sections
  renderWorkExperience();
  renderTeachingExperience();
  renderEducation();
  
  // Projects
  renderProjects();
  
  // Publications
  renderPublications();
  
  // Skills
  renderSkills();
  
  // Academic Service
  renderService();
  
  // Contact
  document.getElementById('contact-email').href = `mailto:${CONFIG.email}`;
  document.querySelector('#contact-email .contact-value').textContent = CONFIG.email;
  document.querySelector('#contact-location .contact-value').textContent = CONFIG.location;
  renderContactSocial();
  
  // Footer
  document.getElementById('footer-name').textContent = CONFIG.name;
  document.getElementById('footer-tagline').textContent = CONFIG.title;
  document.getElementById('current-year').textContent = new Date().getFullYear();
  document.getElementById('copyright-name').textContent = CONFIG.name;
  renderFooterLinks();
  
  // Apply theme
  if (CONFIG.theme.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

// Helper: Get initials from name
function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// Render navigation items
function renderNavItems() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.innerHTML = CONFIG.navItems.map(item => `
    <li><a href="${item.href}">${item.label}</a></li>
  `).join('');
}

// Render hero social links
function renderHeroSocial() {
  const container = document.getElementById('hero-social');
  const socials = [];
  
  if (CONFIG.social.github) {
    socials.push({ icon: 'github', href: CONFIG.social.github });
  }
  if (CONFIG.social.linkedin) {
    socials.push({ icon: 'linkedin', href: CONFIG.social.linkedin });
  }
  if (CONFIG.social.twitter) {
    socials.push({ icon: 'twitter', href: CONFIG.social.twitter });
  }
  if (CONFIG.social.scholar) {
    socials.push({ icon: 'book-open', href: CONFIG.social.scholar });
  }
  
  container.innerHTML = socials.map(s => `
    <a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.icon}">
      <i data-lucide="${s.icon}"></i>
    </a>
  `).join('');
}

// Render about bio with paragraphs
function renderAboutBio() {
  const container = document.getElementById('about-bio');
  const paragraphs = CONFIG.about.bio.trim().split('\n\n');
  container.innerHTML = paragraphs.map(p => {
    // Convert markdown bold to HTML
    const html = p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return `<p>${html}</p>`;
  }).join('');
}

// Render profile image
function renderProfileImage() {
  const imgElement = document.getElementById('profile-image');
  const placeholder = document.getElementById('profile-placeholder');
  const initials = document.querySelector('.profile-initials');
  
  // Set initials
  if (initials) {
    initials.textContent = getInitials(CONFIG.name);
  }
  
  // If profile image is set, show it
  if (CONFIG.profileImage) {
    imgElement.src = CONFIG.profileImage;
    imgElement.style.display = 'block';
    placeholder.style.display = 'none';
    
    // Handle image load error
    imgElement.onerror = function() {
      imgElement.style.display = 'none';
      placeholder.style.display = 'flex';
    };
  }
}

// Render work experience
function renderWorkExperience() {
  const container = document.getElementById('work-timeline');
  const workItems = CONFIG.experience.filter(exp => exp.type === 'work' || exp.type === 'internship');
  
  container.innerHTML = workItems.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-company">${item.company}</p>
          </div>
          <span class="timeline-date">${item.date}</span>
        </div>
        ${item.location ? `<p class="timeline-location">${item.location}</p>` : ''}
        <ul class="timeline-highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Render teaching experience
function renderTeachingExperience() {
  const container = document.getElementById('teaching-timeline');
  const teachingItems = CONFIG.experience.filter(exp => exp.type === 'teaching');
  
  container.innerHTML = teachingItems.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-company">${item.company}</p>
          </div>
          <span class="timeline-date">${item.date}</span>
        </div>
        ${item.location ? `<p class="timeline-location">${item.location}</p>` : ''}
        <ul class="timeline-highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Render education
function renderEducation() {
  const container = document.getElementById('education-cards');
  
  container.innerHTML = CONFIG.education.map(edu => `
    <div class="edu-card">
      <div class="edu-header">
        <h3 class="edu-degree">${edu.degree}</h3>
        <span class="edu-date">${edu.date}</span>
      </div>
      <p class="edu-school">${edu.school}</p>
      ${edu.location ? `<p class="edu-location">${edu.location}</p>` : ''}
      ${edu.gpa ? `<span class="edu-gpa">GPA: ${edu.gpa}</span>` : ''}
      ${edu.coursework ? `
        <div class="edu-coursework">
          ${edu.coursework.map(c => `<span class="edu-course">${c}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}

// Render projects
function renderProjects() {
  const container = document.getElementById('projects-grid');
  
  container.innerHTML = CONFIG.projects.map(project => `
    <div class="project-card" data-category="${project.category}">
      <div class="project-image">
        <i data-lucide="folder-git-2"></i>
      </div>
      <div class="project-content">
        <span class="project-category">${project.category}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.link ? `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
              <i data-lucide="external-link"></i>
              View Project
            </a>
          ` : ''}
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
              <i data-lucide="github"></i>
              Code
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
  
  // Re-initialize icons for dynamically added content
  lucide.createIcons();
}

// Render publications
function renderPublications() {
  const container = document.getElementById('publications-list');
  
  container.innerHTML = CONFIG.publications.map(pub => `
    <div class="publication-item">
      ${pub.highlight ? `
        <div class="publication-highlight">
          <i data-lucide="award"></i>
          <span>${pub.highlight}</span>
        </div>
      ` : ''}
      <h3 class="publication-title">
        <a href="${pub.link}" target="_blank" rel="noopener noreferrer">${pub.title}</a>
      </h3>
      <p class="publication-authors">${pub.authors}</p>
      <p class="publication-venue">${pub.venue}</p>
      <div class="publication-meta">
        <span class="publication-year">${pub.year}</span>
        ${pub.citations > 0 ? `<span class="publication-citations">${pub.citations} citation${pub.citations !== 1 ? 's' : ''}</span>` : ''}
      </div>
    </div>
  `).join('');
  
  // Re-initialize icons for dynamically added content
  lucide.createIcons();
}

// Render skills
function renderSkills() {
  // Technical skills with progress bars
  const technicalContainer = document.getElementById('technical-skills');
  technicalContainer.innerHTML = CONFIG.skills.technical.map(skill => `
    <div class="skill-bar">
      <div class="skill-bar-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}%</span>
      </div>
      <div class="skill-progress">
        <div class="skill-progress-fill" style="width: 0%" data-width="${skill.level}%"></div>
      </div>
    </div>
  `).join('');
  
  // Animate progress bars when visible
  setTimeout(() => {
    document.querySelectorAll('.skill-progress-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }, 500);
  
  // Analytical skills as tags
  const analyticalContainer = document.getElementById('analytical-skills');
  analyticalContainer.innerHTML = CONFIG.skills.analytical.map(skill => `
    <span class="skill-tag">${skill}</span>
  `).join('');
  
  // Other skills as tags
  const otherContainer = document.getElementById('other-skills');
  otherContainer.innerHTML = CONFIG.skills.other.map(skill => `
    <span class="skill-tag">${skill}</span>
  `).join('');
  
  // Languages
  const languagesContainer = document.getElementById('languages-list');
  languagesContainer.innerHTML = CONFIG.skills.languages.map(lang => `
    <div class="language-item">
      <span class="language-name">${lang.name}</span>
      <span class="language-level">${lang.level}</span>
    </div>
  `).join('');
}

// Render academic service
function renderService() {
  const container = document.getElementById('service-list');
  
  container.innerHTML = CONFIG.service.map(item => `
    <div class="service-item">
      <div class="service-icon">
        <i data-lucide="award"></i>
      </div>
      <div class="service-details">
        <p class="service-role">${item.role}</p>
        <p class="service-org">${item.organization}</p>
      </div>
      <span class="service-date">${item.date}</span>
    </div>
  `).join('');
  
  lucide.createIcons();
}

// Render contact social links
function renderContactSocial() {
  const container = document.getElementById('contact-social');
  const socials = [];
  
  if (CONFIG.social.github) {
    socials.push({ icon: 'github', href: CONFIG.social.github, label: 'GitHub' });
  }
  if (CONFIG.social.linkedin) {
    socials.push({ icon: 'linkedin', href: CONFIG.social.linkedin, label: 'LinkedIn' });
  }
  if (CONFIG.social.twitter) {
    socials.push({ icon: 'twitter', href: CONFIG.social.twitter, label: 'Twitter' });
  }
  if (CONFIG.social.scholar) {
    socials.push({ icon: 'book-open', href: CONFIG.social.scholar, label: 'Google Scholar' });
  }
  
  container.innerHTML = socials.map(s => `
    <a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">
      <i data-lucide="${s.icon}"></i>
    </a>
  `).join('');
  
  lucide.createIcons();
}

// Render footer links
function renderFooterLinks() {
  const container = document.getElementById('footer-links');
  container.innerHTML = CONFIG.navItems.map(item => `
    <a href="${item.href}">${item.label}</a>
  `).join('');
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  // Sticky navbar effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.setAttribute('data-lucide', 'x');
    } else {
      icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  });
  
  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = navToggle.querySelector('i');
      icon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}

// ============================================
// THEME TOGGLE
// ============================================
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  }
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
  });
}

// ============================================
// EXPERIENCE TABS
// ============================================
function initExperienceTabs() {
  const tabs = document.querySelectorAll('.exp-tab');
  const contents = document.querySelectorAll('.exp-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update active content
      contents.forEach(c => c.classList.remove('active'));
      document.getElementById(`${targetTab}-content`).classList.add('active');
    });
  });
}

// ============================================
// PROJECT FILTERS
// ============================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Send email using Formspree (free service)
    fetch('https://formspree.io/f/xjkyenjw', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      })
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        alert('Thank you for your message! I will get back to you soon.');
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      // Fallback: copy message to clipboard and show email
      const messageText = `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`;
      navigator.clipboard.writeText(messageText).then(() => {
        alert(`Thanks for reaching out! Please email me directly at ${CONFIG.email} with your message. Your message has been copied to your clipboard.`);
      }).catch(() => {
        alert(`Thanks for reaching out! Please email me directly at ${CONFIG.email} with your message.`);
      });
    });
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
