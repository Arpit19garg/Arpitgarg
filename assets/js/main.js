// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Active navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNavOnScroll() {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavOnScroll);

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    contactForm.reset();
  });
}

// ScrollReveal animations (if library is loaded)
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  });

  sr.reveal('.hero-content', { origin: 'top', delay: 200 });
  sr.reveal('.about-text', { origin: 'left', delay: 300 });
  sr.reveal('.about-stats', { origin: 'bottom', delay: 400 });
  sr.reveal('.skill-category', { origin: 'bottom', interval: 200 });
  sr.reveal('.project-card', { origin: 'bottom', interval: 200 });
  sr.reveal('.timeline-item', { origin: 'left', interval: 200 });
  sr.reveal('.contact-info', { origin: 'left', delay: 200 });
  sr.reveal('.contact-form', { origin: 'right', delay: 200 });
}

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkillBars = () => {
  skillBars.forEach(bar => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (barPosition < screenPosition) {
      bar.style.width = bar.style.width || '0%';
    }
  });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Typing effect for hero subtitle (optional)
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
  const text = heroSubtitle.textContent;
  heroSubtitle.textContent = '';
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroSubtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };
  setTimeout(typeWriter, 500);
}
