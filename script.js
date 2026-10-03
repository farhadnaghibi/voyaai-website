document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.mobile-toggle');
  const yearNode = document.querySelector('[data-year]');

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach(item => observer.observe(item));

  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = document.querySelector('#formStatus');
      const name = document.querySelector('#name')?.value.trim();
      const email = document.querySelector('#email')?.value.trim();
      const message = document.querySelector('#message')?.value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please complete all fields before submitting.';
        status.style.color = '#ef476f';
        return;
      }

      status.textContent = 'Thanks — your request is ready for follow-up. Please use WhatsApp or email to confirm.';
      status.style.color = '#2ec4b6';
      form.reset();
    });
  }
});
