// ScrollReveal animations
ScrollReveal().reveal('.container', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-in-out',
    reset: true
  });
  
  // Mobile menu toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  