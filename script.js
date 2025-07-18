// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const toggleBtn = document.getElementById('toggle-theme');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleBtn.textContent = document.body.classList.contains('dark-mode')
        ? 'Light Mode'
        : 'Dark Mode';
    });
  }

  // Login form handler
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const loginSection = document.getElementById('login');
      const adminSection = document.getElementById('admin-section');
      const responsesContainer = document.getElementById('user-responses');

      if (loginSection && adminSection && responsesContainer) {
        loginSection.style.display = 'none';
        adminSection.style.display = 'block';

        responsesContainer.innerHTML = `
          <p><strong>User 1:</strong> This is a test response.</p>
          <p><strong>User 2:</strong> Welcome to the portfolio!</p>
        `;
      }
    });
  }

  // Contact form handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks for reaching out!');
      contactForm.reset();
    });
  }
});
